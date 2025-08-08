"use client";
import { Card, Typography, List, Button, Space, Tag, Input } from "antd";
import { SearchOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Title, Paragraph } = Typography;
const { Search } = Input;

interface JobPosting {
  id: number;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  tags: string[];
}

const allJobPostings: JobPosting[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "Remote",
    type: "Full-time",
    tags: ["React", "Next.js", "TypeScript", "Remote"],
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Data Innovations LLC",
    location: "New York, NY",
    type: "Full-time",
    tags: ["Node.js", "Express", "MongoDB", "API"],
  },
  // {
  //   id: 3,
  //   title: "UX/UI Designer",
  //   company: "Creative Agency",
  //   location: "San Francisco, CA",
  //   type: "Full-time",
  //   tags: ["Figma", "Sketch", "User Research"],
  // },
  // {
  //   id: 4,
  //   title: "Junior Data Scientist",
  //   company: "Analytics Co.",
  //   location: "Boston, MA",
  //   type: "Full-time",
  //   tags: ["Python", "Pandas", "Machine Learning"],
  // },
  // {
  //   id: 5,
  //   title: "Contract Web Developer",
  //   company: "Freelance Hub",
  //   location: "Remote",
  //   type: "Contract",
  //   tags: ["WordPress", "PHP", "Freelance"],
  // },
];

export default function JobBoardPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = allJobPostings.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Card title={<Title level={3}>Job Board</Title>} style={{ minHeight: '100%' }}>
      <Paragraph>
        Find your next career opportunity from a wide range of job postings.
      </Paragraph>
      <div style={{ marginBottom: 20 }}>
        <Search
          placeholder="Search for jobs by title, company, or keywords"
          enterButton={<Button type="primary" icon={<SearchOutlined />} />}
          size="large"
          onSearch={(value) => setSearchTerm(value)}
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>
      <List
        itemLayout="vertical"
        dataSource={filteredJobs}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            actions={[
              <Button type="link" icon={<ArrowRightOutlined />} key="apply">
                Apply Now
              </Button>,
            ]}
          >
            <List.Item.Meta
              title={<a href="#">{item.title} at {item.company}</a>}
              description={
                <Space direction="vertical">
                  <Paragraph>{item.location} &bull; {item.type}</Paragraph>
                  <div>
                    {item.tags.map(tag => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </Space>
              }
            />
          </List.Item>
        )}
      />
      {filteredJobs.length === 0 && (
        <Paragraph style={{ textAlign: 'center', marginTop: 20 }}>
          No jobs found matching your search criteria.
        </Paragraph>
      )}
    </Card>
  );
}
