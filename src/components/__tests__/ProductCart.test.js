// render-> help render the component that will help with the methods
// screen -> querying bodies
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

//Chance -> help set our test doubles
import Chance from "chance";

import ProductCart from "../ProductCart";

const chance = new Chance();

const handleLess = jest.fn();
const handleMore = jest.fn();

//look or test whatever you like
describe("when using ProductCart component", () => {
  let product;
  beforeEach(() => {
    // These values will change eveytime the test is run
    product = {
      _id: chance.guid(),
      name: chance.string(),
      description: chance.string(),
      price: chance.integer(),
      imageUrl: chance.string(),
      qty: chance.integer(),
    };
  });

  it("should display the product image", () => {
    //Arrange
    render(<ProductCart product={product} />);

    //Act
    const image = screen.getByRole("img");

    //Assert. Allows to assert if the element is present in the document or not
    expect(image).toBeVisible();
  });

  it("should display the product name", () => {
    render(<ProductCart product={product} />);

    const name = screen.getByText(product.name);

    // screen.debug();
    expect(name).toBeVisible;
  });

  it("should display the product description", () => {
    render(<ProductCart product={product} />);

    const description = screen.getByText(product.description);

    expect(description).toBeVisible;
  });

  it("should display the product price label", () => {
    render(<ProductCart product={product} />);

    const priceLabel = screen.getByText("Price");

    expect(priceLabel).toBeVisible;
  });

  it("should display the product price", () => {
    render(<ProductCart product={product} />);
    const price = screen.getByText("$" + product.price);
    expect(price).toBeVisible;
  });

  it("should display the add button", () => {
    render(<ProductCart product={product} />);
    const addButton = screen.getByRole("button", { name: "+" });
    expect(addButton).toBeVisible();
  });

  it("should display the remove button", () => {
    render(<ProductCart product={product} />);
    const removeButton = screen.getByRole("button", { name: "-" });
    expect(removeButton).toBeVisible();
  });

  it("should call the onClick property when the add button is clicked", async () => {
    const user = userEvent.setup();
    render(<ProductCart product={product} handleMore={handleMore} />);

    const addButton = screen.getByRole("button", { name: "+" });
    await user.click(addButton);

    expect(handleMore).toHaveBeenCalled();
  });
  it("should call onCLick property when the remove button is clicked", async () => {
    const user = userEvent.setup();
    render(<ProductCart product={product} handleLess={handleLess} />);

    const removeButton = screen.getByRole("button", { name: "-" });
    await user.click(removeButton);

    expect(handleLess).toHaveBeenCalled();
  });
});
