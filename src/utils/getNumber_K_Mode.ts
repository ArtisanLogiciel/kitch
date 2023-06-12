export function getNumber_K_Mode(nombre: number) {
  const kol = nombre?.toString();
  const tab = kol.split("");
  const longueur = tab.length;
  const reconvertir = tab.map((elmnt) => parseFloat(elmnt));
  if (longueur === 4) {
    const convertir = reconvertir.filter((exemple, index) => index < 2);
    const un = convertir[0];
    const deux = convertir[1];
    return `${un}.${deux}k`;
  } else {
    const rien = longueur - 3;
    const convertir = reconvertir.filter((exemple, index) => index < rien);
    const valeur = convertir.toString().replaceAll(",", "");
    return `${valeur}k`;
  }
}