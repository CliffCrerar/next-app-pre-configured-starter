# Next.js website starter

### THIS PROJECT IS ALPHA STAGE 

## Starter template for next.js pre-configured with:

### Plugins

- next-compose-plugins
- @zeit/next-source-maps
- @zeit/next-sass
- emoji's
- dotenv
- prismjs

### Layout

Layout navbar has already been configured see ./components/layout

### Markdown

This application is pre-configured with a component with options to read and display markdown files via a React component that calls the markdown files from the application server using the `next.js` built in api functionality.

## How to use markdown

To use markdown files place the `foobar.md` files in the `public/markdown` directory.

The application has a build in component that it uses to call new markdown from the `public/markdown` using the `next.js` built in API.

>usage:
>```js
>import Markdown from 'markdown'
>export default (props) => {
>    return (
>        <section>
>            <Markdown>foobar</Markdown>
>        </section>
>    )
>}
>```
>Note: Using the `<section>` is not required but is recommended per HTML 5 standards.
