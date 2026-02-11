import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/Layout';
import Home from './pages/Home';
import Courses from "./pages/Courses";

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBars, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

library.add( fab, faEnvelope, faBars, faChevronLeft);

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="courses" element={<Courses />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}