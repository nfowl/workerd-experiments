{
  description = "Rust devshell";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    rust-overlay = {
      url = "github:oxalica/rust-overlay";
      inputs = {
        flake-utils.follows = "flake-utils";
        nixpkgs.follows = "nixpkgs";
      };
    };
  };

  outputs = { self, nixpkgs, rust-overlay, flake-utils}: 
    flake-utils.lib.eachDefaultSystem (system:
      let
        overlays = [ (import rust-overlay) ];
        pkgs = import nixpkgs {
          inherit system overlays;
        };
        # toolchain = pkgs.rust-bin.fromRustupToolchainFile ./rust-toolchain.toml;
      in
      with pkgs;
      {
        devShells.default = mkShell {
          buildInputs = [
            nodejs-18_x
            nodePackages.eslint
            nodePackages.prettier
            openssl
            pkg-config
            # rust-analyzer-unwrapped
          ];

          # envvars
          # RUST_SRC_PATH = "${toolchain}/lib/rustlib/src/rust/library";
          # LD_LIBRARY_PATH = lib.makeLibraryPath [ openssl ];
        };
      }
    );
}
