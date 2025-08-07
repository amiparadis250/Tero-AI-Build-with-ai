"use client";
import { Card, Typography, Form, Input, Button, Select, Space, Divider, message } from "antd";
import { PlusOutlined, MinusCircleOutlined, SaveOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const { Option } = Select;
const { TextArea } = Input;

export default function ResumeBuilderPage() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form:', values);
    message.success('Resume data saved successfully!');
  };

  return (
    <Card title={<Title level={3}>Resume Builder</Title>} style={{ minHeight: '100%' }}>
      <Paragraph>
        Create and customize your professional resume with ease.
      </Paragraph>
      <Form
        form={form}
        name="resume_builder"
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          education: [{ institution: '', degree: '', year: '' }],
          experience: [{ company: '', title: '', duration: '', description: '' }],
          skills: [''],
        }}
      >
        <Divider orientation="left">Personal Information</Divider>
        <Form.Item name="fullName" label="Full Name" rules={[{ required: true, message: 'Please enter your full name!' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}>
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="Phone Number">
          <Input />
        </Form.Item>
        <Form.Item name="linkedin" label="LinkedIn Profile">
          <Input />
        </Form.Item>
        <Form.Item name="github" label="GitHub Profile">
          <Input />
        </Form.Item>
        <Form.Item name="summary" label="Professional Summary">
          <TextArea rows={4} />
        </Form.Item>

        <Divider orientation="left">Education</Divider>
        <Form.List name="education">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                  <Form.Item
                    {...restField}
                    name={[name, 'institution']}
                    rules={[{ required: true, message: 'Missing institution' }]}
                  >
                    <Input placeholder="Institution" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'degree']}
                    rules={[{ required: true, message: 'Missing degree' }]}
                  >
                    <Input placeholder="Degree/Major" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, 'year']}
                    rules={[{ required: true, message: 'Missing year' }]}
                  >
                    <Input placeholder="Year" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add Education
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Divider orientation="left">Experience</Divider>
        <Form.List name="experience">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Card key={key} size="small" style={{ marginBottom: 16 }}>
                  <Space style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                    <Form.Item
                      {...restField}
                      name={[name, 'company']}
                      rules={[{ required: true, message: 'Missing company' }]}
                    >
                      <Input placeholder="Company" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'title']}
                      rules={[{ required: true, message: 'Missing title' }]}
                    >
                      <Input placeholder="Job Title" />
                    </Form.Item>
                    <Form.Item
                      {...restField}
                      name={[name, 'duration']}
                      rules={[{ required: true, message: 'Missing duration' }]}
                    >
                      <Input placeholder="Duration (e.g., Jan 2020 - Dec 2022)" />
                    </Form.Item>
                    <MinusCircleOutlined onClick={() => remove(name)} />
                  </Space>
                  <Form.Item
                    {...restField}
                    name={[name, 'description']}
                    rules={[{ required: true, message: 'Missing description' }]}
                  >
                    <TextArea rows={3} placeholder="Responsibilities and achievements" />
                  </Form.Item>
                </Card>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add Experience
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Divider orientation="left">Skills</Divider>
        <Form.List name="skills">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                  <Form.Item
                    {...restField}
                    name={[name]}
                    rules={[{ required: true, message: 'Missing skill' }]}
                  >
                    <Input placeholder="e.g., JavaScript, React, Node.js" />
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Add Skill
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.Item>
          <Button type="primary" htmlType="submit" icon={<SaveOutlined />}>
            Save Resume
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
