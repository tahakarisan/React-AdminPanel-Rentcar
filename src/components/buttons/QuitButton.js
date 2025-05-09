import React, { useState } from "react";

const QuitButton = () => {
  const [hover, setHover] = useState(false);

  const styles = {
    quitButton: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: hover ? "white" : "red",
      color: hover ? "red" : "#ffffff",
      border: "none",
      fontSize: "20px",
      fontWeight: "bold",
      marginTop: "20px",
      padding: "10px 20px",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "all 0.3s ease",
    },
  };

  return (
    <button
      style={styles.quitButton}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      Çıkış
    </button>
  );
};
export default QuitButton;