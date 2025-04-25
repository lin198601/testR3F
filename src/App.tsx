import { Layout } from "antd";
import "./App.css";
import Content from "./components/Content/Content";
import SiderAction from "./components/Sider/SiderAction";
import { FormProvider, useForm } from "react-hook-form";
import { INPUT_FOCUS_ELEMENT, INPUT_GROUP } from "./constants";
import { Canvas } from "@react-three/fiber";
import { FormPrimitiveType } from "./model";

const layoutStyle = {
  height: "100vh",
};

function App() {
  const methods = useForm<FormPrimitiveType>({
    defaultValues: {
      [INPUT_GROUP]: {},
      [INPUT_FOCUS_ELEMENT]: null,
    },
  });

  return (
    <FormProvider {...methods}>
      <Layout style={layoutStyle}>
        <SiderAction />
        <Canvas camera={{ position: [0, 0, 30] }}>
          <Content />
        </Canvas>
      </Layout>
    </FormProvider>
  );
}

export default App;
