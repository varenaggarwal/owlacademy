import { VideoPlayer } from "./components/VideoPlayer";
import { useData } from "./context/data-context";
import "./styles.css";

export default function App() {
  const { state } = useData();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <VideoPlayer />
      {console.log({ state })}
    </div>
  );
}
