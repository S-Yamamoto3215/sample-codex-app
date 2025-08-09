export function greet(name?: string | null): string {
  const trimmedName = name?.trim();
  const finalName = trimmedName ? trimmedName : "Guest";
  return `Hello, ${finalName}`;
}
