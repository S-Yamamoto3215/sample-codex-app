import { describe, it, expect } from 'vitest';
import { greet } from '../src/greeter';

describe('greet', () => {
  it('greets the provided name', () => {
    expect(greet('Alice')).toBe('Hello, Alice');
  });

  it('defaults to Guest when name is null, undefined, or blank', () => {
    expect(greet(null)).toBe('Hello, Guest');
    expect(greet(undefined)).toBe('Hello, Guest');
    expect(greet('')).toBe('Hello, Guest');
    expect(greet('   ')).toBe('Hello, Guest');
  });

  it('trims the provided name', () => {
    expect(greet('  Bob  ')).toBe('Hello, Bob');
  });
});
