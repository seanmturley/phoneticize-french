import {
  backVowel,
  consonant,
  frontVowel
} from "./letter-group-definitions.ts";
import type { LetterTransliteration } from "./transliteration-types.ts";

export default function gTransliteration(
  word: string,
  index: number
): LetterTransliteration {
  const remainingWord = word.substring(index);

  let newTransliteration = "";
  let numTransliteratedCharacters = 1;

  if (/g$/i.test(remainingWord)) {
    // final g should be [g] in liaison, but otherwise silent
    newTransliteration = "(g)";
  } else if (/^gt/i.test(remainingWord)) {
    // gt should be silent
    newTransliteration = "";
    numTransliteratedCharacters = 2;
  } else if (/^gn/i.test(remainingWord)) {
    // gn should be [ɲ]
    newTransliteration = "ɲ";
    numTransliteratedCharacters = 2;
  } else if (
    new RegExp(String.raw`^gg[${frontVowel}]`, "i").test(remainingWord)
  ) {
    // before a front vowel gg should be [gʒ]
    newTransliteration = "gʒ";
    numTransliteratedCharacters = 2;
  } else if (
    new RegExp(String.raw`^gu[${frontVowel}]`, "i").test(remainingWord)
  ) {
    // before a front vowel gu should be [g]
    newTransliteration = "g";
    numTransliteratedCharacters = 2;
  } else if (
    new RegExp(String.raw`^gg[${backVowel}|${consonant}]`, "i").test(
      remainingWord
    )
  ) {
    // NOT before a front vowel gg should be [g]
    newTransliteration = "g";
    numTransliteratedCharacters = 2;
  } else if (
    new RegExp(String.raw`^ge[${backVowel}|${consonant}]`, "i").test(
      remainingWord
    )
  ) {
    // NOT before a front vowel ge should be [ʒ]
    newTransliteration = "ʒ";
    numTransliteratedCharacters = 2;
  } else if (
    new RegExp(String.raw`^g[${frontVowel}]`, "i").test(remainingWord)
  ) {
    // before a front vowel g should be [ʒ]
    newTransliteration = "ʒ";
    numTransliteratedCharacters = 1;
  } else {
    // NOT before a front vowel g should be [g]
    newTransliteration = "g";
  }

  const newIndex = index + numTransliteratedCharacters;

  return [newTransliteration, newIndex];
}
