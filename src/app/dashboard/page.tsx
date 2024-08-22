"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    redirect("/dashboard/overview");
  }, []);

  return <div>Redirecting to Dashboard/Overview...</div>;
}
