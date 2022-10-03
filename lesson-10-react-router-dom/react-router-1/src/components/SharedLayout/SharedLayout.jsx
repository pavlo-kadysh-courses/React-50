import React from "react"
import Navbar from "../Navbar/Navbar"
import { Outlet } from "react-router-dom";

export default function SharedLayout() {
  return (
        <>
            <Navbar />
            <Outlet />
            <footer>Copyright 2022 &copy;</footer>
        </>
  )
}
