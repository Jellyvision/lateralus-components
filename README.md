# Lateralus Components

This is a collection of general-use UI components that can be used to enhance a [Lateralus](https://github.com/Jellyvision/lateralus) app.  Each component has its own README file, so please explore the directory of the component which you would like to know more about.

## Using Lateralus Components

To wire up a component in your app, set it up as an [AMD package](http://requirejs.org/docs/api.html#packages), like so:

````javascript
require.config({
  baseUrl: '/',
  packages: [{
    name: 'lateralus',
    location: 'bower_components/lateralus/scripts',
    main: 'lateralus'
  }, {
    name: 'lateralus.component.tabs',
    location: 'bower_components/lateralus-components/tabs'
  }, {
    name: 'lateralus.component.model-editor',
    location: 'bower_components/lateralus-components/model-editor'
  }
});
````

## Branching & Versioning

- Pre-Release
  - Branch off of `/develop`
  - Publish [pre-release versions](https://jasonraimondi.com/posts/use-the-npm-version-command-to-semantically-version-your-node-project/#create-a-prerelease-version) from feature branches using `npm publish --tag next`
  - Test your pre-release version in a locally running lateralus app
- When you're ready to release your new version:
  - Merge to `/develop`
  - Checkout `/develop` and promote your prerelease version to a release version
  - Create a PR from `/develop` to `/master`
  - Publish your release version to npm
