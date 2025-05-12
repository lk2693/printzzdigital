// app/demos/ki-chatbot/page.tsx
"use client";

import ChatDemo from "@/components/ChatDemo";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ChatbotPage() {
  return (
    <>
      <Header />
      <ChatDemo />
      <Footer />
    </>
  );
}