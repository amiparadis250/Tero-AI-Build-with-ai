"use client";
import { Card, Typography, Row, Col, Image, Button, Space } from "antd";
import { EyeOutlined, GithubOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

interface ShowcaseProject {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
}

const showcaseProjects: ShowcaseProject[] = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description: "A sleek and modern personal portfolio to showcase my skills and projects.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A full-stack application for managing tasks and projects with user authentication.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Recipe Finder",
    description: "An app that allows users to search for recipes based on ingredients.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectShowcasePage() {
  return (
    <Card title={<Title level={3}>Project Showcase</Title>} style={{ minHeight: '100%' }}>
      <Paragraph>
        Display your best projects and highlight your development skills.
      </Paragraph>
      <Row gutter={[16, 16]}>
        {showcaseProjects.map((project) => (
          <Col xs={24} sm={12} md={8} key={project.id}>
            <Card
              hoverable
              cover={<Image alt={project.title} src={project.imageUrl || "/placeholder.svg"} preview={false} />}
              actions={[
                project.liveUrl && (
                  <Button type="link" icon={<EyeOutlined />} href={project.liveUrl} target="_blank" key="live">
                    Live Demo
                  </Button>
                ),
                project.githubUrl && (
                  <Button type="link" icon={<GithubOutlined />} href={project.githubUrl} target="_blank" key="github">
                    GitHub
                  </Button>
                ),
              ].filter(Boolean)}
            >
              <Card.Meta title={project.title} description={project.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  );
}
