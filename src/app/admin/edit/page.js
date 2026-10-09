'use client';
import { useEffect, useState } from 'react';

export default function AdminEditContent() {
  const [formData, setFormData] = useState(null);

  // 调用后端API读取json
  async function loadContent() {
    const res = await fetch('/api/get-content');
    const json = await res.json();
    setFormData(json);
  }

  useEffect(()=>{
    loadContent();
  },[]);

  async function handleSave(e) {
    e.preventDefault();
    const resp = await fetch('/api/save-content', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(formData)
    });
    const result = await resp.json();
    if(result.success){
      alert("Saved successfully! Now refresh your front‑end pages to see changes.");
    }else{
      alert("Save failed! Check terminal log.");
    }
  }

  if(!formData) return <div style={{padding:"40px"}}>Loading...</div>;

  return (
    <div style={{backgroundColor:"#f8fafc", minHeight:"100vh"}}>
      <header style={{
        backgroundColor:"#1e293b",
        color:"white",
        padding:"16px 24px",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
      }}>
        <h2 style={{margin:0}}>NEIVCE Trading PLT | Content Editor</h2>
        <div>
          <a href="/admin/dashboard" style={{color:"#93c5fd", textDecoration:"none"}}>Back to Dashboard</a>
          &nbsp;|&nbsp;
          <a href="/admin/login" style={{color:"#93c5fd", textDecoration:"none"}}>Logout</a>
        </div>
      </header>

      <div style={{display:"flex"}}>
        <aside style={{
          width:"220px",
          backgroundColor:"#334155",
          minHeight:"calc(100vh - 62px)",
          padding:"24px 12px"
        }}>
          <div style={{display:"flex", flexDirection:"column", gap:"10px"}}>
            <a href="/admin/dashboard" style={sidebarLinkStyle}>📊 Dashboard</a>
            <a href="/admin/edit" style={sidebarLinkStyle}>✏️ Edit Site Content</a>
            <a href="/" style={sidebarLinkStyle}>🌐 Visit Front‑end Site</a>
            <a href="/admin/login" style={sidebarLinkStyle}>🔒 Logout</a>
          </div>
        </aside>

        <main style={{flex:1, padding:"28px"}}>
          <h1 style={{margin:"0 0 28px 0", color:"#1e293b"}}>Edit Website Contents</h1>
          <form onSubmit={handleSave}>
            <div style={formBlockStyle}>
              <h3 style={{margin:"0 0 12px 0", color:"#1e40af"}}>1. Home Page Announcement</h3>
              <label style={{display:"block", marginBottom:"6px", color:"#334155"}}>Announcement Text</label>
              <textarea
                rows={3}
                style={textareaStyle}
                value={formData.homeAnnouncement}
                onChange={(e)=>setFormData({...formData, homeAnnouncement:e.target.value})}
              ></textarea>
            </div>

            <div style={formBlockStyle}>
              <h3 style={{margin:"0 0 12px 0", color:"#1e40af"}}>2. Company Profile (About Page)</h3>
              <label style={{display:"block", marginBottom:"6px", color:"#334155"}}>About Description</label>
              <textarea
                rows={5}
                style={textareaStyle}
                value={formData.aboutDesc}
                onChange={(e)=>setFormData({...formData, aboutDesc:e.target.value})}
              ></textarea>
            </div>

            <div style={formBlockStyle}>
              <h3 style={{margin:"0 0 12px 0", color:"#1e40af"}}>3. Services Descriptions</h3>

              <div style={{marginBottom:"14px"}}>
                <label style={{display:"block", marginBottom:"4px", color:"#334155"}}>E‑Commerce Solutions</label>
                <textarea rows={2} style={textareaStyle} value={formData.serviceEcom} onChange={(e)=>setFormData({...formData, serviceEcom:e.target.value})}></textarea>
              </div>

              <div style={{marginBottom:"14px"}}>
                <label style={{display:"block", marginBottom:"4px", color:"#334155"}}>Custom Software & Web Development</label>
                <textarea rows={2} style={textareaStyle} value={formData.serviceDev} onChange={(e)=>setFormData({...formData, serviceDev:e.target.value})}></textarea>
              </div>

              <div>
                <label style={{display:"block", marginBottom:"4px", color:"#334155"}}>IT Skills Training</label>
                <textarea rows={2} style={textareaStyle} value={formData.serviceTraining} onChange={(e)=>setFormData({...formData, serviceTraining:e.target.value})}></textarea>
              </div>
            </div>

            <div style={formBlockStyle}>
              <h3 style={{margin:"0 0 12px 0", color:"#1e40af"}}>4. Contact Information</h3>

              <div style={{marginBottom:"12px"}}>
                <label style={{display:"block", marginBottom:"4px", color:"#334155"}}>Company Name</label>
                <input type="text" style={inputStyle} value={formData.companyName} onChange={(e)=>setFormData({...formData, companyName:e.target.value})}/>
              </div>
              <div style={{marginBottom:"12px"}}>
                <label style={{display:"block", marginBottom:"4px", color:"#334155"}}>Location / Address</label>
                <input type="text" style={inputStyle} value={formData.address} onChange={(e)=>setFormData({...formData, address:e.target.value})}/>
              </div>
              <div style={{marginBottom:"12px"}}>
                <label style={{display:"block", marginBottom:"4px", color:"#334155"}}>Email</label>
                <input type="email" style={inputStyle} value={formData.email} onChange={(e)=>setFormData({...formData, email:e.target.value})}/>
              </div>
              <div style={{marginBottom:"12px"}}>
                <label style={{display:"block", marginBottom:"4px", color:"#334155"}}>Phone Number</label>
                <input type="text" style={inputStyle} value={formData.phone} onChange={(e)=>setFormData({...formData, phone:e.target.value})}/>
              </div>
              <div>
                <label style={{display:"block", marginBottom:"4px", color:"#334155"}}>Business Hours</label>
                <input type="text" style={inputStyle} value={formData.businessHour} onChange={(e)=>setFormData({...formData, businessHour:e.target.value})}/>
              </div>
            </div>

            <div style={{marginTop:"30px"}}>
              <button type="submit" style={saveBtnStyle}>💾 Save All Changes</button>
              <p style={{fontSize:"0.9rem", color:"#64748b", marginTop:"8px"}}>After saving, refresh front‑end pages to view updated content.</p>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}

const sidebarLinkStyle = {
  color:"#f1f5f9",
  textDecoration:"none",
  padding:"10px 14px",
  borderRadius:"8px",
  backgroundColor:"transparent"
}

const formBlockStyle = {
  background:"white",
  padding:"24px",
  borderRadius:"12px",
  border:"1px solid #e2e8f0",
  marginBottom:"22px"
}

const inputStyle = {
  width:"100%",
  padding:"11px",
  borderRadius:"7px",
  border:"1px solid #94a3b8"
}

const textareaStyle = {
  width:"100%",
  padding:"11px",
  borderRadius:"7px",
  border:"1px solid #94a3b8",
  resize:"vertical"
}

const saveBtnStyle = {
  backgroundColor:"#16a34a",
  color:"white",
  border:"none",
  padding:"12px 28px",
  borderRadius:"8px",
  fontSize:"1rem"
}