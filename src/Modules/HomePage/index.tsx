import React from "react";
import Link from "next/link";

function HomePage() {
  return (
    <div>
      This is Home Page
      <div>
        <Link href={"/login"}>Login</Link>
      </div>
      <div>
        <Link href={"/register"}>Register</Link>
      </div>
    </div>
  );
}

export default HomePage;
