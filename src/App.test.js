import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const heading = screen.getByText(/clone outlook email/i);
  expect(heading).toBeInTheDocument();
});
