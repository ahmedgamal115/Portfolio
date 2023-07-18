import skillsStyle from '@/styles/skills.module.css'
import PageNumber from './PageNumber'
import { useEffect, useState } from 'react'

const Skills = () => {
    const [personalSkills,setPersonalSkills] = useState(false)
    const [matches, setMatches] = useState(
        // window.matchMedia("(min-width: 600px)").matches
        false
    )
    const handlePage = ()=>{
        if(personalSkills){
            setPersonalSkills(false)
        }else{
            setPersonalSkills(true)
        }
    }
    useEffect(()=>{
       if(window.innerHeight > window.innerWidth){
        setMatches(true)
       }
    },[])
    return(
        <>
            <div className={skillsStyle.skillsContainer}>
                <PageNumber number={'3'} title={!personalSkills ? 'Skills' : 'Personal skills'}></PageNumber>
                <div className={skillsStyle.skillsContent}>
                    <div style={{marginLeft:`${personalSkills ? !matches ? '-800px': '-210px' : ''}`}} className={skillsStyle.normalSkills}>
                        <div className={skillsStyle.skilsDetails}>
                            <div className={skillsStyle.skillsTitle}>HTML</div>
                            <div className={skillsStyle.skillsPrograss}>
                            <div className={skillsStyle.animate_progress}>
                                <span style={{width:'100%'}}></span>
                            </div>
                                <div className={skillsStyle.skillsDegree}>100%</div>
                            </div>
                        </div>
                        <div className={skillsStyle.skilsDetails}>
                            <div className={skillsStyle.skillsTitle}>CSS</div>
                            <div className={skillsStyle.skillsPrograss}>
                            <div className={skillsStyle.animate_progress}>
                                <span style={{width:'100%'}}></span>
                            </div>
                                <div className={skillsStyle.skillsDegree}>100%</div>
                            </div>
                        </div>
                        <div className={skillsStyle.skilsDetails}>
                            <div className={skillsStyle.skillsTitle}>JavaScript</div>
                            <div className={skillsStyle.skillsPrograss}>
                            <div className={skillsStyle.animate_progress}>
                                <span style={{width:'100%'}}></span>
                            </div>
                                <div className={skillsStyle.skillsDegree}>100%</div>
                            </div>
                        </div>
                        <div className={skillsStyle.skilsDetails}>
                            <div className={skillsStyle.skillsTitle}>React.js</div>
                            <div className={skillsStyle.skillsPrograss}>
                            <div className={skillsStyle.animate_progress}>
                                <span style={{width:'80%'}}></span>
                            </div>
                                <div className={skillsStyle.skillsDegree}>80%</div>
                            </div>
                        </div>
                        <div className={skillsStyle.skilsDetails}>
                            <div className={skillsStyle.skillsTitle}>Node.js</div>
                            <div className={skillsStyle.skillsPrograss}>
                            <div className={skillsStyle.animate_progress}>
                                <span style={{width:'70%'}}></span>
                            </div>
                                <div className={skillsStyle.skillsDegree}>70%</div>
                            </div>
                        </div>
                        <div className={skillsStyle.skilsDetails}>
                            <div className={skillsStyle.skillsTitle}>Express.js</div>
                            <div className={skillsStyle.skillsPrograss}>
                            <div className={skillsStyle.animate_progress}>
                                <span style={{width:'80%'}}></span>
                            </div>
                                <div className={skillsStyle.skillsDegree}>80%</div>
                            </div>
                        </div>
                        <div className={skillsStyle.skilsDetails}>
                            <div className={skillsStyle.skillsTitle}>oracle database</div>
                            <div className={skillsStyle.skillsPrograss}>
                            <div className={skillsStyle.animate_progress}>
                                <span style={{width:'70%'}}></span>
                            </div>
                                <div className={skillsStyle.skillsDegree}>70%</div>
                            </div>
                        </div>
                        <div className={skillsStyle.skilsDetails}>
                            <div className={skillsStyle.skillsTitle}>SQL Server</div>
                            <div className={skillsStyle.skillsPrograss}>
                            <div className={skillsStyle.animate_progress}>
                                <span style={{width:'50%'}}></span>
                            </div>
                                <div className={skillsStyle.skillsDegree}>50%</div>
                            </div>
                        </div>
                        <div className={skillsStyle.skilsDetails}>
                            <div className={skillsStyle.skillsTitle}>Mongodb</div>
                            <div className={skillsStyle.skillsPrograss}>
                            <div className={skillsStyle.animate_progress}>
                                <span style={{width:'80%'}}></span>
                            </div>
                                <div className={skillsStyle.skillsDegree}>80%</div>
                            </div>
                        </div>
                        <div className={skillsStyle.skilsDetails}>
                            <div className={skillsStyle.skillsTitle}>python</div>
                            <div className={skillsStyle.skillsPrograss}>
                            <div className={skillsStyle.animate_progress}>
                                <span style={{width:'60%'}}></span>
                            </div>
                                <div className={skillsStyle.skillsDegree}>60%</div>
                            </div>
                        </div>
                        <div className={skillsStyle.skilsDetails}>
                            <div className={skillsStyle.skillsTitle}>Arduino</div>
                            <div className={skillsStyle.skillsPrograss}>
                            <div className={skillsStyle.animate_progress}>
                                <span style={{width:'60%'}}></span>
                            </div>
                                <div className={skillsStyle.skillsDegree}>60%</div>
                            </div>
                        </div>
                        <div className={skillsStyle.skilsDetails}>
                            <div className={skillsStyle.skillsTitle}>Next.js</div>
                            <div className={skillsStyle.skillsPrograss}>
                            <div className={skillsStyle.animate_progress}>
                                <span style={{width:'90%'}}></span>
                            </div>
                                <div className={skillsStyle.skillsDegree}>90%</div>
                            </div>
                        </div>
                    </div>
                    <div style={{width:`${personalSkills ? '100%' : '0%'}`}} className={skillsStyle.personSkills}>
                        <div className={skillsStyle.personSkillsContent}>
                            <div className={skillsStyle.personSkillsDatails}>
                                <div className={skillsStyle.icon}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0,0,256,256"
                                style={{fill:"#000000"}}>
                                <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"><g transform="scale(5.12,5.12)"><path d="M19.54688,3c-9.67578,0 -17.54687,7.05078 -17.54687,15.71484c0,4.07031 1.76953,8.01563 4.875,10.92578c0.04688,0.04688 0.22656,0.18359 0.22656,0.18359c0.21484,0.17578 0.42969,0.34766 0.62109,0.48828c-0.78516,2.33594 -3.52734,4.23438 -4.78125,4.6875c-0.82812,0.30078 -1.10156,1.06641 -0.79297,1.45313c0.46875,0.58984 1.89844,0.53516 3.27344,0.53516c4.54297,0 10.27734,-3.31641 10.27734,-3.31641c1.07422,0.21875 2.28906,0.32813 3.69531,0.32813c9.87109,0 17.60547,-6.71484 17.60547,-15.28516c0,-8.66406 -7.82812,-15.71484 -17.45312,-15.71484zM11,12h17v2h-17zM11,17h17v2h-17zM38.78516,21.19141c-0.39062,2.49219 -1.35547,4.79688 -2.78516,6.80859h3v2h-4.66016c-1.10156,1.14063 -2.37109,2.15234 -3.77734,3h8.4375v2h-12.96875c-2.07031,0.63672 -4.29297,1 -6.63672,1c-1.00391,0 -1.91406,-0.05469 -2.76562,-0.16016c1.85938,4.90625 7.80859,8.16016 15.49609,8.16016c1.15234,0 2.16016,-0.07031 3.05859,-0.20703c0.03906,-0.00781 2.81641,3.20313 8.84766,3.20313c3.40234,-0.10156 3.92188,-1.125 3.95313,-1.49219c0.08203,-0.82812 -3.52734,-1.06641 -5.19531,-3.75391c0.27734,-0.19531 0.59766,-0.42578 0.80469,-0.58594c2.80078,-2.3125 4.39063,-5.42578 4.39063,-8.65234c0,-4.90625 -3.66797,-9.28516 -9.19922,-11.32031zM11,22h12v2h-12z"></path></g></g>
                                </svg>
                                </div>
                                <div className={skillsStyle.personSkillsTitle}>Communication</div>
                            </div>
                            <div className={skillsStyle.personSkillsDatails}>
                                <div className={skillsStyle.icon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z" fill="#ffffff"></path> <path d="M12 7.75C11.3787 7.75 10.875 8.25368 10.875 8.875C10.875 9.28921 10.5392 9.625 10.125 9.625C9.71079 9.625 9.375 9.28921 9.375 8.875C9.375 7.42525 10.5503 6.25 12 6.25C13.4497 6.25 14.625 7.42525 14.625 8.875C14.625 9.58584 14.3415 10.232 13.883 10.704C13.7907 10.7989 13.7027 10.8869 13.6187 10.9708C13.4029 11.1864 13.2138 11.3753 13.0479 11.5885C12.8289 11.8699 12.75 12.0768 12.75 12.25V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V12.25C11.25 11.5948 11.555 11.0644 11.8642 10.6672C12.0929 10.3733 12.3804 10.0863 12.6138 9.85346C12.6842 9.78321 12.7496 9.71789 12.807 9.65877C13.0046 9.45543 13.125 9.18004 13.125 8.875C13.125 8.25368 12.6213 7.75 12 7.75Z" fill="#ffffff"></path> <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" fill="#ffffff"></path> </g></svg>
                                </div>
                                <div className={skillsStyle.personSkillsTitle}>Problem solve</div>
                            </div>
                            <div className={skillsStyle.personSkillsDatails}>
                                <div className={skillsStyle.icon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" fill="#ffffff"></path> <path d="M6.42385 9.51988C6.68903 9.20167 7.16195 9.15868 7.48016 9.42385L7.75658 9.6542L7.75661 9.65423C8.36154 10.1583 8.87654 10.5874 9.23295 10.9821C9.61151 11.4013 9.90694 11.8834 9.90694 12.5C9.90694 13.1166 9.61151 13.5987 9.23295 14.0179C8.87653 14.4126 8.36153 14.8418 7.75658 15.3458L7.48016 15.5762C7.16195 15.8414 6.68903 15.7984 6.42385 15.4802C6.15868 15.1619 6.20167 14.689 6.51988 14.4239L6.75428 14.2285C7.41285 13.6797 7.84348 13.3185 8.11968 13.0126C8.38196 12.7222 8.40694 12.586 8.40694 12.5C8.40694 12.414 8.38196 12.2779 8.11968 11.9874C7.84348 11.6815 7.41285 11.3203 6.75429 10.7715L6.51988 10.5762C6.20167 10.311 6.15868 9.83809 6.42385 9.51988Z" fill="#ffffff"></path> <path d="M17.75 15C17.75 15.4142 17.4142 15.75 17 15.75H12C11.5858 15.75 11.25 15.4142 11.25 15C11.25 14.5858 11.5858 14.25 12 14.25H17C17.4142 14.25 17.75 14.5858 17.75 15Z" fill="#ffffff"></path> </g></svg>
                                </div>
                                <div className={skillsStyle.personSkillsTitle}>Computer skills</div>
                            </div>
                            <div className={skillsStyle.personSkillsDatails}>
                                <div className={skillsStyle.icon}>
                                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="Leadership"><path d="M23.68,28.47a14.95,14.95,0,0,0,16.64,0,12,12,0,1,0,6.1-16.54,15,15,0,0,0-28.84,0,12,12,0,1,0,6.1,16.54ZM59,23a8,8,0,0,1-15.54,2.65A14.94,14.94,0,0,0,47,16.09,8,8,0,0,1,59,23ZM32,5A11,11,0,1,1,21,16,11,11,0,0,1,32,5ZM13,31a8,8,0,1,1,4-14.91,14.94,14.94,0,0,0,3.54,9.56A8,8,0,0,1,13,31Z" fill="#ffffff" className="color000000 svgShape"></path><path d="M56,35H46a9.08,9.08,0,0,0-1,.07A8,8,0,0,0,38,31H26a8,8,0,0,0-7,4.07A9.08,9.08,0,0,0,18,35H8a8,8,0,0,0-8,8V55a4,4,0,0,0,4,4H60a4,4,0,0,0,4-4V43A8,8,0,0,0,56,35ZM22,39a4,4,0,0,1,4-4H38a4,4,0,0,1,4,4V55H22ZM4,55V43a4,4,0,0,1,4-4H18V55Zm56,0H46V39H56a4,4,0,0,1,4,4Z" fill="#ffffff" class="color000000 svgShape"></path><circle cx="32" cy="41" r="2" fill="#ffffff" class="color000000 svgShape"></circle></svg>
                                </div>
                                <div className={skillsStyle.personSkillsTitle}>Leadership</div>
                            </div>
                            <div className={skillsStyle.personSkillsDatails}>
                                <div className={skillsStyle.icon}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="6" r="4" stroke="#ffffff" strokeWidth="1.5"></circle> <path d="M15 13.3271C14.0736 13.1162 13.0609 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C17.6874 22 19.3315 20.9817 19.8068 19.5" stroke="#ffffff"  strokeWidth="1.5"></path> <circle cx="18" cy="16" r="4" stroke="#ffffff"  strokeWidth="1.5"></circle> <path d="M18 14.6667V17.3333" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M16.6665 16L19.3332 16" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                </div>
                                <div className={skillsStyle.personSkillsTitle}>Management</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={skillsStyle.controller}>
                    <div className={skillsStyle.controllerBtn}>
                        <div onClick={()=>{handlePage()}} className={skillsStyle.arrow}>{'>'}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills