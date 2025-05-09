const baseText = {
  fontSize: "18px",
  fontWeight: "500",
  color: "#f0f0f0",
  marginLeft: "16px",
  marginBottom: "6px",
};

const styles =  {
    userContainer: {
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // elevation yerine
        border: "1px solid #10C4E8",
        padding: "16px",
    },

    userIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#10C4E8",
    fontSize: "60px",
    marginBottom: "16px",
  },
  userName: {
    ...baseText,
    fontSize: "22px",
    fontWeight: "bold",
  },
  userEmail: {
    ...baseText,
    fontStyle: "italic",
    color: "#ccc",
  },
  userStatusText: {
    ...baseText,
    color: "#4CAF50", // yeşil statü rengi
    fontWeight: "bold",
  },
  role: {
    ...baseText,
    marginTop: "20px",
    fontSize: "20px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: "#10C4E8",
  },

}
export default styles;