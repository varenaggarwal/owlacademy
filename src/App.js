import "./styles.css";
import { Navbar } from "./components/Navbar";
import { VideoCollection } from "./components/VideoCollection";
import { VideoTheatre } from "./components/VideoTheatre";
import { useData } from "./context/data-context";
import { useVideoListing } from "./hooks/useVideoListing";
import { Routes, Route } from "react-router-dom";
import { LostPage } from "./components/LostPage";
import { WatchHistory } from "./components/WatchHistory";
import { Bookmarked } from "./components/Bookmarked";
import { Playlists } from "./components/Playlists";
import { SideMenu } from "./components/SideMenu";

export default function App() {
  const { state } = useData();
  const { isLoading } = useVideoListing();
  return (
    <div className="App">
      <div className="main-container">
        {/* <Navbar /> */}
        <SideMenu />
        <Routes>
          <Route path="/" element={<VideoCollection />} />
          <Route path="/history" element={<WatchHistory />} />
          <Route path="/bookmarked" element={<Bookmarked />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/watch/:videoId" element={<VideoTheatre />} />
          <Route path="*" element={<LostPage />} />
        </Routes>
      </div>
    </div>
  );
}
