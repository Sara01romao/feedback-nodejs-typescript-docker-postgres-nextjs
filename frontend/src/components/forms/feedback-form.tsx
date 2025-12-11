'use client'

import { useState, useActionState, useEffect } from "react";
import { Input } from "../input";
import Textarea from "../textarea";
import Select from "../select";
import { postFeedback } from "@/src/actions/post-feedback";
import { useModal } from "../modal";

export function FeedbackForm() {
  const { openModal } = useModal();
  const [companyCode, setCompanyCode] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [state, action] = useActionState(postFeedback, {
    ok: false,
    data: null,
    error: ''
  });

  useEffect(() => {
    console.log("estado", state);
    if (state.ok) {
      openModal(
        <div className="flex flex-col items-center justify-center gap-4">
          <svg width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.4911 18.2766L0.366101 10.1516C-0.122034 9.66351 -0.122034 8.87206 0.366101 8.38387L2.13383 6.6161C2.62196 6.12792 3.41346 6.12792 3.9016 6.6161L9.37499 12.0894L21.0984 0.366101C21.5865 -0.122034 22.378 -0.122034 22.8662 0.366101L24.6339 2.13387C25.122 2.62201 25.122 3.41346 24.6339 3.90165L10.2589 18.2767C9.77069 18.7648 8.97924 18.7648 8.4911 18.2766Z" fill="#00B244" />
          </svg>
          <h2 className="text-xl font-semibold text-center text-[#643EE4]">Feedback Enviado </h2>
        </div>
      );
    }

  }, [state])

  return (
    <>
      <form action={action} className="max-w-[500px] w-full border border-[#D9D9D9] rounded-lg py-8 px-8 mx-auto flex flex-col gap-4  ">
        <h2 className="font-semibold text-2xl text-gray-900">Deixe seu Feedback</h2>
        <Input name="companyCode" type="text" title="Code da Empresa" change={setCompanyCode} />
        <Select options={
          [
            { label: 'Sugestão', value: 'sugestao' },
            { label: 'Crítica', value: 'critica' },
            { label: 'Comentário', value: 'comentario' }
          ]}
          name="type" title="Tipo" change={setType}
        />
        <Textarea name="description" title="Mensagem" change={setDescription} />

        {state?.error && (
          <p className="text-red-500 mt-2">{state.error}</p>
        )}

        <button type="submit" className="bg-[#643EE4] text-white p-2 rounded-md cursor-pointer hover:bg-[#5535C3] duration-300 ease-in-out">Enviar</button>
      </form>
    </>
  )
}