# Next.js website starter

> THIS PROJECT IS ALPHA STAGE 

## Starter template for next.js pre-configured with:

### Plugins

- next-compose-plugins
- @zeit/next-source-maps
- @zeit/next-sass
- dotenv

### Layout

Layout navbar has already been configured see ./components/layout

### Markdown

~~A component named `MatNextMarkdown` is the component that calls to the API and retrieves the .md file.
pass the md filename without the extension to this components source attribute and the API will do the rest.~~

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