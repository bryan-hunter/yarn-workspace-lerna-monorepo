# Example monorepo for Yarn Workspaces and Lerna

This is an example monorepo setup in Typescript using Yarn Workspaces and Lerna.

It builds off of some painful experiences to hopefully provide some best practices when building your own monorepo :)

## Best Practices

-   GitHub `CODEOWNERS` file to require PR approval before merging if modifying a package
-   GitHub CI/CD status checks (running `build`, `lint`, `test`, `typecheck`, etc)
-   force workspace packages to declare dependencies in `package.json` so can understand dependency tree
-   do not allow circular dependencies (ie: `packages/package1` dependes on `packages/package2` and `packages/package2` depends on `/packages/package1`)
-   run CI/CD on affected code and dependents only (ie: `lerna run test --since origin/master --include-dependents`)
-   make packages follow common repo tooling (ie: `lerna exec -- eslint . --ext .js,.jsx,.ts,.tsx`)
-   delegate to packages for tooling that you want packages to own (ie: `lerna run test|<any script in package.json>`)
-   enforce packages to share common structure (`packages/package1/src` and `packages/package1/test`)
-   strict settings per package by default but allow overrides (ie: code coverage rules, tsconfig settings, eslint settings)
-   enforce stricter standards on `/shared` packages
-   need a way to ensure key dependency versions are resolved only once like `react`, `react-router-dom`, etc. (ie: use `peerDependencies`, babel resolution, or monitoring `yarn.lock` or `package.json`s via lint settings)
-   use `^` when choosing package versions, so can resolve minor versions to the highest one in common

## Harder to enforce Best Practices

-   share code over duplicating
-   isolate infrastructure and ownership when sharing code (bonus if can isolate CI/CD)
-   share patterns when matured
-   avoid copy and pasting bad code
-   share language and terminology (ie: `/shared` is known to be non-web/mobile specific. `/web` and `/mobile` are not to be imported from)

## Common pain points

-   long CI/CD PR status checks
-   unfamiliar developers committing code that does not follow standards of repo
-   shared dependency conflicts and resolution (ie: `"react": "15.1.0"` in `/app/package.json` but `"react": "16.1.0"` in `/shared/package.json`)
-   bugs and coupling caused by circular dependencies leads to runtime errors
-   lack of quality / consistency due to non-strict settings / no tests / no status checks
-   manual `webpack.config.js` / `metro.config.js` modifications normally required

### Getting started with a fresh repo

#### Choose folder structure and workspaces

```
package.json
lerna.json
tsconfig.json
/apps
  /react-app
    /app
      /src
      /test
      package.json
      tsconfig.json
    /packages
      /routes
        /src
        /test
        package.json
        tsconfig.json
/shared
  /packages
    /theme
      /src
      /test
      package.json
      tsconfig.json
```

```
npx create-react-app tmp --template typescript
git add apps && git commit -m "initial create-react-app"
cd apps/react-app && yarn eject
git add apps/react-app && git commit -m "eject"
cd ../..
```

Create base package.json with Yarn workspaces and Lerna setup

```
[Create package.json](./package.json)
yarn add lerna -D -W
[Create lerna.json](./lerna.json)
```

create `shared` workspace with `scripts` and `packages`

```

```

move `build`, `test`, and `start` scripts and `config` to `/shared/scripts/react-app-setup`

```

```

babel-loader presets
