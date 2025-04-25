import { useFormContext } from "react-hook-form";
import {
  INPUT_FOCUS_ELEMENT,
  OPTIONS_TYPE_BOX_GEOMETRY,
} from "../../constants";
import * as THREE from "three";
import { FormPrimitiveType, GroupFieldType } from "../../model";
import MeshBasicMaterial from "./MeshBasicMaterial";

const Mesh = ({
  width,
  height,
  length,
  position,
  color,
  fieldName,
  type,
  isMulticoloured,
}: GroupFieldType) => {
  const { setValue } = useFormContext<FormPrimitiveType>();
  const handleClick = () => {
    setValue(INPUT_FOCUS_ELEMENT, fieldName);
  };

  const coneGeometry =
    type === OPTIONS_TYPE_BOX_GEOMETRY
      ? new THREE.BoxGeometry(width, height, length)
      : new THREE.ConeGeometry(width, height);

  const vector = new THREE.Vector3(position[0], position[1], position[3]);

  return (
    <>
      <mesh position={vector} onClick={handleClick} geometry={coneGeometry}>
        {Array.from(Array(6)).map((_, index) => {
          return (
            <MeshBasicMaterial
              color={color}
              isMulticoloured={isMulticoloured}
              fieldName={fieldName}
              count={index}
              key={index}
            />
          );
        })}
      </mesh>
    </>
  );
};

export default Mesh;
