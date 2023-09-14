import { StoryObj, Meta } from "@storybook/react";
import { Modal, ModalProps } from ".";

export default {
  title: "Components/Modal",
  component: Modal,
  args: {
    children: <p>This is an Modal example</p>,
  },
} as Meta<ModalProps>;

export const Default: StoryObj<ModalProps> = {};
