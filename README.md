# design-patterns-all

- About: design patterns practice repo

## Utils

- deno: [https://deno.com/]
    - install
        - `curl -fsSL https://deno.land/x/install/install.sh | sh`
        - `iwr https://deno.land/x/install/install.ps1 -useb | iex`
    - check and run script
        - `deno --version`
        - `deno run --allow-net hello.ts` // allow network access
        - `console.log("Hallo welt!");`
        - `deno run hello.ts`
        - `deno --watch .\01-builder.ts`
    - deno config
        - `touch deno.json`
        ```js
        {
            "compilerOptions": {
                "lib": ["deno.ns", "deno.window"],
                "target": "esnext"
            },
            "lint": {
                "files": {
                "include": ["**/*.ts", "**/*.js"],
                "exclude": ["node_modules", "**/*.spec.ts"]
                }
            },
            "fmt": {
                "options": {
                "lineWidth": 80
                }
            }
        }
        ```
        - or
        ```js
        {
            "tasks": {},
            "imports": {
                "@std/assert": "jsr:@std/assert@1"
            }
        }
        ```
- vscode Extensions:
  - [https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens]
  - [https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno]
  - [https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments]
  - [https://marketplace.visualstudio.com/items?itemName=BeardedBear.beardedicons]
  - [https://marketplace.visualstudio.com/items?itemName=enkia.tokyo-night]
  - [https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint]

## creacionales

- crear objetos de forma flexible
- ocultar logica de instanciancion
- lower the coupling

- List:
  - Factory Method
  - Factory Function
  - Abstract Factory
  - Builder
  - Singleton
  - Prototype
  - Inmutabilidad con Copia

- benefits:
  - less duplicated code
  - object creation is more clear
  - solid aligned

## Docs

- [https://refactoring.guru/es/design-patterns/catalog]
- [https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file]
- [https://www.patterns.dev/]
- [https://github.com/iluwatar/java-design-patterns]
- [https://github.com/torokmark/design_patterns_in_typescript?tab=readme-ov-file]
