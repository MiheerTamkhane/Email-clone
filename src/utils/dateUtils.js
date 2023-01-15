export function getDesireTime(time) {
  let hr = parseInt(time.split(":")[0]);
  let amOrpm = hr < 12 ? "AM" : "PM"; // Set AM/PM
  hr = hr % 12 || "00"; // Adjust hours
  return `${hr}:${time.split(":")[1]} ${amOrpm}`;
}
export function convetISOToDesiredString(dateTime) {
  const arr = dateTime.split("T");
  const date = arr[0].split("-").reverse().join("/");
  const time = getDesireTime(arr[1]);
  return date + " " + time;
}
