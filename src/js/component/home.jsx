import React, { useEffect } from "react";
import { useState } from "react";


//create your first component
const Home = () => {
	const [color, setColor] = useState("red");

	useEffect(() => {
		const buttons = document.querySelectorAll(".semaforo button");
		buttons.forEach(button => {
			button.classList.remove("highlight");
		});

		const selectedButton = document.getElementById(color);
		if (selectedButton) {
			selectedButton.classList.add("highlight");
		}
	}, [color]);

	return (
		<div>
			<div className="barra"></div>
			<div className="semaforo">
				<button onClick={() => setColor("red")} id="red"></button>
				<button onClick={() => setColor("yellow")} id="yellow"></button>
				<button onClick={() => setColor("green")} id="green"></button>
			</div>
		</div>
	);
};

export default Home;
