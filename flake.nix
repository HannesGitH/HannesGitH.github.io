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

      node2nixOutput = import ./default.nix { inherit pkgs nodejs system; };
      nodeDeps = node2nixOutput.nodeDependencies;

    in rec {
      packages = rec {
        website = pkgs.stdenvNoCC.mkDerivation {
          name = "website";
          src = self;
          buildInputs = with pkgs; [ nodejs git ];
          buildPhase = ''
          # export PATH="$PWD/node_modules/.bin/:$PATH"
          #   git submodule update --init
          #   cd dependencies/svelte-navbar && npm install && npm run build && cd ../..
            # npm install
            ln -sf ${nodeDeps}/lib/node_modules ./node_modules
            
            npm run build
          '';
          installPhase = "cp -r build $out";
        };
      };

      shell = pkgs.mkShell {
        buildInputs = with pkgs; [ nodejs git ];
      };

      defaultPackage = packages.website;
    });
}