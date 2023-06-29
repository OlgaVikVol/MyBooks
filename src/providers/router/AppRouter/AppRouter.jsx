import React from "react";
import { Route, Routes } from "react-router-dom";
import BooksPage from "../../../pages/BooksPage/BooksPage";
import NewsPage from "../../../pages/NewsPage/NewsPage";
import NotFoundPage from "../../../pages/NotFoundPage/NotFoundPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<BooksPage />} />
      <Route path="/news" element={<NewsPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRouter;
