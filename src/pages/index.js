/**
 * Intro page
 */
import MatNextMarkdown from 'core/markdown';
export default (props) => {
    console.log('props: ', props);
    
    return (
        <>
            <MatNextMarkdown></MatNextMarkdown>
            {/* <div className="">
                <hr />
                <img className="img-fluid" src="static/img/work_work_work.gif" alt="work-work-work" />
                <hr />
            </div> */}
            {/* <MatNextMarkdown>{pageText['p1-s1']}</MatNextMarkdown> */}
        </>
    )
}