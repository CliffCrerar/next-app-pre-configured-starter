/**
 * Page Header: Main display heading on each page (except when excluded from routing in the configuration)
 */
export default (props) => {
    const Header = (props) => (
        <header className={props.headerClass}>
            <h1 className="title">{props.docTitle}</h1>
            <div>
                <small>{props.subTitle}</small>
            </div>
            <hr className="header-hr" />
            <style jsx>{`
            .default-header:{
                position: :relative;        
            };
            .default-hr-class{
                position: relative;
            }
            `}</style>
        </header>
    )
    try {
        const { documentTitle, documentSubTitle, headerElementCSSClass, hrElementCSSClass } = props.conf.header
        const headerCssClass = headerElementCSSClass === "" ? 'default-header' : headerElementCSSClass;
        const headerHrCssClass = hrElementCSSClass === "" ? 'default-hr-class' : hrElementCSSClass;
        if(props.conf.switches.displayHeader){
            return (
                <Header
                    docTitle={documentTitle}
                    subTitle={documentSubTitle}
                    headerClass={headerCssClass}
                    headerHrClass={headerHrCssClass}
                />)
        } else {
            return <div style={{display: "none"}}>This must be hidden</div>
        }
        
    } catch (err) {
        const headerError = `Error Loading Header: ${err}`;
        return <div>{headerError}</div>
    }
}