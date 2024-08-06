# Steel

Types:

- <code><a href="./src/resources/top-level.ts">PdfRequest</a></code>
- <code><a href="./src/resources/top-level.ts">PdfResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ScrapeRequest</a></code>
- <code><a href="./src/resources/top-level.ts">ScrapeResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ScreenshotRequest</a></code>
- <code><a href="./src/resources/top-level.ts">ScreenshotResponse</a></code>

Methods:

- <code title="post /v1/pdf">client.<a href="./src/index.ts">generatePdf</a>({ ...params }) -> PdfResponse</code>
- <code title="get /v1/sessions">client.<a href="./src/index.ts">listSessions</a>({ ...params }) -> SessionsCursorPage</code>
- <code title="post /v1/scrape">client.<a href="./src/index.ts">scrape</a>({ ...params }) -> ScrapeResponse</code>
- <code title="post /v1/screenshot">client.<a href="./src/index.ts">screenshot</a>({ ...params }) -> ScreenshotResponse</code>

# Sessions

Types:

- <code><a href="./src/resources/sessions.ts">CreateSessionRequest</a></code>
- <code><a href="./src/resources/sessions.ts">ReleaseSessionResponse</a></code>
- <code><a href="./src/resources/sessions.ts">Session</a></code>
- <code><a href="./src/resources/sessions.ts">SessionGetContextResponse</a></code>

Methods:

- <code title="post /v1/sessions">client.sessions.<a href="./src/resources/sessions.ts">create</a>({ ...params }) -> Session</code>
- <code title="get /v1/sessions/{id}/context">client.sessions.<a href="./src/resources/sessions.ts">getContext</a>(id) -> unknown</code>
- <code title="get /v1/sessions/{id}">client.sessions.<a href="./src/resources/sessions.ts">getData</a>(id) -> Session</code>
- <code title="get /v1/sessions/{id}/release">client.sessions.<a href="./src/resources/sessions.ts">release</a>(id) -> ReleaseSessionResponse</code>
