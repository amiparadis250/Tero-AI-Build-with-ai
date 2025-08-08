"use client";
import { Card, Typography, List, Button, Space, Avatar } from "antd";
import { MessageOutlined, UsergroupAddOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

interface CommunityHub {
  id: number;
  name: string;
  description: string;
  members: number;
  avatarUrl: string;
}

const communityHubs: CommunityHub[] = [
  {
    id: 1,
    name: "Rusizi Cyber Defenders",
    description: "A community dedicated to protecting networks, sharing threat intelligence, and training ethical hackers.",
    members: 1250,
    // location: "Rusizi, Rwanda",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Kigali DevOps Engineers",
    description: "Bringing together DevOps enthusiasts to share best practices in CI/CD, containerization, and cloud automation.",
    members: 890,
    // location: "Kigali, Rwanda",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Musanze Cloud Security Group",
    description: "Focused on securing cloud infrastructures, identity management, and compliance for modern applications.",
    members: 2100,
    // location: "Musanze, Rwanda",
    avatarUrl: "/placeholder.svg?height=40&width=40",
  }
  
];

export default function CommunityHubsPage() {
  return (
    <Card title={<Title level={3}>Community & Hubs</Title>} style={{ minHeight: '100%' }}>
      <Paragraph>
        Join vibrant communities, connect with peers, and get support from experts.
      </Paragraph>
      <List
        itemLayout="horizontal"
        dataSource={communityHubs}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button type="primary" icon={<UsergroupAddOutlined />} key="join">
                Join
              </Button>,
              <Button icon={<MessageOutlined />} key="chat">
                Chat
              </Button>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatarUrl} />}
              title={<a href="#">{item.name}</a>}
              description={
                <Space direction="vertical">
                  <Paragraph>{item.description}</Paragraph>
                  <Paragraph strong>{item.members} Members</Paragraph>
                </Space>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
}
