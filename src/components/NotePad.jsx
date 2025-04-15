export default function NotePad() {
  return (
    <div style={{ fontFamily: "JetBrainsMono-Regular, monospace" }}>
      <div
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: "#E8C999",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ color: "red", fontSize: "24px" }}>
            This text should be red and 24px
          </div>
          <textarea
            style={{
              width: "50%",
              height: "100px",
              padding: "1rem",
              outline: "none",
              borderBottom: "1px solid black",
              borderRadius: "0.5rem",
              color: "black",
              fontSize: "24px",
              fontFamily: "JetBrainsMono-Regular, monospace",
            }}
            placeholder="your note..."
          />
          <button
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              backgroundColor: "red",
              border: "1px solid black",
              borderRadius: "0.25rem",
            }}
          >
            Save Note
          </button>
        </div>
      </div>
    </div>
  );
}
