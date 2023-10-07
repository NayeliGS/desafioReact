import React from "react";
import { Outlet, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "../../index.css";
import "../../post.css";
import Navbarpost from "../../components/navbar/Navbarpost";
import Aside from "../../components/aside/Aside";
export default function AppLayout() {
  const { id } = useParams();
  return (
    <>
      {!id ? <Navbar /> : <Navbarpost />}

      <Outlet />
      {!id && <Aside />}
    </>
  );
}
