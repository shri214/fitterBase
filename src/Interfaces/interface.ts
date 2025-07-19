export interface TriangleInput {
  sideA: number;
  sideB: number;
  sideC: number;
  angleAlpha: number;
  angleBeta: number;
}
export interface ToolItem {
  slug: string;
  name: string;
  icon?: string; 
}

export interface ToolGridProps {
  tools: ToolItem[];
  onToolClick: (slug: string) => void;
}

export type FormData = {
  type: "standard" | "long";
  dimension: "2d" | "3d";
  elbowSize: number;
  unit: string;
  elbowDegree: number;
  cutDegree?:number;
  center?:number;
  r1?:number;
  r2?:number;
  r3?:number;
};

export interface ElbowState {
  data: FormData;
}
