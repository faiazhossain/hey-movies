import React from "react";
import { Form } from "antd";
import Button from "./../../components/Button";
import { Link } from "react-router-dom";
function Login() {
  const onFinish = (values) => {
    console.log("Success", values);
  };

  return (
    <div className="flex justify-center h-screen items-center bg-primary">
      <div className="card p-3 w-400">
        <h1 className="text-xl mb-2 bb-2">Login</h1>
        <Form layout="vertical" className="mt-2" onFinish={onFinish}>
          {/* Email */}
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <input type="email"></input>
          </Form.Item>
          {/* Password */}
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <input type="password"></input>
          </Form.Item>
          <div className="flex flex-col mt-2 gap-1">
            <Button fullwidth title="LOGIN" type="submit" />
            <Link className="text-primary" to="/register">
              Don't have an account? Register
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
