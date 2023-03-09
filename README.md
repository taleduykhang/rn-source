# Genvita Mobile App

Currently includes:

- React Native
- React Navigation
- MobX State Tree
- TypeScript

### ./src directory

Included in an Ignite boilerplate project is the `app` directory. This is a directory you would normally have to create when using vanilla React Native.

The inside of the app directory looks similar to the following:

```
app
│── components
│── i18n
├── models
├── navigators
├── screens
├── services
├── theme
├── utils
└── app.tsx
```

**components**
This is where your React components will live. Each component will have a directory containing the `.tsx` file, along with a story file, and optionally `.presets`, and `.props` files for larger components. The app will come with some commonly used components like Button.

**i18n**
This is where your translations will live if you are using `react-native-i18n`.

**models**
This is where your app's models will live. Each model has a directory which will contain the `mobx-state-tree` model file, test file, and any other supporting files like actions, types, etc.

**navigators**
This is where your `react-navigation` navigators will live.

**screens**
This is where your screen components will live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.tsx` file, along with any assets or other helper files.

**services**
Any services that interface with the outside world will live here (think REST APIs, Push Notifications, etc.).

**theme**
Here lives the theme for your application, including spacing, colors, and typography.

**utils**
This is a great place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truely shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.

**app.tsx** This is the entry point to your app. This is where you will find the main App component which renders the rest of the application.

### ./ignite directory

The `ignite` directory stores all things Ignite, including CLI and boilerplate items. Here you will find generators, plugins and examples to help you get started with React Native.

### ./test directory

This directory will hold your Jest configs and mocks, as well as your [storyshots](https://github.com/storybooks/storybook/tree/master/addons/storyshots) test file. This is a file that contains the snapshots of all your component storybooks.

### ./patch directory

Patches created by patch-package are automatically and gracefully applied when you use npm(>=5) or yarn. Lets app authors instantly make and keep fixes to npm dependencies.

npx patch-package some-package

## Running e2e tests

Read [e2e setup instructions](./e2e/README.md).

# Generators

_NOTE: This documentation is for Ignite CLI version 4.0+. For apps spun up by Ignite CLI 3.x or below (Andross or Bowser), please refer to [the previous documentation](https://github.com/infinitered/ignite/tree/2dd42a5957ff18211c9edd7524b6af5f4231baf6/docs)._

_The true gem of Ignite._ When you spin up a new app with Ignite CLI, we copy in several generator templates into `./ignite/templates/*`. Generators help you scaffold your app very quickly, be it for a proof-of-concept, a demo, or a production app. Generators are there to save you time, keep your code consistent, and help you with the basic structure of your app.

```
npx ignite-cli generate --list
```

...will give you information on what generators are present.

## Built-in generators

### Component generator

This is the generator you will be using most often. They come pre-wrapped with mobx-react-lite's `observer` function, which you'll need to trigger re-renders if any MobX-State-Tree properties that are being used in this component change.

```
npx ignite-cli generate component MyAwesomeButton
```

- Creates the component/function
- Creates a style file
- Creates a storybook test

### Screen generator

Generates a "hooks enabled" screen that is also pre-wrapped with mobx-react-lite's `observer` function, making it automatically re-render anytime a relevant MST property changes.

```
npx ignite-cli generate screen Settings
```

### Model generator

Creates a Mobx-State-Tree model.

```
npx ignite-cli generate model No
```

- Creates the model
- Creates a unit test file
- Appends export to `models/index.ts` unless you pass `--skip-index-file`
