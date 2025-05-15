import React from "react";

const items = [
  { name: "Dashboard", className: "fas fa-home", domain: "/" },
  { name: "Ayarlar", className: "fas fa-cog", domain: "/settings" },
  { name: "Kullanıcılar", className: "fas fa-users", domain: "/users" },
];

const Sidebar = () => {
  return (
    <div style={styles.sidebar}>
      <div style={styles.nav}>
        <a href="/" style={{ textDecoration: "none" }}>
          <h1 style={styles.title}>Aslan Panel</h1>
        </a>
      </div>

      <div style={styles.menu}>
        {items.map((item, index) => (
          <div key={index} style={styles.item} className="item">
            <i style={styles.icon} className={item.className}></i>
            <a href={item.domain} style={styles.link}>
              {item.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    width: "250px",
    minHeight: "100vh",
    backgroundColor: "#2f3547",
    color: "#fff",
    paddingTop: "20px",
    paddingLeft: "10px",
    paddingRight: "10px",
    boxSizing: "border-box",
  },
  nav: {
    textAlign: "center",
    marginBottom: "30px",
  },
  title: {
    color: "#fff",
    fontSize: "24px",
    margin: 0,
  },
  menu: {
    display: "flex",
    flexDirection: "column",
  },
  item: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#3c4356",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "15px",
    textDecoration: "none",
    transition: "background-color 0.2s",
  },
  icon: {
    fontSize: "20px",
    marginRight: "10px",
    color: "#ffffff",
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
  },
};

const mediaQuery = window.matchMedia("(max-width: 768px)");
if (mediaQuery.matches) {
  styles.sidebar.width = "100%";
  styles.sidebar.minHeight = "auto";
  styles.item.flexDirection = "row";
  styles.item.justifyContent = "flex-start";
}

export default Sidebar;
