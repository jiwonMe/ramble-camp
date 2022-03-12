/* eslint-disable max-len */
import { svg } from 'lit';

export const textSVG = (props: {
  height: number | string;
  width: number | string;
}) => svg`
<svg width="${props.width}" height="${props.height}" viewBox="0 0 213 106" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.36 18.311V11.975H32.792V6.2H29.36V0.821H22.1V18.311H29.36ZM21.275 16.694V11.117L8.24 12.173V6.761H18.932V1.316H0.98V18.113L21.275 16.694ZM2.036 25.307C2.036 28.937 4.874 31.643 8.471 31.643H23.519C27.215 31.643 30.02 28.937 30.02 25.307C30.02 21.644 27.215 18.971 23.519 18.971H8.471C4.874 18.971 2.036 21.644 2.036 25.307ZM10.781 26.429C9.989 26.429 9.362 26.132 9.362 25.307C9.362 24.383 9.989 24.152 10.781 24.152H21.176C22.1 24.152 22.727 24.383 22.727 25.307C22.727 26.132 22.1 26.429 21.176 26.429H10.781ZM63.317 23.129V0.821H55.892V23.129H63.317ZM33.65 19.466C38.303 18.443 41.603 16.232 43.814 12.866C46.025 16.232 49.358 18.443 54.011 19.466V13.328C49.523 12.008 47.477 8.18 47.477 3.956V0.985999H40.184V3.956C40.184 8.18 38.138 12.008 33.65 13.328V19.466ZM63.812 31.478V26.066H42.89V20.984H35.366V31.478H63.812ZM76.616 20.489C81.764 20.489 85.955 17.816 85.955 12.305V9.17C85.955 3.626 81.764 0.821 76.616 0.821C71.501 0.821 67.31 3.626 67.31 9.17V12.305C67.31 17.816 71.501 20.489 76.616 20.489ZM96.317 31.478V0.821H88.892V31.478H96.317ZM76.616 15.11C75.263 15.11 74.174 14.186 74.174 12.635V8.774C74.174 7.223 75.263 6.2 76.616 6.2C78.035 6.2 79.157 7.223 79.157 8.774V12.635C79.157 14.186 78.035 15.11 76.616 15.11ZM88.067 29.663V23.723L66.32 25.043V30.983L88.067 29.663ZM109.544 20.027C113.9 19.796 117.53 17.981 119.741 14.846C121.952 17.981 125.582 19.796 129.971 20.027V14.318C127.1 14.153 123.305 12.008 123.305 8.477V8.147H129.608V2.471H123.47V0.160998H116.045V2.471H109.874V8.147H116.21V8.477C116.21 12.008 112.415 14.153 109.544 14.318V20.027ZM139.211 23.921V0.821H131.786V23.921H139.211ZM139.706 31.478V26.066H118.784V21.314H111.26V31.478H139.706ZM170.033 15.374L171.584 1.316H143.171V6.926H163.862L162.905 15.374H170.033ZM160.958 31.808V22.139H172.574V16.199H142.214V22.139H153.5V31.808H160.958ZM179.339 32.567L182.309 23.888H175.709L174.719 32.567H179.339ZM0.254 61.614C0.254 66.3 4.115 68.808 8.768 68.808C13.421 68.808 17.282 66.3 17.282 61.614V44.685C17.282 39.999 13.421 37.491 8.768 37.491C4.115 37.491 0.254 39.999 0.254 44.685V50.262C0.254 54.981 2.399 57.456 7.118 57.456C8.273 57.456 9.494 57.192 10.682 56.763V61.944C10.682 63 9.824 63.858 8.768 63.858C7.712 63.858 6.854 63 6.854 61.944V59.832H0.254V61.614ZM8.768 52.506C7.712 52.506 6.854 51.648 6.854 50.592V44.355C6.854 43.299 7.712 42.441 8.768 42.441C9.824 42.441 10.682 43.299 10.682 44.355V50.757C10.583 51.78 9.791 52.506 8.768 52.506ZM19.9782 61.614C19.9782 66.3 23.8392 68.808 28.4922 68.808C33.1452 68.808 37.0062 66.3 37.0062 61.614V44.685C37.0062 39.999 33.1452 37.491 28.4922 37.491C23.8392 37.491 19.9782 39.999 19.9782 44.685V61.614ZM26.5782 44.685C26.5782 43.629 27.4362 42.771 28.4922 42.771C29.5482 42.771 30.4062 43.629 30.4062 44.685V61.614C30.4062 62.67 29.5482 63.528 28.4922 63.528C27.4362 63.528 26.5782 62.67 26.5782 61.614V44.685ZM69.6664 60.327V37.821H62.3734V40.131H54.8494V44.619H62.3734V46.038H54.8494V50.526H62.3734V60.327H69.6664ZM61.2184 57.06V51.582L47.5564 52.077V38.151H40.2964V57.918L61.2184 57.06ZM70.1614 68.478V63.066H49.0414V59.304H41.6824V68.478H70.1614ZM95.6374 55.905V49.371H97.0894V55.905H102.996V37.821H97.0894V43.761H95.6374V37.821H89.8624V55.905H95.6374ZM72.9994 55.311C76.1674 54.618 78.9394 53.001 80.9194 50.196C82.8664 52.836 85.6054 54.288 88.7404 54.981V49.206C86.1004 48.15 83.9224 46.467 83.9224 40.725V37.986H77.8174V40.725C77.8174 46.467 75.6394 48.48 72.9994 49.536V55.311ZM74.2864 62.604C74.2864 66.036 77.1244 68.643 80.6884 68.643H96.8584C100.488 68.643 103.326 66.036 103.326 62.604C103.326 59.073 100.488 56.565 96.8584 56.565H80.6884C77.1244 56.565 74.2864 59.073 74.2864 62.604ZM82.9984 63.66C82.2064 63.66 81.5794 63.396 81.5794 62.604C81.5794 61.713 82.2064 61.515 82.9984 61.515H94.5484C95.4724 61.515 96.0664 61.713 96.0664 62.604C96.0664 63.396 95.4724 63.66 94.5484 63.66H82.9984ZM145.527 56.334V37.821H138.102V56.334H145.527ZM115.86 55.344C120.216 55.245 123.78 53.76 126.024 50.955C128.301 53.76 131.832 55.245 136.221 55.344V49.635C132.492 49.371 129.588 47.754 129.324 43.893H135.891V38.316H116.19V43.893H122.724C122.46 47.754 119.589 49.371 115.86 49.635V55.344ZM137.772 62.439V68.808H145.527V57.159H117.246V62.439H137.772ZM177.57 55.575V49.338H181.002V43.563H177.57V37.821H170.31V55.575H177.57ZM148.86 55.344C153.183 55.245 156.582 53.925 158.727 50.922C160.938 53.694 164.271 54.915 168.528 55.014V49.305C164.832 49.041 162.126 47.721 161.961 43.893H168.198V38.316H149.19V43.893H155.394C155.163 47.721 152.589 49.371 148.86 49.635V55.344ZM150.246 62.439C150.246 66.003 153.084 68.643 156.648 68.643H171.762C175.392 68.643 178.23 66.003 178.23 62.439C178.23 58.842 175.392 56.235 171.762 56.235H156.648C153.084 56.235 150.246 58.842 150.246 62.439ZM158.76 63.528C157.968 63.528 157.506 63.198 157.506 62.439C157.506 61.68 157.968 61.317 158.76 61.317H169.617C170.541 61.317 171.003 61.68 171.003 62.439C171.003 63.198 170.541 63.528 169.617 63.528H158.76ZM191.529 56.268C196.644 56.268 200.835 53.595 200.835 48.843V45.345C200.835 40.494 196.644 37.821 191.529 37.821C186.381 37.821 182.19 40.494 182.19 45.345V48.843C182.19 53.595 186.381 56.268 191.529 56.268ZM211.527 60.129V37.821H204.102V60.129H211.527ZM191.529 51.219C190.242 51.219 189.318 50.394 189.318 49.239V44.949C189.318 43.794 190.242 42.87 191.529 42.87C192.75 42.87 193.74 43.794 193.74 44.949V49.239C193.74 50.394 192.75 51.219 191.529 51.219ZM212.022 68.478V63.066H190.935V57.984H183.576V68.478H212.022ZM23.09 84.259V92.905H30.35V74.821H23.09V78.715H17.018V84.259H23.09ZM0.65 92.641C5.237 91.618 8.405 89.836 10.517 87.163C12.629 89.77 15.797 91.519 20.318 92.476V86.305C15.83 85.018 14.081 82.51 14.081 78.319V74.986H6.887V78.319C6.887 82.51 5.138 85.348 0.65 86.635V92.641ZM2.036 99.604C2.036 103.036 4.874 105.643 8.438 105.643H24.212C27.842 105.643 30.68 103.036 30.68 99.604C30.68 96.073 27.842 93.565 24.212 93.565H8.438C4.874 93.565 2.036 96.073 2.036 99.604ZM10.748 100.66C9.956 100.66 9.329 100.396 9.329 99.604C9.329 98.713 9.956 98.515 10.748 98.515H21.869C22.793 98.515 23.42 98.713 23.42 99.604C23.42 100.396 22.793 100.66 21.869 100.66H10.748ZM62.36 91.354V85.48H65.792V79.705H62.36V74.821H55.1V91.354H62.36ZM54.275 89.011V83.368L41.24 84.688V75.151H33.98V90.859L54.275 89.011ZM55.067 104.62V105.478H62.36V92.179H35.366V105.478L55.067 104.62ZM42.692 97.096H55.067V99.769L42.692 100.231V97.096ZM96.317 105.478V74.821H88.892V105.478H96.317ZM66.65 104.488C70.874 102.376 74.438 99.571 76.814 95.116C79.19 99.571 82.787 102.376 87.011 104.488V96.7C83.48 94.324 80.477 91.057 80.477 81.388V75.481H73.184V81.388C73.184 91.057 70.181 94.324 66.65 96.7V104.488ZM128.36 92.575V86.338H131.792V80.563H128.36V74.821H121.1V92.575H128.36ZM99.65 92.344C103.973 92.245 107.372 90.925 109.517 87.922C111.728 90.694 115.061 91.915 119.318 92.014V86.305C115.622 86.041 112.916 84.721 112.751 80.893H118.988V75.316H99.98V80.893H106.184C105.953 84.721 103.379 86.371 99.65 86.635V92.344ZM101.036 99.439C101.036 103.003 103.874 105.643 107.438 105.643H122.552C126.182 105.643 129.02 103.003 129.02 99.439C129.02 95.842 126.182 93.235 122.552 93.235H107.438C103.874 93.235 101.036 95.842 101.036 99.439ZM109.55 100.528C108.758 100.528 108.296 100.198 108.296 99.439C108.296 98.68 108.758 98.317 109.55 98.317H120.407C121.331 98.317 121.793 98.68 121.793 99.439C121.793 100.198 121.331 100.528 120.407 100.528H109.55Z" fill="white"/>
</svg>
`;