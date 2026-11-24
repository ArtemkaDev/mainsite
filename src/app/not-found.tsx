import Link from "next/link";

export default function NotFound() {
  return (
    <main className="aplo-container py-12">
      <h1 className="aplo-heading">Page not found</h1>
      <Link className="mt-4 inline-block underline" href="/">Back to AploCoin</Link>
    </main>
  );
}
