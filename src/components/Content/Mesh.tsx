import { useFormContext, useWatch } from "react-hook-form";
import {
  INPUT_FOCUS_ELEMENT,
  OPTIONS_TYPE_BOX_GEOMETRY,
} from "../../constants";
import * as THREE from "three";
import { FormPrimitiveType, GroupFieldType } from "../../model";

const Mesh = ({
  width,
  height,
  length,
  position,
  color,
  fieldName,
  type,
}: GroupFieldType) => {
  const { setValue } = useFormContext<FormPrimitiveType>();
  const handleClick = () => {
    setValue(INPUT_FOCUS_ELEMENT, fieldName);
  };

  const focusField = useWatch({ name: INPUT_FOCUS_ELEMENT });

  const coneGeometry =
    type === OPTIONS_TYPE_BOX_GEOMETRY
      ? new THREE.BoxGeometry(width, height, length)
      : new THREE.ConeGeometry(width, height);

  const vector = new THREE.Vector3(position[0], position[1], position[3]);
  return (
    <>
      <mesh position={vector} onClick={handleClick} geometry={coneGeometry}>
        <meshBasicMaterial color={focusField === fieldName ? "green" : color} />
      </mesh>
    </>
  );
};

export default Mesh;
