import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EventDetailPage } from "./screens/EventDetailPage";
import EventDemoPage from "./screens/EventDemoPage";
import EventListPage from "./screens/EventListPage";
import EventListPageNew from "./screens/EventListPageNew";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route element={<EventDetailPage />} path="/event-details" />
          <Route element={<EventDemoPage />} path="/event-demo" />
          <Route element={<EventListPage />} path="/event-list" />
          <Route element={<EventListPageNew />} path="/event-list-new" />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
