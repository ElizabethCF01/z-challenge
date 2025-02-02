import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import App from "../src/App.tsx";

describe("Cart", () => {
  it("should navigate cart", () => {
    render(<App />);
    const cartBtn = screen.getByTestId("cart-btn");
    fireEvent.click(cartBtn);
    screen.getByText("continue shopping");
  });
});
