import "../styles/loginsidebar.css";
const LoginSidebar = () => {
  return (
    <div className="div">
      <img
        src="https://d2cudhp9dwbqkd.cloudfront.net/release-20250307/assets/banners/fringe-member-1134d82c.png"
        style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        alt="Fringe Member"
      />
      <div style={{ padding: "20px" }}>
        <h2 className="fs-4" style={{ color: "#77449B", textAlign: "left" }}>
          Score unlimited 2-for-1 tix to hundreds of Fringe shows as a Fringe
          Fanatic!
        </h2>
        <p style={{ fontSize: "16px", color: "#333", textAlign: "left" }}>
          By becoming a Fringe Member, you get access to discounts, exclusive
          giveaways, and so much more!
        </p>
        <a
          className="button"
          onMouseOver={(e) => (e.target.style.backgroundColor = "#663388")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#77449B")}
        >
          Become a Fringe Member
        </a>
      </div>
    </div>
  );
};

export default LoginSidebar;
