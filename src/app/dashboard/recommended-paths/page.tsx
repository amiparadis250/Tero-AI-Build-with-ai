"use client";
import { Card, Typography, List, Button, Space } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

interface LearningPath {
  id: number;
  title: string;
  description: string;
  duration: string;
}

const recommendedPaths: LearningPath[] = [
  {
    id: 1,
    title: "Cybersecurity Fundamentals and Ethical Hacking",
    description: "Learn network security, penetration testing, and threat mitigation to protect digital assets.",
    duration: "12 weeks",
  },
  {
    id: 2,
    title: "DevOps Masterclass with CI/CD",
    description: "Master Docker, Kubernetes, and continuous integration/continuous deployment pipelines for modern software delivery.",
    duration: "10 weeks",
  },
  
//   {
//     id: 3,
//     title: "Data Science Fundamentals with Python",
//     description: "Explore data analysis, machine learning, and visualization using Python.",
//     duration: "15 weeks",
//   },
//   {
//     id: 4,
//     title: "Mobile App Development with React Native",
//     description: "Build cross-platform mobile applications for iOS and Android.",
//     duration: "8 weeks",
//   },
];

export default function RecommendedPathsPage() {
  return (
    <Card title={<Title level={3}>Recommended Learning Paths</Title>} style={{ minHeight: '100%' }}>
      <Paragraph>
        Discover personalized learning paths tailored to your interests and career goals.
      </Paragraph>
      <List
        itemLayout="vertical"
        dataSource={recommendedPaths}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <Button type="link" icon={<ArrowRightOutlined />} key="list-loadmore-edit">
                View Path
              </Button>,
            ]}
          >
            <List.Item.Meta
              title={<a href="#">{item.title}</a>}
              description={item.description}
            />
            <Space>
              <span>Duration: {item.duration}</span>
            </Space>
          </List.Item>
        )}
      />
    </Card>
  );
}
