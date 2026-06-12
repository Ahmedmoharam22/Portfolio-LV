"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { VscFolderActive, VscTerminalLinux, VscHome, VscSignOut } from "react-icons/vsc";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const menuItems = [
    { name: "Overview", path: "/dashboard", icon: <VscHome size={18} /> },
    { name: "Manage Works", path: "/dashboard/projects", icon: <VscFolderActive size={18} /> },
    { name: "Manage Arsenal", path: "/dashboard/tech-stack", icon: <VscTerminalLinux size={18} /> },
  ];

  return (
    <div className="min-h-screen w-full bg-[#0A0A0A] text-luxury-white flex">
      
      {/* Executive Sidebar */}
      <aside className="w-64 border-r border-white/[0.04] bg-[#0F0F0F] p-6 flex flex-col justify-between fixed h-screen left-0 top-0 z-40">
        <div className="flex flex-col gap-12">
          {/* Logo / Brand */}
          <Link href="/" className="text-sm font-black tracking-[0.3em] uppercase text-gold-accent flex items-center gap-2">
            <span>MOHARAM</span>
            <span className="text-[10px] bg-white/5 text-luxury-muted px-2 py-0.5 rounded-md tracking-normal font-mono">CORE</span>
          </Link>

          {/* Navigation Items */}
          <nav className="flex flex-col gap-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl text-xs uppercase tracking-wider font-medium transition-all duration-300 group ${
                    isActive 
                      ? "bg-gold-accent text-luxury-black font-bold shadow-lg" 
                      : "text-luxury-muted hover:text-luxury-white hover:bg-white/[0.02]"
                  }`}
                >
                  <div className={`${isActive ? "text-luxury-black" : "text-luxury-muted group-hover:text-gold-accent"} transition-colors`}>
                    {item.icon}
                  </div>
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Exit Core Console */}
        <Link 
          href="/"
          className="flex items-center gap-4 px-4 py-3 rounded-xl text-xs uppercase tracking-wider font-medium text-red-400 hover:bg-red-500/5 transition-colors"
        >
          <VscSignOut size={18} />
          <span>Exit Console</span>
        </Link>
      </aside>

      {/* Main Content Render View */}
      <div className="flex-1 pl-64 min-h-screen bg-[#0A0A0A]">
        <header className="w-full border-b border-white/[0.02] py-6 px-8 flex items-center justify-between bg-[#0F0F0F]/30 backdrop-blur-md sticky top-0 z-30">
          <div className="text-xs uppercase tracking-widest text-luxury-muted">
            Control Console / <span className="text-luxury-white font-medium">{pathname === "/dashboard" ? "Overview" : "Subsystem"}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-[10px] uppercase tracking-wider text-luxury-muted">System Active</span>
          </div>
        </header>
        
        <main className="p-8 md:p-12 max-w-6xl mx-auto">
          {children}
        </main>
      </div>

    </div>
  );
}