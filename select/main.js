define([

  'underscore'
  ,'lateralus'

  ,'./view'
  ,'text!./template.mustache'

], function (

  _
  ,Lateralus

  ,View
  ,template

) {
  'use strict';

  var SelectComponent = Lateralus.Component.extend({
    name: 'select'
    ,View: View
    ,template: template
    ,initialize: _.noop
  });

  return SelectComponent;
});
