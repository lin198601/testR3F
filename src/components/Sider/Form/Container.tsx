import { Flex } from "antd";
import { CSSProperties, ReactNode } from "react";

const labelStyle: CSSProperties = {
  flex: "80px",
};

export interface ContainerProps {
  label: string;
  children: ReactNode;
}

const Container = ({ label, children }: ContainerProps) => {
  return (
    <Flex gap={16}>
      <div style={labelStyle}>{label}</div>
      {children}
    </Flex>
  );
};

export default Container;
