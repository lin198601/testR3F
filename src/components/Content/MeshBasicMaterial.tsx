import { useWatch } from "react-hook-form";
import { INPUT_FOCUS_ELEMENT } from "../../constants";
import { GroupFieldType } from "../../model";
import { getRandomColor } from "../../utils";
import { useMemo } from "react";

interface Props
  extends Pick<GroupFieldType, "fieldName" | "color" | "isMulticoloured"> {
  count: number;
}

const MeshBasicMaterial = ({
  count,
  isMulticoloured,
  fieldName,
  color,
}: Props) => {
  const focusField = useWatch({ name: INPUT_FOCUS_ELEMENT });
  const randomColor = useMemo(() => getRandomColor(), []);

  return (
    <meshBasicMaterial
      attach={`material-${count}`}
      color={
        focusField === fieldName
          ? "green"
          : !isMulticoloured
          ? color
          : randomColor
      }
    />
  );
};

export default MeshBasicMaterial;
