import { StoryObj, Meta } from "@storybook/react";
import { UserForm, UserFormProps } from ".";

export default {
  title: "Components/UserForm",
  component: UserForm,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
} as Meta<UserFormProps>;

export const Default: StoryObj<UserFormProps> = {};
