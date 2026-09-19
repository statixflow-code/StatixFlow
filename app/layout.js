import "./globals.css";
import localFont from 'next/font/local';
const myfont = localFont({
  src: "./fonts/myfont2.ttf"
})
export const metadata = {
  title: "Statixflow -IT Training Center",
  description: "Explore top-tier tech courses, industry certifications, and hands-on live labs on Statixflow.",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`min-h-screen bg-white text-[#02295d] flex flex-col antialiased selection:bg-[#25d462] selection:text-white ${myfont.className}`}>
        {children}
      </body>
    </html>
  );
}
