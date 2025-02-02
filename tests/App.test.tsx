import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../src/App.tsx";

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);

    screen.debug(); // prints out the jsx in the App component unto the command line
  });

  it("should show at least some products initially", async () => {
    render(<App />);
    await waitFor(() => {
      const productLinks = screen.getAllByTestId("product-card");
      expect(productLinks.length).toBeGreaterThan(0);
    });
  });
});
