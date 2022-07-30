import { fireEvent, render } from "@testing-library/react";
import Counter from "../Counter/Counter";

describe("Counter test cases", () => {
  test("counter component loads correctly", () => {
    const { getByTestId } = render(<Counter />);
    const header = getByTestId("header-counter");
    const addBtn = getByTestId("add-btn");
    const reduceBtn = getByTestId("reduce-btn");
    expect(header).toBeDefined();
    expect(header.textContent).toBe("Counter 0");
    expect(addBtn).toBeDefined();
    expect(addBtn.textContent).toBe("ADD");
    expect(reduceBtn).toBeDefined();
    expect(reduceBtn.textContent).toBe("REDUCE");
  });
  test("add works correctly", () => {
    const { getByTestId } = render(<Counter />);
    const header = getByTestId("header-counter");
    const addBtn = getByTestId("add-btn");
    const reduceBtn = getByTestId("reduce-btn");

    fireEvent.click(addBtn);
    expect(header.textContent).toBe("Counter 1");

    fireEvent.click(addBtn);
    expect(header.textContent).toBe("Counter 2");

    fireEvent.click(addBtn);
    expect(header.textContent).toBe("Counter 3");
  });
  test("reduce works correctly", () => {
    const { getByTestId } = render(<Counter />);
    const header = getByTestId("header-counter");
    const addBtn = getByTestId("add-btn");
    const reduceBtn = getByTestId("reduce-btn");

    fireEvent.click(reduceBtn);
    expect(header.textContent).toBe("Counter -1");

    fireEvent.click(reduceBtn);
    expect(header.textContent).toBe("Counter -2");

    fireEvent.click(reduceBtn);
    expect(header.textContent).toBe("Counter -3");
  });
});
