import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Expenses from "../src/components/Expenses/Expenses";
import NewExpense from "../src/components/NewExpense/NewExpense";
import { Expense } from "../src/types/expense";

const DUMMY_ARRAY: Expense[] = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const Home: React.FC = () => {
  const [enteredExpenses, updateExpenses] = useState<Expense[]>(DUMMY_ARRAY);

  const addExpenseHandler = (expense: Expense) => {
    updateExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  return (
    <>
      <Head>
        <title>Expense Tracker - Home</title>
        <meta
          name="description"
          content="Track your expenses with our React and Next.js app"
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
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={enteredExpenses} />
      </div>
    </>
  );
};

export default Home;
