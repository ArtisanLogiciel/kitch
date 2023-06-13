export function getNumber_K_Mode(number: number) {

  if (number >= 1000) {
  const stringifiedNumber = number?.toString();
  const splittedNumber = stringifiedNumber.split("");
  const beforeDot = splittedNumber[0]
  const afterDot = splittedNumber[1];

    return afterDot === "0" ? `${beforeDot}k` : `${beforeDot}.${afterDot}k`;
  }

  return `${number}k`;
}