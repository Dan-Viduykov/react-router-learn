import React, { FC } from "react";
import './index.css'

import { Routes, Route, Link } from 'react-router-dom'
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";



const App: FC = () => {
    return (
        <>
            <header className="header">
                <Link to="/">home</Link>
                <Link to="/posts">blog</Link>
                <Link to="/about">about</Link>
            </header>
            <div>
                <h1>Get started with React-Router v6</h1>
            </div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/posts" element={<BlogPage />} />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </>
    )
}

export default App