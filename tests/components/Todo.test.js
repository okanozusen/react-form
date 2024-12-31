import { render, screen } from "@testing-library/react";
import Todo from "../src/components/Todo";

test("renders Todo with task", () => {
  render(<Todo task="Test Task" />);
  expect(screen.getByText("Test Task")).toBeInTheDocument();
});

test("matches snapshot", () => {
  const { asFragment } = render(<Todo task="Test Task" />);
  expect(asFragment()).toMatchSnapshot();
});
