"use client";

import { useEffect, useState } from "react";

function Login() {
  const [sessionId, setSessionId] = useState<String>("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sid = params.get("session_id");
    if (sid) setSessionId(sid);
  }, []);

  const handleLogin = () => {
    window.location.href = "http://127.0.0.1:3021/login";
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Codeblood OAuth Test</h1>
      {sessionId ? (
        <>
          <h2>🎉 Logged in!</h2>
          <p>
            <b>Session ID:</b> {sessionId}
          </p>
        </>
      ) : (
        <button onClick={handleLogin}>Login with Google</button>
      )}
    </div>
  );
}

export default Login;
