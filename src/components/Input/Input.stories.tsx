import { StoryObj, Meta } from "@storybook/react";
import { Input, InputProps } from ".";

export default {
  title: "Components/Input",
  component: Input,
  args: {
    id: "example",
    label: "Example Label",
  },
} as Meta<InputProps>;

export const Default: StoryObj<InputProps> = {};

export const ErrorMessage: StoryObj<InputProps> = {
  args: {
    errorMessage: "This is an error message (minLength 10).",
    minLength: 10,
  },
};
