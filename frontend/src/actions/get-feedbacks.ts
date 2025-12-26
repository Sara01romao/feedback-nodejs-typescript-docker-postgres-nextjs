'use server'

import { cookies } from "next/headers";

import { logout } from "./logout";
import { validateToken } from "../function/validate-token";

type FilterState = {
  ok: boolean;
  error: string;
  data: null;
};

export async function getFeedbacks(prevState: FilterState, formData: FormData): Promise<FilterState> {
  const filterForm = {
    type: formData.get("type")?.toString() ?? "",
    date: formData.get("date")?.toString() ?? "",
  };
  const isValidate = await validateToken();

  if (!isValidate.ok) {
    await logout();
    return { ok: false, error: "Sessão expirada", data: null };
  }

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const params = new URLSearchParams();

  if (filterForm.type) {
    params.append("type", filterForm.type);
  }

  if (filterForm.date) {
    params.append("date", filterForm.date);
  }

  const response = await fetch(
    `http://localhost:8080/feedbacks?${params.toString()}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return { ok: false, error: "Erro ao buscar feedbacks", data: null };
  }

  const result = await response.json();
  console.log("result", result)
  return {
    ok: true, error: "", data: result,
  };

}