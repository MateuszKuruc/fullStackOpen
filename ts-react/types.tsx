export interface HeaderProps {
  name: string;
}

export interface ContentProps {
  name: string;
  exerciseCount: number;
}

interface CoursePartBasic {
  name: string;
  exerciseCount: number;
  description: string;
  kind: "basic";
}

interface CoursePartGroup {
  name: string;
  exerciseCount: number;
  groupProjectCount: number;
  kind: "group";
}

interface CoursePartBackground {
  name: string;
  exerciseCount: number;
  description: string;
  backgroundMaterial: string;
  kind: "background";
}

export type CoursePart =
  | CoursePartBasic
  | CoursePartGroup
  | CoursePartBackground;
