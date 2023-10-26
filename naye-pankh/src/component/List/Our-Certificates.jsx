import React from 'react';
import "./OurCertificates.css";
export default function OurCertificates() {
  return (
      <div className='certificatesSection'>
      <h1>Our Certificates</h1>
        <div className='CertificatesPIcs'>
          <img src={require("../About/images/PankhCertificatePic1.avif")} alt='error'/>
          <img src={require("../About/images/PankhCertificatePic2.avif")} alt='error'/>
        </div>
        <img src={require("../About/images/PankhCertificatePic2.avif")} alt='error'/>
      </div>
    
  )
}
