# Tabs

## A tab widget for Lateralus

This component provides a minimalistic foundation for tabs.  Rather than being a full-blown component that contains subcomponents, Tabs gets used as a subview for another component:

````javascript
// app/scripts/components/sample-component/view.js
define([

  'lateralus',
  'lateralus.component.tabs',
  'text!./template.mustache',

], function (

  Lateralus,
  TabsComponent,
  template

) {

  var SampleComponentView = Lateralus.Component.View.extend({
    template: template,

    initialize: function () {
      this._super('initialize', arguments);

      this.addSubview(TabsComponent.View, {
        $tabsContainer: this.$tabsContainer,
        $tabsContentContainer: this.$tabsContentContainer
      });
    }
  });

  return SampleComponentView;
});
````

This assumes a template that looks something like this:

````html
{{! app/scripts/components/sample-component/template.mustache }}
<ul class="$tabsContainer">
  <li><a href="#">Tab 1</a></li>
  <li><a href="#">Tab 2</a></li>
</ul>
<ul class="$tabsContentContainer">
  <li class="tab-contents-container-1">
    <div></div>
  </li>
  <li class="tab-contents-container-2">
    <div></div>
  </li>
</ul>
````

Be sure to wire up the style sheet:

````sass
// app/styles/main.scss
@import 'lateralus-components/tabs/styles/main.sass';
````