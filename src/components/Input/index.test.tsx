// Generated by CodiumAI

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input } from ".";

describe("Input", () => {
  // Tests that the function renders an input field with a label
  it("should render an input field with a label", () => {
    // Arrange
    const id = "inputId";
    const label = "Input Label";

    // Act
    render(<Input id={id} label={label} />);

    // Assert
    expect(screen.getByLabelText(label)).toBeInTheDocument();
  });

  // Tests that the function passes all input attributes to the input field
  it("should pass all input attributes to the input field", () => {
    // Arrange
    const id = "inputId";
    const label = "Input Label";
    const placeholder = "Input Placeholder";
    const value = "Input Value";

    // Act
    render(
      <Input id={id} label={label} placeholder={placeholder} value={value} />
    );

    // Assert
    expect(screen.getByLabelText(label)).toHaveAttribute(
      "placeholder",
      placeholder
    );
    expect(screen.getByLabelText(label)).toHaveAttribute("value", value);
  });
});
