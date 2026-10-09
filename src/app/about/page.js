import fs from 'fs';
import path from 'path';

export default async function About() {
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
        <h1 style={{fontSize:"2.2rem", margin:"0 0 12px 0", color:"#1e293b"}}>About {content.companyName}</h1>
        <hr style={{margin:"16px 0", borderColor:"#94a3b8"}}/>
        <p style={{lineHeight:"1.75", fontSize:"1rem", color:"#334155"}}>
          {content.aboutDesc}
        </p>
      </div>

      <div style={{background:"#f1f5f9", padding:"22px", borderRadius:"12px", margin:"18px 0", border:"1px solid #e2e8f0"}}>
        <h3 style={{fontSize:"1.4rem", marginTop:"0", color:"#1e40af"}}>Our Mission</h3>
        <p style={{lineHeight:"1.75", color:"#334155"}}>
          To make digital tools and IT knowledge accessible for small‑medium businesses and local people,
          helping them grow in the digital economy with practical, low‑cost IT solutions.
        </p>
      </div>

      <div style={{background:"#f1f5f9", padding:"22px", borderRadius:"12px", margin:"18px 0", border:"1px solid #e2e8f0"}}>
        <h3 style={{fontSize:"1.4rem", marginTop:"0", color:"#1e40af"}}>Our Vision</h3>
        <p style={{lineHeight:"1.75", color:"#334155"}}>
          Become the trusted local IT service partner for businesses around Kajang and Selangor,
          supporting local digital transformation.
        </p>
      </div>

      {/* 新增：核心价值观 Our Values */}
      <div style={{background:"#f1f5f9", padding:"22px", borderRadius:"12px", margin:"18px 0", border:"1px solid #e2e8f0"}}>
        <h3 style={{fontSize:"1.4rem", marginTop:"0", color:"#1e40af"}}>Our Values</h3>
        <ul style={{lineHeight:"2", margin:"8px 0 0 20px", padding:0, color:"#334155"}}>
          <li>Customer‑oriented: Put client needs at the centre of every service</li>
          <li>Practicality: Deliver real‑world, affordable IT solutions</li>
          <li>Integrity: Honest and transparent business communication</li>
          <li>Continuous learning: Keep improving our technology and services</li>
        </ul>
      </div>
    </div>
  )
}