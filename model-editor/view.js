define([

  'underscore'
  ,'jsoneditor'
  ,'lateralus'

  ,'text!./template.mustache'

], function (

  _
  ,JSONEditor
  ,Lateralus

  ,template

) {
  'use strict';

  var ModelEditorComponentView = Lateralus.Component.View.extend({
    template: template

    /**
     * @param {Object} opts
     * @param {Array.<string>} opts.lockedFields
     */
    ,initialize: function () {
      this._super('initialize', arguments);

      this.jsonEditor = new JSONEditor(this.$jsoneditor[0], {
        change: this.onChangeJSONEditor.bind(this)

        ,editable: this.onCheckEditableJSONEditor.bind(this)
      });
    }

    ,render: function () {
      this.jsonEditor.set(this.model.toJSON());
    }

    /**
     * @param {Backbone.Model} model The model to bind to.
     */
    ,setModel: function (model) {
      if (this.model) {
        this.stopListening(this.model);
      }

      this.model = model;
      this.listenTo(model, 'change', this.onModelChange.bind(this));
      this.render();
    }

    /**
     * @param {Backbone.Model=} model
     * @param {Object=} options
     * @param {boolean=} options.causedByJSONEditor
     */
    ,onModelChange: function (model, options) {
      if (options && options.causedByJSONEditor) {
        return;
      }

      this.render();
    }

    ,onChangeJSONEditor: function () {
      this.model.clear({ silent: true });
      this.model.set(this.jsonEditor.get(), { causedByJSONEditor: true });
    }

    /**
     * @param {{ field: string, path: Array.<string>, value: any }} node
     */
    ,onCheckEditableJSONEditor: function (node) {
      if (this.lockedFields) {
        return !_.contains(this.lockedFields, node.field);
      } else {
        return true;
      }
    }
  });

  return ModelEditorComponentView;
});
