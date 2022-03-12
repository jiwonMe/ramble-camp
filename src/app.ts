import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Intro } from './intro';
import { Typeform } from './typeform';
import { Visualization } from './visualization';
import { Profile } from './profile';

@customElement('my-app')
export class MyApp extends LitElement {
  private Intro = new Intro();
  private Typeform = new Typeform();
  private Visualization = new Visualization();
  private Profile = new Profile();

  static get styles() {
    return css`
    :host {
      padding-top: 48px;
    }
      nav {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 48px;
        background-color: #0548CB;
        color: white;
        padding: 10px;

        box-sizing: border-box;

        z-index: 1000;

        display: flex;
        gap: 10px;
        align-items: center;
        /* justify-content: center; */

        font-family: 'GmarketSansMedium';
      }
    `;
  }

  handleClick() {
    this.Typeform.typeform.hidden = true;
  }

  render() {
    return html`
    <nav>
      <h1>산책캠프</h1>
      <div>
         이대호의 산책 캠프
      </div>
      <div>
        <button
          @click=${this.handleClick}
        >survey 닫기</button>
      </div>
    </nav>
    ${this.Intro}
    ${this.Typeform}
    ${this.Visualization}
    ${this.Profile}
    `;
  }
}
