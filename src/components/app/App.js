import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "../../pages/layouts/AppLayout";
import PostList from "../../pages/paginas/PostList";
import FormularioPost from "../../pages/paginas/FormularioPost";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<PostList />} />
        </Route>
        <Route path="/formulario" element={<AppLayout />}>
          <Route path=":id" element={<FormularioPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
