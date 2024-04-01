{
  description = "CV website";
  inputs = {
    # nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs-stable.url = "github:NixOS/nixpkgs/nixos-23.11";
  };

  outputs = inputs@{ self, nixpkgs, flake-utils, ... }:
    with flake-utils.lib; eachSystem allSystems (system:
    let
      pkgs = import nixpkgs { inherit system; };
      pkgs-stable = import inputs.nixpkgs-stable { inherit system; };

      nodejs = pkgs.nodejs;
      esbuild = pkgs-stable.esbuild;

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

      svelte-navbar = pkgs.mkYarnPackage {
        name = "svelte-navbar";
        src = svelte-navbar-src;
        buildInputs = with pkgs; [ nodejs git ];
        configurePhase = ''
          cp -r $node_modules node_modules
          chmod -R +w node_modules
          ln -sf ${esbuild}/bin/esbuild node_modules/esbuild/bin/esbuild
          ln -sf ${esbuild}/bin/esbuild node_modules/esbuild-linux-64/bin/esbuild
        '';
        buildPhase = ''
          # yarn install --offline --frozen-lockfile
          yarn --offline --frozen-lockfile build
        '';
        installPhase = ''
          mkdir -p $out
          cp -r . $out
        '';
        distPhase = "true";
      };

      # node2nixOutput = import ./default.nix { inherit pkgs nodejs system; };
      # nodeDeps = node2nixOutput.nodeDependencies;

    in rec {
      packages = rec {
        website = pkgs.mkYarnPackage {
          name = "website";

          src = self;
          buildInputs = with pkgs; [ nodejs git ];
          configurePhase = ''
            # for localDir in build node_modules; do
            #   if [[ -d $localDir || -L $localDir ]]; then
            #     echo "$localDir dir present. Removing."
            #     rm -rf $localDir
            #   fi
            # done

            mkdir -p dependencies
            cp -rf ${svelte-navbar} dependencies/svelte-navbar

            ls -la dependencies

            cp -r $node_modules node_modules
            chmod -R +w node_modules
            # ls -la src/lib
            # ls -la dependencies
            # ls -la .
            ln -sf ${esbuild}/bin/esbuild node_modules/esbuild/bin/esbuild
            ln -sf ${esbuild}/bin/esbuild node_modules/esbuild-linux-64/bin/esbuild
          '';
          buildPhase = ''
            # yarn install --offline --frozen-lockfile
            yarn --offline --frozen-lockfile build
            cp -rf ${pdf}/resume.pdf build/resume.pdf
          # chmod 777 resume.pdf
          # ls -la .
          '';
          installPhase = ''
            mkdir -p $out
            cp -r build $out
          '';
          distPhase = "true";
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