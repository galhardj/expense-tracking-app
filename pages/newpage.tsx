import React from "react";
import Head from "next/head";
import Link from "next/link";

const NewPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Expense Tracker - New Page</title>
        <meta
          name="description"
          content="New page in our expense tracking app"
        />
      </Head>

      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/newpage">New Page</Link>
          </li>
        </ul>
      </nav>

      <div>
        <h1>Welcome to the New Page</h1>
        <p>This is another page in your React and Next.js app.</p>
      </div>
    </>
  );
};

export default NewPage;
