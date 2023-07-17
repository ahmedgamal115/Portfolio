import { useEffect, useState } from "react"
import PageNumber from "./PageNumber"
import landingPageStyle from '@/styles/landingPage.module.css'

const LandingPage = ()=>{
    const toRotate = [`As a full stack developer, I have expertise in frontend and backend development. On the frontend, I work with HTML, CSS, JavaScript, and React.js to build engaging and responsive user interfaces. For the backend, I use Node.js, Express.js, Next.js, 
    and ASP.NET to handle server-side logic, create APIs, and efficiently manage data flow and user requests. I am experienced in working with databases like
    Oracle, SQL Server, and MongoDB.`]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(50 - Math.random() * 100)

    useEffect(()=>{
        const ticker = setInterval(() =>{
            tick()
        },delta)
        return () => {clearInterval(ticker)}
    },[text])
    const tick = ()=>{
        let fullText = toRotate[0];
        let updatedText = fullText.substring(0,text.length+1);
        setText(updatedText);
      }
    return(
        <>
            <div className={landingPageStyle.LandingContiner}>
                <PageNumber number={'1'} title={'introduce'}></PageNumber>
                <div className={landingPageStyle.summary}>
                    <span>Summary</span>
                    <div className={landingPageStyle.contant}>
                        {text}
                    </div>
                </div>
                <div className={landingPageStyle.profileImage}>
                    <img src="/profile.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default LandingPage