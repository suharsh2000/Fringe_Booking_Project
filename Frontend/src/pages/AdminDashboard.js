const AdminDashboard = () => {
    return (
      <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh", 
        backgroundColor: "#f5f5f5" 
      }}>
        <div style={{ 
          width: "300px", 
          padding: "20px", 
          borderRadius: "10px", 
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", 
          backgroundColor: "#fff", 
          textAlign: "center" 
        }}>
          <h2 style={{ color: "#77449B", marginBottom: "15px" }}>Admin Dashboard</h2>
          <button 
            style={{ 
              padding: "10px 20px", 
              backgroundColor: "#77449B", 
              color: "#fff", 
              border: "none", 
              borderRadius: "5px", 
              cursor: "pointer", 
              fontSize: "16px", 
              transition: "background 0.3s" 
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#663388")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#77449B")}
          >
            Add Show
          </button>
        </div>
      </div>
    );
  };
  
  export default AdminDashboard;