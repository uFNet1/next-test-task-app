export interface CardApiData {
  createdAt: string;
  title: string;
  description: string;
  status: string;
  id: string;
}
export interface CardApiDataConverted {
  createdAt: Date;
  title: string;
  description: string;
  status: "to-do" | "in-progress" | "review" | "completed";
  id: number;
}
export interface CardDisplayData {
  createdAt: Date;
  title: string;
  description: string;
}
