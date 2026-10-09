import fs from 'fs';
import path from 'path';

export default async function Services() {
  const jsonPath = path.join(process.cwd(), 'content.json');
  const fileRaw = fs.readFileSync(jsonPath, 'utf8');
  const content = JSON.parse(fileRaw);

  return (
    <div>
      <div style={{
        background: "linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)",
        padding: "32px 28px",
        borderRadius: "14px",
        marginBottom: "36px"
      }}>
        <h1 style={{fontSize:"2.2rem", margin:"0 0 12px 0", color:"#1e293b"}}>Our Services</h1>
        <hr style={{margin:"16px 0", borderColor:"#94a3b8"}}/>
        <p style={{lineHeight:"1.75", fontSize:"1rem", color:"#334155"}}>
          {content.companyName} provides comprehensive IT‑related services for local businesses and individual learners.
        </p>
      </div>

      <div style={{background:"#f1f5f9", padding:"22px", borderRadius:"12px", margin:"18px 0", border:"1px solid #e2e8f0"}}>
        <h3 style={{fontSize:"1.4rem", marginTop:"0", color:"#1e40af"}}>E‑Commerce Solutions</h3>
        <p style={{lineHeight:"1.75", color:"#334155"}}>
          {content.serviceEcom}
        </p>
      </div>

      <div style={{background:"#f1f5f9", padding:"22px", borderRadius:"12px", margin:"18px 0", border:"1px solid #e2e8f0"}}>
        <h3 style={{fontSize:"1.4rem", marginTop:"0", color:"#1e40af"}}>Custom Software & Web Development</h3>
        <p style={{lineHeight:"1.75", color:"#334155"}}>
          {content.serviceDev}
        </p>
      </div>

      <div style={{background:"#f1f5f9", padding:"22px", borderRadius:"12px", margin:"18px 0", border:"1px solid #e2e8f0"}}>
        <h3 style={{fontSize:"1.4rem", marginTop:"0", color:"#1e40af"}}>IT Skills Training</h3>
        <p style={{lineHeight:"1.75", color:"#334155"}}>
          {content.serviceTraining}
        </p>
      </div>
    </div>
  )
}