# Contributing

Contributors guide how to add value while keeping the project healthy. Follow these sections.

## Getting Started

1. **Clone**: `git clone https://github.com/your/repo.git && cd repo`.
2. **Build**: `cargo install` or source from GitHub.
3. **Run tests**: `cargo test`. _(if there are any)_

## Style Guides  
All code uses the **Rust** formatting rules; run `cargo fmt -- --check`. No dead code; every function serves a purpose.

## Testing  
Unit‑test files placed under `src/lib` or module folder. Use Rust’s testing framework. Tests must pass on CI before PR is approved.

## Code Review Process  
Open a PR against the main branch. Maintainer reviews for compliance, adds comments via PR. If needed, fix and submit again.

## Contribution Guidelines  
- No spurious boilerplate; only address stated bugs or feature requests.  
- Keep API changes within scope; do not reimplement widely‑used patterns.  
- Documentation updates must include examples in the crate’s README.
