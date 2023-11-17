import { useNavigate } from "react-router-dom";
import { UserAuth } from "@atoms/AuthContext";

const ProtectedRoute = ({ children }: any) => {
  const { user } = UserAuth();
  const navigate = useNavigate();

  if (!user) {
    return navigate("/");
  } else {
    return children;
  }
};

export default ProtectedRoute;
