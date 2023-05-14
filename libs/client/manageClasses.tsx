import { HTMLAttributes } from "react";

// TODO: This type should be the same as the Tailwind Suggestions.
export type TBasicClassName = string;
export type TExtraTypes = { extraClassName?: string };

interface IBasicClassName<T = {}, U = {}> {
  className: TBasicClassName;
  returnFunction: (opts: T & TExtraTypes) => TBasicClassName;
  jsxFunction: (opts: T & U & TExtraTypes) => JSX.Element;
}

export default IBasicClassName;
