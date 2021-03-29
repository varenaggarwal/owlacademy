import { Navbar } from "./components/Navbar";
import { VideoPlayer } from "./components/VideoPlayer";
import { useData } from "./context/data-context";
import "./styles.css";
import { useVideoListing } from "./hooks/useVideoListing";

export default function App() {
  const { state } = useData();
  const { isLoading } = useVideoListing();
  return (
    <div className="App">
      <Navbar />
      <VideoPlayer />
    </div>
  );
}
