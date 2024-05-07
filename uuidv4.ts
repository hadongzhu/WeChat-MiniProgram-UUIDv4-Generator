import rng from './rng.js';
import { unsafeStringify } from './stringify.js';

async function uuidv4(random: undefined | Uint8Array = undefined,
    buf: undefined | Uint8Array = undefined,
    offset: number = 0): Promise<string | Uint8Array> {

    const rnds = random || await rng();

    // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = (rnds[6] & 0x0f) | 0x40;
    rnds[8] = (rnds[8] & 0x3f) | 0x80;

    // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;

        for (let i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
        }

        return buf;
    }

    return unsafeStringify(rnds);
}

export default uuidv4;
