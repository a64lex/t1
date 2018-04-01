import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';


//import "./t1-counter.js";

export class  T1App extends PolymerElement {

  constructor() {
    super();
    this.name = 'Polymer 3.0 Preview';
  }

  static get is() { return 't1-app'; }

  static get template() {
    return html
        `   <h2> Alex Ferro asdf</h2>

        `;
  }



}


// Register custom element definition using standard platform API
customElements.define('t1-app', T1App);
