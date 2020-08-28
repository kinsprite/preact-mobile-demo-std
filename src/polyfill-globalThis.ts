import global from './polyfill-global';

if (typeof global.globalThis !== 'object') {
  global.globalThis = global;
}
