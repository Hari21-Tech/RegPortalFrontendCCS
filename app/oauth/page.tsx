"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OAuthRedirect() {
  const router = useRouter();

  //   useEffect(() => {
  //     const params = new URLSearchParams(window.location.search);
  //     const sessionId = params.get("session_id");

  //     if (sessionId) {
  //       localStorage.setItem("session_id", sessionId);
  //       console.log(sessionId);
  //       router.replace("/redirect");
  //     } else {
  //       router.replace("/login");
  //     }
  //   }, [router]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const name = params.get("name");
    const email = params.get("email");

    if (token) {
      localStorage.setItem("token", token);
      localStorage.setItem("name", name || "");
      localStorage.setItem("email", email || "");
      router.replace("/dashboard");
    } else {
      router.replace("/login");
    }
  }, []);

  return <p>Redirecting...</p>;
}
