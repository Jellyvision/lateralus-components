define([

  'underscore'
  ,'lateralus'

  ,'text!./template.mustache'

], function (

  _
  ,Lateralus

  ,template

) {
  'use strict';

  var Base = Lateralus.Component.View;
  var baseProto = Base.prototype;

  var SelectComponentView = Base.extend({
    template: template

    ,events: {
      'change': 'onChange'
    }

    ,tagName: 'select'

    /**
     * @param {Object} opts
     *   @param {Array.<{{ label: string, option: string }}>} options
     */
    ,initialize: function (opts) {
      baseProto.initialize.apply(this, arguments);
      this.setOptions(opts.options);
    }

    ,onChange: function () {
      this.component.trigger('change', this.$el.val());
    }

    /**
     * @param {Array.<{{ label: string, option: string }}>} options
     */
    ,setOptions: function (options) {
      this.selectOptions = options;
      this.renderTemplate();
    }

    /**
     * @return {Object}
     * @override
     */
    ,getTemplateRenderData: function () {
      var data = baseProto.getTemplateRenderData.apply(this, arguments);

      return _.extend(data, {
        options: this.selectOptions
      });
    }
  });

  return SelectComponentView;
});
