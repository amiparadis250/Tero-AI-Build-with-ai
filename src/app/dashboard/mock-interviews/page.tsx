"use client";
import { Card, Typography, List, Button, Space, Tag } from "antd";
import { PlayCircleOutlined, HistoryOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

interface MockInterview {
  id: number;
  topic: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  status: 'available' | 'completed';
}

const mockInterviews: MockInterview[] = [
  { id: 1, topic: "Frontend React Interview", difficulty: "Medium", status: "available" },
  { id: 2, topic: "Backend Node.js Interview", difficulty: "Hard", status: "available" },
  { id: 3, topic: "Data Structures & Algorithms", difficulty: "Medium", status: "completed" },
  { id: 4, topic: "System Design Interview", difficulty: "Hard", status: "available" },
];

export default function MockInterviewsPage() {
  return (
    <Card title={<Title level={3}>Mock Interviews</Title>} style={{ minHeight: '100%' }}>
      <Paragraph>
        Practice your interview skills with AI-powered mock interviews and get instant feedback.
      </Paragraph>
      <List
        itemLayout="horizontal"
        dataSource={mockInterviews}
        renderItem={(item) => (
          <List.Item
            actions={[
              item.status === 'available' ? (
                <Button type="primary" icon={<PlayCircleOutlined />} key="start">
                  Start Interview
                </Button>
              ) : (
                <Button icon={<HistoryOutlined />} key="review">
                  Review Results
                </Button>
              ),
            ]}
          >
            <List.Item.Meta
              title={item.topic}
              description={
                <Space>
                  <Tag color={item.difficulty === 'Easy' ? 'green' : item.difficulty === 'Medium' ? 'blue' : 'red'}>
                    {item.difficulty}
                  </Tag>
                  <Tag color={item.status === 'available' ? 'geekblue' : 'green'}>
                    {item.status.replace('-', ' ')}
                  </Tag>
                </Space>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
}
