import data from "@/data/stack.json";

export interface IStackType {
  name: string;
  color: string;
}

export interface IStackSkill {
  name: string;
}

export interface IStackSkillCategory {
  type: string;
  skills: IStackSkill[];
}

export async function getStackTypes(): Promise<IStackType[]> {
  return data.types;
}

export async function getStackSkills(): Promise<IStackSkillCategory[]> {
  return data.stack;
}
