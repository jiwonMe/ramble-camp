import { build } from 'esbuild';
import { config, copyStatic } from './esbuild.common.js';

build(config);
copyStatic();
