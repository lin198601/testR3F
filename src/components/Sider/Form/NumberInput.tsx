import { Flex, InputNumber, InputProps } from "antd";
import { CSSProperties } from "react";
import { useController } from "react-hook-form";

interface Props extends InputProps {
  name: string;
  label: string;
}

const labelStyle: CSSProperties = {
  flex: 1,
};

const NumberInput = ({ name, label }: Props) => {
  const { field } = useController({ name, rules: { required: true } });

  return (
    <Flex gap={16}>
      <div style={labelStyle}>{label}</div>
      <InputNumber {...field} />
    </Flex>
  );
};

export default NumberInput;
