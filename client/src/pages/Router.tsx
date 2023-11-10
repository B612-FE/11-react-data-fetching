import { Outlet, Route, Routes } from "react-router-dom";
import MainPage from "@pages/MainPage";
import DetailPage from "@pages/DetailPage";
import SearchPage from "@pages/SearchPage";
import Nav from "@components/Nav";
import Footer from "@components/Footer";

const Layout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
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
