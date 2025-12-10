import React, { useState } from "react";
import { createPortal } from "react-dom";

const Home = () => {
	const [color, setColor] = useState("red");
	return (
		<div className="app">
			<div className="traffic-top"></div>
			<div className="traffic-body">
				<div
				    className={
						 "light red" + (color === "red" ? " selected" : "")
					}
					onClick={() => setColor("red")}
			></div>
			<div
			  className={
				"light yellow" + (color === "yellow" ? " selected" : "")
			  }
			  onClick={() => setColor("yellow")}
		></div>
		<div
			  className={
				"light green" + (color === "green" ? " selected" : "")
			  }
			  onClick={() => setColor("green")}
			  ></div>
			  <div 
			  className={"light purple" + (color === "purple" ? " selected" : "")}
			  onClick={() => setColor("purple")}
			  ></div>
			  </div>
			  </div>
	);
};

export default Home;