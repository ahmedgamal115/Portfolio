import pageNumberStyle from '@/styles/pageNumber.module.css'

const PageNumber = (props)=>{
    return(
        <>
            <div className={pageNumberStyle.continer}>
                <div className={pageNumberStyle.pageNumber}>
                    {props.number}
                </div>
                <div className={pageNumberStyle.lineStyle}></div>
                <div className={pageNumberStyle.pageTitle}>{props.title}</div>
            </div>
        </>
    )
}
export default PageNumber