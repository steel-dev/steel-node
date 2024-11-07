# Sessions

Types:

- <code><a href="./src/resources/sessions.ts">Session</a></code>
- <code><a href="./src/resources/sessions.ts">SessionContext</a></code>
- <code><a href="./src/resources/sessions.ts">Sessionslist</a></code>
- <code><a href="./src/resources/sessions.ts">SessionListResponse</a></code>
- <code><a href="./src/resources/sessions.ts">SessionReleaseResponse</a></code>
- <code><a href="./src/resources/sessions.ts">SessionReleaseAllResponse</a></code>

Methods:

- <code title="post /v1/sessions">client.sessions.<a href="./src/resources/sessions.ts">create</a>({ ...params }) -> Session</code>
- <code title="get /v1/sessions/{id}">client.sessions.<a href="./src/resources/sessions.ts">retrieve</a>(id) -> Session</code>
- <code title="get /v1/sessions">client.sessions.<a href="./src/resources/sessions.ts">list</a>({ ...params }) -> SessionListResponsesSessionsCursor</code>
- <code title="get /v1/sessions/{id}/context">client.sessions.<a href="./src/resources/sessions.ts">context</a>(id) -> SessionContext</code>
- <code title="post /v1/sessions/{id}/release">client.sessions.<a href="./src/resources/sessions.ts">release</a>(id) -> SessionReleaseResponse</code>
- <code title="post /v1/sessions/release">client.sessions.<a href="./src/resources/sessions.ts">releaseAll</a>() -> SessionReleaseAllResponse</code>
