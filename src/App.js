import React from 'react';

function App() {
  return (
    <div className="container text-center py-4 bg-light">
      <h1>My Simple Login Form</h1>
      <form className="my-5">
        <input type="text" placeholder="Enter email address" className="form-control my-2" />
        <input type="password" placeholder="Enter password" className="form-control my-2" />
        <input type="submit" value="Login" className="btn btn-warning btn-lg form-control" />
      </form>
    </div>
  );
}

export default App;
