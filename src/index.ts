import { render, html } from 'lit';
import '@/app';

render(
  html`<my-app></my-app>`,
  document.getElementById('root') as HTMLElement,
);
