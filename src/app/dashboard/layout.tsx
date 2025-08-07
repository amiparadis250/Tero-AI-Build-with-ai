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
import {
  Home,
  Bell,
  CreditCard,
  Video,
  MessageSquare,
  Lock,
  HelpCircle,
  Settings,
  LogOut,
  ChevronsLeft,
  ChevronsRight,
  Speech,
} from "lucide-react";

import "./../globals.css";
import antdTheme from "@/utils/config/antdConfig";

const { Header, Sider, Content } = Layout;

// Font configurations
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
};

const SIDEBAR_ITEMS: MenuItem[] = [
  { key: "home", icon: <Home size={20} />, label: "Home", path: "/dashboard" },
  // {
  //   key: "notification",
  //   icon: <Bell size={20} />,
  //   label: "Notification",
  //   path: "/dashboard/notification",
  // },
  // {
  //   key: "subscription",
  //   icon: <CreditCard size={20} />,
  //   label: "Subscription",
  //   path: "/dashboard/subscription",
  // },
  { key: "divider-1", type: "divider" },
  {
    key: "text-to-video",
    icon: <Video size={20} />,
    label: "Text To Video",
    path: "/dashboard/text-to-video", 
  },
  {
    key: "voice-to-video",
    icon: <Speech size={20} />,
    label: "Voice to Video",
    path: "/dashboard/voice-to-video", 
  },
  {
    key: "ai-chat",
    icon: <MessageSquare size={20} />,
    label: "AI Chat",
    path: "/dashboard/ai-chat", 
  },
  // {
  //   key: "unlock-premium",
  //   icon: <Lock size={20} />,
  //   label: "Unlock Premium",
  //   path: "dashboard//unlock-premium",
  // },
  { key: "divider-2", type: "divider" },
  { key: "help", icon: <HelpCircle size={20} />, label: "Help", path: "/help" },
  {
    key: "settings",
    icon: <Settings size={20} />,
    label: "Settings",
    path: "/dashboard/settings",
  },
  // {
  //   key: "logout",
  //   icon: <LogOut size={20} />,
  //   label: "Logout",
  //   path: "/logout",
  // },
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

  const mockUserProfile: UserProfile = {
    full_names: "Ami Paradis",
    profile_image:
      "https://res.cloudinary.com/dv9cz01fi/image/upload/v1738316635/lyh6k4nhu3sxe6t5u4ql.jpg",
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

  const menuItems: MenuProps["items"] = SIDEBAR_ITEMS.map((item) => {
    if (item.type === "divider") {
      return {
        type: "divider",
        key: item.key,
      };
    }
    return {
      key: item.key,
      icon: item.icon,
      label: item.label,
      onClick: item.key === "logout" ? handleLogout : undefined,
    };
  });

  const handleMenuClick = (e: { key: string }) => {
    const selectedItem = SIDEBAR_ITEMS.find((item) => item.key === e.key);
    if (selectedItem?.path && !selectedItem.type) {
      setActiveMenuKey(e.key);
      router.push(selectedItem.path);
    }
  };

  const dropdownItems: MenuProps["items"] = [
    { key: "profile", label: "Profile" },
    {
      key: "logout",
      danger: true,
      icon: <LogOut />,
      label: "Logout",
      onClick: handleLogout,
    },
  ];

  if (!isClient) return null;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AntdRegistry>
          <ConfigProvider theme={antdTheme}>
            <Layout className=" h-[100vh] bg-white">
              <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                className="h-full bg-white border-r"
                width={240}
                style={{
                  overflow: "auto",
                  height: "100vh",
                  left: 0,
                  background: colorBgContainer,
                }}
              >
                <div
                  className="relative flex items-center justify-center"
                  style={{ right: collapsed ? "0px" : "32px" }}
                >
                  <Image
                    src={images.logo}
                    alt="Tero AI"
                    width={collapsed ? 40 : 120}
                    height={40}
                  />
                </div>
                <Menu
                  theme="light"
                  mode="inline"
                  className="border-none"
                  selectedKeys={[activeMenuKey]}
                  items={menuItems}
                  onClick={handleMenuClick}
                />
                <div className="absolute left-0 right-0 px-4 bottom-4">
                  <Dropdown
                    menu={{ items: dropdownItems }}
                    trigger={["click"]}
                    placement="topRight"
                  >
                    <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100">
                      <Avatar
                        size="large"
                        src={mockUserProfile.profile_image}
                        icon={<UserOutlined />}
                      />
                      {!collapsed && (
                        <span className="font-bold text-black black">
                          {mockUserProfile.full_names}
                        </span>
                      )}
                    </div>
                  </Dropdown>
                </div>
              </Sider>
              <Layout>
                <Header
                  style={{ padding: 0, background: colorBgContainer }}
                  className="flex items-center justify-between px-4 border-b"
                >
                  {/* Sidebar Toggle Button */}
                  <Button
                    type="text"
                    icon={collapsed ? <ChevronsRight /> : <ChevronsLeft />}
                    onClick={() => setCollapsed(!collapsed)}
                  />

                  {/* Always Show Welcome Message on Larger Screens */}
                  <div
                    className={`flex-1 relative left-3 ${
                      collapsed ? "block" : "hidden"
                    } lg:block`}
                  >
                    <p className="text-sm font-medium text-black">{`Welcome, ${mockUserProfile.full_names}`}</p>
                  </div>

                  {/* Notification & Help Icons */}
                  <Space size="middle">
                    <Button type="text" icon={<HelpCircle />} />
                    <Button type="text" icon={<Bell />} />
                  </Space>
                </Header>

                <Content
                  style={{
                    margin: "24px",
                    padding: 24,
                    minHeight: 280,
                    background: colorBgContainer,
                    borderRadius: borderRadiusLG,
                  }}
                >
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
