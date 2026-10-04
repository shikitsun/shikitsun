import short from "@/data/hero/short_about.json";
import code from "@/data/hero/code.json";

export async function getShortAbout() {
  return short;
}

export async function getCodeAbout() {
  return code;
}
