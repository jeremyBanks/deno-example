import {readStringSync, writeStringSync} from './fs.ts';
import {exit} from 'deno';

const main = async (): Promise<number | void> => {
    const original = readStringSync('main.ts');
    let transformed = original;
    transformed = transformed.replace(/\s+/g, '');
    transformed = transformed.replace(/(\w)\w+/g, '$1');
    transformed = rot(transformed, 1).slice(0, 64);
    
    writeStringSync('./output.txt', transformed);
    console.log(transformed);
};

const rot = (original: string, n: number = 1): string => {
    const character_set = new Set(original);
    const characters = Array.from(character_set);
    const character_map = new Map();
    for (const [i, character] of characters.entries()) {
        const target_character = characters[(i + n) % characters.length];
        character_map.set(character, target_character);
    }

    const result_array = new Array(original.length);
    for (let i = 0; i < original.length; i++) {
        result_array[i] = character_map.get(original[i]);
    }

    return result_array.join('')
};

main().then(exit);
