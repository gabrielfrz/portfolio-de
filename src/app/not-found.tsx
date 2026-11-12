import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="wrap not-found">
      <span className="mono">404 / A MISSING CONNECTION</span>
      <h1>This path ends here.</h1>
      <Link className="explore-link" href="/">
        Return to the portfolio ↗
      </Link>
    </main>
  );
}
