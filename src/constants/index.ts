export const INPUT_GROUP = "inputGroup";
export const INPUT_FOCUS_ELEMENT = "inputFocus";
export const OPTIONS_TYPE_BOX_GEOMETRY = "boxGeometry";
export const OPTIONS_TYPE_CONE_GEOMETRY = "coneGeometry";

export const BOX_ELEMENT = {
  [OPTIONS_TYPE_BOX_GEOMETRY]: [
    {
      name: "geometryParam.length",
      label: "Length",
      defaultValue: 1,
    },
    {
      name: "geometryParam.width",
      label: "Width",
      defaultValue: 1,
    },
    {
      name: "geometryParam.height",
      label: "Height",
      defaultValue: 1,
    },
  ],
  [OPTIONS_TYPE_CONE_GEOMETRY]: [
    {
      name: "geometryParam.radius",
      label: "Radius",
      defaultValue: 6,
    },
    {
      name: "geometryParam.height",
      label: "Height",
      defaultValue: 6,
    },
    {
      name: "geometryParam.radialSegments",
      label: "Radial Segments",
      defaultValue: 3,
    },
  ],
};
