import data from "@/data/codework.json";
import { ICodeworkItem } from "../model";

export async function getCodework(): Promise<ICodeworkItem[]> {
  return data.examples as ICodeworkItem[];
}
