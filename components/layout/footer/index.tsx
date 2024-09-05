"use client";
import Container from "@/components/shared/containers";
import { cn } from "@/lib/utils";
import { Activity, ClipboardList, House } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface LinkComponent {
  icon: React.ReactElement;
  name: string;
  url: string;
  active: boolean;
}

const Footer = () => {
  const pathName = usePathname();

  return (
    <Container className="py-2 flex justify-between items-center fixed bottom-0 z-30 bg-[#0b0f1f]">
      {[
        {
          name: "Home",
          url: "/",
          icon: <House size={20} strokeWidth={2} />,
        },
        {
          name: "Tasks",
          url: "/tasks",
          icon: <ClipboardList size={20} strokeWidth={2} />,
        },
        {
          name: "Leaders",
          url: "/leaders",
          icon: <Activity size={20} strokeWidth={2} />,
        },
      ].map((data: any, index: any) => (
        <LinkComponent
          key={index}
          url={data.url}
          name={data.name}
          icon={data.icon}
          active={data.url === pathName}
        />
      ))}
    </Container>
  );
};

export default Footer;

export const LinkComponent = ({ icon, name, url, active }: LinkComponent) => {
  return (
    <Link href={url}>
      <div className={cn("flex flex-col justify-center items-center p-2")}>
        <i
          className={cn(
            "mb-1",
            active ? "text-white font-extrabold" : "text-[#ccc]"
          )}
        >
          {icon}
        </i>
        <p
          className={cn(
            "text-[15px]",
            active ? "text-white font-extrabold" : "text-[#ccc]"
          )}
        >
          {name}
        </p>
      </div>
    </Link>
  );
};
