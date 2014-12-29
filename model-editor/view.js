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

  var Base = Lateralus.Component.View;
  var baseProto = Base.prototype;

  var ModelEditorComponentView = Base.extend({
    template: template

    ,onChange: _.noop

    /**
     * @param {Object} opts
     * @param {Array.<string>} opts.lockedFields
     */
    ,initialize: function () {
      baseProto.initialize.apply(this, arguments);

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
      var model = this.model;
      var oldData = model.toJSON();
      model.clear({ silent: true });
      var newData = this.jsonEditor.get();
      model.set(newData, { causedByJSONEditor: true });
      this.onChange(newData, oldData);
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
