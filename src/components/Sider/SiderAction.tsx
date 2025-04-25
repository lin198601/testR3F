import { Button, Flex, Layout, Popover } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { CSSProperties } from "react";
import Form from "./Form/Form";
import ListPrimitive from "./ListPrimitive/ListPrimitive";

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
  return (
    <Sider width="auto">
      <Layout style={siderLayoutStyle}>
        <Content style={contentStyle}>
          <ListPrimitive />
        </Content>
        <Footer style={footerStyle}>
          <Flex gap="15px">
            <Button>Clear scene</Button>
            <Popover
              trigger="click"
              placement="rightTop"
              title="Add primitives group"
              content={<Form />}
              arrow={false}
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
