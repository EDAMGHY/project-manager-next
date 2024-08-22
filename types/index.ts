import { Dispatch, HTMLAttributes, ReactNode, SetStateAction } from "react";

export interface IHeading extends HTMLAttributes<HTMLHeadingElement> {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  as?: 1 | 2 | 3 | 4 | 5 | 6;
  children: ReactNode;
  isBold?: boolean;
}

type ISelectItem = {
  value: string;
  label: string;
};
export type ISortState = {
  field: string;
  order: "asc" | "desc";
};

export interface ISharedFilters {
  selectItems: ISelectItem[];
  onSearchClick: (val: string) => void;
  setSort: (sort: ISortState) => void;
  sort: ISortState;
}
type IITColumn = {
  label: string;
  field: string;
  className?: string;
};

export interface IInternalTable<T = any> {
  caption?: string;
  columns: IITColumn[];
  data: T[];
  renderDataItem: (item: T, index: number, columns: IITColumn[]) => ReactNode;
  className?: string;
}

type GenericRolePermission = {
  name: string;
  description: string;
};

// Roles
export type IRole = GenericRolePermission;
//Permission
export type IPermission = GenericRolePermission;

// Users
export interface IUser {
  name: string;
  username: string;
  email: string;
}
// Projects
export interface IProject {
  name: string;
  description: string;
  status: string;
  startDate: string;
  endDate: string;
  budget: number;
  progress: number;
}

export interface ISidebar {
  minimizeSidebar: boolean;
  setMinimizeSidebar: Dispatch<SetStateAction<boolean>>;
}
