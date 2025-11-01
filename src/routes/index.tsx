import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Index,
});

function Index() {
	return (
		<div>
			<h2>Welcome Home!</h2>
			<ul>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
		</div>
	);
}
