import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import { textSVG } from './text.svg';
import { bigOneSVG } from './bigOne.svg';
import { nameSVG } from './name.svg';
import { faceSVG } from './face.svg';

@customElement('rb-intro')
export class Intro extends LitElement {
  private flag = false;

  @state()
  private position = {
      x: 0,
      y: 0,
    };

  private distance = 0;

  static get styles() {
    return css`
      :host {
        padding: 2em 1em 0 1em;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        background-color: #0548CB;

        overflow-x: hidden;
        overflow-y: hidden;
      }

      .face {
        width: 100%;
        height: 100%;
      }

      #text-svg {
        position: absolute;
        top: 50px;
        left: 30px;
      }

      #face-svg {
        position: absolute;
        right: 10%;
        top: 25%;
      }

      #bigone-svg {
        position: absolute;
        left: 20px;
        bottom: 10px;
      }

      #name-svg {
        position: absolute;
        left: 110px;
        bottom: 30px;
      }
    `;
  }

  constructor() {
    super();
    this.addEventListener('pointerdown', () => this.remove());
    setTimeout(() => this.remove(), 1500);
  }

  render() {
    return html`
      <div id='text-svg'>
        ${textSVG({
    width: '80%',
    height: '20%',
  })}
      </div>
      <div id='face-svg'>
        ${faceSVG({
    width: '150%',
    height: window.innerHeight * 0.8,
  })}
      </div>
      <div id='bigone-svg'>
        ${bigOneSVG}
      </div>
      <div id='name-svg'>
        ${nameSVG}
      </div>

       `;
  }
}
