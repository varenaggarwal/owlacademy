import { Navbar } from "./components/Navbar";
import { VideoPlayer } from "./components/VideoPlayer";
import { useData } from "./context/data-context";
import "./styles.css";

export default function App() {
  const { state } = useData();
  return (
    <div className="App">
      <Navbar />
      <VideoPlayer />
      {console.log({ state })}
    </div>
  );
}
