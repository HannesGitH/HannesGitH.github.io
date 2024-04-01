{
  config,
  lib,
  dream2nix,
  ...
}: {
  imports = [
    # dream2nix modules go here
    dream2nix.modules.dream2nix.nodejs-package-lock-v3
  ];

  deps = {nixpkgs, ...}: {
    # dependencies go here
  };

  name = "my-package-name";
  version = "2.7.1";

  # Ecosystem-dependent package definition goes here
}
