import { render, screen } from "@testing-library/react";
import BasicTextArea from "./index";

test("テキストエリアが期待通りの値を持つか", () => {
  render(<BasicTextArea max={3} text={"aaa"} />);
  expect(screen.getByRole("textbox")).toHaveValue("aaa");
});
