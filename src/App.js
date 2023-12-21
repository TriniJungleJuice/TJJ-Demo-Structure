import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EventDetailPage } from "./screens/EventDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route element={<EventDetailPage />} path="/event-details" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
