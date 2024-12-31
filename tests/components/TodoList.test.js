import { render } from "@testing-library/react";
import TodoList from "../src/components/TodoList";

test("renders TodoList without crashing", () => {
  render(<TodoList />);
});

test("matches snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});
