# FMHero

This is the repo for the Admin and User web frontends.

# Third-Party Libraries

* https://webpack.js.org
* https://tailwindcss.com

# Project Structure

### ― database

`/database/models`

Contains TypeScript interfaces for representing models provided by the API.

`/database/services/{api,local}`

Functions for interacting with the API and/or local storage.

---

### ― resources

`/resources/images`

All images used by both Admin and User frontends.

`/resources/sass`

All StyleSheets used by both Admin and User frontends.

---

### ― src

`/src/app/{admin,user}`

All components that are unique to Admin and User apps (e.g. screens) are stored
in their respective subdirectory within the `src/app` directory.

`/src/*`

Shared components (e.g. layouts) and utilities (e.g hooks) make up the rest of
the `src` directory.

---

### ― staging

HTML templates used to generate the `index.html` file required by web servers. All
JS and CSS files will automatically be included by Webpack.

---

### ― system

`/system/config`

Configuration files for everything in the app that requires one.

`/system/drivers`

Functions specifically tailored to help develop React in web, in contrast to
developing with React Native.

`/system/util`

Various utility and helper functions and type definitions.

# Yarn/npm Scripts

### Development Web Server

```bash
yarn serve:admin
```

```bash
yarn serve:user
```

### Development Build JiT

```bash
yarn watch:admin
```

```bash
yarn watch:user
```

### Build for Release/Production

```bash
yarn build:admin
```

```bash
yarn build:user
```
