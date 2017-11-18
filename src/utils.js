import * as assert from 'assert';

export function partition<T>(iter: Iterable<T>, predicate: T => boolean): [T[], T[]] {
    const left = [];
    const right = [];

    for (const item of iter) {
        (predicate(item) ? left : right).push(item);
    }

    return [left, right];
}

// TODO: avoid it?
export function isNode(it: any): boolean %checks {
    return it && typeof it === 'object' && it.type;
}

// I so much dream about the user guards...
// @see flow#112.
export const invariant = assert.ok;
