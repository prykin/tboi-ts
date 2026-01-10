# The Binding of Isaac (Flash) — Decompilation/Refactoring

Yet another attempt to finally make any sense in this atrocious codebase. One sane idea that should bring us to a spectacular result: `TypeScript` is a superset of `ECMAScript`, as well as `ActionScript`. Thus, we can expect a pretty seamless transcription of `*.as` to `*.ts` without any major quirks.

Originally, this game was written in `ActionScript 2.0`. I obtained my own copy of the game from [Steam](https://store.steampowered.com/app/113200/The_Binding_of_Isaac/) and decompiled it using [JPEXS Free Flash Decompiler](https://github.com/jindrapetrik/jpexs-decompiler). The `20.0.0` version has made it easier to understand.

Overall, it's quite painful and all. Anyway, the game's logic is situated in the `6765`th sprite. Everything else comprises helper functions, animations, and menu logic. There have been some previous attempts to understand this codebase. Personally, I'd like to highlight [this](https://github.com/Xaiter/Binding-of-Isaac/) repo and [this](https://gist.github.com/dpatti/4419061) gist.
