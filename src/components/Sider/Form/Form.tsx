import { Button, Flex } from "antd";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

import NumberInput from "./NumberInput";
import { getRandomColor, uuid } from "../../../utils";
import { INPUT_GROUP } from "../../../constants";
import SelectGeometry from "./SelectGeometry";
import { GroupFieldType } from "../../../model";
import CheckboxChangeColor from "./CheckboxChangeColor";

const Form = () => {
  const methods = useForm<GroupFieldType>();
  const { handleSubmit } = methods;
  const { setValue } = useFormContext();

  const handleAddPrimitives = ({
    count,
    ...data
  }: Omit<GroupFieldType, "position" | "color" | "fieldName">) => {
    Array.from(Array(count).keys()).forEach(() => {
      const key = uuid();
      const color = getRandomColor();
      const xPos = Number((Math.random() * (20 - -20) + -20).toFixed(2));
      const yPos = Number((Math.random() * (20 - -20) + -20).toFixed(2));
      const position = [xPos, yPos, 0];
      const path = `${INPUT_GROUP}.${key}`;
      setValue(path, {
        fieldName: key,
        color,
        position,
        ...data,
      });
    });
  };

  const handleClear = () => {
    setValue(INPUT_GROUP, {});
  };

  return (
    <Flex vertical gap={8}>
      <FormProvider {...methods}>
        <SelectGeometry name="type" label="Type" placeholder="Box или " />

        <NumberInput name="length" label="Length" type="number" />
        <NumberInput name="width" label="Width" type="number" />
        <NumberInput name="height" label="Height" type="number" />
        <NumberInput name="count" label="Number" type="number" />
        <CheckboxChangeColor name="isMulticoloured" label="Раскрасить" />
        <Flex>
          <Button onClick={handleClear}>Cancel</Button>
          <Button onClick={handleSubmit(handleAddPrimitives)}>Add</Button>
        </Flex>
      </FormProvider>
    </Flex>
  );
};
export default Form;
