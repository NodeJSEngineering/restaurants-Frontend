import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <button>
        <Link to="/cafe">cafe</Link>
      </button>
      <button>
        <Link to="/employee">employee</Link>
      </button>
    </div>
  );
}
