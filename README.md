# Food Truck Finder

Coding challenge project aimed to help anyone find the 5 closest food trucks to them while in San Francisco.

The home page of this project will load a map and try to access your device location for convenience centering the map near you.

The reset button in the home page will load the default values to center the map view to the San Francisco area.

To find food trucks near you simply tap your location on the map.

The About page describes the project and some of the Features + development decisions involved in the creation of this project.

# Tech Stack

## Angular

This is an Angular project featuring Best Practices for scalability, performance and ease of use.

Code is written leveraging Typescript and ES6 functionality to ensure quality and scalability.

All Angular modules and their components/services are lazy loaded for performance considerations.

Services are instantiated as Singleton services to ensure a consistent data flow between services and components.

Shared Module pattern is used for efficient import/export of dependencies to all modules. Tree shaking enabled to keep bundles minimal and use only the dependencies each module needs.

Routing module has strict type checking of routes to ensure routes use proper title, description and an icon for mobile responsive display.
Theming styling is built separately from structural styling to easily make changes when needed.

Multiple themes are supported and lazy loaded into the app at runtime to keep network traffic minimal.

Two layouts are supported for the navigation menu, the default navigation positions the menus in the top toolbar and the second layout positions them in a expandable sidenan panel.

User preferences for Theme and Layout are persisted in LocalStorage for user convenience.

Testing modules have been set up to minimize external dependencies and ensure reusable testing patterns.

## Bootstrap

Bootstrap is used to leverage some of the library's built-in utilities for responsive design and theming capabilities. Bootstrap components are NOT used.

Bootstrap Grid system enables responsive design by using a class-based approach which is easy to use and keeps the page layout in the HTML.

Bootstrap color utilities allow for powerful and efficient theming capabilities for text and background, this project integrates Bootstrap and Material theming capabilities to leverage the best of both libraries seamlessly.

Other Bootstrap utilities are leveraged as well for easy styling of margins, padding, borders, alignment, etc.

## Angular Material

Angular Material is used as the main component library of this project for the high quality, elegant design and extensive documentation of the components.

Material theming capabilities are exceptional and paired with Bootstrap utilities this project can be fully customized with ease, multiple themed are already included and more can be added with minimal effort.

## Angular Flex Layout

Angular Flex Layout is used to enable mobile responsive design.

Depending on the viewport size, elements are effectively added or removed from the DOM, this keeps the DOM clean and organized while also boosting performance.

The navigation Layout can also be changed programmatically using Angular Flex Layout. Allowing us to force the default Layout view instead of the sidenav panel view when on small screens.

## Angular Google Maps

Angular Google Maps is used as a wrapper to use the Google Maps API's.

Location services are enabled to set the user's initial location.

Markers are used to display on the map a layer of the 5 closest food trucks to a given location.

A circle area is drawn on the screen displaying the radius in which the food trucks were found.

## San Francisco Data API

The public San Francisco Data API is used to pull results for food trucks in San Francisco.

A custom query is built that orders results by proximity to a given location and sets a limit of 5, effectively returning the 5 closest food trucks to a given location.

## Prettier

Prettier is used to automatically style code, files can be pretified automatically on save by using the included `.vscode/settings.json` file in this repo.

Additionally, the prettier npm module is included as a dependency to prettify staged files with a `pre-commit` hook.

Prettier is used on this project to ensure consistent coding style.

## TSLint

Similarly to Prettier, TSLint will try to auto-fix linting issues automatically on save using the included `.vscode/settings.json` file.

Running `npm run lint:fix` will also try to auto-fix any linting issues in the project.

There's a `pre-push` hook that will lint the project and prevent pushing if errors are present.

## Hooks

Hooks are ran using Husky to ensure code quality through the scaffolding of this project.

### pre-commit

Prettier will run as a `pre-commit` hook using `pretty-quick` on staged files.

### pre-push

Linting (no auto-fix) and tests will be run as a `pre-push` hook, if either of them fail pushing won't go through.

## VSCode

VSCode is recommended as the IDE for this project, included in this repo is `.vscode/settings.json` file with some basic settings to prettify and attempt to auto-fix lint issues with ease.

# Demo

A demo of this project can be found here: https://ztgluis.github.io/food-truck-challenge

# Development

Run `npm start` for a dev server and navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `npm test` to run tests and get a text summary of the results + code coverage.

Running `git commit` will initiate a pre-commit hook which will ensure code styling using prettier.

Running `git push` will initiate a CI/CD process which executes linting, testing, prod build and push prod build to GitHub Pages.
