import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const CV = lazy(() => import("./pages/CV"));
const Photography = lazy(() => import("./pages/Photography"));

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cv" element={<CV />} />
        <Route path="photography" element={<Photography />} />
      </Route>
    </Routes>
  );
}
