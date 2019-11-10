import Markdown from 'markdown'
export default (props) => <section>
    <Markdown conf={props.conf}>about-page</Markdown>
</section>