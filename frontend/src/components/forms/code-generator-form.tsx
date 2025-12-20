'use client'

import { useState, useActionState, useEffect, useRef } from "react";
import { Input } from "../input";
import { useModal } from "../modal";
import { SubmitButton } from "../btn-submit";
import { postCode } from "@/src/actions/post-code";

export function CodeForm() {
  const { openModal } = useModal();
  const [companyName, setCompanyName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [state, action] = useActionState(postCode, {
    ok: false,
    data: null,
    error: ''
  });

  const tooltipRef = useRef<HTMLParagraphElement | null>(null)

  async function copyCode(code: string) {
    await navigator.clipboard.writeText(code)

    tooltipRef.current?.classList.add("opacity-100")

    setTimeout(() => {
      tooltipRef.current?.classList.remove("opacity-100")
    }, 2000)
  }

  useEffect(() => {
    if (!state.ok) return;

    const companyCode = state.data.codeCompany;
    openModal(
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <svg className="animate-bounce" width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.4911 18.2766L0.366101 10.1516C-0.122034 9.66351 -0.122034 8.87206 0.366101 8.38387L2.13383 6.6161C2.62196 6.12792 3.41346 6.12792 3.9016 6.6161L9.37499 12.0894L21.0984 0.366101C21.5865 -0.122034 22.378 -0.122034 22.8662 0.366101L24.6339 2.13387C25.122 2.62201 25.122 3.41346 24.6339 3.90165L10.2589 18.2767C9.77069 18.7648 8.97924 18.7648 8.4911 18.2766Z" fill="#00B244" />
          </svg>

          <h2 className="text-xl font-semibold text-center text-[#643EE4]">Código Criado</h2>
        </div>

        <div className="flex items-end w-full relative">
          <div className="flex flex-col w-full">
            <label htmlFor="code" className="text-md font-medium text-gray-700">Código</label>
            <input type="text" value={companyCode} name="code" disabled className="border border-[#A6A6A6] rounded-bl-sm rounded-tl-sm p-1 px-2 bg-gray-200" />
          </div>

          <p ref={tooltipRef} className="absolute -top-2 right-0 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 transition-opacity duration-300 pointer-events-none ">
            Cópiado com Sucesso
            <span className="absolute -bottom-1 right-0 left-0 m-auto w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-black/70"></span>
          </p>

          <button className="bg-[#643EE4] hover:bg-[#5535C3] cursor-pointer flex h-[34px] items-center justify-center p-2 text-white rounded-br-sm rounded-tr-sm" onClick={() => copyCode(companyCode)}>
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_2958_478)">
                <path d="M14 0.875H3.5C2.5375 0.875 1.75 1.6625 1.75 2.625V14.875H3.5V2.625H14V0.875ZM16.625 4.375H7C6.0375 4.375 5.25 5.1625 5.25 6.125V18.375C5.25 19.3375 6.0375 20.125 7 20.125H16.625C17.5875 20.125 18.375 19.3375 18.375 18.375V6.125C18.375 5.1625 17.5875 4.375 16.625 4.375ZM16.625 18.375H7V6.125H16.625V18.375Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_2958_478">
                  <rect width="21" height="21" fill="white" />
                </clipPath>
              </defs>
            </svg>

            Copiar
          </button>
        </div>

        <ul className="list-disc">
          <li className="text-gray-700">Compartilhe o código para feedbacks</li>
          <li className="text-gray-700"> Utilize o mesmo código para acessar como administrador</li>
        </ul>
      </div>
    );

  }, [state])

  return (
    <>
      <form action={action} className="max-w-[500px] w-full border border-[#D9D9D9] rounded-lg py-8 px-8 mx-auto flex flex-col gap-4  ">
        <h2 className="font-semibold text-2xl text-gray-900 text-center mb-4">Gerar Código</h2>
        <Input name="name" type="text" title="Nome da Empresa" change={setCompanyName} />
        <Input name="password" type="password" title="Senha" change={setPassword} />

        {state?.error && (
          <p className="text-red-500 mt-2">{state.error}</p>
        )}

        <SubmitButton />
      </form>
    </>
  )
}