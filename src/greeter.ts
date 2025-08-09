export function greet(name: string | null): string {
  if (name === null || name === undefined || name === "") {
    return "Hello, Guest";
  } else {
    return "Hello, " + name;
  }
}
