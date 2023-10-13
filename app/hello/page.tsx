"use client";

import { useState } from "react";

export default function Hello() {
	const name = "bolt";
	const [isOpen, setIsOpen] = useState(false);
	// let isOpen = false;

	return (
		<div>
			<h1
				className={`${isOpen ? "text-blue-600 font-bold" : "text-green-500"}`}
			>
				my name is {name}
			</h1>
			<button
				className=" bg-white w-full text-black p-2 rounded-md hover:bg-neutral-400 sm:w-20 lg:bg-blue-400"
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				Switch
			</button>
			<p>state: {isOpen.toString()}</p>
			<p>{`element: ${isOpen ? "open" : "closed"}`}</p>
			{isOpen ? (
				<p>open. chill</p>
			) : (
				<h1 className="text-red-600 p-12">IT'S CLOSED!!!!!</h1>
			)}
		</div>
	);
}
