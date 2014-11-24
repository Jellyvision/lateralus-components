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

  var TabsComponent = Lateralus.Component.extend({
    name: 'tabs'
    ,View: View
    ,template: template
  });

  return TabsComponent;
});
