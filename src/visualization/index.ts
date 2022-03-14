/* eslint-disable max-len */
import { html, css, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { apikey } from './apikey';
import { bgSVG } from './bg.svg';

// floating animation
const floatingAnimation = css`
  @keyframes floating {
    0% {
      transform: translateX(0) translateY(0);
    }
    20% {
      transform: translateX(5px) translateY(5px);
    }
    40% {
      transform: translateX(3px) translateY(6px);
    }
    60% {
      transform: translateX(1px) translateY(5px);
    }
    80% {
      transform: translateX(-1px) translateY(3px);
    }
    100% {
      transform: translateX(0) translateY(0);
    }
  }
`;

const manifestos = [
  {
    type: 'manifesto',
    message: '산책하기 좋은 도시',
    demo: '이대호',
  },
];
@customElement('rb-visualization')
export class Visualization extends LitElement {
  @state()
  private data: {
    type: string;
    message: string;
    demo: string;
  }[] = [];

  static get styles() {
    return [
      floatingAnimation,
      css`
      * {
        word-break: keep-all;
      }
      :host {
        display: block;
        position: relative;
        width: 100%;
      }

      .cardcontainer {
        display: flex;
        flex-direction: column;
        /* not x scrollable */
        overflow-x: hidden;
        padding-bottom: 3em;
        padding-top: 150px;
      }

      .inner-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
      }

      .inner-container.left {
        align-items: flex-start;
      }

      .inner-container.right {
        align-items: flex-end;
      }

      .card {
        display: flex;
        flex-direction: column;

        width: auto;
        border-radius: 50%;
        background-color: white;
        padding: 3em;

        /* align-items: center; */
        justify-content: center;

        z-index: 10;
      }

      .card.response {
        background-color: white;
      }

      .card.manifesto {
        background-color: #D2F825;
      }

      .card:hover{
        animation: floating 2s ease-in-out;
      }

      .card.left {
        position: relative;
        padding-left: 25%;
        margin-left: -20%;
        align-items: left;
      }

      .card.right {
        position: relative;
        padding-right: 25%;
        margin-right: -20%;
        align-items: right;
      }

      .message {
        font-size: 1.2em;
        font-family: 'GmarketSansMedium';
        text-align: center;
      }

      .left .message, .left .demo {
        text-align: left;
      }

      .right .message, .right .demo {
        text-align: right;
      }

      .demo {
        font-size: 0.8em;
        font-family: 'GmarketSansMedium';
      }

      svg {
        margin-bottom: 1em;
        position: fixed;
      }

      #bg {
        position: fixed;
        top: 48px;
        height: 100%;
        z-index: 0;
        animation: floating 4s linear infinite;
      }

      #title > svg{
        z-index: 11;
      }
    `];
  }

  constructor() {
    super();
    this.loadData();
  }

  async loadData() {
    const res = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/1ogIq5S8-UmM227ervxb0XHBSX4f5I75NkF7AraXc0RI/values/Testing?key=${apikey}`, { method: 'GET' });
    const data = await res.json();
    console.log(data.values);

    data.values.forEach((row: string[], i: number) => {
      if (i === 0) return;
      const [message, demo1, demo2] = row;
      console.log(message);
      this.data = [
        ...this.data,
        {
          type: 'response',
          message,
          demo: `${demo1} ${demo2}`,
        },
      ];
    });

    this.data = [
      // shuffle add some manifestos randomly
      ...[
        ...this.data,
        ...manifestos,
      ].sort(() => Math.random() - 0.5),
    ];

    this.data = [
      // add 1000 times
      ...Array(1000).fill(null).map(() => this.data[Math.floor(Math.random() * this.data.length)]),
    ];
  }

  render() {
    return html`
    <div id='bg'>
      ${bgSVG}
    </div>
    <div id='title'>
          <svg width=100% height="107" viewBox="0 0 324 107" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6972 101.073C44.9272 113.364 78.9823 105.516 101.142 83.7555C104.595 90.8622 110.312 96.887 118.223 101.073C143.461 114.427 181.476 104.009 203.132 77.8051C203.48 77.3838 203.822 76.961 204.157 76.5369C206.779 86.7673 213.406 95.5315 223.879 101.073C249.117 114.427 287.132 104.009 308.788 77.8051C330.444 51.6009 327.541 19.5328 302.303 6.17907C277.065 -7.17467 239.05 3.2427 217.394 29.4469C217.046 29.8682 216.704 30.2909 216.368 30.7151C213.746 20.4847 207.119 11.7205 196.646 6.17907C173.416 -6.11228 139.361 1.73559 117.202 23.4965C113.749 16.3898 108.032 10.365 100.121 6.17907C74.8828 -7.17467 36.8678 3.2427 15.2117 29.4469C-6.44431 55.6511 -3.54065 87.7192 21.6972 101.073Z" fill="#1B9FC8"/>
      <path d="M73.317 68.478V37.821H65.892V68.478H73.317ZM43.65 67.488C47.874 65.376 51.438 62.571 53.814 58.116C56.19 62.571 59.787 65.376 64.011 67.488V59.7C60.48 57.324 57.477 54.057 57.477 44.388V38.481H50.184V44.388C50.184 54.057 47.181 57.324 43.65 59.7V67.488ZM106.317 60.393V37.821H98.892V60.393H106.317ZM95.625 54.981V38.316H76.98V54.981H95.625ZM83.943 43.596H88.794V49.701H83.943V43.596ZM106.812 68.478V63.066H85.89V57.324H78.366V68.478H106.812ZM138.69 47.523V43.332H117.735V41.88H138.525V37.821H110.475V47.523H138.69ZM139.68 53.727V48.942H109.32V53.727H139.68ZM139.02 68.478V64.65H117.537V63.429H138.525V55.377H110.475V58.875H131.397V60.063H110.475V68.478H139.02ZM152.616 57.489C157.764 57.489 161.955 54.816 161.955 49.305V46.17C161.955 40.626 157.764 37.821 152.616 37.821C147.501 37.821 143.31 40.626 143.31 46.17V49.305C143.31 54.816 147.501 57.489 152.616 57.489ZM172.317 68.478V37.821H164.892V68.478H172.317ZM152.616 52.11C151.263 52.11 150.174 51.186 150.174 49.635V45.774C150.174 44.223 151.263 43.2 152.616 43.2C154.035 43.2 155.157 44.223 155.157 45.774V49.635C155.157 51.186 154.035 52.11 152.616 52.11ZM164.067 66.663V60.723L142.32 62.043V67.983L164.067 66.663ZM203.859 48.942H214.419V37.821H186.369V48.942H196.896V51.483H185.214V56.598H215.574V51.483H203.859V48.942ZM207.456 42.111V44.652H193.332V42.111H207.456ZM207.291 62.868V68.808H214.419V58.347H186.204V62.868H207.291ZM219.039 55.41C225.738 55.245 230.919 52.209 233.394 48.513C235.869 52.209 241.05 55.245 247.782 55.41V49.668C241.017 49.14 237.123 44.355 237.123 40.659V37.986H229.698V40.659C229.698 44.355 225.969 49.14 219.039 49.668V55.41ZM248.574 67.983V62.043H237.024V55.146H229.764V62.043H218.214V67.983H248.574ZM281.211 68.478V37.821H273.786V68.478H281.211ZM272.994 65.805V59.865L259.134 60.954V55.212H270.519V38.811H251.874V44.586H263.358V49.602H251.874V67.488L272.994 65.805Z" fill="white"/>
      </svg>
    </div>

        <div class="cardcontainer">
      ${
  this.data.map(
    (item, index) => html`
    <div class='inner-container
      ${index % 2 === 0 ? 'left' : 'right'}
    '>
        <div class='card
          ${index % 2 === 0 ? 'left' : 'right'}
          ${item.type}
        '>
          <div class='message'>${item.message}</div>
          <div class='demo'>${item.demo}</div>
        </div>
  </div>
        `,
  )
}
</div>
    `;
  }
}
