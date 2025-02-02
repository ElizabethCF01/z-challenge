import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../src/App.tsx";

describe("Search input", () => {
  it("should search products", async () => {
    render(<App />);
    const input = screen.getByPlaceholderText("Search for a smartphone...");
    fireEvent.change(input, { target: { value: "Samsung" } });
    expect(input).toHaveValue("Samsung");

    await waitFor(() => {
      const productLinks = screen.getAllByText("Samsung");
      expect(productLinks.length).toBeGreaterThan(0);
    });
  });
});
