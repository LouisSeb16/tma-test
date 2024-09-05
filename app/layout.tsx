import "@telegram-apps/telegram-ui/dist/styles.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Quicksand, Public_Sans, Poppins } from "next/font/google";
// import { AppRoot } from "@telegram-apps/telegram-ui";
import Footer from "@/components/layout/footer";
import Nav from "@/components/layout/nav";
import { ThemeProvider } from "@/components/shared/theme-provider";
import Container from "@/components/shared/containers";
import CircleAnimation from "@/components/shared/circle-animation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "200"
})

export const metadata: Metadata = {
  title: "NiZap Telegram Mini App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <Container className="py-[100px] absolute h-full w-full top-0 right-0 left-0 bottom-0 bg-[#0b0f1f] flex flex-col justify-center items-center overflow-x-hidden">
            <div className="absolute w-full h-[149px] bg-gradient-to-r from-[#fc7916] via-[#880ef7] to-[#1c4df0] opacity-20 blur-[100px] z-20 m-auto top-[100px]"></div>
            <div className="relative z-30 h-full w-full">{children}</div>
            <div className="absolute inset-0 z-20 h-full w-full bg-gradient-to-b from-[rgba(2,6,17,0.7)] via-[rgba(2,6,17,0.1)] to-[rgba(2,6,17,0.8)]">
              <img
                src="/images/maths.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <CircleAnimation />
          </Container>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
