import Markdown from 'markdown'
export default (props) => {
    // console.log('HOME props: ', props);

    return (
        <section>
            <Markdown conf={props.conf}>contacts-page</Markdown>
        </section>
    )
}