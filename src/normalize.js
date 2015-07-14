import { ALT, SHIFT, CTRL } from './constants';

const modifierKeys = new Map([
  [ALT, (e) => e.altKey],
  [SHIFT, (e) => e.shiftKey],
  [CTRL, (e) => e.ctrlKey]
]);

function transformKey(keyMapping, normalize) {
  return function checkKey(key) {
    return keyMapping.has(key)
      ? keyMapping.get(key)
      : normalize(key);
  }
}

function normalizeKey(key) {
  return (e) =>
    String.fromCharCode(e.keyCode) === key.toUpperCase();
}

export default transformKey(modifierKeys, normalizeKey);
