
import Markdown from 'markdown'
export default (props) => {
    console.log('HOME props: ', props);

    return (
        <section>HOME
            <Markdown>test-markdown</Markdown>
        </section>
    )
}