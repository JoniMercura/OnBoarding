# Simple React frontend template

Frontend react template

## About

This template is setup to start a blank project with [React](https://reactjs.org/) and [Tailwindcss](https://tailwindcss.com/), bundled with [ViteJS](https://vitejs.dev), and linted and styled by [ESLint](https://eslint.org/)

The included .eslintrc.json config file should not be modified, to keep the code style and format consistent across projects. The [ESLint](vscode:extension/dbaeumer.vscode-eslint) extension for VSCode can be installed. Once installed it needs to be enabled as a formatter in the ESLint Extension Settings. Afterwards VSCode can be configured to use ESLint to autoformat code using ESLint.

ThreeJS is not included, but can be installed if needed.

When installing other packages, remember to install the types associated with the package as well (if they exist). For example, if you install `three`, you should also install `@types/three`, to be able to use Typescript features within ThreeJS.

### Tailwind

The template uses [this](https://github.com/davidhellmann/tailwindcss-fluid-type) package to handle fluid typography. By default all the `text-*` utility classes are overridden to automatically use fluid font sizes. The `tailwind.config.cjs` config file can be changed to either:
1. Provide a custom prefix to all fluid utility classes, and preserve the normal `text-*` utility classes
2. Provide alternatives for the normal `text-*` utility classes

## Quick start

Clone the repository into <folder-name\>, and run the following commands

```bash
cd <folder-name>
npm i
npm run dev
```

This will start a development server and open it in the browser. In the future a local proxy will be setup for api calls, to simulate the real api environment when developing.

You can also run the following command to build the production version. This will output the production ready version to the build folder, which will be served by Laravel.

```bash
npm run build
```

## Branching

- `main` - Production branch, which is protected and can't be pushed to
- `develop` - Development branch, which is not protected and can be pushed to

`Main` should therefore always be the newest stable release, whereas a pre-release version (not necessarily a stable version) is available at `develop`.

## Semantic versioning

This project uses [semantic versioning](https://semver.org/).  
This means that the version number is incremented according to the following rules:

- (perf) MAJOR version when you make incompatible changes,
- (feat) MINOR version when you add functionality in a backwards compatible manner, and
- (fix)  PATCH version when you make backwards compatible bug fixes.

### Automatic versioning

This library uses [Semantic Versioning](https://semver.org/).

The versioning is done through commit messages and merge requests.  
It has been automated through the use of [semantic-release](https://github.com/semantic-release/semantic-release).  
When a merge request is merged into the `main` branch, semantic-release will automatically create a new version and publish it to [the npm registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry) and make a [new release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository).  
A push to `develop` will create a pre-release, which is corresponding to staging.

More about the commit message format can be found [here (Confluence)](https://mercura.atlassian.net/wiki/spaces/MC/pages/43417601/Frontend+Packages#Naming-conventions).

***Please note, that if the commit format is not followed, a new version will not be created and released. This includes release to staging/production.***  
***Format: `<type>(<category>): <message>`***

### Categories

For the library, some categories may have to be defined for the semantic release.

## Styleguide

This project use follows a set of rules for styling one's code. A [styleguide](./styleguide.md) is available in the project.
Eslint is used to enforce some of these rules, while some of the rules not enforceable by the eslint are described in the styleguide. 

### Using Eslint as formatter
Enhance your ESLint integration in VSCode by configuring the default formatter to Eslint. 

Simply navigate to `-> Settings -> Search for "format" -> Choose Default Formatter -> Opt for ESLint`. 

Additionally, while in the settings and searching for "format," consider enabling `format on save by checking the box`. This ensures automatic application of ESLint formatting whenever you save your current working file. Properly configuring these settings will significantly reduce linting issues, providing a smoother development experience.


### Retrofitting eslint Configuration for Older Projects

To integrate the updated eslint configuration from the root of the project into an older codebase, it is essential to ensure that the project has the necessary dependencies for eslint plugins. Execute the following command to guarantee that the packages are up to date:

```bash
npm i -D eslint@8.56.0 eslint-plugin-tailwindcss@3.14.1-beta.1 @stylistic/eslint-plugin@1.5.4 eslint-plugin-prefer-arrow@1.2.3 eslint-plugin-react@7.31.11 @typescript-eslint/eslint-plugin@6.19.1
```

This command installs the required versions of eslint and its associated plugins, allowing the older project to align with the updated linting configuration. It is also adviceable to copy the npm scripts found in package.json.

#### List of Used Plugins for Linting:

* [eslint@8.56.0](https://eslint.org/)
* [eslint-plugin-tailwindcss@3.14.1-beta.1](https://www.npmjs.com/package/eslint-plugin-tailwindcss)
* [@stylistic/eslint-plugin@1.5.4](https://eslint.style/)
* [eslint-plugin-prefer-arrow@1.2.3](https://www.npmjs.com/package/eslint-plugin-prefer-arrow)
* [eslint-plugin-react@7.31.11](https://www.npmjs.com/package/eslint-plugin-react)
* [@typescript-eslint/eslint-plugin@6.19.1](https://typescript-eslint.io/)

Additionally, it is advisable to update Tailwind to version 3.4 and TypeScript to version 5.3 for enhanced compatibility and performance. Ensure that these dependencies are reflected in the project's configuration to leverage the latest features and improvements.
