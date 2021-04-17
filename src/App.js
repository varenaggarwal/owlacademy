import "./styles.css";
import { Navbar } from "./components/Navbar";
import { VideoCollection } from "./pages/VideoCollection";
import { VideoTheatre } from "./pages/VideoTheatre";
import { useData } from "./contexts/data-context";
import { useVideoListing } from "./hooks/useVideoListing";
import { Routes, Route } from "react-router-dom";
import { LostPage } from "./pages/LostPage";
import { WatchHistory } from "./pages/private/WatchHistory";
import { Bookmarked } from "./pages/private/Bookmarked";
import { Playlists } from "./pages/private/Playlists";
import { SideMenu } from "./components/SideMenu";
import { Login } from "./pages/Login";
import { BottomNavigation } from "./components/BottomNavigation";

export default function App() {
  const { state } = useData();
  const { isLoading } = useVideoListing();
  return (
    <div className="App">
      <div className="main-container">
        <Navbar />
        <SideMenu />
        <Routes>
          <Route path="/" element={<VideoCollection />} />
          <Route path="/history" element={<WatchHistory />} />
          <Route path="/bookmarked" element={<Bookmarked />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/watch/:videoId" element={<VideoTheatre />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<LostPage />} />
        </Routes>
        <BottomNavigation />
      </div>
    </div>
  );
}
