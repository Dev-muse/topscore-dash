import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
 import AppHeader from "@/components/layout/app-header";
import SidebarNav from "@/components/layout/sidebar-nav";
// Logo import removed as it's no longer used directly here
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarHeader, 
  SidebarContent, 
  SidebarInset,
  SidebarRail
} from "@/components/ui/sidebar";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TopScore Dashboard',
  description: 'Manage your hiring pipeline efficiently.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}>
        <SidebarProvider>
          <Sidebar>
            <SidebarHeader>
              {/* Logo component removed from here */}
            </SidebarHeader>
            <SidebarContent>
              <SidebarNav />
            </SidebarContent>
            {/* SidebarFooter can be used if SidebarNav doesn't handle its own bottom content like "Upgrade to Pro" */}
            {/* For now, SidebarNav includes the "Upgrade to Pro" section */}
          </Sidebar>
          <SidebarRail />
          <SidebarInset>
            <AppHeader />
            <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
              {children}
            </main>
          </SidebarInset>
        </SidebarProvider>
       </body>
    </html>
  );
}
