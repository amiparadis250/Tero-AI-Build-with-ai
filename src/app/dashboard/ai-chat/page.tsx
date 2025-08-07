"use client";
import { Card, Typography, Input, Button, Space, List, Avatar } from "antd";
import { SendOutlined, UserOutlined, RobotOutlined } from "@ant-design/icons";
import { useState, useRef, useEffect } from "react";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

interface Message {
  id: number;
  sender: 'user' | 'ai';
  text: string;
}

export default function AIChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newUserMessage: Message = { id: messages.length + 1, sender: "user", text: inputMessage.trim() };
      setMessages((prevMessages) => [...prevMessages, newUserMessage]);
      setInputMessage("");

      // Simulate AI response
      setTimeout(() => {
        const aiResponse: Message = {
          id: messages.length + 2,
          sender: "ai",
          text: `Hello! You said: "${newUserMessage.text}". How can I assist you further?`,
        };
        setMessages((prevMessages) => [...prevMessages, aiResponse]);
      }, 1000);
    }
  };

  return (
    <Card title={<Title level={3}>AI Chat Assistant</Title>} style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <Paragraph>
        Chat with our AI assistant for instant help, explanations, and guidance.
      </Paragraph>
      <div style={{ flex: 1, overflowY: 'auto', paddingRight: 10, marginBottom: 16 }}>
        <List
          dataSource={messages}
          renderItem={(msg) => (
            <List.Item style={{ justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
              <Space align="start" direction="horizontal" style={{ flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row' }}>
                <Avatar icon={msg.sender === 'user' ? <UserOutlined /> : <RobotOutlined />} />
                <Card
                  size="small"
                  style={{
                    maxWidth: '70%',
                    backgroundColor: msg.sender === 'user' ? '#e6f7ff' : '#f0f2f5',
                    borderRadius: 10,
                  }}
                >
                  {msg.text}
                </Card>
              </Space>
            </List.Item>
          )}
        />
        <div ref={messagesEndRef} />
      </div>
      <Space style={{ width: '100%' }}>
        <TextArea
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message here..."
          autoSize={{ minRows: 1, maxRows: 3 }}
          onPressEnter={(e) => {
            if (!e.shiftKey) { // Send on Enter, new line on Shift+Enter
              e.preventDefault();
              handleSendMessage();
            }
          }}
        />
        <Button type="primary" icon={<SendOutlined />} onClick={handleSendMessage}>
          Send
        </Button>
      </Space>
    </Card>
  );
}
