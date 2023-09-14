import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Users from "@/app/users/page";

describe("User", () => {
  // Renders the component with localStorage data
  it("should render the component", async () => {
    // Render the component
    render(<Users />);

    // Assert that the component renders correctly
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});
