import React from "react";

import useEnv from "./hooks/useEnv";

function App() {
  const env = useEnv();
  return (
    <ul>
      {Object.keys(env).map(key => (
        <li key={key}><strong>{key}</strong>: {JSON.stringify(env[key])}</li>
      ))}
    </ul>
  )
}

export default App;
