import { render, screen } from "@testing-library/react";
import WatchCounter from "./index";

test("期待通りの形式で表示されているか", () => {
  render(<WatchCounter max={10} text={"aaa"} />);
  expect(screen.getByText("3/10")).toBeInTheDocument();
});

test("制限文字数になると[data-invalid='true']となるか", () => {
  render(<WatchCounter max={3} text={"aaa"} />);
  expect(screen.getByText("3/3")).toHaveAttribute("data-invalid", "true");
});
