// Guard validation tests – ensure unsafe output is rejected or limited
import { describe, it, expect } from 'vitest';
import { validateAnswer } from '../ai/guard';
import type { SourceMeta } from '../content/types';

// Minimal fake source used for citation validation
const fakeSource: SourceMeta = {
  id: 'src1',
  kind: 'HELP_ARTICLE',
  title: 'Test article',
  summary: 'A short summary',
  body: 'Full body text',
  claim_type: 'general',
  url: 'https://example.com/article',
  // other required fields omitted for brevity – tests only need id and claim_type
} as any;

function makeOutput(blocks: any, citations: string[]) {
  return JSON.stringify({ blocks, citations });
}

describe('validateAnswer guard', () => {
  it('rejects malformed JSON', () => {
    expect(validateAnswer('not a json', [fakeSource])).toBeNull();
  });

  it('rejects when no citations match retrieved sources', () => {
    const out = makeOutput([{ type: 'paragraph', text: 'Hello' }], ['unknown-id']);
    expect(validateAnswer(out, [fakeSource])).toBeNull();
  });

  it('limits when secret detected in a block while another block is clean', () => {
    const out = makeOutput(
      [
        { type: 'paragraph', text: 'Our product helps detect threats.' },
        { type: 'paragraph', text: 'My password is abc123' },
      ],
      ['src1']
    );
    const result = validateAnswer(out, [fakeSource]);
    expect(result?.limited).toBe(true);
    expect(result?.blocks.length).toBe(1);
  });

  it('limits when restricted claim without approved source while another block is clean', () => {
    const out = makeOutput(
      [
        { type: 'paragraph', text: 'Our product helps detect threats.' },
        { type: 'paragraph', text: 'We are ISO certified' },
      ],
      ['src1']
    );
    const result = validateAnswer(out, [fakeSource]);
    expect(result?.limited).toBe(true);
    expect(result?.blocks.length).toBe(1);
  });

  it('passes valid safe answer', () => {
    const out = makeOutput(
      [{ type: 'paragraph', text: 'Our product helps detect threats.' }],
      ['src1']
    );
    const result = validateAnswer(out, [fakeSource]);
    expect(result).not.toBeNull();
    expect(result?.limited).toBe(false);
  });
});

