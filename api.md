# Sessions

Types:

- <code><a href="./src/resources/sessions.ts">ReleaseSessionResponse</a></code>
- <code><a href="./src/resources/sessions.ts">SessionResponse</a></code>
- <code><a href="./src/resources/sessions.ts">SessionListResponse</a></code>

Methods:

- <code title="post /v1/sessions">client.sessions.<a href="./src/resources/sessions.ts">create</a>({ ...params }) -> SessionResponse</code>
- <code title="get /v1/sessions/{id}">client.sessions.<a href="./src/resources/sessions.ts">retrieve</a>(id) -> SessionResponse</code>
- <code title="get /v1/sessions">client.sessions.<a href="./src/resources/sessions.ts">list</a>({ ...params }) -> SessionListResponse</code>
- <code title="get /v1/sessions/{id}/release">client.sessions.<a href="./src/resources/sessions.ts">release</a>(id) -> ReleaseSessionResponse</code>

# BrowserTools

Types:

- <code><a href="./src/resources/browser-tools.ts">ScrapeResponse</a></code>

Methods:

- <code title="post /v1/pdf">client.browserTools.<a href="./src/resources/browser-tools.ts">pdf</a>({ ...params }) -> Response</code>
- <code title="post /v1/scrape">client.browserTools.<a href="./src/resources/browser-tools.ts">scrape</a>({ ...params }) -> ScrapeResponse</code>
- <code title="post /v1/screenshot">client.browserTools.<a href="./src/resources/browser-tools.ts">screenshot</a>({ ...params }) -> Response</code>

# Contexts

Types:

- <code><a href="./src/resources/contexts.ts">CreateContextResponse</a></code>
- <code><a href="./src/resources/contexts.ts">DeleteContextResponse</a></code>
- <code><a href="./src/resources/contexts.ts">GetContextResponse</a></code>
- <code><a href="./src/resources/contexts.ts">GetContextsResponse</a></code>

Methods:

- <code title="post /v1/context">client.contexts.<a href="./src/resources/contexts.ts">create</a>({ ...params }) -> CreateContextResponse</code>
- <code title="get /v1/context/{id}">client.contexts.<a href="./src/resources/contexts.ts">retrieve</a>(id) -> GetContextResponse</code>
- <code title="get /v1/context">client.contexts.<a href="./src/resources/contexts.ts">list</a>() -> GetContextsResponse</code>
- <code title="delete /v1/context/{id}">client.contexts.<a href="./src/resources/contexts.ts">delete</a>(id) -> DeleteContextResponse</code>
