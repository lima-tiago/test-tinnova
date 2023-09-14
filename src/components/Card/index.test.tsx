import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from ".";

// Renders a card with children
it("should render a card with children", () => {
  const children = <div>Child content</div>;

  render(<Card>{children}</Card>);

  expect(screen.getByText("Child content")).toBeInTheDocument();
});
