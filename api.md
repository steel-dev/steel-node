# Steel

Types:

- <code><a href="./src/resources/top-level.ts">PdfResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ScrapeResponse</a></code>
- <code><a href="./src/resources/top-level.ts">ScreenshotResponse</a></code>

Methods:

- <code title="post /v1/pdf">client.<a href="./src/index.ts">pdf</a>({ ...params }) -> PdfResponse</code>
- <code title="post /v1/scrape">client.<a href="./src/index.ts">scrape</a>({ ...params }) -> ScrapeResponse</code>
- <code title="post /v1/screenshot">client.<a href="./src/index.ts">screenshot</a>({ ...params }) -> ScreenshotResponse</code>

# Credentials

Types:

- <code><a href="./src/resources/credentials.ts">CredentialCreateResponse</a></code>
- <code><a href="./src/resources/credentials.ts">CredentialUpdateResponse</a></code>
- <code><a href="./src/resources/credentials.ts">CredentialListResponse</a></code>
- <code><a href="./src/resources/credentials.ts">CredentialDeleteResponse</a></code>

Methods:

- <code title="post /v1/credentials">client.credentials.<a href="./src/resources/credentials.ts">create</a>({ ...params }) -> CredentialCreateResponse</code>
- <code title="put /v1/credentials">client.credentials.<a href="./src/resources/credentials.ts">update</a>({ ...params }) -> CredentialUpdateResponse</code>
- <code title="get /v1/credentials">client.credentials.<a href="./src/resources/credentials.ts">list</a>({ ...params }) -> CredentialListResponse</code>
- <code title="delete /v1/credentials">client.credentials.<a href="./src/resources/credentials.ts">delete</a>({ ...params }) -> CredentialDeleteResponse</code>

# Sessions

Types:

- <code><a href="./src/resources/sessions/sessions.ts">Session</a></code>
- <code><a href="./src/resources/sessions/sessions.ts">SessionContext</a></code>
- <code><a href="./src/resources/sessions/sessions.ts">Sessionslist</a></code>
- <code><a href="./src/resources/sessions/sessions.ts">SessionEventsResponse</a></code>
- <code><a href="./src/resources/sessions/sessions.ts">SessionLiveDetailsResponse</a></code>
- <code><a href="./src/resources/sessions/sessions.ts">SessionReleaseResponse</a></code>

Methods:

- <code title="post /v1/sessions">client.sessions.<a href="./src/resources/sessions/sessions.ts">create</a>({ ...params }) -> Session</code>
- <code title="get /v1/sessions/{id}">client.sessions.<a href="./src/resources/sessions/sessions.ts">retrieve</a>(id) -> Session</code>
- <code title="get /v1/sessions">client.sessions.<a href="./src/resources/sessions/sessions.ts">list</a>({ ...params }) -> SessionslistSessionsSessionsCursor</code>
- <code title="get /v1/sessions/{id}/context">client.sessions.<a href="./src/resources/sessions/sessions.ts">context</a>(id) -> SessionContext</code>
- <code title="get /v1/sessions/{id}/events">client.sessions.<a href="./src/resources/sessions/sessions.ts">events</a>(id) -> SessionEventsResponse</code>
- <code title="get /v1/sessions/{id}/live-details">client.sessions.<a href="./src/resources/sessions/sessions.ts">liveDetails</a>(id) -> SessionLiveDetailsResponse</code>
- <code title="post /v1/sessions/{id}/release">client.sessions.<a href="./src/resources/sessions/sessions.ts">release</a>(id) -> SessionReleaseResponse</code>

## Files

Types:

- <code><a href="./src/resources/sessions/files.ts">File</a></code>
- <code><a href="./src/resources/sessions/files.ts">Fileslist</a></code>
- <code><a href="./src/resources/sessions/files.ts">FileDeleteResponse</a></code>
- <code><a href="./src/resources/sessions/files.ts">FileDeleteAllResponse</a></code>

Methods:

- <code title="get /v1/sessions/{sessionId}/files/{fileId}">client.sessions.files.<a href="./src/resources/sessions/files.ts">retrieve</a>(sessionId, fileId) -> File</code>
- <code title="get /v1/sessions/{sessionId}/files">client.sessions.files.<a href="./src/resources/sessions/files.ts">list</a>(sessionId) -> Fileslist</code>
- <code title="delete /v1/sessions/{sessionId}/files/{fileId}">client.sessions.files.<a href="./src/resources/sessions/files.ts">delete</a>(sessionId, fileId) -> FileDeleteResponse</code>
- <code title="delete /v1/sessions/{sessionId}/files">client.sessions.files.<a href="./src/resources/sessions/files.ts">deleteAll</a>(sessionId) -> FileDeleteAllResponse</code>
- <code title="get /v1/sessions/{sessionId}/files/{fileId}/download">client.sessions.files.<a href="./src/resources/sessions/files.ts">download</a>(sessionId, fileId) -> Response</code>
- <code title="post /v1/sessions/{sessionId}/files">client.sessions.files.<a href="./src/resources/sessions/files.ts">upload</a>(sessionId, { ...params }) -> File</code>
