export function getDateInRFC3339Format({ days }: { days: string }) {
  const currentDate = new Date();

    const daysBefore = new Date(currentDate.getTime() - Number(days) * 24 * 60 * 60 * 1000);

  const year = daysBefore.getUTCFullYear();
  const month = String(daysBefore.getUTCMonth() + 1).padStart(2, "0");
  const day = String(daysBefore.getUTCDate()).padStart(2, "0");
  const hours = String(daysBefore.getUTCHours()).padStart(2, "0");
  const minutes = String(daysBefore.getUTCMinutes()).padStart(2, "0");
  const seconds = String(daysBefore.getUTCSeconds()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
}