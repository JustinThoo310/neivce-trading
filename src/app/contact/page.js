import fs from 'fs';
import path from 'path';
import EnquiryForm from '../components/EnquiryForm';

export default async function Contact() {
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
        <h1 style={{fontSize:"2.2rem", margin:"0 0 12px 0", color:"#1e293b"}}>Contact Us</h1>
        <hr style={{margin:"16px 0", borderColor:"#94a3b8"}}/>
        <p style={{lineHeight:"1.75", fontSize:"1rem", color:"#334155"}}>
          Feel free to reach out for service quotation, training details and business cooperation.
        </p>
      </div>

      {/* 联系信息卡片 */}
      <div style={{background:"#f1f5f9", padding:"22px", borderRadius:"12px", margin:"18px 0", border:"1px solid #e2e8f0"}}>
        <h3 style={{fontSize:"1.4rem", marginTop:"0", color:"#1e40af"}}>Company Information</h3>
        <div style={{lineHeight:"2", color:"#334155"}}>
          <p><strong>Company:</strong> {content.companyName}</p>
          <p><strong>Location:</strong> {content.address}</p>
          <p><strong>Email:</strong> {content.email}</p>
          <p><strong>Phone:</strong> {content.phone}</p>
          <p><strong>Business Hour:</strong> {content.businessHour}</p>
        </div>
      </div>

      <EnquiryForm />

      {/* Google Maps 嵌入地图 */}
      <div style={{margin:"18px 0", borderRadius:"12px", overflow:"hidden", border:"1px solid #94a3b8"}}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3984.3991435026605!2d101.7927654!3d2.9865989!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cdcb841d3762c7%3A0x4dc97330d731c530!2sNew%20Era%20University%20College!5e0!3m2!1sen!2smy!4v1791536177891!5m2!1sen!2smy"
          width="100%"
          height="450"
          style={{border:0}}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>
    </div>
  )
}