export async function getAllTrustees() {
  const res = await fetch("http://localhost:3000/api/trustmembers");

  if (!res.ok) {
    throw new Error("Failed to fetch trustees");
  }

  return res.json();
}