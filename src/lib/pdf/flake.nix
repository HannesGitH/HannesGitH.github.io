{
  description = "CV pdf";
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
      tex = pkgs.texlive.combine {
        inherit (pkgs.texlive) scheme-full latexmk
        # fontspec 
        # enumitem
        # ragged2e
        # geometry
        # fancyhdr
        # xcolor
        # xifthen
        # etoolbox
        # ifmtarg
        # unicode-math
        # fontawesome
        # sourcesanspro
        # tcolorbox
        # parskip
        # hyperref
        # lualatex-math
        # xkeyval
        # pgf
        # environ
        setspace;
      };

      data-location = pkgs.callPackage ./data-location.nix { };
    in rec {
      packages = rec {

        parse-ts = pkgs.stdenvNoCC.mkDerivation {
          name = "parse-ts";
          src = self;
          buildInputs = with pkgs-stable.nodePackages; [ pkgs.nodejs ts-node ];
          buildPhase = ''
            cp -r ${data-location} .data
            mkdir -p out
            touch "out/test.log"
            ts-node "./compiler/parse-cv-entries.ts" > "out/test.log"
          '';
          installPhase = "cp -r out $out";
        };

        document = pkgs.stdenvNoCC.mkDerivation {
          name = "latex-demo-document";
          src = self;
          buildInputs = [ pkgs.coreutils tex parse-ts ];
          phases = ["unpackPhase" "buildPhase" "installPhase"];
          buildPhase = ''
            mkdir -p tex/resume
            cp -rf ${parse-ts}/* tex/resume
            ./compiler/compile-pdf.sh
          '';
          installPhase = ''
            mkdir -p $out
            cp tex/resume.pdf $out/
          '';
        };
      };
      
      shell = pkgs.mkShell {
        buildInputs = [ tex ];
      };

      defaultPackage = packages.document;
    });
}