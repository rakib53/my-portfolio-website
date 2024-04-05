"use client";

import React, { useState } from "react";
import styles from "./Login.module.css";
import { useRouter } from "next/navigation";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_LOCALHOST_API}/login`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData?.email,
          password: formData?.password,
        }),
      }
    );
    const userData = await response.json();
    if (userData?.email) {
      router.push("/dashboard");
    } else {
      router.push("/");
    }
  };
  return (
    <div className="container">
      <h2 style={{ color: "white" }}>Admin login</h2>
      <div>
        <form onSubmit={handleLogin}>
          <div className={styles.field}>
            <label htmlFor="email" style={{ color: "#ddd" }}>
              Email*
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="email" style={{ color: "#ddd" }}>
              Password*
            </label>
            <input
              type="password"
              placeholder="Enter your Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <div className={styles.field}>
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}
