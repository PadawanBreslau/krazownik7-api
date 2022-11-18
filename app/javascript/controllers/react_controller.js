import { Controller } from "@hotwired/stimulus"
import React from 'react'
import { createRoot } from 'react-dom/client'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Challenges from "../components/Challenges"
import Points from "../components/Points"
import Home from '../components/Home'

export default class extends Controller {
  connect() {
      console.log('Odpalamy krążownika');
      console.log('Русский военный корабль, иди нахуй');
      const app = document.getElementById('app');

      createRoot(app).render(
        <BrowserRouter>
          <Routes>
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/points" element={<Points />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      );
  }
}
