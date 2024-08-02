# Steel

Types:

- <code><a href="./src/resources/top-level.ts">ListSessionsResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ScrapeResponse</a></code>

Methods:

- <code title="post /v1/sessions">client.<a href="./src/index.ts">createSession</a>({ ...params }) -> Session</code>
- <code title="get /v1/sessions">client.<a href="./src/index.ts">listSessions</a>({ ...params }) -> ListSessionsResponse</code>
- <code title="post /v1/pdf">client.<a href="./src/index.ts">pdf</a>({ ...params }) -> Response</code>
- <code title="get /v1/sessions/{id}">client.<a href="./src/index.ts">retrieveSession</a>(id, { ...params }) -> Session</code>
- <code title="post /v1/scrape">client.<a href="./src/index.ts">scrape</a>({ ...params }) -> ScrapeResponse</code>
- <code title="post /v1/screenshot">client.<a href="./src/index.ts">screenshot</a>({ ...params }) -> Response</code>

# SteelSession

Types:

- <code><a href="./src/resources/steel-session.ts">Session</a></code>
- <code><a href="./src/resources/steel-session.ts">SteelSessionReleaseSessionResponse</a></code>

Methods:

- <code title="get /v1/context/{id}">client.steelSession.<a href="./src/resources/steel-session.ts">getContext</a>(id) -> Context</code>
- <code title="get /v1/sessions/{id}">client.steelSession.<a href="./src/resources/steel-session.ts">getSessionData</a>(id, { ...params }) -> Session</code>
- <code title="get /v1/sessions/{id}/release">client.steelSession.<a href="./src/resources/steel-session.ts">releaseSession</a>(id, { ...params }) -> SteelSessionReleaseSessionResponse</code>

# SteelContext

Types:

- <code><a href="./src/resources/steel-context.ts">Context</a></code>
- <code><a href="./src/resources/steel-context.ts">SteelContextCreateContextResponse</a></code>
- <code><a href="./src/resources/steel-context.ts">SteelContextDeleteContextResponse</a></code>

Methods:

- <code title="post /v1/context">client.steelContext.<a href="./src/resources/steel-context.ts">createContext</a>({ ...params }) -> SteelContextCreateContextResponse</code>
- <code title="delete /v1/context/{id}">client.steelContext.<a href="./src/resources/steel-context.ts">deleteContext</a>(id) -> SteelContextDeleteContextResponse</code>
- <code title="get /v1/context/{id}">client.steelContext.<a href="./src/resources/steel-context.ts">getContextData</a>(id) -> Context</code>
