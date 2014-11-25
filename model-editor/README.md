# Model Editor

## A UI widget for directly manipulating a `Backbone.Model`

This is a widget integrates [JSON Editor](https://github.com/josdejong/jsoneditor/) with [`Backbone.Model`](http://backbonejs.org/#Model).  This is particularly useful for building developer utilities with.  JSON Editor is data-bound to a `Backbone.Model` of your choosing — any changes made to the `Backbone.Model` is synced to the UI, and vice-versa.

In your `app/index.html`:

````html
<head>
  <!-- build:css bower_components/jsoneditor/jsoneditor.css -->
  <link rel="stylesheet" href="bower_components/jsoneditor/jsoneditor.css">
  <!-- endbuild -->
</head>
````

To use this component, you can do something like this:

````javascript
// app/scripts/components/sample-component/main.js
define([

  'backbone',
  'lateralus',
  'lateralus.component.model-editor',
  './view',
  'text!./template.mustache'

], function (

  Backbone,
  Lateralus,
  ModelEditorComponent,
  View,
  template

) {
  'use strict';

  var SampleComponent = Lateralus.Component.extend({
    name: 'sample',
    View: View,
    template: template,

    initialize: function () {
      this.modelEditor = this.addComponent(ModelEditorComponent, {
        el: this.view.$modelEditor[0]
      });
      
      this.model = new Backbone.Model();
      this.modelEditor.setModel(this.model);
    }
  });

  return SampleComponent;
});
````

With a template that looks like:

````html
{{! app/scripts/components/sample-component/template.mustache }}
<div class="$modelEditor"></div>
````