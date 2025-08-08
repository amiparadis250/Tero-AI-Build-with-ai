"use client";
import { Card, Typography, List, Button, Space, Tag } from "antd";
import { DownloadOutlined, CheckCircleOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

interface OfflineResource {
  id: number;
  title: string;
  type: 'Video' | 'PDF' | 'Article';
  size: string;
  downloaded: boolean;
}

const offlineContent: OfflineResource[] = [
  { id: 1, title: "Introduction to Penetration Testing (Video)", type: "Video", size: "200 MB", downloaded: false },
  { id: 2, title: "Kubernetes Deployment Best Practices (PDF)", type: "PDF", size: "6 MB", downloaded: true },
  { id: 3, title: "Securing APIs with OAuth2 (Article)", type: "Article", size: "3 MB", downloaded: false },
  { id: 4, title: "Ethical Hacking with Metasploit (Video)", type: "Video", size: "350 MB", downloaded: false },
 
];

export default function OfflineContentPage() {
  const handleDownload = (id: number) => {
    // Simulate download
    console.log(`Downloading item ${id}`);
    // In a real app, you'd trigger a download or update state
  };

  return (
    <Card title={<Title level={3}>Offline Content</Title>} style={{ minHeight: '100%' }}>
      <Paragraph>
        Download learning materials to access them anytime, anywhere, without an internet connection.
      </Paragraph>
      <List
        bordered
        dataSource={offlineContent}
        renderItem={(item) => (
          <List.Item
            actions={[
              item.downloaded ? (
                <Button icon={<CheckCircleOutlined />} disabled key="downloaded">
                  Downloaded
                </Button>
              ) : (
                <Button type="primary" icon={<DownloadOutlined />} onClick={() => handleDownload(item.id)} key="download">
                  Download
                </Button>
              ),
            ]}
          >
            <List.Item.Meta
              title={item.title}
              description={
                <Space>
                  <Tag color="blue">{item.type}</Tag>
                  <Tag>{item.size}</Tag>
                </Space>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  );
}
