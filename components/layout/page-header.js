import { Config } from 'config'
export default (props) => {
    const HDR = (props) => (
        <header className={props.headerClass}>
            <h1 className="title">{props.docTitle}</h1>
            <div>
                <small>{props.subTitle}</small>
            </div>
            <hr className="header-hr" />
            <style jsx>{`
            default-header:{
                position: :relative;        
            }
            `}</style>
        </header>
    )
    try {
        const { documentTitle, documentSubTitle, headerClass, hrClass } = Config.header
        const hdrc = headerClass === "" ? 'default-header' : headerClass;
        const hrc = hrClass === "" ? 'default-hr-class' : hrClass;
        return (
            <HDR
                docTitle={documentTitle}
                subTitle={documentSubTitle}
                headerClass={hdrc}
                headerHrClass={hrc}
            />)
    } catch (err) {
        const headerError = `Error Loading Header: ${err}`;
        return <div>{headerError}</div>
    }
}