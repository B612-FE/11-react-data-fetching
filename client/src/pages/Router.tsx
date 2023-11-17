import { Route, Routes } from "react-router-dom";
import MainPage from "@pages/MainPage";
import DetailPage from "@pages/DetailPage";
import SearchPage from "@pages/SearchPage";
import Account from "@pages/Account";
import Login from "@pages/Login";
import Signup from "@pages/Signup";
import Navbar from "@components/Navbar";
import ProtectedRoute from "@components/ProtectedRoute";

const Router = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path=":movieId" element={<DetailPage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="account"
          element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default Router;
