export function VideoPlayer({ displayProperties }) {
  return (
    <>
      <video
        controls={displayProperties.controls}
        autoPlay={displayProperties.autoPlay}
        // preload="none"
        // poster="one-does-not-simply-placeholder.jpg"
        style={{ width: "100%", height: "auto" }}
        src={displayProperties.src}
      ></video>
    </>
  );
}
