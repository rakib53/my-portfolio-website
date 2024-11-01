import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axios/axiosInstance";
import { UserInfo } from "../helper/types";

const useAuth = () => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Validate token with the API
    const validateToken = async () => {
      try {
        const response = await axiosInstance.get("/user-info");
        if (response.data?.data?.email) {
          setUser(response.data?.data);
          setLoading(false);
        } else {
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        setIsError(true);
      } finally {
        setLoading(false);
      }
    };

    validateToken();
  }, [navigate]);

  return { user, isLoading: loading, isError };
};

export default useAuth;
