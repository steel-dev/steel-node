# API

## Schema

Types:

- <code><a href="./src/resources/api/schema.ts">SchemaRetrieveResponse</a></code>

Methods:

- <code title="get /api/schema/">client.api.schema.<a href="./src/resources/api/schema.ts">retrieve</a>({ ...params }) -> SchemaRetrieveResponse</code>

## SDK

### Context

Types:

- <code><a href="./src/resources/api/sdk/context.ts">Context</a></code>
- <code><a href="./src/resources/api/sdk/context.ts">ContextListResponse</a></code>

Methods:

- <code title="post /v1/sdk/context/">client.api.sdk.context.<a href="./src/resources/api/sdk/context.ts">create</a>({ ...params }) -> Context</code>
- <code title="get /v1/sdk/context/{id}/">client.api.sdk.context.<a href="./src/resources/api/sdk/context.ts">retrieve</a>(id) -> Context</code>
- <code title="patch /v1/sdk/context/{id}/">client.api.sdk.context.<a href="./src/resources/api/sdk/context.ts">update</a>(id, { ...params }) -> Context</code>
- <code title="get /v1/sdk/context/">client.api.sdk.context.<a href="./src/resources/api/sdk/context.ts">list</a>() -> ContextListResponse</code>
- <code title="delete /v1/sdk/context/{id}/">client.api.sdk.context.<a href="./src/resources/api/sdk/context.ts">delete</a>(id) -> void</code>

### Pdf

Types:

- <code><a href="./src/resources/api/sdk/pdf.ts">PdfCreateResponse</a></code>

Methods:

- <code title="post /v1/sdk/pdf/">client.api.sdk.pdf.<a href="./src/resources/api/sdk/pdf.ts">create</a>({ ...params }) -> unknown</code>

### Scrape

Types:

- <code><a href="./src/resources/api/sdk/scrape.ts">ScrapeCreateResponse</a></code>

Methods:

- <code title="post /v1/sdk/scrape/">client.api.sdk.scrape.<a href="./src/resources/api/sdk/scrape.ts">create</a>({ ...params }) -> unknown</code>

### Screenshot

Types:

- <code><a href="./src/resources/api/sdk/screenshot.ts">ScreenshotCreateResponse</a></code>

Methods:

- <code title="post /v1/sdk/screenshot/">client.api.sdk.screenshot.<a href="./src/resources/api/sdk/screenshot.ts">create</a>({ ...params }) -> unknown</code>

### Sessions

Types:

- <code><a href="./src/resources/api/sdk/sessions.ts">Session</a></code>
- <code><a href="./src/resources/api/sdk/sessions.ts">SessionListResponse</a></code>

Methods:

- <code title="post /v1/sdk/sessions/">client.api.sdk.sessions.<a href="./src/resources/api/sdk/sessions.ts">create</a>({ ...params }) -> Session</code>
- <code title="get /v1/sdk/sessions/{id}/">client.api.sdk.sessions.<a href="./src/resources/api/sdk/sessions.ts">retrieve</a>(id) -> Session</code>
- <code title="patch /v1/sdk/sessions/{id}/">client.api.sdk.sessions.<a href="./src/resources/api/sdk/sessions.ts">update</a>(id, { ...params }) -> Session</code>
- <code title="get /v1/sdk/sessions/">client.api.sdk.sessions.<a href="./src/resources/api/sdk/sessions.ts">list</a>() -> SessionListResponse</code>
- <code title="delete /v1/sdk/sessions/{id}/">client.api.sdk.sessions.<a href="./src/resources/api/sdk/sessions.ts">delete</a>(id) -> void</code>
