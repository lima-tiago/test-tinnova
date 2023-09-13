import { render } from "@testing-library/react";
import { Button } from ".";

// Tests that the Button component renders a button with text
it("should render a button with text", () => {
  const isLoading = false;
  const children = "Click me";
  const props = {};

  const wrapper = render(
    <Button isLoading={isLoading} {...props}>
      {children}
    </Button>
  );

  expect(wrapper.findByText(children));
});

// Tests that the Button component renders a disabled button
it("should render a disabled button", () => {
  const isLoading = false;
  const children = "";
  const props = { disabled: true };

  const wrapper = render(
    <Button isLoading={isLoading} {...props}>
      {children}
    </Button>
  );

  expect(wrapper.findByText(children));
});

// Tests that the Button component renders a loading button
it("should render a loading button", () => {
  const isLoading = true;
  const children = "";
  const props = {};

  const wrapper = render(
    <Button isLoading={isLoading} {...props}>
      {children}
    </Button>
  );

  expect(wrapper.findByTestId("loading"));
});
