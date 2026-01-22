# Repository Guidelines

## Project Structure & Module Organization
- Originally code was decompiled from a Flash game, written in ActionScript 2.0. Ported to TypeScript for easier maintenance.
- The game was The Binding of Isaac. Consider it as a context hint.
- Current names and types could be incorrect. Use with caution.
- `main.ts` is the entry point that wires together the decompiled game logic.
- `src/` holds supporting modules (`flash.ts`, `foos.ts`, `init.ts`, `types.ts`). Keep changes localized here when extracting or typing logic.
- `src/foos.ts` contains almost every function.
- `src/flash.ts` contains some mocked ActionScript 2.0 classes (stubbed for correct compilation).
- `src/types.ts` contains type definitions for the decompiled game logic. Global context and `_root` should have the same types.
- `dist/` is the compiled output from `tsc` (generated; do not hand-edit).
- `README.md` documents the decompilation context and references.

## Build, Test, and Development Commands
- `npm install` installs dev dependencies.
- `npm run build` compiles TypeScript to `dist/` using `tsc`.
- Every code change should be built without errors.

## Coding Style & Naming Conventions
- For complex types for now use `any`.
- Indentation is 4 spaces; follow existing formatting and keep diffs minimal.
- Preserve decompiled naming patterns (e.g., short variable names and `_root`-style globals) unless a refactor is explicitly intended.
- Import paths may use the `@/` alias (see `tsconfig.json` paths) for modules under `src/`.
- No formatter or linter is configured; avoid reformatting unrelated lines.

## Testing Guidelines
- No test framework or test files are currently configured.
- If you add tests, also add a `test` script in `package.json` and document how to run it in the PR.

## Commit & Pull Request Guidelines
- Commit messages in this repo are short, imperative, and sentence case (e.g., "Rename functions", "Mostly every function was renamed and typed").
- PRs should include a concise summary, note any behavioral changes, and mention how you validated the change (e.g., `npm run build`).
- For large logic edits, include the decompiled source reference or reasoning to preserve fidelity.
