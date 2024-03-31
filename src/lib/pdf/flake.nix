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
        inherit (pkgs.texlive) scheme-basic latexmk
        pgf nicematrix fontspec;
      };

      data-location = pkgs.callPackage ./data-location.nix { inherit pkgs; };
    in rec {
      packages = {

        parse-ts = pkgs.stdenvNoCC.mkDerivation {
          name = "parse-ts";
          src = self;
          buildInputs = with pkgs-stable.nodePackages; [ pkgs.nodejs ts-node ];
          buildPhase = ''
            ts-node "./compiler/parse-cv-entries.ts" > "test.log"
          '';
          installPhase = "cp -r .parsed-data $out";
        };

        # document = pkgs.stdenvNoCC.mkDerivation rec {
        #   name = "latex-demo-document";
        #   src = self;
        #   propagatedBuildInputs = [ pkgs.coreutils pkgs.fira-code tex ];
        #   phases = ["unpackPhase" "buildPhase" "installPhase"];
        #   SCRIPT = ''
        #     #!/bin/bash
        #     prefix=${builtins.placeholder "out"}
        #     export PATH="${pkgs.lib.makeBinPath propagatedBuildInputs}";
        #     DIR=$(mktemp -d)
        #     RES=$(pwd)/document.pdf
        #     cd $prefix/share
        #     mkdir -p "$DIR/.texcache/texmf-var"
        #     env TEXMFHOME="$DIR/.cache" \
        #         TEXMFVAR="$DIR/.cache/texmf-var" \
        #         OSFONTDIR=${pkgs.fira-code}/share/fonts \
        #       latexmk -interaction=nonstopmode -pdf -lualatex \
        #       -output-directory="$DIR" \
        #       -pretex="\pdfvariable suppressoptionalinfo 512\relax${texvars}" \
        #       -usepretex document.tex
        #     mv "$DIR/document.pdf" $RES
        #     rm -rf "$DIR"
        #   '';
        #   buildPhase = ''
        #     printenv SCRIPT >latex-demo-document
        #   '';
        #   installPhase = ''
        #     mkdir -p $out/{bin,share}
        #     cp document.tex $out/share/document.tex
        #     cp latex-demo-document $out/bin/latex-demo-document
        #     chmod u+x $out/bin/latex-demo-document
        #   '';
        # };
      };
      defaultPackage = packages.document;
    });
}