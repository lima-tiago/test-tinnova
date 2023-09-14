import { StoryObj, Meta } from "@storybook/react";
import { Card, CardProps } from ".";

export default {
  title: "Components/Card",
  component: Card,
  args: {
    children: <p>Example of a card</p>,
  },
} as Meta<CardProps>;

export const Default: StoryObj<CardProps> = {};
