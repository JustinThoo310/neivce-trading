import fs from 'fs';
import path from 'path';

export default async function Home() {
  // 读取根目录 content.json
  const jsonPath = path.join(process.cwd(), 'content.json');
  const fileRaw = fs.readFileSync(jsonPath, 'utf8');
  const content = JSON.parse(fileRaw);

  return (
    <div>
      {/* Hero / Banner 美化头部 */}
      <div style={{
        background: "linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)",
        padding: "40px 30px",
        borderRadius: "14px",
        marginBottom: "40px"
      }}>
        <h1 style={{fontSize:"2.6rem", margin:"0 0 10px 0", color:"#1e293b"}}>{content.companyName}</h1>
        <h2 style={{fontSize:"1.7rem", fontWeight:"500", margin:"0 0 18px 0", color:"#334155"}}>Your Trusted Local IT Service Provider</h2>

        <p style={{lineHeight:"1.7", fontSize:"1.05rem", maxWidth:"800px", color:"#334155"}}>
          {content.aboutDesc}
        </p>
        <p style={{margin:"20px 0 0 0", fontWeight:"500", fontSize:"1.05rem"}}>
          {content.homeAnnouncement}
        </p>

        {/* 简单按钮 */}
        <div style={{marginTop:"24px"}}>
          <a href="/contact" style={{
            display:"inline-block",
            backgroundColor:"#2563eb",
            color:"white",
            padding:"12px 24px",
            borderRadius:"8px",
            textDecoration:"none",
            fontWeight:"500"
          }}>Contact Us for Quotation</a>
        </div>
      </div>

      <h3 style={{fontSize:"1.5rem", marginTop:"0", color:"#1e293b"}}>About Our Company</h3>
      <p style={{lineHeight:"1.75", fontSize:"1rem", color:"#334155"}}>
        {content.aboutDesc}
      </p>

      <h3 style={{fontSize:"1.5rem", marginTop:"36px", color:"#1e293b"}}>Our Main Services</h3>

      <div style={{
        background:"#f1f5f9",
        padding:"22px",
        borderRadius:"12px",
        margin:"18px 0",
        border:"1px solid #e2e8f0"
      }}>
        <h4 style={{margin:"0 0 10px 0", fontSize:"1.2rem", color:"#1e40af"}}>E‑commerce</h4>
        <p style={{margin:0, lineHeight:"1.75", color:"#334155"}}>
          {content.serviceEcom}
        </p>
      </div>

      <div style={{
        background:"#f1f5f9",
        padding:"22px",
        borderRadius:"12px",
        margin:"18px 0",
        border:"1px solid #e2e8f0"
      }}>
        <h4 style={{margin:"0 0 10px 0", fontSize:"1.2rem", color:"#1e40af"}}>Computer Programming Services</h4>
        <p style={{margin:0, lineHeight:"1.75", color:"#334155"}}>
          {content.serviceDev}
        </p>
      </div>

      <div style={{
        background:"#f1f5f9",
        padding:"22px",
        borderRadius:"12px",
        margin:"18px 0",
        border:"1px solid #e2e8f0"
      }}>
        <h4 style={{margin:"0 0 10px 0", fontSize:"1.2rem", color:"#1e40af"}}>IT Skills Training</h4>
        <p style={{margin:0, lineHeight:"1.75", color:"#334155"}}>
          {content.serviceTraining}
        </p>
      </div>
    </div>
  )
}