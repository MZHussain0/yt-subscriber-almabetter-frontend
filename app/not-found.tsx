"use client";
export default function Custom404() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#121212",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}>
      <h1 style={{ fontSize: "2.5rem" }}>Page Not Found :( </h1>
      <p style={{ fontSize: "1.25rem", margin: "1rem" }}>
        The resources you have been looking for is unavailable.
      </p>
      <a
        href="/"
        style={{
          marginTop: "2rem",
          padding: "10px 20px",
          fontSize: "1rem",
          color: "#ffffff",
          backgroundColor: "#0070f3",
          borderRadius: "5px",
          textDecoration: "none",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#0070f3")}>
        Go back home
      </a>
    </div>
  );
}
