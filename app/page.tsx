export default function Home() {
  return (
    <main
      style={{
        background: "#071420",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "50px"
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "64px",
            fontWeight: 700
          }}
        >
          AIMCS
        </h1>

        <h2
          style={{
            marginTop: 20,
            fontSize: "32px"
          }}
        >
          Association for Intelligence in Medicine and Clinical Skills
        </h2>

        <p
          style={{
            marginTop: 30,
            color: "#cbd5e1",
            maxWidth: 700,
            marginInline: "auto",
            fontSize: "20px"
          }}
        >
          Building the future of scientific publishing through Artificial
          Intelligence, peer review, and clinical innovation.
        </p>

        <button
          style={{
            marginTop: 40,
            padding: "18px 40px",
            background: "#0ea5e9",
            border: "none",
            borderRadius: 12,
            color: "white",
            fontSize: 18,
            cursor: "pointer"
          }}
        >
          Submit Manuscript
        </button>
      </div>
    </main>
  );
}
