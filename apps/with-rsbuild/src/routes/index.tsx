import { createFileRoute } from "@tanstack/react-router";
import { Button } from "~/components/button";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<>
			<h2>Hello Rsbuild!</h2>
			<Button>Primary Button</Button>
			<Button variant="secondary">Secondary Button</Button>
		</>
	);
}
