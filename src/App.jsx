import React from 'react';
import Posts from './Posts';
import Users from './Users';
// hello thhis is kareem medhat
function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>📦 React Data Fetch Example</h1>
      <h2>📝 Posts</h2>
      <Posts />
      <hr />
      <h2>👥 Users</h2>
      <Users />
    </div>
  );
}

export default App;
