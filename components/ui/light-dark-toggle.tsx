"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

type Props = {
  className?: string;
};

export function LightDarkToggle({ className }: Props) {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={className}
          onClick={() => {
            setTheme(resolvedTheme === "dark" ? "light" : "dark");
          }}
        >
          <Button>
            <MoonIcon className="block dark:hidden" />
            <SunIcon className="hidden dark:block" />
          </Button>
        </TooltipTrigger>

        <TooltipContent>
          <span className="hidden dark:inline">Enable light mode</span>
          <span className="inline dark:hidden">Enable dark mode</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
