/**
 * Intro page
 */
import MatNextMarkdown from 'mat-next-markdown';
export default (props) => {
    const { pageText } = props;
    return (
        <>
            <MatNextMarkdown>{pageText['p1-s0']}</MatNextMarkdown>
            <div className="">
                <hr />
                <img className="img-fluid" src="static/img/work_work_work.gif" alt="work-work-work" />
                <hr />
            </div>
            <MatNextMarkdown>{pageText['p1-s1']}</MatNextMarkdown>
        </>
    )
}