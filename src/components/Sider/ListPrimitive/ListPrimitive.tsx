import { useFormContext, useWatch } from "react-hook-form";
import { INPUT_FOCUS_ELEMENT, INPUT_GROUP } from "../../../constants";
import { Flex } from "antd";
import { CSSProperties } from "react";
import { FormPrimitiveType } from "../../../model";

const infoStyle: CSSProperties = {
  flex: 1,
  textAlign: "left",
};

const flexStyle: CSSProperties = {
  borderBottom: "1px solid grey",
  padding: "10px 5px",
};
const colorBoxStyle = ({ color }: { color: string }) => ({
  width: 25,
  height: 25,
  backgroundColor: color,
  border: "1px solid grey",
});

const ListPrimitive = () => {
  const { setValue, control } = useFormContext<FormPrimitiveType>();
  const group = useWatch({
    name: INPUT_GROUP,
    control,
  });

  const handleClick = (fieldName: string) => () => {
    setValue(INPUT_FOCUS_ELEMENT, fieldName);
  };

  return Object.values(group).map((item, index) => {
    const { type, position, color, fieldName } = item;
    return (
      <Flex key={fieldName} style={flexStyle} onClick={handleClick(fieldName)}>
        <div style={infoStyle}>
          <div>
            {type} {index + 1}
          </div>
          <span>position: ({position.join(", ")})</span>
        </div>
        <div style={colorBoxStyle({ color })}></div>
      </Flex>
    );
  });
};

export default ListPrimitive;
