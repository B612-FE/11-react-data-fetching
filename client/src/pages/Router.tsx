import { Outlet, Route, Routes } from "react-router-dom";
import MainPage from "@pages/MainPage";
import DetailPage from "@pages/DetailPage";
import SearchPage from "@pages/SearchPage";
import Navbar from "@components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path=":movieId" element={<DetailPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
