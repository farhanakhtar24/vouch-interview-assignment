import React from "react";
import classes from "./LeftSider.module.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import axios from "axios";

const LeftSider = () => {
	const onFinish = async (values) => {
		try {
			const response = await axios({
				method: "post",
				url: "https://reqres.in/api/login",
				data: {
					email: values.username,
					password: values.password,
				},
				headers: {
					"Content-Type": "application/json",
				},
			});

			if (response.data) {
				message.success("Login success");
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className={classes["leftSider-main"]}>
			<h1 className={classes.heading1}>Welcome Back</h1>
			<h4>Sub-Title text Goes here</h4>
			<div className={classes.formDiv}>
				<Form
					name="normal_login"
					className="login-form"
					initialValues={{
						remember: true,
					}}
					onFinish={onFinish}>
					<Form.Item
						name="username"
						rules={[
							{
								required: true,
								message: "Please input your Username!",
							},
						]}>
						<Input
							prefix={
								<UserOutlined className="site-form-item-icon" />
							}
							placeholder="Email Address *"
						/>
					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: "Please input your Password!",
							},
						]}>
						<Input
							prefix={
								<LockOutlined className="site-form-item-icon" />
							}
							type="password"
							placeholder="Password *"
						/>
					</Form.Item>
					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							className="login-form-button"
							style={{
								width: "100%",
							}}>
							Log in
						</Button>
					</Form.Item>
					<Form.Item>
						<Form.Item
							name="remember"
							valuePropName="checked"
							noStyle>
							<Checkbox>Remember me</Checkbox>
						</Form.Item>

						<a className="login-form-forgot" href="">
							Forgot password
						</a>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default LeftSider;
