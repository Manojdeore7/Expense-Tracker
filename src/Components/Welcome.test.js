import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";
describe("use for async code", () => {
  test("render the async fetch method", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "first title" }],
    });
    render(<Welcome />);
    const Ele = await screen.findAllByRole("list");
    expect(Ele).not.toHaveLength(0);
  });
});
