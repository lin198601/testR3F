import {
  OPTIONS_TYPE_BOX_GEOMETRY,
  OPTIONS_TYPE_CONE_GEOMETRY,
} from "../constants";

export type GroupKeyType = "width" | "height" | "length" | "count";

type GroupField = {
  type: typeof OPTIONS_TYPE_BOX_GEOMETRY | typeof OPTIONS_TYPE_CONE_GEOMETRY;
  position: number[];
  fieldName: string;
  color: string;
  isMulticoloured: boolean;
};

export type GroupFieldType = Record<GroupKeyType, number> & GroupField;

export interface FormPrimitiveType {
  INPUT_GROUP: Record<string, GroupFieldType>;
  INPUT_FOCUS_ELEMENT: string | null;
}
