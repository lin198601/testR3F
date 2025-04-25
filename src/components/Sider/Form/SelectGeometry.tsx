import { Flex, Select, SelectProps } from "antd";
import { CSSProperties } from "react";
import { useController } from "react-hook-form";
import {
  OPTIONS_TYPE_BOX_GEOMETRY,
  OPTIONS_TYPE_CONE_GEOMETRY,
} from "../../../constants";

interface Props extends SelectProps {
  name: string;
  label: string;
}

const options = [
  { value: OPTIONS_TYPE_BOX_GEOMETRY, label: "Box" },
  { value: OPTIONS_TYPE_CONE_GEOMETRY, label: "Cone" },
];

const labelStyle: CSSProperties = {
  flex: "80px",
};

const SelectGeometry = ({ name, label, ...rest }: Props) => {
  const { field } = useController({ name, rules: { required: true } });
  return (
    <Flex gap={16}>
      <div style={labelStyle}>{label}</div>
      <Select options={options} {...field} {...rest} />
    </Flex>
  );
};

export default SelectGeometry;
