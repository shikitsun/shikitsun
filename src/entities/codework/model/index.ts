export interface ICodeworkNote {
  color: string;
  description: string;
}

export interface ICodeworkItem {
  path: string;
  code: string;
  description: string;
  language: TKnownLanguages;
  lines: number;
  notes: ICodeworkNote[];
}

type TKnownLanguages = "ts";
export const LanguageCodeMap = Object.freeze({
  ts: "typescript",
});
