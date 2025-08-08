"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, Form, Input, Button, Typography, message, Space } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import Image from "next/image";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import antdTheme from "@/utils/config/antdConfig";
import images from "@/utils/constants/image";

const { Title, Paragraph } = Typography;

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      // Simulate API delay for realism
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (values.email === "user@example.com" && values.password === "password") {
        message.success("Login successful!");
        // Short delay so the toast is visible before redirect
        setTimeout(() => {
          router.push("/dashboard");
        }, 1000);
      } else {
        message.error("Invalid email or password.");
      }
    } catch (error) {
      message.error("An error occurred during login.");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AntdRegistry>
      <ConfigProvider theme={antdTheme}>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
          <Card className="w-full max-w-md shadow-lg rounded-lg">
            <div className="text-center mb-8">
              <Image
                src={images.logo || "/placeholder.svg"}
                alt="Tero AI"
                width={150}
                height={50}
                className="mx-auto mb-4"
              />
              <Title level={3} className="!mb-1">
                Welcome Back!
              </Title>
              <Paragraph className="text-gray-600">
                Sign in to your account to continue.
              </Paragraph>
            </div>

            <Form
              name="login"
              initialValues={{
                remember: true,
                email: "user@example.com", // Demo pre-filled email
                password: "password", // Demo pre-filled password
              }}
              onFinish={onFinish}
              layout="vertical"
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: "Please input your password!" }]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full"
                  loading={loading}
                >
                  Log in
                </Button>
              </Form.Item>

              <div className="text-center">
                <Space>
                  <Paragraph>Don't have an account?</Paragraph>
                  <Button type="link" onClick={() => router.push("/signup")}>
                    Sign Up
                  </Button>
                </Space>
              </div>
            </Form>
          </Card>
        </div>
      </ConfigProvider>
    </AntdRegistry>
  );
}
