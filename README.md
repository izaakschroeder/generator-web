# generator-web

Build awesome frontends with [React].

## Usage

```sh
npm install -g @metalab/generator-web
yo @metalab/web
```

Generators:
 * client - Client-side entry point.
 * errors - Typical error handling views.
 * markup - Generate markup for your website
 * server - Universal JS rendering server
 * static - Generate static HTML for specific pages

NOTE: Errors are _hard_ errors – that is to say an error outside of the scope of the markup renderer; generally if your app wants to tell the user a product doesn't exist or they're not logged in that is handled entirely in the markup renderer and those error handlers should live in `src/components/...` and be invoked as part of your React app.

Entry files are not testable so should only contain minimal amounts of code.
