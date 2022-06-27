import React, { FC } from "react";
import './index.css'

import { Routes, Route } from 'react-router-dom';

import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

import Layout from "./components/Layout/Layout";
import SinglePage from "./pages/SinglePage";
import EditPost from "./pages/EditPost";

const App: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="posts" element={<BlogPage />} />
                <Route path="posts/:id" element={<SinglePage />} />
                <Route path="posts/:id/edit" element={<EditPost />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}

export default App