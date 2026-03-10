export async function getAllTrustees() {
  const res = await fetch("/api/trustmembers");

  if (!res.ok) {
    throw new Error("Failed to fetch trustees");
  }

  return res.json();
}