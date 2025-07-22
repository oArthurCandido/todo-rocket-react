import React from "react";
import Container from "../components/Container";
import { NavLink, Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <Container as="header" className="mt-2 md:mt-20">Olá mundo - HEADER</Container>
      <main className="mt-2 md:mt-20">
        <Outlet />
      </main>
      <footer className="mt-2 md:mt-20">
        <nav className="flex items-center justify-center gap-4">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/components"}>Components</NavLink>
        </nav>
      </footer>
    </>
  );
};

export default MainLayout;
