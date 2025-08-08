"use client";
import { Card, Typography, List, Button, Space, Tag } from "antd";
import { CodeOutlined, PlayCircleOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

interface Project {
  id: number;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  technologies: string[];
}

const practiceProjects: Project[] = [
  {
    id: 1,
    title: "Network Vulnerability Scanner",
    description: "Build a tool that scans a network for open ports, outdated services, and common vulnerabilities.",
    difficulty: "Beginner",
    technologies: ["Python", "Nmap", "Wireshark"],
  },
  {
    id: 2,
    title: "CI/CD Pipeline for Containerized Apps",
    description: "Set up a complete CI/CD pipeline to build, test, and deploy Dockerized applications using automation tools.",
    difficulty: "Intermediate",
    technologies: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
  }
  
//   {
//     id: 3,
//     title: "Personal Blog with CMS",
//     description: "Create a blog platform with a content management system integration.",
//     difficulty: "Advanced",
//     technologies: ["Next.js", "GraphQL", "Headless CMS"],
//   },
];

export default function PracticeProjectsPage() {
  return (
    <Card title={<Title level={3}>Practice & Projects</Title>} style={{ minHeight: '100%' }}>
      <Paragraph>
        Hands-on projects to apply your skills and build your portfolio.
      </Paragraph>
      <List
        itemLayout="vertical"
        dataSource={practiceProjects}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <Button type="link" icon={<PlayCircleOutlined />} key="start-project">
                Start Project
              </Button>,
              <Button type="link" icon={<CodeOutlined />} key="view-code">
                View Code
              </Button>,
            ]}
          >
            <List.Item.Meta
              title={<a href="#">{item.title}</a>}
              description={
                <Space direction="vertical">
                  <Paragraph>{item.description}</Paragraph>
                  <div>
                    <Tag color={item.difficulty === 'Beginner' ? 'green' : item.difficulty === 'Intermediate' ? 'blue' : 'red'}>
                      {item.difficulty}
                    </Tag>
                    {item.technologies.map(tech => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                </Space>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
}
