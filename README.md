# Lateralus Components

This is a collection of general-use UI components that can be used to enhance a [Lateralus](https://github.com/Jellyvision/lateralus) app.  Each component has its own README file, so please explore the directory of the component which you would like to know more about.

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
