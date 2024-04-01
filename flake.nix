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

      # node2nixOutput = import ./default.nix { inherit pkgs nodejs system; };
      # nodeDeps = node2nixOutput.nodeDependencies;

    in rec {
      packages = rec {
        website = pkgs.mkYarnPackage {
          name = "website";
          src = self;
          buildInputs = with pkgs; [ nodejs git ];
          configurePhase = ''
            for localDir in build node_modules; do
              if [[ -d $localDir || -L $localDir ]]; then
                echo "$localDir dir present. Removing."
                rm -rf $localDir
              fi
            done

            cp -r $node_modules node_modules
            chmod -R +w node_modules
            ln -sf ${esbuild}/bin/esbuild node_modules/esbuild/bin/esbuild
            ln -sf ${esbuild}/bin/esbuild node_modules/esbuild-linux-64/bin/esbuild
          '';
          buildPhase = ''
            yarn --offline --frozen-lockfile build
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
      };

      defaultPackage = packages.website;
    });
}