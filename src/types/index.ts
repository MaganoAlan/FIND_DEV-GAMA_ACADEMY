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
  name: string;
  description: string;
  category: ICategory;
  stack: IStack;
  state: IState;
  stars?: number;
}
