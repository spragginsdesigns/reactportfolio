import { render, screen } from "@testing-library/react";
import App from "./App";
import { header } from "./profile";

test("renders the portfolio header", () => {
	render(<App />);
	expect(screen.getAllByText(header.name, { exact: false }).length).toBeGreaterThan(0);
});
