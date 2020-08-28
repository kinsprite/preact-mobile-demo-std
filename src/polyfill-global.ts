const check = (it) => (it && it.Math === Math && it);

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
export default check(typeof globalThis === 'object' && globalThis)
  || check(typeof window === 'object' && window)
  || check(typeof self === 'object' && self) // eslint-disable-line
  || check(typeof global === 'object' && global)
  // eslint-disable-next-line no-new-func
  || Function('return this')();
