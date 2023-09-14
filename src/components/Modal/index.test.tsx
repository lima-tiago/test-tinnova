import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Modal } from ".";

// Renders the modal with children
it("should render the modal with children", () => {
  const onClose = jest.fn();
  const children = <div>Modal Content</div>;

  render(<Modal onClose={onClose}>{children}</Modal>);

  expect(screen.getByText("Modal Content")).toBeInTheDocument();
});
