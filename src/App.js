import React from "react";
import LeftSider from "./components/Content/LeftSider";
import RightSider from "./components/Content/RightSider";
import NavBar from "./components/NavBar/NavBar";
import classes from "./App.module.css";

const App = () => {
	return (
		<div className={classes.main}>
			<NavBar />
			<div className={classes.content}>
				<LeftSider />
				<RightSider />
			</div>
		</div>
	);
};

export default App;
