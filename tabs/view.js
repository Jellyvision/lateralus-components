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

  var SHOW_CLASS = 'tab-show';

  var TabsComponentView = Lateralus.Component.View.extend({
    template: template

    ,className: 'tabs'

    ,events: {
      'click .tab': 'onClickTab'
    }

    /**
     * @param {Object} options See http://backbonejs.org/#View-constructor
     * @param {jQuery} options.$tabsContainer
     * @param {jQuery} options.$tabsContentContainer
     */
    ,initialize: function () {
      var parentView = this.parentView;
      _.extend(this, {
        el: parentView.el
        ,$el: parentView.$el
      });

      this._super('initialize', arguments);

      this.$tabs = this.$tabsContainer.children();
      this.$tabs.addClass('tab');
      this.$contents = this.$tabsContentContainer.children();
      this.$contents.addClass('tab-content');

      this.selectTab(this.$tabs.first());
    }

    /**
     * @param {jQuery.Event} evt
     */
    ,onClickTab: function (evt) {
      this.selectTab($(evt.currentTarget));
      evt.preventDefault();
    }

    /**
     * @param {jQuery} $tab
     */
    ,selectTab: function ($tab) {
      var tabIndex = $tab.index();
      this.$tabs.removeClass(SHOW_CLASS);
      this.$contents.removeClass(SHOW_CLASS);
      var selectedContent = this.$contents.eq(tabIndex);
      $tab.addClass(SHOW_CLASS);
      selectedContent.addClass(SHOW_CLASS);
      this.emit('tabShown', selectedContent);
    }
  });

  return TabsComponentView;
});
