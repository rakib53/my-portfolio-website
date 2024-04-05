"use client";

import React, { useState } from "react";

export default function HomeLogin() {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_LOCALHOST_API}/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: loginInfo?.email,
          password: loginInfo?.password,
        }),
        credentials: "include",
      }
    );
    const userData = await response.json();
    console.log(userData);
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Enter your email"
        style={{ padding: "10px" }}
        value={loginInfo.email}
        onChange={(e) =>
          setLoginInfo({
            ...loginInfo,
            email: e.target.value,
          })
        }
      />
      <input
        type="password"
        placeholder="Enter your password"
        style={{ padding: "10px" }}
        value={loginInfo.password}
        onChange={(e) =>
          setLoginInfo({
            ...loginInfo,
            password: e.target.value,
          })
        }
      />
      <button style={{ padding: "10px" }} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
