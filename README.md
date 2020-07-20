# Example monorepo for Yarn Workspaces and Lerna

This is an example monorepo setup in Typescript using Yarn Workspaces and Lerna.

It builds off of some painful experiences to hopefully provide some best practices when building your own monorepo :)

## Best Practices (through teaching)

 - share code over duplicating
 - isolate infrastructure and ownership when sharing code (bonus if can isolate CI/CD)
 - share patterns when matured
 - avoid copy and pasting bad code
 - share language and terminology (ie: `/shared` is known to be non-web/mobile specific.  `/web` and `/mobile` are not to be imported from)

## Best Practices (enforced)
 
 - GitHub CODEOWNERS file to require PR approval before merging if modifying a package
 - GitHub CI/CD status checks (running yarn, linting, tests, etc)
 - force workspace packages to declare dependencies in package.json so can understand dependency tree
 - run CI/CD on affected code and dependents only (ie: `lerna run test --since origin/master --include-dependents`)
 - make packages follow common repo tooling (ie: `lerna exec -- eslint . --ext .js,.jsx,.ts,.tsx`)
 - delegate to packages for tooling that you want packages to own (ie: `lerna run test|<any script in package.json>`)
 - enforce packages to share common structure (`packages/package1/src` and `packages/package1/test`)
 - strict settings per package by default but allow overrides (ie: code coverage rules, tsconfig settings, eslint settings)
 - enforce stricter standards on `/shared` packages only
 - need a way to ensure key dependency versions are resolved only once like react, react-router-dom, etc.  (ie: use `peerDependencies`, babel resolution, or monitoring `yarn.lock` or `package.json`s via lint settings)

## Common pain points

 - long CI/CD PR status checks
 - unfamiliar developers committing code that does not follow standards of repo
 - shared dependency conflicts and resolution (ie: `"react": "15.1.0" in /app/package.json but "react": "16.1.0" in /shared/package.json`)
 - bugs and coupling caused by circular dependencies (ie: `packages/auth` dependes on `packages/profile` and `packages/profile` depends on `/packages/auth` - leads to runtime errors)
 - lack of quality / consistency due to non-strict settings / no tests / no status checks
 - manual webpack / metro modifications normally required