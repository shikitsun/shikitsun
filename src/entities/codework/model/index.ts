export interface ICodeworkNote {
  color: string;
  description: string;
}

export interface ICodeworkItem {
  path: string;
  code: string;
  description: string;
  language: TKnownLanguages;
  notes: ICodeworkNote[];
}

type TKnownLanguages = "ts";
export const LanguageCodeMap = Object.freeze({
  ts: "typescript",
});

export function getLinesCount(code: string) {
  return code.split("\n").length;
}
