export function getImageSized(view: string, width: string = "630", height: string = "473") {
  const un = view.replace("{width}", `${width}`);
  const deux = un.replace("{height}", `${height}`);
  return deux;
}