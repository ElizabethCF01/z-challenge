import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../src/App.tsx";

describe("Product", () => {
  it("should navigate to product details", async () => {
    render(<App />);
    await waitFor(() => {
      const productLinks = screen.getAllByTestId("product-card");

      expect(productLinks.length).toBeGreaterThan(0);
      fireEvent.click(productLinks[0]);
    });
    await waitFor(() => {
      screen.getByText("Similar Products");
      screen.getByText("Specifications");
    });

    // Check if the add to cart button is disabled
    const addToCartButton = screen.getByRole("button", {
      name: /add to cart/i,
    });
    expect(addToCartButton).toBeDisabled();
  });
  it("should change price when a storage option is selected", async () => {
    render(<App />);
    await waitFor(() => {
      const productLinks = screen.getAllByTestId("product-card");
      fireEvent.click(productLinks[0]);
    });
    await waitFor(() => {
      screen.getByText("Storage ¿how much space do oyu need?");
      const storageBtns = screen.getAllByTestId("storage-picker-btn");
      expect(storageBtns.length).toBeGreaterThan(0);
      fireEvent.click(storageBtns[0]);
      const pickedPrice = storageBtns[0].getAttribute("data-price");
      expect(screen.getByText(`${pickedPrice} EUR`)).toBeInTheDocument();
    });
  });

  it("should change image and color when a color option is selected", async () => {
    render(<App />);
    await waitFor(() => {
      const productLinks = screen.getAllByTestId("product-card");
      fireEvent.click(productLinks[0]);
    });
    await waitFor(() => {
      screen.getByText("color. pick your favourite.");
      const colorBtns = screen.getAllByTestId("color-picker-btn");
      expect(colorBtns.length).toBeGreaterThan(0);
      fireEvent.click(colorBtns[0]);
      const pickedColor = colorBtns[0].getAttribute("data-color");
      expect(pickedColor).not.toBeNull();

      if (pickedColor) {
        expect(screen.getByText(pickedColor)).toBeInTheDocument();
        // Check if an image with specific alt text fragment exists
        const image = screen.getByAltText(new RegExp(pickedColor, "i"));
        expect(image).toBeInTheDocument();
      }
    });
  });
});
