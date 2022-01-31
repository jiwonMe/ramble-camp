import { build } from 'esbuild';
import aliasPlugin from 'esbuild-plugin-alias';
import fs from 'fs';

export const config = {
  entryPoints: ['./src/index.ts'],
  outfile: './dist/index.js',
  target: 'es2020',
  minify: true,
  bundle: true,
  plugins: [
    aliasPlugin(
      { aliases: { '@': 'src' } },
    ),
  ],
  define: {
    __DEV__: process.env.NODE_ENV !== 'production',
    __TEST__: process.env.NODE_ENV === 'test',
  },
  sourcemap: true,
};

export const copyStatic = () => {
  // if ./dist is not exist, mkdir
  if (!fs.existsSync('./dist')) {
    fs.mkdirSync('./dist');
  }

  build({
    entryPoints: ['./public/index.html'],
    // entryNames: '[name]/index',
    outdir: './dist',
    assetNames: './index',
    // chunkNames: 'index.html',
    loader: { '.html': 'file' },
  });
};
