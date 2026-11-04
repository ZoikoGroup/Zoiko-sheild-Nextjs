import { describe, it, expect } from 'vitest';
import { stopSpeaking } from '../shared/speech';

describe('Voice input & speech utilities', () => {
  it('exposes speech functions safely', () => {
    expect(typeof stopSpeaking).toBe('function');
    expect(() => stopSpeaking()).not.toThrow();
  });
});

