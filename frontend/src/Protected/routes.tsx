import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import useAuth from "../hooks/useAuth";

import { ReactNode } from "react";

interface ProtectedRoutesProps {
  children: ReactNode;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ children }) => {
  const { user, isLoading, isError } = useAuth();
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  if (!isError && user?._id) {
    return children;
  }

  if (!isLoading && !user?._id) {
    navigate("/login");
  }
};

export default ProtectedRoutes;
