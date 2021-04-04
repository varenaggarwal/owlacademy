import "./styles.css";
import { Navbar } from "./components/Navbar";
import { VideoCollection } from "./components/VideoCollection";
import { VideoTheatre } from "./components/VideoTheatre";
import { useData } from "./context/data-context";
import { useVideoListing } from "./hooks/useVideoListing";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const { state } = useData();
  const { isLoading } = useVideoListing();
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<VideoCollection />} />
        <Route path="/watch/:videoId" element={<VideoTheatre />} />
      </Routes>
    </div>
  );
}
