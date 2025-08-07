"use client";
import { type ReactNode, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import localFont from "next/font/local";
import Image from "next/image";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Avatar, ConfigProvider, Dropdown, Space, MenuProps } from "antd";
import { Button, Layout, Menu, theme } from "antd";
import { UserOutlined } from "@ant-design/icons";
import images from "@/utils/constants/image";
import { Home, Bell, Video, MessageSquare, HelpCircle, Settings, LogOut, ChevronsLeft, ChevronsRight, Speech, Target, Map, Gauge, FolderKanban, Award, FileText, Briefcase, ClipboardCheck, Layers, Users, WifiOff, UsersRound, CreditCard, Lock, FilePlus2 } from 'lucide-react';
import "./../globals.css";
import antdTheme from "@/utils/config/antdConfig";

const { Header, Sider, Content } = Layout;

const geistSans = localFont({
  src: "./../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

type MenuItem = {
  key: string;
  icon?: React.ReactNode;
  label?: string;
  path?: string;
  type?: "divider";
  children?: MenuItem[];
};

const SIDEBAR_ITEMS: MenuItem[] = [
  { key: "home", icon: <Home size={20} />, label: "Home", path: "/dashboard" },
  {
    key: "my-learning-path",
    icon: <Target size={20} />,
    label: "My Learning Path",
    children: [
      { key: "goal-setting", icon: <Target size={20} />, label: "Goal Setting", path: "/dashboard/goal-setting" },
      { key: "recommended-paths", icon: <Map size={20} />, label: "Recommended Paths", path: "/dashboard/recommended-paths" },
      { key: "my-skills-dashboard", icon: <Gauge size={20} />, label: "My Skills Dashboard", path: "/dashboard/my-skills-dashboard" },
    ],
  },
  { key: "practice-projects", icon: <FolderKanban size={20} />, label: "Practice & Projects", path: "/dashboard/practice-projects" },
  {
    key: "my-portfolio",
    icon: <Award size={20} />,
    label: "My Portfolio",
    children: [
      { key: "project-showcase", icon: <Layers size={20} />, label: "Project Showcase", path: "/dashboard/project-showcase" },
      { key: "skills-badges", icon: <Award size={20} />, label: "Certificates", path: "/dashboard/skills-badges" },
      { key: "resume-builder", icon: <FileText size={20} />, label: "Resume Builder", path: "/dashboard/resume-builder" },
    ],
  },
  {
    key: "career-opportunities",
    icon: <Briefcase size={20} />,
    label: "Career Opportunities",
    children: [
      { key: "job-board", icon: <Users size={20} />, label: "Job Board", path: "/dashboard/job-board" },
      { key: "mock-interviews", icon: <ClipboardCheck size={20} />, label: "Mock Interviews", path: "/dashboard/mock-interviews" },
    ],
  },
  { key: "divider-1", type: "divider" },
  { key: "text-to-video", icon: <Video size={20} />, label: "Text To Video", path: "/dashboard/text-to-video" },
  { key: "voice-to-video", icon: <Speech size={20} />, label: "Voice to Video", path: "/dashboard/voice-to-video" },
  { key: "ai-chat", icon: <MessageSquare size={20} />, label: "AI Chat", path: "/dashboard/ai-chat" },
  { key: "divider-2", type: "divider" },
  { key: "offline-content", icon: <WifiOff size={20} />, label: "Offline Content", path: "/dashboard/offline-content" },
  { key: "community-hubs", icon: <UsersRound size={20} />, label: "Community & Hubs", path: "/dashboard/community-hubs" },
];

interface RootLayoutProps {
  children: ReactNode;
}

interface UserProfile {
  full_names: string;
  profile_image: string;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [activeMenuKey, setActiveMenuKey] = useState(pathname);
  const [openKeys, setOpenKeys] = useState<string[]>([]); // Only one open

  const mockUserProfile: UserProfile = {
    full_names: "Ami Paradis",
    profile_image: "https://res.cloudinary.com/dv9cz01fi/image/upload/v1738316635/lyh6k4nhu3sxe6t5u4ql.jpg",
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogout = () => {
    router.push("/login");
  };

  const generateMenuItems = (items: MenuItem[]): MenuProps["items"] =>
    items.map((item) => {
      if (item.type === "divider") return { type: "divider", key: item.key };
      if (item.children) {
        return { key: item.key, icon: item.icon, label: item.label, children: generateMenuItems(item.children) };
      }
      return {
        key: item.key,
        icon: item.icon,
        label: item.label,
        onClick: () => {
          if (item.path) {
            setActiveMenuKey(item.key);
            router.push(item.path);
          }
        },
      };
    });

  const dropdownItems: MenuProps["items"] = [
    { key: "profile", label: "Profile" },
    { key: "logout", danger: true, icon: <LogOut />, label: "Logout", onClick: handleLogout },
  ];

  const onOpenChange = (keys: string[]) => {
    const latestOpenKey = keys.find((key) => !openKeys.includes(key));
    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  };

  if (!isClient) return null;

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AntdRegistry>
          <ConfigProvider theme={antdTheme}>
            <Layout className="h-[100vh] bg-white">
              <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                width={240}
                style={{ background: colorBgContainer, display: "flex", flexDirection: "column" }}
              >
                {/* Logo */}
                <div className="flex items-center justify-center p-4">
                  <Image src={images.logo || "/placeholder.svg"} alt="Tero AI" width={collapsed ? 40 : 120} height={40} />
                </div>
                {/* Menu */}
                <div style={{ flex: 1, overflowY: "auto" }}>
                  <Menu
                    theme="light"
                    mode="inline"
                    selectedKeys={[activeMenuKey]}
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                    items={generateMenuItems(SIDEBAR_ITEMS)}
                  />
                </div>
                {/* Profile Section - Removed from sidebar */}
              </Sider>
              <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} className="flex items-center justify-between px-4 border-b">
                  <Button type="text" icon={collapsed ? <ChevronsRight /> : <ChevronsLeft />} onClick={() => setCollapsed(!collapsed)} />
                  <div className="flex-1" /> {/* Spacer to push items to the right */}
                  <Space size="middle">
                    <Button type="text" icon={<HelpCircle />} />
                    <Button type="text" icon={<Bell />} />
                    <Dropdown menu={{ items: dropdownItems }} trigger={["click"]}>
                      <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100">
                        <Avatar size="large" src={mockUserProfile.profile_image} icon={<UserOutlined />} />
                        <span className="font-bold text-black hidden md:block">{mockUserProfile.full_names}</span>
                      </div>
                    </Dropdown>
                  </Space>
                </Header>
                <Content style={{ margin: "24px", padding: 24, minHeight: 280, background: colorBgContainer, borderRadius: borderRadiusLG }}>
                  {children}
                </Content>
              </Layout>
            </Layout>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
