/* 
 * my-app.js
 * 3 changes:
 * - Import statements now use package names instead of paths
 * - polymer-element.js exports PolymerElement instead of Element, no 
 *   need to rename it
 * - Import the html helper function from polymer-element.js for templates
*/
import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-if';
import '@polymer/paper-checkbox/paper-checkbox';
// Continue to use paths for importing other modules that are part of your app
import './my-view.js';

class MyApp extends PolymerElement {
  static get template () {
    // Always return an HTMLTemplateElement, not a string literal
    return html`
      <h1>Hello World</h1>
      <template is="dom-if" if="true">
        <paper-checkbox>I like pie</paper-checkbox>
      </template>
      <my-view></my-view>
    `;
  }
} 
customElements.define('my-app', MyApp);