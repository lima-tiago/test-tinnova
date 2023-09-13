import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input } from ".";

describe("Input", () => {
  // Tests that the function renders an input field with a label
  it("should render an input field with a label", () => {
    const id = "inputId";
    const label = "Input Label";

    render(<Input id={id} label={label} />);

    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });

  // Tests that the function passes all input attributes to the input field
  it("should pass all input attributes to the input field", () => {
    const id = "inputId";
    const label = "Input Label";
    const value = "Input Value";

    render(<Input id={id} label={label} value={value} onChange={jest.fn()} />);

    expect(screen.getByLabelText(label)).toHaveAttribute("placeholder", " ");
    expect(screen.getByLabelText(label)).toHaveAttribute("value", value);
  });
});
