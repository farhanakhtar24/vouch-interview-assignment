import React from "react";
import { Button } from "antd";
import classes from "./NavBar.module.css";

const NavBar = () => {
	return (
		<nav className={classes.nav}>
			<div className={classes.logo}>ATools</div>
			<div className={classes.buttons}>
				<Button type="primary" size="large">
					Start Free Trial
				</Button>
				<Button size="large">Login</Button>
			</div>
		</nav>
	);
};

export default NavBar;
