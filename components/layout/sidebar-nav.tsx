// @ts-nocheck
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PlusCircle,
  Search as SearchIcon, // Renamed to avoid conflict if Search component is imported
  CalendarDays, // Changed from Calendar to CalendarDays for consistency
  FileText,
  LayoutDashboard,
  BookOpen,
  Accessibility,
  MessageSquare,
} from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const navItems = [
  { href: "#", label: "ADD", icon: PlusCircle, action: () => console.log("ADD clicked") },
  { href: "#", label: "FIND", icon: SearchIcon, action: () => console.log("FIND clicked") },
  { href: "#", label: "SCHEDULER", icon: CalendarDays, action: () => console.log("SCHEDULER clicked (placeholder)") }, 
  { href: "#", label: "DOCUMENTS", icon: FileText, action: () => console.log("DOCUMENTS clicked (placeholder)") }, 
  { href: "/", label: "DASHBOARD", icon: LayoutDashboard },
  { href: "#", label: "RESOURCES", icon: BookOpen, action: () => console.log("RESOURCES clicked (placeholder)") }, 
  { href: "#", label: "ACCESSIBILITY", icon: Accessibility, action: () => console.log("Accessibility clicked") },
  { href: "#", label: "CHAT", icon: MessageSquare, action: () => console.log("CHAT clicked") },
];

export default function SidebarNav() {
  const pathname = usePathname();

  const isItemActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    // For placeholder links, never active based on path
    if (href === "#") return false;
    // For actual pages, check if the path starts with the href
    return pathname.startsWith(href);
  };

  const handleLinkClick = (item: { action?: () => void; href: string; label: string; }, e: React.MouseEvent) => {
    if (item.action) {
      e.preventDefault();
      item.action();
    } else if (item.href === "#") {
      // If it's a placeholder href="#", also prevent default navigation
      e.preventDefault();
      console.log(`${item.label} clicked (placeholder link)`);
    }
    // Allow default navigation for actual links like /
  };


  return (
    <>
      <SidebarMenu className="p-2 flex-grow">
        {navItems.map((item) => (
          <SidebarMenuItem key={item.label}>
            <SidebarMenuButton
              asChild={!item.action && item.href !== "#"}
              variant="default"
              className="w-full justify-start"
              isActive={isItemActive(item.href)}
              tooltip={{ children: item.label, side: 'right', align: 'center' }}
              onClick={(e) => handleLinkClick(item, e)}
            >
              {item.action || item.href === "#" ? (
                 <div className="flex items-center gap-2 w-full">
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                </div>
              ) : (
                <Link href={item.href} className="flex items-center gap-2 w-full">
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </Link>
              )}
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </>
  );
}
