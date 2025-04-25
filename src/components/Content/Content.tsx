import { useThree } from "@react-three/fiber";
import { useFormContext, useWatch } from "react-hook-form";
import { INPUT_GROUP } from "../../constants";
import Mesh from "./Mesh";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { extend } from "@react-three/fiber";
import { FormPrimitiveType } from "../../model";

extend({ OrbitControls });

const Content = () => {
  const { camera, gl } = useThree();
  const { control } = useFormContext<FormPrimitiveType>();
  const group = useWatch({
    name: INPUT_GROUP,
    control,
  });
  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      {Object.values(group).map((item, index) => {
        return <Mesh {...item} key={index} />;
      })}
    </>
  );
};

export default Content;
