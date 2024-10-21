"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Validate token with the API
    const validateToken = async () => {
      try {
        const res = await fetch("/api/validate-token", { method: "GET" });
        const userInfo = await res.json();

        if (userInfo?.email) {
          setUser(userInfo);
          setLoading(false);
        } else {
          setLoading(false);
          router.push("/signin");
        }
      } catch (error) {
        setLoading(false);
        setIsError(true);
        router.push("/signin");
      } finally {
        setLoading(false);
      }
    };

    validateToken();
  }, [router]);

  return { user, isLoading: loading, isError };
};

export default useAuth;
