"use client";

import { useRouter } from "next/navigation";
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
    return children;
  }
}
