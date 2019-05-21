export { isValidPhoneNumber, canBePhoneNumber };

const validPattern = /^[6-9]\d{8}$/;
const inputPattern = /^[6-9]\d{0,8}$/;

function isValidPhoneNumber(value: string) {
  return !value || validPattern.test(value);
}

function canBePhoneNumber(value: string) {
  return !value || inputPattern.test(value);
}
