'use client';

import { useFormStatus } from 'react-dom';

type Button ={
  text?: string;
}
export function SubmitButton({text}:Button) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit" disabled={pending}
      className={`${pending ?"bg-[#5535C3]" :"bg-[#643EE4] w-full"}  text-white p-2 cursor-pointer rounded-md hover:bg-[#5535C3] duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed`}>
      {pending ? 'Enviando...' : text ?? "Enviar"}
    </button>
  );
}
