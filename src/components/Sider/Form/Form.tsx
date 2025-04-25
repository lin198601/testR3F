import { Button, Flex } from "antd";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import NumberInput from "./NumberInput";
import {
  BOX_ELEMENT,
  INPUT_GROUP,
  OPTIONS_TYPE_BOX_GEOMETRY,
} from "../../../constants";
import SelectGeometry from "./SelectGeometry";
import { GroupFieldType } from "../../../model";
import { getRandomColor, uuid } from "../../../utils";
import * as THREE from "three";

interface Props {
  onOpenChange: () => void;
}

const Form = ({ onOpenChange }: Props) => {
  const methods = useForm<GroupFieldType>({
    defaultValues: {
      geometryParam: { type: OPTIONS_TYPE_BOX_GEOMETRY },
    },
  });
  const { handleSubmit } = methods;
  const { setValue } = useFormContext();

  const handleAddPrimitives = (data: GroupFieldType) => {
    const { count, geometryParam } = data;

    let geometry = null;
    if (geometryParam.type === OPTIONS_TYPE_BOX_GEOMETRY) {
      const { length, width, height } = geometryParam;
      geometry = new THREE.BoxGeometry(width, height, length);
    } else {
      const { radius, height, radialSegments } = geometryParam;
      geometry = new THREE.ConeGeometry(radius, height, radialSegments);
    }

    Array.from(Array(count).keys()).forEach(() => {
      const fieldName = uuid();
      const color = getRandomColor();

      const xPos = Number((Math.random() * (20 - -20) + -20).toFixed(2));
      const yPos = Number((Math.random() * (20 - -20) + -20).toFixed(2));

      const position = [xPos, yPos, 0];
      const path = `${INPUT_GROUP}.${fieldName}`;
      setValue(path, {
        fieldName: fieldName,
        type: geometryParam.type,
        color,
        position,
        geometry,
      });
    });
  };

  return (
    <Flex vertical gap={8}>
      <FormProvider {...methods}>
        <SelectGeometry name="geometryParam.type" label="Type">
          {({ key }) => {
            return BOX_ELEMENT[key].map((item) => (
              <NumberInput type="number" {...item} />
            ));
          }}
        </SelectGeometry>

        <NumberInput name="count" label="Count" type="number" />
        <Flex gap={8}>
          <Button onClick={onOpenChange} block>
            Cancel
          </Button>
          <Button onClick={handleSubmit(handleAddPrimitives)} block>
            Add
          </Button>
        </Flex>
      </FormProvider>
    </Flex>
  );
};
export default Form;
