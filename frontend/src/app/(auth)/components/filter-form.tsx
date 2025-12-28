'use client'
import { useActionState, useEffect, useState } from "react";
import { getFeedbacks } from "@/src/actions/get-feedbacks";
import { FeedBack } from "@/src/app/(auth)/dashboard/page";
import Select from "@/src/components/select";
import { Input } from "@/src/components/input";
import { SubmitButton } from "@/src/components/btn-submit";

type FilterProps = {
  listFilter: (filteredList: FeedBack[]) => void;
};

export function Filter({ listFilter }: FilterProps) {
  const [date, setDate] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [state, action] = useActionState(getFeedbacks, {
    ok: false,
    data: null,
    error: ''
  });

  useEffect(() => {
    if (state.ok && state.data) {
      const { feedbacks } = state.data;
      listFilter(feedbacks);
      console.log("teste", feedbacks)
    } else if (state.ok && state.data === null) {

      listFilter([]);
    }
  }, [state.ok, state.data, listFilter]);

  return (
    <form action={action} className="flex flex-col gap-4 ">
      <Select options={
        [
          { label: 'Todos', value: '' },
          { label: 'Sugestão', value: 'sugestao' },
          { label: 'Crítica', value: 'critica' },
          { label: 'Comentário', value: 'comentario' }
        ]}
        name="type" title="Tipo" change={setType}
      />
      <Input name="date" type="date" title="Data" change={setDate} />
      <SubmitButton text="Buscar" />
    </form>
  )
}