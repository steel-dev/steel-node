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

# Session

Types:

- <code><a href="./src/resources/session.ts">CreateSessionRequest</a></code>
- <code><a href="./src/resources/session.ts">ReleaseSessionResponse</a></code>
- <code><a href="./src/resources/session.ts">Session</a></code>
- <code><a href="./src/resources/session.ts">SessionGetContextResponse</a></code>

Methods:

- <code title="post /v1/sessions">client.session.<a href="./src/resources/session.ts">create</a>({ ...params }) -> Session</code>
- <code title="get /v1/sessions/{id}/context">client.session.<a href="./src/resources/session.ts">getContext</a>(id) -> unknown</code>
- <code title="get /v1/sessions/{id}">client.session.<a href="./src/resources/session.ts">getData</a>(id) -> Session</code>
- <code title="get /v1/sessions/{id}/release">client.session.<a href="./src/resources/session.ts">release</a>(id) -> ReleaseSessionResponse</code>
