import { Falsy } from './utils.types';

export { isEmpty, hasValue, obfuscatePhoneNumber };

function isEmpty(value: string | Falsy) {
  return !hasValue(value);
}

function hasValue(value: string | Falsy) {
  return value && value.trim().length > 0;
}

function obfuscatePhoneNumber(phoneNumber: string) {
  return phoneNumber.replace(/^(.{3})(.+)(.)$/, (_, prefix, center, subfix) => {
    const obfuscated = '*'.repeat(center.length);
    return `${prefix}${obfuscated}${subfix}`;
  });
}
