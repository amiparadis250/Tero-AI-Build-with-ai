"use client";
import { Card, Typography, Row, Col, Progress, Tag } from "antd";

const { Title, Paragraph } = Typography;

interface Skill {
  name: string;
  level: number; // Percentage
  category: string;
}

const skills: Skill[] = [
  { name: "React.js", level: 85, category: "Frontend" },
  { name: "Next.js", level: 70, category: "Frontend" },
  { name: "Node.js", level: 60, category: "Backend" },
  { name: "Python", level: 75, category: "Programming" },
  { name: "SQL", level: 50, category: "Database" },
  { name: "Tailwind CSS", level: 90, category: "Styling" },
];

export default function MySkillsDashboardPage() {
  return (
    <Card title={<Title level={3}>My Skills Dashboard</Title>} style={{ minHeight: '100%' }}>
      <Paragraph>
        Track your skill progression and identify areas for improvement.
      </Paragraph>
      <Row gutter={[16, 16]}>
        {skills.map((skill) => (
          <Col xs={24} sm={12} md={8} lg={6} key={skill.name}>
            <Card hoverable>
              <Title level={4}>{skill.name}</Title>
              <Paragraph>{skill.category}</Paragraph>
              <Progress percent={skill.level} status={skill.level < 70 ? "exception" : "normal"} />
              <Tag color="blue" style={{ marginTop: 10 }}>
                {skill.level}% Proficient
              </Tag>
            </Card>
          </Col>
        ))}
      </Row>
    </Card>
  );
}
