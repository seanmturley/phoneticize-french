import bTransliteration from "./b-transliteration.ts";
import cTransliteration from "./c-transliteration.ts";
import dTransliteration from "./d-transliteration.ts";
import fTransliteration from "./f-transliteration.ts";
import gTransliteration from "./g-transliteration.ts";
import hTransliteration from "./h-transliteration.ts";
import jTransliteration from "./j-transliteration.ts";
import kTransliteration from "./k-transliteration.ts";
import lTransliteration from "./l-transliteration.ts";
import mTransliteration from "./m-transliteration.ts";
import nTransliteration from "./n-transliteration.ts";
import pTransliteration from "./p-transliteration.ts";
import qTransliteration from "./q-transliteration.ts";
import rTransliteration from "./r-transliteration.ts";
import sTransliteration from "./s-transliteration.ts";
import tTransliteration from "./t-transliteration.ts";
import vTransliteration from "./v-transliteration.ts";
import wTransliteration from "./w-transliteration.ts";
import xTransliteration from "./x-transliteration.ts";

export default function transliterateWord(word: string) {
  let latin = word;
  let precedingLatin = "";
  let transliteration = "";

  while (latin.length) {
    let newPrecedingLatin = "";
    let newTransliteration = "";
    const firstLetter = latin.substring(0, 1);

    switch (firstLetter) {
      case "b":
        [latin, newPrecedingLatin, newTransliteration] =
          bTransliteration(latin);
        break;

      case "c":
        [latin, precedingLatin, newTransliteration] = cTransliteration(
          latin,
          precedingLatin
        );
        break;

      case "d":
        [latin, newTransliteration] = dTransliteration(latin);
        break;

      case "f":
        [latin, newTransliteration] = fTransliteration(latin);
        break;

      case "g":
        [latin, newTransliteration] = gTransliteration(latin);
        break;

      case "h":
        [latin, newTransliteration] = hTransliteration(latin);
        break;

      case "j":
        [latin, newTransliteration] = jTransliteration(latin);
        break;

      case "k":
        [latin, newTransliteration] = kTransliteration(latin);
        break;

      case "l":
        [latin, newTransliteration] = lTransliteration(latin);
        break;

      case "m":
        [latin, newTransliteration] = mTransliteration(latin);
        break;

      case "n":
        [latin, newTransliteration] = nTransliteration(latin);
        break;

      case "p":
        [latin, newTransliteration] = pTransliteration(latin);
        break;

      case "q":
        [latin, newTransliteration] = qTransliteration(latin);
        break;

      case "r":
        [latin, newTransliteration] = rTransliteration(latin);
        break;

      case "s":
        [latin, newTransliteration] = sTransliteration(latin);
        break;

      case "t":
        [latin, newTransliteration] = tTransliteration(latin);
        break;

      case "v":
        [latin, newTransliteration] = vTransliteration(latin);
        break;

      case "w":
        [latin, newTransliteration] = wTransliteration(latin);
        break;

      case "x":
        [latin, newTransliteration] = xTransliteration(latin);
        break;

      default:
        newTransliteration += latin.substring(0, 1);
        latin = latin.substring(1);
    }

    precedingLatin += newPrecedingLatin;
    transliteration += newTransliteration;
  }

  return transliteration;
}
