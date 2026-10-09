import fs from 'fs';
import path from 'path';

export default async function AdminDashboard() {
  let enquiries = [];
  try {
    const filePath = path.join(process.cwd(), 'enquiries.json');
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, 'utf8');
      enquiries = JSON.parse(raw);
    }
  } catch (err) {
    console.log('读取留言失败', err);
  }

  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <header style={{
        backgroundColor: "#1e293b",
        color: "white",
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <h2 style={{ margin: 0 }}>NEIVCE Trading PLT | Admin Dashboard</h2>
        <div>
          <span style={{ marginRight: "16px" }}>Admin User</span>
          <a href="/" style={{ color: "#93c5fd", textDecoration: "none" }}>View Website</a>
          &nbsp;|&nbsp;
          <a href="/admin/login" style={{ color: "#93c5fd", textDecoration: "none" }}>Logout</a>
        </div>
      </header>

      <div style={{ display: "flex" }}>
        <aside style={{
          width: "220px",
          backgroundColor: "#334155",
          minHeight: "calc(100vh - 62px)",
          padding: "24px 12px"
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <a href="/admin/dashboard" style={sidebarLinkStyle}>📊 Dashboard</a>
            <a href="/admin/edit" style={sidebarLinkStyle}>✏️ Edit Site Content</a>
            <a href="/" style={sidebarLinkStyle}>🌐 Visit Front‑end Site</a>
            <a href="/admin/login" style={sidebarLinkStyle}>🔒 Logout</a>
          </div>
        </aside>

        <main style={{ flex: 1, padding: "28px" }}>
          <h1 style={{ margin: "0 0 24px 0", color: "#1e293b" }}>Dashboard Overview</h1>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: "18px", marginBottom: "32px" }}>
            <div style={cardStyle}>
              <h3 style={{ margin: "0 0 6px 0" }}>Site Pages</h3>
              <p style={{ fontSize: "1.8rem", margin: 0 }}>4</p>
            </div>
            <div style={cardStyle}>
              <h3 style={{ margin: "0 0 6px 0" }}>Editable Contents</h3>
              <p style={{ fontSize: "1.8rem", margin: 0 }}>4</p>
            </div>
            <div style={cardStyle}>
              <h3 style={{ margin: "0 0 6px 0" }}>Services Count</h3>
              <p style={{ fontSize: "1.8rem", margin: 0 }}>3</p>
            </div>
            {/* 新增：收到留言数量卡片 */}
            <div style={cardStyle}>
              <h3 style={{ margin: "0 0 6px 0" }}>New Enquiries</h3>
              <p style={{ fontSize: "1.8rem", margin: 0 }}>{enquiries.length}</p>
            </div>
          </div>

          <div style={contentBoxStyle}>
            <h3 style={{ margin: "0 0 12px 0", color: "#1e293b" }}>Quick Actions</h3>
            <p style={{ color: "#475569" }}>Use the sidebar menu to modify website contents.</p>
            <a href="/admin/edit" style={{
              display: "inline-block",
              marginTop: "12px",
              backgroundColor: "#2563eb",
              color: "white",
              padding: "10px 20px",
              borderRadius: "8px",
              textDecoration: "none"
            }}>Go to Edit Content Page</a>
          </div>

          {/* ====== 访客留言列表区域 ====== */}
          <div style={{ ...contentBoxStyle, marginTop: "28px" }}>
            <h3 style={{ margin: "0 0 16px 0", color: "#1e293b" }}>📩 Contact Form Submissions</h3>
            {enquiries.length === 0 ? (
              <p style={{ color:"#64748b" }}>No contact form submissions yet.</p>
            ) : (
              <div style={{ display:"grid", gap:"16px" }}>
                {enquiries.map((item, idx) => (
                  <div key={idx} style={{
                    border:"1px solid #e2e8f0",
                    padding:"16px",
                    borderRadius:"10px",
                    background:"#f8fafc"
                  }}>
                    <p><strong>Name:</strong> {item.name}</p>
                    <p><strong>Email:</strong> {item.email}</p>
                    <p><strong>Message:</strong> {item.message}</p>
                    <p style={{color:"#475569", fontSize:"0.9rem"}}><strong>Submitted:</strong> {item.submitTime}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </main>
      </div>
    </div>
  )
}

const sidebarLinkStyle = {
  color: "#f1f5f9",
  textDecoration: "none",
  padding: "10px 14px",
  borderRadius: "8px",
  backgroundColor: "transparent"
}

const cardStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "12px",
  border: "1px solid #e2e8f0"
}

const contentBoxStyle = {
  background: "white",
  padding: "24px",
  borderRadius: "12px",
  border: "1px solid #e2e8f0"
}