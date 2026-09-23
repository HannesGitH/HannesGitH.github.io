{
  description = "CV website";
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-26.05";
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs-stable.url = "github:NixOS/nixpkgs/nixos-23.11";
  };

  outputs = inputs@{ self, nixpkgs, flake-utils, ... }:
    with flake-utils.lib; eachSystem allSystems (system:
    let
      pkgs = import nixpkgs { inherit system; };
      pkgs-stable = import inputs.nixpkgs-stable { inherit system; };

      nodejs = pkgs.nodejs;

      svelte-navbar-src = pkgs.fetchFromGitHub {
        owner = "hannesgith";
        repo = "svelte-navbar";
        rev = "0.0.123";
        sha256 = "sha256-naxceQenpoSbjlYLaLlYxJElddk0qplXp7K+4KIzA8M=";
      };

      pdf-cv-flake = import ./pdf/flake.nix ;
      pdf-cv-flake-outputs = pdf-cv-flake.outputs {
        self = ./pdf;
        nixpkgs = nixpkgs;
        nixpkgs-stable = inputs.nixpkgs-stable;
        flake-utils = flake-utils;
      };
      pdf = pdf-cv-flake-outputs.packages.${system}.document;

      # pdf = (builtins.getFlake "path:./pdf/flake.nix" ).packages.${system}.document;

      # the website compiles the navbar from source (see the symlinks in src/lib), so all it
      # needs is the source tree plus a resolvable .svelte-kit/tsconfig.json (which
      # svelte-navbar/tsconfig.json extends); the navbar's own package build is never used
      svelte-navbar = pkgs.runCommand "svelte-navbar-src" { } ''
        cp -r ${svelte-navbar-src} $out
        chmod -R +w $out
        mkdir -p $out/.svelte-kit
        echo '{}' > $out/.svelte-kit/tsconfig.json
      '';

      # node2nixOutput = import ./default.nix { inherit pkgs nodejs system; };
      # nodeDeps = node2nixOutput.nodeDependencies;

    in rec {
      packages = rec {
        website = pkgs.stdenv.mkDerivation {
          pname = "website";
          version = (builtins.fromJSON (builtins.readFile ./package.json)).version;

          src = self;

          yarnOfflineCache = pkgs.fetchYarnDeps {
            yarnLock = ./yarn.lock;
            hash = "sha256-jXwi3kbpZmDUaw5LAWEnIa09SOI1Kp47HER0e9exPvk=";
          };

          nativeBuildInputs = with pkgs; [ nodejs yarnConfigHook yarnBuildHook ];

          preBuild = ''
            mkdir -p dependencies/svelte-navbar
            cp -r ${svelte-navbar}/. dependencies/svelte-navbar
          '';
          postBuild = ''
            cp -rf ${pdf}/resume.pdf build/resume.pdf
          '';
          installPhase = ''
            mkdir -p $out
            cp -r build $out
          '';
        };
      };

      shell = pkgs.mkShell {
        buildInputs = with pkgs; [ nodejs git ];
        shellHook = ''
          # yarn install
        '';
      };

      defaultPackage = packages.website;
    });
}