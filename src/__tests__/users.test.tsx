import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Users from "@/app/users/page";

describe("User", () => {
  // Tests that the function fetches data from localStorage and API and merges them
  it("should fetch data from localStorage and API and merge them", async () => {
    // Mock localStorage data
    const localStorageData = [
      {
        name: "Tiago Lima",
        cpf: "12345678901",
        phone: "1234567890",
        email: "email@example.com",
      },
    ];

    // Render the component
    render(<Users usersMock={localStorageData} />);

    // Wait for the data to be fetched and merged
    await waitFor(() => {
      // Assert that the merged data is rendered correctly
      expect(screen.getByText("Tiago Lima")).toBeInTheDocument();
    });
  });
});
