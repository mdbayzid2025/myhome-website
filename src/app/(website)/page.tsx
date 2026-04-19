"use client";
import Spinner from "@/components/Spinner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [user] = useState(true);
  const [isLoading] = useState(false);
  if (isLoading) {
    return (
      <div className="bg-white h-[80vh] mx-6 rounded-3xl">
        <Spinner />
      </div>
    );
  }
  const router = useRouter();
  if (!user) {
    toast.error("Please Login to continue...");
    return router.push("/auth/login");
  }

  return router.push("/home");
}
