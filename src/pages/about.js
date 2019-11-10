import Markdown from 'markdown'
export default (props) => <section>
    <Markdown conf={props.conf}>about</Markdown>
</section>