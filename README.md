# Next.js website starter

> THIS PROJECT IS ALPHA STAGE 

## Starter template for next.js pre-configured with:

### Pre-configured Plugins

- next-compose-plugins
- @zeit/next-source-maps
- @zeit/next-sass
- Markdown
- dotenv

### Layout

Layout navbar has already been configured see ./components/layout

### Markdown

This application is pre-configured with a component with options to read and display markdown files via a React component that calls the markdown files from the application server using the `next.js` built in api functionality.

##### Using the built in markdown plugin

```javascript
import Markdown from 'markdown';
export default (props) => {
    return (
        <section>
            <Markdown conf={props.conf}>home-page-markdown</Markdown>
        </section>
    )
}
```


Markdown options configures in the `markdown` attribute:

```text
options:
  html:         false,        // Enable HTML tags in source
  xhtmlOut:     false,        // Use '/' to close single tags (<br />).
                              // This is only for full CommonMark compatibility.
  breaks:       false,        // Convert '\n' in paragraphs into <br>
  langPrefix:   'language-',  // CSS language prefix for fenced blocks. Can be
                              // useful for external highlighters.
  linkify:      false,        // Autoconvert URL-like text to links

  // Enable some language-neutral replacement + quotes beautification
  typographer:  false,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Could be either a String or an Array.
  //
  // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
  // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
  quotes: '“”‘’',

  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed and should be escaped externally.
  // If result starts with <pre... internal wrapper is skipped.
  highlight: function (/*str, lang*/) { return ''; }
``` 

## Configuration TODO

### Node path

!TODO

### Navigation Links

The app creates the navigation links in the layout component via a sub component exported from the `component/layout/links.js` file. This component is configured by the `static/config/links.json`.

The `links.json` file has two parts as attributes; `main` and `sub`. Every link must have **three** attributes whether in `main` or in `sub`.
```json
! TODO
```

~~##### `main`~~

~~Place all the links for pages that a user can nav to using the links in the navbar.~~

~~##### `sub`~~

~~Use sub for pages that are displayed as per a certain event and cannot be navigated to, for example; a log out page to inform the user that he/she is now logged out and can either go elsewhere or return to the main login page.~~

~~- Call the links object with and reference the `sub` section for redirection actions.~~

~~### Open graph~~