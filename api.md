# Steel

Types:

- <code><a href="./src/resources/top-level.ts">ListSessionsResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ScrapeResponse</a></code>

Methods:

- <code title="post /v1/sessions">client.<a href="./src/index.ts">createSession</a>({ ...params }) -> SessionData</code>
- <code title="get /v1/sessions">client.<a href="./src/index.ts">listSessions</a>({ ...params }) -> ListSessionsResponse</code>
- <code title="post /v1/pdf">client.<a href="./src/index.ts">pdf</a>({ ...params }) -> Response</code>
- <code title="get /v1/sessions/{id}">client.<a href="./src/index.ts">retrieveSession</a>(id, { ...params }) -> SessionData</code>
- <code title="post /v1/scrape">client.<a href="./src/index.ts">scrape</a>({ ...params }) -> ScrapeResponse</code>
- <code title="post /v1/screenshot">client.<a href="./src/index.ts">screenshot</a>({ ...params }) -> Response</code>

## SteelSession

Types:

- <code><a href="./src/resources/top-level/steel-session/steel-session.ts">Session</a></code>
- <code><a href="./src/resources/top-level/steel-session/steel-session.ts">SteelSessionReleaseSessionResponse</a></code>

Methods:

- <code title="get /v1/context/{id}">client.client.steelSession.<a href="./src/resources/top-level/steel-session/steel-session.ts">getContext</a>(id) -> GetContextResponse</code>
- <code title="get /v1/sessions/{id}">client.client.steelSession.<a href="./src/resources/top-level/steel-session/steel-session.ts">getSessionData</a>(id, { ...params }) -> SessionData</code>
- <code title="get /v1/sessions/{id}/release">client.client.steelSession.<a href="./src/resources/top-level/steel-session/steel-session.ts">releaseSession</a>(id, { ...params }) -> SteelSessionReleaseSessionResponse</code>

### SteelContext

Types:

- <code><a href="./src/resources/top-level/steel-session/steel-context.ts">Context</a></code>
- <code><a href="./src/resources/top-level/steel-session/steel-context.ts">SteelContextCreateContextResponse</a></code>
- <code><a href="./src/resources/top-level/steel-session/steel-context.ts">SteelContextDeleteContextResponse</a></code>

Methods:

- <code title="post /v1/context">client.client.steelSession.steelContext.<a href="./src/resources/top-level/steel-session/steel-context.ts">createContext</a>({ ...params }) -> SteelContextCreateContextResponse</code>
- <code title="delete /v1/context/{id}">client.client.steelSession.steelContext.<a href="./src/resources/top-level/steel-session/steel-context.ts">deleteContext</a>(id) -> SteelContextDeleteContextResponse</code>
- <code title="get /v1/context/{id}">client.client.steelSession.steelContext.<a href="./src/resources/top-level/steel-session/steel-context.ts">getContextData</a>(id) -> GetContextResponse</code>
