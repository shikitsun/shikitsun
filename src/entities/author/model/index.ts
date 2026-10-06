export function authorNameToInitials(name: string) {
  return name
    .split(" ")
    .map((p) => p.charAt(0))
    .join("");
}
