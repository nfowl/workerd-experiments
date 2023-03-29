{ 
  pkgs ? import <nixpkgs> {} 
}:
pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs-18_x
    pkgs.nodePackages.eslint
    pkgs.nodePackages.prettier
  ];
}
