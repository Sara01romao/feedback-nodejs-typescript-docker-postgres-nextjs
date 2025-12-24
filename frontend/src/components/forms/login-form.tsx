'use client'

import { useState, useActionState, useEffect} from "react";
import { Input } from "../input";
import { useModal } from "../modal";
import { SubmitButton } from "../btn-submit";
import { login } from "@/src/actions/login";


export function LoginForm() {
  const { openModal } = useModal();
  const [companyCode, setCompanyCode] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [state, action] = useActionState(login, {
    ok: false,
    error: ''
  });

 
  // useEffect(() => {
  //   if (!state.ok) return;

  // }, [state])

  return (
    <>
      <form action={action} className="max-w-[500px] w-full border border-[#D9D9D9] rounded-lg py-8 px-8 mx-auto flex flex-col gap-4  ">
        <h2 className="font-semibold text-2xl text-gray-900 text-center mb-4">Login</h2>
        <Input name="code" type="text" title="Nome da Empresa" change={setCompanyCode} />
        <Input name="password" type="password" title="Senha" change={setPassword} />

        {state?.error && (
          <p className="text-red-500 mt-2">{state.error}</p>
        )}

        <SubmitButton />
      </form>
    </>
  )
}