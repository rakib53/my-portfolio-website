"use client";

import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import useAuth from "../hooks/useAuth";

export default function layout({ children }) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="loadingMiddle">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  if (!isLoading && !user?._id) {
    router.push("/signin");
  }

  if (user) {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
        <div style={{ marginTop: "30px" }}>
          <Navbar />
        </div>
        <div>{children}</div>
      </div>
    );
  }
}
