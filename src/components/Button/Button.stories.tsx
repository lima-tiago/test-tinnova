import { StoryObj, Meta } from "@storybook/react";
import { Button, ButtonProps } from ".";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    isLoading: false,
    children: "Example",
    negative: false,
    disabled: false,
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

export const Loading: StoryObj<ButtonProps> = {
  args: {
    isLoading: true,
  },
};

export const Negative: StoryObj<ButtonProps> = {
  args: {
    negative: true,
  },
};
