'use client';

import { useFormStatus } from 'react-dom';

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit" disabled={pending}
      className={`${pending ?"bg-[#5535C3]" :"bg-[#643EE4]"}  text-white p-2 cursor-pointer rounded-md hover:bg-[#5535C3] duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed`}>
      {pending ? 'Enviando...' : 'Enviar'}
    </button>
  );
}
