import { Flex } from "antd";
import { CSSProperties } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { ElementMeshType, FormPrimitiveType } from "../../../model";
import { INPUT_FOCUS_ELEMENT } from "../../../constants";

interface Props {
  index: number;
  fieldName: string;
  type: ElementMeshType["type"];
  position: ElementMeshType["position"];
  color: string;
}

const infoStyle: CSSProperties = {
  flex: 1,
  textAlign: "left",
};

const flexStyle = ({ isFocus }: { isFocus: boolean }) => ({
  borderBottom: "1px solid grey",
  padding: "10px 5px",
  backgroundColor: isFocus ? "hotpink" : "transparent",
});
const colorBoxStyle = ({ color }: { color: string }) => ({
  width: 25,
  height: 25,
  backgroundColor: color,
  border: "1px solid grey",
});

const PrimitiveView = ({ fieldName, type, position, color, index }: Props) => {
  const { setValue } = useFormContext<FormPrimitiveType>();

  const handleClick = (fieldName: string) => () => {
    setValue(INPUT_FOCUS_ELEMENT, fieldName);
  };

  const focusField = useWatch({ name: INPUT_FOCUS_ELEMENT });
  const isFocus = focusField === fieldName;
  return (
    <Flex
      key={fieldName}
      style={flexStyle({ isFocus })}
      onClick={handleClick(fieldName)}
    >
      <div style={infoStyle}>
        <div>
          {type} {index + 1}
        </div>
        <span>position: ({position.join(", ")})</span>
      </div>
      <div style={colorBoxStyle({ color })}></div>
    </Flex>
  );
};

export default PrimitiveView;
