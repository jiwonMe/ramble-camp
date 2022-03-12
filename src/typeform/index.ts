import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { createWidget } from '@typeform/embed';

@customElement('rb-typeform')
export class Typeform extends LitElement {
  typeform = document.createElement('div');

  static get styles() {
    return css`
      :host {
        display: block;
        position: fixed;
        top: 48px;
        width: 100%;
        z-index: 100;
      }
      #typeform > div > iframe {
        width: 100%;
        height: 100%;
      }

      #wrapper {
        top: 48;
        left: 0;
        width: 100%;
        height: calc(100%-48px);
      }
    `;
  }

  constructor() {
    super();
    this.typeform.setAttribute('id', 'typeform');
    createWidget('aAzpOqmR', {
      container: this.typeform,
      autoResize: true,
      height: window.innerHeight - 48,
      onSubmit: () => {
        alert('성공적으로 제출되었습니다.');
        this.typeform.hidden = true;
      },
      iframeProps: { },
    });
  }

  render() {
    return html`
      <div id='wrapper'>
        ${this.typeform}
      </div>
    `;
  }
}
