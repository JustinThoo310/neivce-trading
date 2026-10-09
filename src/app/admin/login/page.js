export default function AdminLogin() {
  return (
    <div style={{
      minHeight:"100vh",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#e2e8f0",
      padding:"20px"
    }}>
      <div style={{
        width:"100%",
        maxWidth:"420px",
        background:"white",
        padding:"36px 30px",
        borderRadius:"14px",
        border:"1px solid #cbd5e1"
      }}>
        <h1 style={{textAlign:"center", margin:"0 0 28px 0", color:"#1e293b"}}>Admin Panel Login</h1>

        <div style={{display:"flex", flexDirection:"column", gap:"16px"}}>
          <div>
            <label style={{display:"block", marginBottom:"6px", color:"#334155"}}>Username</label>
            <input
              type="text"
              placeholder="Admin username"
              style={{width:"100%", padding:"11px", borderRadius:"7px", border:"1px solid #94a3b8"}}
            />
          </div>
          <div>
            <label style={{display:"block", marginBottom:"6px", color:"#334155"}}>Password</label>
            <input
              type="password"
              placeholder="Password"
              style={{width:"100%", padding:"11px", borderRadius:"7px", border:"1px solid #94a3b8"}}
            />
          </div>

          <a
            href="/admin/dashboard"
            style={{
              textAlign:"center",
              backgroundColor:"#2563eb",
              color:"white",
              textDecoration:"none",
              padding:"12px",
              borderRadius:"8px",
              marginTop:"8px",
              display:"block"
            }}
          >
            Sign In (Demo)
          </a>
        </div>
      </div>
    </div>
  )
}