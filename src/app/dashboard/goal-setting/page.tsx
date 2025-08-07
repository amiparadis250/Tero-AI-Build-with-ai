"use client";
import { Card, Typography, Button, Input, Space, List, Tag } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Title, Paragraph } = Typography;

interface Goal {
  id: number;
  name: string;
  status: 'pending' | 'in-progress' | 'completed';
}

export default function GoalSettingPage() {
  const [goals, setGoals] = useState<Goal[]>([
    { id: 1, name: "Complete React Basics Course", status: "in-progress" },
    { id: 2, name: "Build a simple To-Do App", status: "pending" },
    { id: 3, name: "Learn Next.js Fundamentals", status: "pending" },
  ]);
  const [newGoal, setNewGoal] = useState("");

  const addGoal = () => {
    if (newGoal.trim()) {
      setGoals([...goals, { id: goals.length + 1, name: newGoal, status: "pending" }]);
      setNewGoal("");
    }
  };

  const getStatusColor = (status: Goal['status']) => {
    switch (status) {
      case 'pending': return 'blue';
      case 'in-progress': return 'orange';
      case 'completed': return 'green';
      default: return 'default';
    }
  };

  return (
    <Card title={<Title level={3}>Goal Setting</Title>} style={{ minHeight: '100%' }}>
      <Paragraph>
        Set and track your learning goals to stay motivated and organized.
      </Paragraph>
      <Space style={{ marginBottom: 20 }}>
        <Input
          placeholder="Add a new goal"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
          onPressEnter={addGoal}
          style={{ width: 300 }}
        />
        <Button type="primary" icon={<PlusOutlined />} onClick={addGoal}>
          Add Goal
        </Button>
      </Space>
      <List
        bordered
        dataSource={goals}
        renderItem={(item) => (
          <List.Item>
            <Space>
              {item.name}
              <Tag color={getStatusColor(item.status)}>{item.status.replace('-', ' ')}</Tag>
            </Space>
          </List.Item>
        )}
      />
    </Card>
  );
}
