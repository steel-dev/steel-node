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

# Files

Types:

- <code><a href="./src/resources/files.ts">File</a></code>
- <code><a href="./src/resources/files.ts">Fileslist</a></code>

Methods:

- <code title="get /v1/files">client.files.<a href="./src/resources/files.ts">list</a>() -> Fileslist</code>
- <code title="delete /v1/files/{path}">client.files.<a href="./src/resources/files.ts">delete</a>(path\_) -> void</code>
- <code title="get /v1/files/{path}">client.files.<a href="./src/resources/files.ts">download</a>(path\_) -> Response</code>
- <code title="post /v1/files">client.files.<a href="./src/resources/files.ts">upload</a>({ ...params }) -> File</code>

# Sessions

Types:

- <code><a href="./src/resources/sessions/sessions.ts">Session</a></code>
- <code><a href="./src/resources/sessions/sessions.ts">SessionContext</a></code>
- <code><a href="./src/resources/sessions/sessions.ts">Sessionslist</a></code>
- <code><a href="./src/resources/sessions/sessions.ts">SessionComputerResponse</a></code>
- <code><a href="./src/resources/sessions/sessions.ts">SessionEventsResponse</a></code>
- <code><a href="./src/resources/sessions/sessions.ts">SessionLiveDetailsResponse</a></code>
- <code><a href="./src/resources/sessions/sessions.ts">SessionReleaseResponse</a></code>
- <code><a href="./src/resources/sessions/sessions.ts">SessionReleaseAllResponse</a></code>

Methods:

- <code title="post /v1/sessions">client.sessions.<a href="./src/resources/sessions/sessions.ts">create</a>({ ...params }) -> Session</code>
- <code title="get /v1/sessions/{id}">client.sessions.<a href="./src/resources/sessions/sessions.ts">retrieve</a>(id) -> Session</code>
- <code title="get /v1/sessions">client.sessions.<a href="./src/resources/sessions/sessions.ts">list</a>({ ...params }) -> SessionslistSessionsSessionsCursor</code>
- <code title="post /v1/sessions/{sessionId}/computer">client.sessions.<a href="./src/resources/sessions/sessions.ts">computer</a>(sessionId, { ...params }) -> SessionComputerResponse</code>
- <code title="get /v1/sessions/{id}/context">client.sessions.<a href="./src/resources/sessions/sessions.ts">context</a>(id) -> SessionContext</code>
- <code title="get /v1/sessions/{id}/events">client.sessions.<a href="./src/resources/sessions/sessions.ts">events</a>(id, { ...params }) -> SessionEventsResponse</code>
- <code title="get /v1/sessions/{id}/live-details">client.sessions.<a href="./src/resources/sessions/sessions.ts">liveDetails</a>(id) -> SessionLiveDetailsResponse</code>
- <code title="post /v1/sessions/{id}/release">client.sessions.<a href="./src/resources/sessions/sessions.ts">release</a>(id) -> SessionReleaseResponse</code>
- <code title="post /v1/sessions/release">client.sessions.<a href="./src/resources/sessions/sessions.ts">releaseAll</a>() -> SessionReleaseAllResponse</code>

## Files

Methods:

- <code title="get /v1/sessions/{sessionId}/files">client.sessions.files.<a href="./src/resources/sessions/files.ts">list</a>(sessionId) -> Fileslist</code>
- <code title="delete /v1/sessions/{sessionId}/files/{path}">client.sessions.files.<a href="./src/resources/sessions/files.ts">delete</a>(sessionId, path\_) -> void</code>
- <code title="delete /v1/sessions/{sessionId}/files">client.sessions.files.<a href="./src/resources/sessions/files.ts">deleteAll</a>(sessionId) -> void</code>
- <code title="get /v1/sessions/{sessionId}/files/{path}">client.sessions.files.<a href="./src/resources/sessions/files.ts">download</a>(sessionId, path\_) -> Response</code>
- <code title="get /v1/sessions/{sessionId}/files.zip">client.sessions.files.<a href="./src/resources/sessions/files.ts">downloadArchive</a>(sessionId) -> Response</code>
- <code title="post /v1/sessions/{sessionId}/files">client.sessions.files.<a href="./src/resources/sessions/files.ts">upload</a>(sessionId, { ...params }) -> File</code>

## Captchas

Types:

- <code><a href="./src/resources/sessions/captchas.ts">CaptchaSolveResponse</a></code>
- <code><a href="./src/resources/sessions/captchas.ts">CaptchaSolveImageResponse</a></code>
- <code><a href="./src/resources/sessions/captchas.ts">CaptchaStatusResponse</a></code>

Methods:

- <code title="post /v1/sessions/{sessionId}/captchas/solve">client.sessions.captchas.<a href="./src/resources/sessions/captchas.ts">solve</a>(sessionId, { ...params }) -> CaptchaSolveResponse</code>
- <code title="post /v1/sessions/{sessionId}/captchas/solve-image">client.sessions.captchas.<a href="./src/resources/sessions/captchas.ts">solveImage</a>(sessionId, { ...params }) -> CaptchaSolveImageResponse</code>
- <code title="get /v1/sessions/{sessionId}/captchas/status">client.sessions.captchas.<a href="./src/resources/sessions/captchas.ts">status</a>(sessionId) -> CaptchaStatusResponse</code>

# Extensions

Types:

- <code><a href="./src/resources/extensions.ts">ExtensionUpdateResponse</a></code>
- <code><a href="./src/resources/extensions.ts">ExtensionListResponse</a></code>
- <code><a href="./src/resources/extensions.ts">ExtensionDeleteResponse</a></code>
- <code><a href="./src/resources/extensions.ts">ExtensionDeleteAllResponse</a></code>
- <code><a href="./src/resources/extensions.ts">ExtensionDownloadResponse</a></code>
- <code><a href="./src/resources/extensions.ts">ExtensionUploadResponse</a></code>

Methods:

- <code title="put /v1/extensions/{extensionId}">client.extensions.<a href="./src/resources/extensions.ts">update</a>(extensionId, { ...params }) -> ExtensionUpdateResponse</code>
- <code title="get /v1/extensions">client.extensions.<a href="./src/resources/extensions.ts">list</a>() -> ExtensionListResponse</code>
- <code title="delete /v1/extensions/{extensionId}">client.extensions.<a href="./src/resources/extensions.ts">delete</a>(extensionId) -> ExtensionDeleteResponse</code>
- <code title="delete /v1/extensions">client.extensions.<a href="./src/resources/extensions.ts">deleteAll</a>() -> ExtensionDeleteAllResponse</code>
- <code title="get /v1/extensions/{extensionId}">client.extensions.<a href="./src/resources/extensions.ts">download</a>(extensionId) -> string</code>
- <code title="post /v1/extensions">client.extensions.<a href="./src/resources/extensions.ts">upload</a>({ ...params }) -> ExtensionUploadResponse</code>

# Profiles

Types:

- <code><a href="./src/resources/profiles.ts">ProfileCreateResponse</a></code>
- <code><a href="./src/resources/profiles.ts">ProfileUpdateResponse</a></code>
- <code><a href="./src/resources/profiles.ts">ProfileListResponse</a></code>
- <code><a href="./src/resources/profiles.ts">ProfileGetResponse</a></code>

Methods:

- <code title="post /v1/profiles">client.profiles.<a href="./src/resources/profiles.ts">create</a>({ ...params }) -> ProfileCreateResponse</code>
- <code title="patch /v1/profiles/{id}">client.profiles.<a href="./src/resources/profiles.ts">update</a>(id, { ...params }) -> ProfileUpdateResponse</code>
- <code title="get /v1/profiles">client.profiles.<a href="./src/resources/profiles.ts">list</a>() -> ProfileListResponse</code>
- <code title="get /v1/profiles/{id}">client.profiles.<a href="./src/resources/profiles.ts">get</a>(id) -> ProfileGetResponse</code>
