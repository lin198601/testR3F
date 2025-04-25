import { Button, Flex, Layout, Popover } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { CSSProperties, useState } from "react";
import Form from "./Form/Form";
import ListPrimitive from "./ListPrimitive/ListPrimitive";
import { useFormContext } from "react-hook-form";
import { INPUT_GROUP } from "../../constants";

const contentStyle = {
  overflow: "auto",
};

const siderLayoutStyle: CSSProperties = {
  height: "inherit",
  borderRight: "1px solid grey",
};
const footerStyle: CSSProperties = {
  padding: "15px",
  marginBottom: "auto",
};

const SiderAction = () => {
  const [open, setOpen] = useState(false);
  const { setValue } = useFormContext();
  const handleClear = () => {
    setValue(INPUT_GROUP, {});
  };

  const handleChange = () => {
    setOpen((state) => !state);
  };
  return (
    <Sider width="auto">
      <Layout style={siderLayoutStyle}>
        <Content style={contentStyle}>
          <ListPrimitive />
        </Content>
        <Footer style={footerStyle}>
          <Flex gap="15px">
            <Button onClick={handleClear}>Clear scene</Button>
            <Popover
              trigger="click"
              placement="rightTop"
              title="Add primitives group"
              content={<Form onOpenChange={handleChange} />}
              arrow={false}
              open={open}
              onOpenChange={handleChange}
            >
              <Button>Add group</Button>
            </Popover>
          </Flex>
        </Footer>
      </Layout>
    </Sider>
  );
};

export default SiderAction;
