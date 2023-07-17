import aboutStyle from '@/styles/aboutUs.module.css'
import PageNumber from './PageNumber'
const AboutUs = ()=>{
    return(
        <>
            <div className={aboutStyle.continer}>
                <PageNumber number={'2'} title={'About Me'}></PageNumber>
                <div className={aboutStyle.aboutContant}>
                    <div className={aboutStyle.imagePosition}>
                        <div className={aboutStyle.border}>
                            <img src="/profile.png" alt="" />
                        </div>
                    </div>
                    <div className={aboutStyle.contact}>
                        <div className={aboutStyle.Intro}>
                        My name is Ahmed Gamal Emam, I was born in Cairo and I currently live in Hadayek Helwan.
                        I am a fresh graduate as an engineer and I worked on myself during the university period to be a full stack developer by taking courses on the Internet and reading books and 
                        I made many projects during that period
                        </div>
                        <div className={aboutStyle.Info}>
                            <div className={aboutStyle.un_name}>
                                <div className={aboutStyle.sec_title}>
                                    University Name
                                </div>
                                <div className={aboutStyle.sec_data}>
                                    Modern academy for engineering & technology
                                </div>
                            </div>
                            <div className={aboutStyle.un_address}>
                                <div className={aboutStyle.sec_title}>
                                    University Address
                                </div>
                                <div className={aboutStyle.sec_data}>
                                    X8V7+72P, El-Hadaba El-Wosta-Elmokattam Close to Mokattam Central, El Mokattam
                                </div>
                            </div>
                            <div className={aboutStyle.un_year}>
                                <div className={aboutStyle.sec_title}>
                                    graduation year
                                </div>
                                <div className={aboutStyle.sec_data}>
                                    12/2018 - 07/2023
                                </div>
                            </div>
                            <div className={aboutStyle.un_gpa}>
                                <div className={aboutStyle.sec_title}>
                                    GPA
                                </div>
                                <div className={aboutStyle.sec_data}>
                                    3.431
                                </div>
                            </div>
                        </div>
                        <div className={aboutStyle.contact_Me}>
                            <div className={aboutStyle.contact_title}>contact with me</div>
                            <div className={aboutStyle.tools}>
                                <div className={aboutStyle.e_mail}>
                                <svg width="20px" height="20px" viewBox="0 -2.5 20 20" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -922.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M262,764.291 L254,771.318 L246,764.281 L246,764 L262,764 L262,764.291 Z M246,775 L246,766.945 L254,773.98 L262,766.953 L262,775 L246,775 Z M244,777 L264,777 L264,762 L244,762 L244,777 Z" id="email-[#ffffff]"> </path> </g> </g> </g> </g></svg>
                                
                                    ahmedgamal10122000@gmail.com
                                </div>
                                <div className={aboutStyle.phone}>
                                <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"> <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.5562 12.9062L16.1007 13.359C16.1007 13.359 15.0181 14.4355 12.0631 11.4972C9.10812 8.55901 10.1907 7.48257 10.1907 7.48257L10.4775 7.19738C11.1841 6.49484 11.2507 5.36691 10.6342 4.54348L9.37326 2.85908C8.61028 1.83992 7.13596 1.70529 6.26145 2.57483L4.69185 4.13552C4.25823 4.56668 3.96765 5.12559 4.00289 5.74561C4.09304 7.33182 4.81071 10.7447 8.81536 14.7266C13.0621 18.9492 17.0468 19.117 18.6763 18.9651C19.1917 18.9171 19.6399 18.6546 20.0011 18.2954L21.4217 16.883C22.3806 15.9295 22.1102 14.2949 20.8833 13.628L18.9728 12.5894C18.1672 12.1515 17.1858 12.2801 16.5562 12.9062Z" fill="#ffffff"></path> </g></svg>
                                    01555734756
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutUs