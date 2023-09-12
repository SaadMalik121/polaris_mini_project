import React from "react";
import { Route, Routes } from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import AddGraphic from "../pages/AddGraphic";
import GalleryListing from "../pages/GalleryListing";
import EditGraphic from "../pages/EditGraphic";

function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/gallery-listing" element={<GalleryListing />} />
      <Route path="/add-graphic" element={<AddGraphic />} />
      <Route path="/edit-graphic/:id" element={<EditGraphic />} />
    </Routes>
  );
}

export default MyRouter;
