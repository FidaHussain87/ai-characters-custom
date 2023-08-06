"use client";

import { Home, Plus, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const routes = [
    {
      icon: Home,
      label: "Home",
      path: "/",
      pro: false,
    },
    {
      icon: Plus,
      label: "Create",
      path: "/companion/new",
      pro: true,
    },
    {
      icon: Settings,
      label: "Settings",
      path: "/settings",
      pro: false,
    },
  ];

  const onNavigate = (path: string, pro: boolean) => {
    // TODO: Navigate to path
    return router.push(path);
  };
  return (
    <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
      <div className="p-3 flex flex-1 justify-center" >
        <div className="space-y-2">
          {routes.map((route) => (
            <div
              key={route.path}
              className={cn(
                "text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === route.path && "bg-primary/10 text-primary"
              )}
              onClick={() => onNavigate(route.path, route.pro)}
            >
              <div className="flex flex-col gap-y-2 items-center flex-1">
                <route.icon className="h-5 w-5" />
                {route.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
