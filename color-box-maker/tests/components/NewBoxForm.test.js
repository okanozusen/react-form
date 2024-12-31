import { render, screen, fireEvent } from "@testing-library/react";
import NewBoxForm from "../src/components/NewBoxForm";

test("renders form and adds a box", () => {
  const addBox = jest.fn();
  render(<NewBoxForm addBox={addBox} />);

  const widthInput = screen.getByLabelText(/Width:/i);
  const heightInput = screen.getByLabelText(/Height:/i);
  const colorInput = screen.getByLabelText(/Color:/i);
  const button = screen.getByText(/Add Box/i);

  fireEvent.change(widthInput, { target: { value: "100" } });
  fireEvent.change(heightInput, { target: { value: "150" } });
  fireEvent.change(colorInput, { target: { value: "blue" } });
  fireEvent.click(button);

  expect(addBox).toHaveBeenCalled();
});
