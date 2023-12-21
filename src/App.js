import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EventDetailPage } from "./screens/EventDetailPage";
import EventDemoPage from "./screens/EventDemoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route element={<EventDetailPage />} path="/event-details" />
          <Route element={<EventDemoPage />} path="/event-demo" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
