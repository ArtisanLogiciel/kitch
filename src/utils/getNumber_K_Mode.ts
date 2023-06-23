
export function getNumber_K_Mode(number: number) {


  const stringifiedNumber = number?.toString();
  const splittedNumber = stringifiedNumber.split("");
  const length = splittedNumber.length;
  const FiltersplittedNumber = splittedNumber.map(elmnt => parseFloat(elmnt))

  if (length === 4){             
    const splittedNumber = FiltersplittedNumber.filter((exemple, index) =>   index < 2)
    const beforeDot = splittedNumber[0]
    const afterDot = splittedNumber[1];
    return `${beforeDot}.${afterDot}k`
}
else{
    const NLength = length - 3     
    const splittedNumber = FiltersplittedNumber.filter((exemple, index) => index < NLength)
    const valeur = splittedNumber.toString().replaceAll(',', '')
    return `${valeur}k`
}
}