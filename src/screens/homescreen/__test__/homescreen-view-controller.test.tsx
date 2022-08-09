import { renderHook, act } from "@testing-library/react-hooks";
import useHomescreenController from "../homescreen-view-controller";

test("Something to test", () => {
  const { result } = renderHook(() => useHomescreenController({}));

});
