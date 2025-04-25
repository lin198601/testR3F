import { Flex, Select, SelectProps } from "antd";
import { CSSProperties, ReactNode } from "react";
import { useController } from "react-hook-form";
import {
  OPTIONS_TYPE_BOX_GEOMETRY,
  OPTIONS_TYPE_CONE_GEOMETRY,
} from "../../../constants";
import { ElementMeshType } from "../../../model";

interface Props extends Omit<SelectProps, "children"> {
  name: string;
  label: string;
  children: ({ key }: { key: ElementMeshType["type"] }) => ReactNode;
}

const options = [
  { value: OPTIONS_TYPE_BOX_GEOMETRY, label: "Box" },
  { value: OPTIONS_TYPE_CONE_GEOMETRY, label: "Cone" },
];

const boxStyle: CSSProperties = {
  flex: "50%",
};

const SelectGeometry = ({ name, label, children, ...rest }: Props) => {
  const { field } = useController({ name, rules: { required: true } });
  return (
    <>
      <Flex gap={16}>
        <div style={boxStyle}>{label}</div>
        <Select options={options} {...field} {...rest} style={boxStyle} />
      </Flex>
      {children({ key: field.value })}
    </>
  );
};

export default SelectGeometry;
