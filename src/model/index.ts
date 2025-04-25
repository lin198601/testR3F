import { BufferGeometry } from "three";
import {
  OPTIONS_TYPE_BOX_GEOMETRY,
  OPTIONS_TYPE_CONE_GEOMETRY,
} from "../constants";

type BoxGeometryType = Record<"width" | "height" | "length", number> & {
  type: typeof OPTIONS_TYPE_BOX_GEOMETRY;
};
type ConeGeometryType = Record<
  "radius" | "height" | "radialSegments",
  number
> & {
  type: typeof OPTIONS_TYPE_CONE_GEOMETRY;
};

export interface GroupFieldType {
  count: number;
  geometryParam: BoxGeometryType | ConeGeometryType;
}
export interface ElementMeshType {
  type: typeof OPTIONS_TYPE_BOX_GEOMETRY | typeof OPTIONS_TYPE_CONE_GEOMETRY;
  position: number[];
  fieldName: string;
  color: string;
  geometry: BufferGeometry;
}
export interface FormPrimitiveType {
  inputGroup: Record<string, ElementMeshType>;
  inputFocus: string | null;
}
