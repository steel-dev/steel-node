# SteelBrowser

Types:

- <code><a href="./src/resources/steel-browser/steel-browser.ts">SteelBrowserListSessionsResponse</a></code>
- <code><a href="./src/resources/steel-browser/steel-browser.ts">SteelBrowserScrapeResponse</a></code>

Methods:

- <code title="post /v1/sessions">client.steelBrowser.<a href="./src/resources/steel-browser/steel-browser.ts">createSession</a>({ ...params }) -> Session</code>
- <code title="get /v1/sessions">client.steelBrowser.<a href="./src/resources/steel-browser/steel-browser.ts">listSessions</a>({ ...params }) -> SteelBrowserListSessionsResponse</code>
- <code title="post /v1/pdf">client.steelBrowser.<a href="./src/resources/steel-browser/steel-browser.ts">pdf</a>({ ...params }) -> Response</code>
- <code title="get /v1/sessions/{id}">client.steelBrowser.<a href="./src/resources/steel-browser/steel-browser.ts">retrieveSession</a>(id, { ...params }) -> Session</code>
- <code title="post /v1/scrape">client.steelBrowser.<a href="./src/resources/steel-browser/steel-browser.ts">scrape</a>({ ...params }) -> SteelBrowserScrapeResponse</code>
- <code title="post /v1/screenshot">client.steelBrowser.<a href="./src/resources/steel-browser/steel-browser.ts">screenshot</a>({ ...params }) -> Response</code>

## SteelSession

Types:

- <code><a href="./src/resources/steel-browser/steel-session/steel-session.ts">Session</a></code>
- <code><a href="./src/resources/steel-browser/steel-session/steel-session.ts">SteelSessionReleaseSessionResponse</a></code>

Methods:

- <code title="get /v1/context/{id}">client.steelBrowser.steelSession.<a href="./src/resources/steel-browser/steel-session/steel-session.ts">getContext</a>(id) -> Context</code>
- <code title="get /v1/sessions/{id}">client.steelBrowser.steelSession.<a href="./src/resources/steel-browser/steel-session/steel-session.ts">getSessionData</a>(id, { ...params }) -> Session</code>
- <code title="get /v1/sessions/{id}/release">client.steelBrowser.steelSession.<a href="./src/resources/steel-browser/steel-session/steel-session.ts">releaseSession</a>(id, { ...params }) -> SteelSessionReleaseSessionResponse</code>

### SteelContext

Types:

- <code><a href="./src/resources/steel-browser/steel-session/steel-context.ts">Context</a></code>
- <code><a href="./src/resources/steel-browser/steel-session/steel-context.ts">SteelContextCreateContextResponse</a></code>
- <code><a href="./src/resources/steel-browser/steel-session/steel-context.ts">SteelContextDeleteContextResponse</a></code>

Methods:

- <code title="post /v1/context">client.steelBrowser.steelSession.steelContext.<a href="./src/resources/steel-browser/steel-session/steel-context.ts">createContext</a>({ ...params }) -> SteelContextCreateContextResponse</code>
- <code title="delete /v1/context/{id}">client.steelBrowser.steelSession.steelContext.<a href="./src/resources/steel-browser/steel-session/steel-context.ts">deleteContext</a>(id) -> SteelContextDeleteContextResponse</code>
- <code title="get /v1/context/{id}">client.steelBrowser.steelSession.steelContext.<a href="./src/resources/steel-browser/steel-session/steel-context.ts">getContextData</a>(id) -> Context</code>
