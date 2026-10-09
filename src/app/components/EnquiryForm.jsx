'use client';
import { useState } from 'react';

export default function EnquiryForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/submit-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message })
      });
      const data = await res.json();
      if (data.success) {
        alert('✅ Your enquiry has been submitted successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert('❌ Submit failed, please try again.');
      }
    } catch (err) {
      alert('⚠️ Network error!');
    }
    setLoading(false);
  }

  return (
    <div style={{background:"#f1f5f9", padding:"22px", borderRadius:"12px", margin:"18px 0", border:"1px solid #e2e8f0"}}>
      <h3 style={{fontSize:"1.4rem", marginTop:"0", color:"#1e40af"}}>Send Enquiry</h3>
      <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", gap:"14px", marginTop:"12px"}}>
        <div>
          <label style={{display:"block", marginBottom:"4px", color:"#334155"}}>Your Name</label>
          <input
            type="text"
            required
            style={{width:"100%", padding:"10px", borderRadius:"6px", border:"1px solid #94a3b8"}}
            placeholder="Enter your name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div>
          <label style={{display:"block", marginBottom:"4px", color:"#334155"}}>Email Address</label>
          <input
            type="email"
            required
            style={{width:"100%", padding:"10px", borderRadius:"6px", border:"1px solid #94a3b8"}}
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div>
          <label style={{display:"block", marginBottom:"4px", color:"#334155"}}>Message</label>
          <textarea
            rows={4}
            required
            style={{width:"100%", padding:"10px", borderRadius:"6px", border:"1px solid #94a3b8"}}
            placeholder="Write your enquiry..."
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            width:"fit-content",
            backgroundColor:"#2563eb",
            color:"white",
            border:"none",
            padding:"11px 24px",
            borderRadius:"8px",
            fontSize:"1rem"
          }}
        >
          {loading ? 'Submitting...' : 'Submit Enquiry'}
        </button>
      </form>
    </div>
  );
}