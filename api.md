# Steel

Types:

- <code><a href="./src/resources/top-level.ts">Scrape</a></code>

Methods:

- <code title="post /v1/pdf">client.<a href="./src/index.ts">pdf</a>({ ...params }) -> Response</code>
- <code title="post /v1/scrape">client.<a href="./src/index.ts">scrape</a>({ ...params }) -> Scrape</code>
- <code title="post /v1/screenshot">client.<a href="./src/index.ts">screenshot</a>({ ...params }) -> Response</code>

# Sessions

Types:

- <code><a href="./src/resources/sessions.ts">Session</a></code>
- <code><a href="./src/resources/sessions.ts">SessionListResponse</a></code>
- <code><a href="./src/resources/sessions.ts">SessionReleaseResponse</a></code>

Methods:

- <code title="post /v1/sessions">client.sessions.<a href="./src/resources/sessions.ts">create</a>({ ...params }) -> Session</code>
- <code title="get /v1/sessions/{id}">client.sessions.<a href="./src/resources/sessions.ts">retrieve</a>(id) -> Session</code>
- <code title="get /v1/sessions">client.sessions.<a href="./src/resources/sessions.ts">list</a>({ ...params }) -> SessionListResponse</code>
- <code title="get /v1/sessions/{id}/release">client.sessions.<a href="./src/resources/sessions.ts">release</a>(id) -> SessionReleaseResponse</code>

# Contexts

Types:

- <code><a href="./src/resources/contexts.ts">Context</a></code>
- <code><a href="./src/resources/contexts.ts">ContextCreateResponse</a></code>
- <code><a href="./src/resources/contexts.ts">ContextListResponse</a></code>
- <code><a href="./src/resources/contexts.ts">ContextDeleteResponse</a></code>

Methods:

- <code title="post /v1/context">client.contexts.<a href="./src/resources/contexts.ts">create</a>({ ...params }) -> ContextCreateResponse</code>
- <code title="get /v1/context/{id}">client.contexts.<a href="./src/resources/contexts.ts">retrieve</a>(id) -> Context</code>
- <code title="get /v1/context">client.contexts.<a href="./src/resources/contexts.ts">list</a>() -> ContextListResponse</code>
- <code title="delete /v1/context/{id}">client.contexts.<a href="./src/resources/contexts.ts">delete</a>(id) -> ContextDeleteResponse</code>
