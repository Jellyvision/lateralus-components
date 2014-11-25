define([

  'lateralus'

  ,'./view'
  ,'text!./template.mustache'

], function (

  Lateralus

  ,View
  ,template

) {
  'use strict';

  var ModelEditorComponent = Lateralus.Component.extend({
    name: 'model-editor'
    ,View: View
    ,template: template

    /**
     * @param {Backbone.Model} model The model to bind to.
     */
    ,setModel: function () {
      this.view.setModel.apply(this.view, arguments);
    }
  });

  return ModelEditorComponent;
});
