'use client'
import { useEffect, useState } from "react";
import { FeedBack } from "../dashboard/page";
import { Filter } from "./filter-form";
import { Card } from "./card-feedback";

type ListFeedbacksProps = {
  feedbacks: FeedBack[];
};
export function ListFeedbacks({ feedbacks }: ListFeedbacksProps) {
  const [filter, setFilter] = useState<FeedBack[]>(feedbacks);

  return (
    <>
      <div className="bg-white p-4 rounded-lg border border-gray-300  md:max-w-[200px] w-[100%] sticky top-0 sm:top-2">
        <h3 className="font-semibold">Filtro</h3>
        <Filter listFilter={setFilter} />
      </div>

      <div className="md:max-w-8/12 w-full md:mr-0 md:ml-auto flex flex-col gap-4 md:mt-0">

        {filter.length === 0 ?

          <div className="bg-neutral-100 rounded-md"><h4 className="text-lg text-center p-4 ">Não encontrado</h4></div>
          :
          filter.map((feedback) => (<Card key={feedback.id} companyId="dxsada" id={feedback.id} type={feedback.type} description={feedback.description} createdAt={feedback.createdAt} />))
        }
      </div>
    </>
  )
}