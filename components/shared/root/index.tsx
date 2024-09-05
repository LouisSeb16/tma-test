"use client";
import { AppRoot } from "@telegram-apps/telegram-ui";
import React, { PropsWithChildren } from "react";
import {
  SDKProvider,
  useLaunchParams,
  useMiniApp,
  useThemeParams,
  useViewport,
  bindMiniAppCSSVars,
  bindThemeParamsCSSVars,
  bindViewportCSSVars,
} from "@telegram-apps/sdk-react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { useTelegramMock } from "@/sdk/hooks/useTelegramMock";

export function RootInner({ children }: PropsWithChildren) {

  console.log(process.env.NODE_ENV)
  if (process.env.NODE_ENV === "development") {
    useTelegramMock();
  }
  return <SDKProvider acceptCustomStyles>{children}</SDKProvider>;
}
