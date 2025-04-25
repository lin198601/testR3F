import { useFormContext, useWatch } from "react-hook-form";
import { INPUT_FOCUS_ELEMENT } from "../../constants";
import * as THREE from "three";
import { ElementMeshType, FormPrimitiveType } from "../../model";

const Mesh = ({ geometry, position, color, fieldName }: ElementMeshType) => {
  const { setValue } = useFormContext<FormPrimitiveType>();
  const handleClick = () => {
    setValue(INPUT_FOCUS_ELEMENT, fieldName);
  };
  console.log("geometry", geometry);

  const focusField = useWatch({ name: INPUT_FOCUS_ELEMENT });
  const vector = new THREE.Vector3(position[0], position[1], position[3]);

  return (
    <>
      <mesh
        position={vector}
        onClick={handleClick}
        geometry={geometry}
        scale={focusField === fieldName ? 3 : 1}
      >
        <meshBasicMaterial
          color={focusField === fieldName ? "hotpink" : color}
        />
      </mesh>
    </>
  );
};

export default Mesh;
