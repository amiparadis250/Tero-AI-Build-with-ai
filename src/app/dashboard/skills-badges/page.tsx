"use client";
import { Card, Typography, List, Tag, Space } from "antd";
import { TrophyOutlined, CheckCircleOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  status: 'completed' | 'in-progress';
}

const certificates: Certificate[] = [
  { id: 1, name: "React Developer Certification", issuer: "Coursera", date: "2023-08-15", status: "completed" },
  { id: 2, name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", date: "2024-01-20", status: "completed" },
  { id: 3, name: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", date: "In Progress", status: "in-progress" },
];

export default function CertificatesPage() {
  return (
    <Card title={<Title level={3}>Certificates & Badges</Title>} style={{ minHeight: '100%' }}>
      <Paragraph>
        Showcase your earned certificates and badges to validate your skills.
      </Paragraph>
      <List
        bordered
        dataSource={certificates}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={item.status === 'completed' ? <CheckCircleOutlined style={{ color: 'green', fontSize: 24 }} /> : <TrophyOutlined style={{ color: 'gold', fontSize: 24 }} />}
              title={item.name}
              description={
                <Space direction="vertical">
                  <Paragraph>{item.issuer}</Paragraph>
                  <Space>
                    <Tag color="blue">{item.date}</Tag>
                    <Tag color={item.status === 'completed' ? 'green' : 'orange'}>
                      {item.status.replace('-', ' ')}
                    </Tag>
                  </Space>
                </Space>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
}
