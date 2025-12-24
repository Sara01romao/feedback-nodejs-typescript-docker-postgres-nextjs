'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type FeedbackState = {
  ok: boolean;
  error: string;
};

export async function login(prevState: FeedbackState, formData: FormData): Promise<FeedbackState> {
  const loginForm = {
    code: formData.get("code")?.toString() ?? "",
    password: formData.get("password")?.toString() ?? "",
  };

  if (!loginForm.code || !loginForm.password) {
    return { ok: false, error: "Informe o código e a senha." };
  }

  const response = await fetch("http://localhost:8080/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginForm),
  });

  if (!response.ok) {
    return { ok: false, error: "Erro ao tentar fazer login." };
  }

  const data = await response.json();

  (await cookies()).set("token", data.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24,
  });

  redirect("/dashboard");
}