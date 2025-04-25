import { useFormContext, useWatch } from "react-hook-form";
import { INPUT_GROUP } from "../../../constants";
import { FormPrimitiveType } from "../../../model";
import PrimitiveView from "./PrimitiveView";

const ListPrimitive = () => {
  const { control } = useFormContext<FormPrimitiveType>();
  const group = useWatch({
    name: INPUT_GROUP,
    control,
  });

  return Object.values(group).map((item, index) => (
    <PrimitiveView {...item} key={index} index={index} />
  ));
};

export default ListPrimitive;
