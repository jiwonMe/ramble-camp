import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import P5 from 'p5';
import { Intro } from './intro';
import { Typeform } from './typeform';
import { Visualization } from './visualization';
import { Profile } from './profile';
import { hamburgerSVG } from './hamburger.svg';
import { sketch } from './sketch';

@customElement('my-app')
export class MyApp extends LitElement {
  private Intro = new Intro();
  private Typeform = new Typeform();
  private Visualization = new Visualization();
  private Profile = new Profile();

  private Canvas = document.createElement('div');
  private p5: P5;

  constructor() {
    super();
    this.Canvas.id = 'p5';
    this.p5 = new P5(sketch, this.Canvas);
  }

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

      button {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
      }

      #menu {
        position: absolute;
        right: 12px;
      }

      #fg {
        position: fixed;
        z-index: 100000;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background-image: url('https://www.transparenttextures.com/patterns/textured-paper.png');
        mix-blend-mode: soft-light;
        pointer-events: none;
      }

      #p5 {
        position: fixed;
        top: 48px;
        z-index: 5;
      }
    `;
  }

  handleClick() {
    this.Typeform.typeform.hidden = true;
  }

  openMenu() {
    alert('menu는 준비중입니다');
  }

  render() {
    return html`
    <div id='fg'>
    </div>
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
      <button id='menu'
        @click=${this.openMenu}
      >
        ${hamburgerSVG}
      </button>
    </nav>
    ${this.Intro}
    ${this.Typeform}
    ${this.Visualization}

    ${this.Profile}
    `;
  }
}
