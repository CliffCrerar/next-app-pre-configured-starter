/**
 * Declaration pages
 */
import GitLabIcon from 'components/gitlab-icon'
import MatNextMarkdown from 'mat-next-markdown';
export default (props) => {
    var { pageText } = props;
    return (
        <React.Fragment>
            <MatNextMarkdown>{pageText['p7-s1']}</MatNextMarkdown>
            <div className="tech-used">
                <div className="">
                    <img className="img-fluid" src="static/img/nodejs.png" alt="now-logo" />
                </div>
                <div className="img-1">
                    <div>
                        <img src="https://cdn-cloudflare.ga/assets/site-logo/next.js/next5x.png" alt="nextjs" />
                    </div>
                    <div>
                        <img src="https://cdn-cloudflare.ga/assets/site-logo/react/react05x.png" alt="react" />
                    </div>
                </div>
                <div className="img-2">
                    <img src="https://cdn-cloudflare.ga/assets/site-logo/zeit/zeit-now.png" alt="now-logo" />
                </div>

                <div style={{ textAlign: 'center' }}>
                    <img src="https://cdn-cloudflare.ga/assets/site-logo/markdown/markdown.png" alt="react" />
                </div>
                <div className="gitlab">
                    <div>
                        <img className="img-fluid" src="https://cdn-cloudflare.ga/assets/site-logo/gitlab/gitlab.png" alt="gitlab icon"></img>
                    </div>
                    <div>
                        To view the source code for this page please visit <a href="https://gitlab.com/CliffCrerar/imagine-cloud-architecture-concept" target="_blank">click here</a>
                    </div>
                </div>
            </div>
            <style jsx>{`
            .gitlab{
                display:flex;
                justify-content: center;
                align-items: center;
            }
            .gitlab img{
                width: 50px;
                margin: 10px;
            }
             main{
                 max-width: 760px;
                 margin: 0 auto;
                 height: auto;
             }
             main li{
                 text-align: left;
                 line-height: 40px;
                 font-size: 1.2em;
             }
             h2{
                 text-align: left;
             }
             h2 ul{
                 text-align: center;
             }
             .tech-used{
                 display: block;
             }
             .tech-used div{
                 position: relative,
             }
             .img-1{
                 width: 100%;
                 display: flex;
                 justify-content: space-between;
             }
             .img-2 img {
                 position: relative;
                 width: 100%;
             }
         `}</style>

        </React.Fragment>
    )
}
