import { render, screen } from "@testing-library/react";
import BasicButton from "./index";

test("[role='button']", () => {
  render(<BasicButton label={"button"} />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});
