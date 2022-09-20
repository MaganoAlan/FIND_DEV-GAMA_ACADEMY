export interface ICategory {
  id: number;
  name: string;
}

export interface IStack {
  id: number;
  label: string;
}

export interface IState {
  id: number;
  value: string;
}

export interface IDev {
  id: number;
  photo: string;
  name: string;
  category: number;
  stack: number;
  state: number;
  description: string;
}

export interface IProfile {
  id: number;
  photo: string;
  fullName: string;
  name: string;
  surname: string;
  email: string;
  age: number;
  experience: string;
  description: string;
  linkedinUrl: string;
  gitHubUrl: string;
  category: ICategory;
  stack: IStack;
  state: IState;
  tech?: string;
  stars?: number;
  isFavorite?: boolean;
}
