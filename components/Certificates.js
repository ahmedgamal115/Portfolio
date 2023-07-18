import PageNumber from "./PageNumber"
import certificateStyle from '@/styles/certificates.module.css'
const Certificates = () =>{
    const handleViewCertifiactes = ()=>{
        window.open(
            'https://drive.google.com/drive/folders/1PlGSViOp6aq2n606VHNxPyKdSwQWjNVc?usp=sharing',
            '_blank'
          );
    }
    return(
        <>
            <div className={certificateStyle.certificatesContainter}>
                <PageNumber number={'4'} title={'Certificates'}></PageNumber>
                <div className={certificateStyle.content}>
                    <div className={certificateStyle.CertificatesData}>
                        <div className={certificateStyle.CertificatesDatils}>
                            <div className={certificateStyle.CertificatesImage}>
                                <div onClick={()=>{handleViewCertifiactes()}} className={certificateStyle.layout}>
                                    <span>09/2022 - 09/2022</span>
                                    <div className={certificateStyle.company}>
                                        From YAT
                                    </div>
                                </div>
                                <img src="/Certificates/4.png" alt="" />
                            </div>
                        </div>
                        <div className={certificateStyle.CertificatesDatils}>
                            <div className={certificateStyle.CertificatesImage}>
                                <div onClick={()=>{handleViewCertifiactes()}} className={certificateStyle.layout}>
                                    <span>07/2021 - 08/2021</span>
                                    <div className={certificateStyle.company}>
                                        From Next
                                    </div>
                                </div>
                                <img src="/Certificates/5.png" alt="" />
                            </div>
                        </div>
                        <div className={certificateStyle.CertificatesDatils}>
                            <div className={certificateStyle.CertificatesImage}>
                                <div onClick={()=>{handleViewCertifiactes()}} className={certificateStyle.layout}>
                                    <span>02/2020 - 03/2020</span>
                                    <div className={certificateStyle.company}>
                                        From Udacity
                                    </div>
                                </div>
                                <img src="/Certificates/1.jpg" alt="" />
                            </div>
                        </div>
                        <div className={certificateStyle.CertificatesDatils}>
                            <div className={certificateStyle.CertificatesImage}>
                                <div onClick={()=>{handleViewCertifiactes()}} className={certificateStyle.layout}>
                                    <span>04/2021 - 04/2021</span>
                                    <div className={certificateStyle.company}>
                                        From m3aarf
                                    </div>
                                </div>
                                <img src="/Certificates/2.jpg" alt="" />
                            </div>
                        </div>
                        <div className={certificateStyle.CertificatesDatils}>
                            <div className={certificateStyle.CertificatesImage}>
                                <div onClick={()=>{handleViewCertifiactes()}} className={certificateStyle.layout}>
                                    <span>03/2021 - 03/2021</span>
                                    <div className={certificateStyle.company}>
                                        From Udemy
                                    </div>
                                </div>
                                <img src="/Certificates/3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Certificates