import {readFileSync, writeFileSync} from 'deno';

export const readStringSync = (filename: string): string => {
    const decoder = new TextDecoder('utf-8');
    const bytes = readFileSync(filename);
    return decoder.decode(bytes);
};

export const writeStringSync = (filename: string, string: string) => {
    const encoder = new TextEncoder();
    const bytes = encoder.encode(string);
    return writeFileSync(filename, bytes);
}