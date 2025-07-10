"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function OAuthRedirect() {
  const router = useRouter();

  // useEffect(() => {
  //   const params = new URLSearchParams(window.location.search);
  //   const token = params.get("token");
  //   const name = params.get("name");
  //   const email = params.get("email");

  //   if (token) {
  //     localStorage.setItem("token", token);
  //     localStorage.setItem("name", name || "");
  //     localStorage.setItem("email", email || "");
  //     router.replace("/register");
  //   } else {
  //     router.replace("/login");
  //   }
  // }, []);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_CALLBACK_URL}`, {
      credentials: "include",
    })
      .then(async (res) => {
        if (!res.ok) throw new Error("Unauthorized");
        const data = await res.json();

        localStorage.setItem("name", data.name);
        localStorage.setItem("email", data.email);

        router.replace("/register");
      })
      .catch(() => {
        router.replace("/login");
      });
  }, []);

  return <p>Redirecting...</p>;
}
