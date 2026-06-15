Topics:

📅 Day 4 — Navigation in Next.js
📅 Day 6 — Loading & Error Pages


Detail:
--------------------------------------------------------------------------------------------
📅 Day 4 — Navigation in Next.js
🎯 Goal

Learn how to move between pages in Next.js using links and programmatic navigation.

📚 Learn
1️⃣ Link Component

Use the Link component for client-side navigation.

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <Link href="/about">
        Go to About Page
      </Link>
    </div>
  );
}
Why use Link?

✅ Faster navigation

✅ No full page reload

✅ Better user experience

2️⃣ useRouter Hook

Used for programmatic navigation.

"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/about")}>
      Go to About
    </button>
  );
}
3️⃣ Programmatic Navigation Methods
Navigate to a page
router.push("/about");
Replace current page
router.replace("/login");
Go back
router.back();
Refresh page
router.refresh();
🛠 Practice
Create Pages
app/page.jsx
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <Link href="/about">
        About Page
      </Link>
    </div>
  );
}
app/about/page.jsx
export default function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}

Run:

npm run dev

Visit:

/

Click the link and navigate to:

/about
💻 Mini Tasks
Task 1: Back Button
"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()}>
      Go Back
    </button>
  );
}
Task 2: Redirect Button
"use client";

import { useRouter } from "next/navigation";

export default function RedirectButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.push("/contact")}>
      Contact Page
    </button>
  );
}
Task 3: Navigation Menu
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">Home</Link> |{" "}
      <Link href="/about">About</Link> |{" "}
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
📦 Homework
Multi-Page Portfolio Navigation

Create these pages:

app/
│
├── page.jsx          (Home)
├── about/
│   └── page.jsx
├── projects/
│   └── page.jsx
└── contact/
    └── page.jsx
Requirements

✅ Navbar on all pages

✅ Home page

✅ About page

✅ Projects page

✅ Contact page

✅ Active navigation links (Bonus)

✅ Back button on each page

📖 Summary

Today you learned:

Link
useRouter
router.push()
router.replace()
router.back()
Programmatic Navigation
Multi-page routing

➡️ Day 5: Layouts & Nested Layouts (Shared UI across pages) 🚀

router.replace()
router.replace() in Next.js

router.replace() navigates to another page without adding a new entry to the browser history.

Syntax
router.replace("/dashboard");
Example
"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    // Login logic

    router.replace("/dashboard");
  };

  return <button onClick={handleLogin}>Login</button>;
}
Difference Between push() and replace()
Method	Adds to History?	Back Button Works?
router.push()	✅ Yes	✅ Yes
router.replace()	❌ No	❌ No
Using push()
router.push("/dashboard");

History:

/login → /dashboard

Clicking Back returns to:

/login
Using replace()
router.replace("/dashboard");

History:

/dashboard

The /login page is replaced, so Back won't return to it.

Common Use Cases

✅ After successful login

✅ After logout

✅ Redirecting users from old URLs

✅ Preventing users from going back to a form or login page

router.replace("/login");

This is why replace() is commonly used for authentication redirects.



=============================================================================================


# 📅 Day 6 — Loading & Error Pages

## 📚 Learn

### 1. `loading.js`

Shows a loading UI while a page or data is being fetched.

**Example:**

```jsx
// app/loading.js

export default function Loading() {
  return <h1>Loading...</h1>;
}
```

**With Spinner:**

```jsx
// app/loading.js

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
    </div>
  );
}
```

---

### 2. `error.js`

Handles runtime errors in a route segment.

**Example:**

```jsx
// app/error.js
"use client";

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong!</h2>

      <button onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
```

**Trigger Error:**

```jsx
export default function Page() {
  throw new Error("Something broke!");
}
```

---

### 3. `not-found.js`

Custom 404 page when a route doesn't exist.

**Example:**

```jsx
// app/not-found.js

export default function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
}
```

**Trigger Manually:**

```jsx
import { notFound } from "next/navigation";

export default function Page() {
  const data = null;

  if (!data) {
    notFound();
  }

  return <div>Data Found</div>;
}
```

---

## 🛠 Practice

### Add Loading Spinner

```jsx
// app/loading.js

export default function Loading() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
    </div>
  );
}
```

### Create 404 Page

```jsx
// app/not-found.js

export default function NotFound() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold">404</h1>
      <p>Page Not Found</p>
    </div>
  );
}
```

---

## 📦 Homework

### Project: Custom Error Pages

Create:

```
app/
├── loading.js
├── error.js
├── not-found.js
└── page.js
```

### Requirements

✅ Animated loading spinner

✅ Error page with "Try Again" button

✅ Custom 404 page

✅ Use `notFound()` in a page

✅ Style everything with Tailwind CSS

---

### Folder Structure

```txt
app/
│
├── loading.js
├── error.js
├── not-found.js
├── page.js
└── posts/
    └── [id]/
        └── page.js
```

### Mini Challenge

Create a dynamic route:

```txt
/posts/1
/posts/2
/posts/999
```

If the post doesn't exist, show your custom `not-found.js` page using:

```jsx
notFound();
```

🎯 Goal: Understand how Next.js handles loading states, runtime errors, and 404 pages automatically using the App Router.
=============================================================================================


