import { Navbar } from "./components/Navbar";
import { VideoPlayer } from "./components/VideoPlayer";
import { VideoCollection } from "./components/VideoCollection";
import { VideoTheatre } from "./components/VideoTheatre";
import { useData } from "./context/data-context";
import "./styles.css";
import { useVideoListing } from "./hooks/useVideoListing";

export default function App() {
  const { state } = useData();
  const { isLoading } = useVideoListing();
  return (
    <div className="App">
      <Navbar />
      {state.route === "videoCollection" && <VideoCollection />}
      {state.route === "videoTheatre" && <VideoTheatre />}
    </div>
  );
}
