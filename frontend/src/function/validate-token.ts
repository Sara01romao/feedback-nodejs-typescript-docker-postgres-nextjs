import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { logout } from "../actions/logout";

export async function validateToken() {
  const token = (await cookies()).get("token")?.value;

  if (!token) {
    return { ok: false, error: "", data: null };
  }

  let response: Response;
  response = await fetch("http://localhost:8080/feedbacks", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    await logout()
    return { ok: false, error: "", data: null };
  }

  const data = await response.json();

  return { ok: true, error: "", data: data };
}
