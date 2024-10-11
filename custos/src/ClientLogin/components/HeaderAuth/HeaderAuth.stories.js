import { HeaderAuth } from ".";

export default {
  title: "Components/HeaderAuth",
  component: HeaderAuth,
  argTypes: {
    state: {
      options: ["logged-out", "logged-in-hover", "logged-in"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "logged-out",
    className: {},
  },
};
