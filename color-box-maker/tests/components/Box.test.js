import { render, screen } from "@testing-library/react";
import Box from "../src/components/Box";

test("renders Box component", () => {
  render(<Box width={100} height={100} backgroundColor="red" />);
  const boxElement = screen.getByText("X");
  expect(boxElement).toBeInTheDocument();
});

test("matches snapshot", () => {
  const { asFragment } = render(<Box width={100} height={100} backgroundColor="red" />);
  expect(asFragment()).toMatchSnapshot();
});
