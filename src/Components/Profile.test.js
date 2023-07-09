import { render, screen } from "@testing-library/react";
import Profile from "./Profile";
describe("Profile Component", () => {
  test("contain the Contact Details text ", () => {
    render(<Profile />);
    const Element = screen.getByText("Contact Details");
    expect(Element).toBeInTheDocument();
  });
  test("contain the Full Name text ", () => {
    render(<Profile />);
    const Ele = screen.getByText("Full Name");
    expect(Ele).toBeInTheDocument();
  });
  test("contain thecancel button text ", () => {
    render(<Profile />);
    const Ele = screen.getByText("Cancel");
    expect(Ele).toBeInTheDocument();
  });
});
