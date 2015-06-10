# <%=name%>

<%=description%>

## Overview

Any APIs you consume must be listed as peer dependencies in your `package.json` file, since those packages are used to spin up mock or real instances of those services needed by the frontend.

## Directory Structure

```
+ assets
+ test
- gulpfile.js
- server.js
```

## Running

```sh
gulp live
```

## Testing

Specification tests are done with [mocha] and integration tests are done with [cucumber]; mocking is provided by [drakov].

| Variable | Description | Default |
| -------- | ----------- | ------- |

```sh
npm test
```

## Deployment

<%=name%> is simply a collection of static assets, so deployment simply involves copying the assets to wherever they need to go; in this case S3.


| Variable | Description | Default |
| -------- | ----------- | ------- |

```sh
gulp deploy
```

[mocha]: https://www.npmjs.com/package/mocha
[cucumber]: https://www.npmjs.com/package/cucumberjs
[drakov]: https://www.npmjs.com/package/drakov
