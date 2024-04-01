{ pkgs ? import <nixpkgs> { 
  config = {
    allowUnfree = true;
   }; overlays = [];
}}:

let
  x = 1;
in

pkgs.mkShell 
{
  packages = with pkgs; [
    git
    nodejs_21
  ];
  shellHook = ''
  '';
}
