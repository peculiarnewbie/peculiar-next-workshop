import Image from "next/image";

export default function Home() {
	let content = {
		title: "I'm Bold",
		interests: ["games", "music", "cats"],
	};

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="border-2 border-white rounded-xl w-1/2 h-96 p-2">
				<h1 className="font-bold">{`I'm Bolt`}</h1>
				<p>interests:</p>
				<ul>
					{content.interests.map((interest, index) => {
						return <li key={index}>- {interest}</li>;
					})}
				</ul>
			</div>
		</main>
	);
}
