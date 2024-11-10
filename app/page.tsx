"use client";

import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (user) {
        router.replace("/home");
      } else {
        router.replace("/api/auth/login");
      }
    }
  }, [user, isLoading, router]);

  if (isLoading) return (
    <div className="flex justify-center items-center h-screen w-screen">
      <LoadingSpinner className='h-20 w-20' />
    </div>
  );
  return null;
}
