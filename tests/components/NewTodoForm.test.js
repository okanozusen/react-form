import { render, screen, fireEvent } from "@testing-library/react";
import NewTodoForm from "../src/components/NewTodoForm";

test("renders form and adds todo", () => {
  const addTodo = jest.fn();
  render(<NewTodoForm addTodo={addTodo} />);

  const input = screen.getByRole("textbox");
  const button = screen.getByText(/Add Todo/i);

  fireEvent.change(input, { target: { value: "Learn React" } });
  fireEvent.click(button);

  expect(addTodo).toHaveBeenCalled();
});
