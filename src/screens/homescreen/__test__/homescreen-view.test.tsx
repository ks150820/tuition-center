import { render } from "@testing-library/react";
import HomescreenView from "../homescreen-view";

test("Something to test", () => {
  const { getByText, getByTestId } = render(<HomescreenView />);
});