import { Checkbox, CheckboxProps } from "antd";
import { useController } from "react-hook-form";
import Container, { ContainerProps } from "./Container";

interface Props extends CheckboxProps, Omit<ContainerProps, "children"> {
  name: string;
}

const CheckboxChangeColor = ({ name, label }: Props) => {
  const { field } = useController({ name });

  return (
    <Container label={label}>
      <Checkbox {...field} />
    </Container>
  );
};

export default CheckboxChangeColor;
