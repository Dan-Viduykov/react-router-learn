import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import './Layout.css'

const Layout: FC = () => {
    return (
        <div className="layout">
            <div className="wrap">
                <header className="header">
                    <CustomLink to="/">home</CustomLink>
                    <CustomLink to="/posts">blog</CustomLink>
                    <CustomLink to="/about">about</CustomLink>
                </header>
                <main className="main">
                    <Outlet />
                </main>
                <footer className="footer">
                    footer
                </footer>
            </div>
        </div>
    )
}

export default Layout