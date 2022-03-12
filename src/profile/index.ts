import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('rb-profile')
export class Profile extends LitElement {
  render() {
    return html`
      <h1>Profile</h1>
    `;
  }
}
