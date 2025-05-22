"use client";

import UserNav from "@/components/layout/user-nav";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Logo from "@/components/logo";

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between border-b bg-card px-4 md:px-6 shadow-sm py-3 h-16">
      {/* Left Aligned: Sidebar Trigger */}
      <div className="flex-shrink-0">
        <SidebarTrigger />
      </div>

      {/* Center Aligned: Logo */}
      {/* This div takes up the available space and centers its content */}
      <div className="flex-1 flex justify-center">
        <Logo />
      </div>

      {/* Right Aligned: UserNav */}
      <div className="flex-shrink-0">
        <UserNav />
      </div>
    </header>
  );
}
