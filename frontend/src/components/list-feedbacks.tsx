'use client'
import { useEffect, useState } from "react";
import { FeedBack } from "../app/(auth)/dashboard/page";
import { Card } from "./card-feedback";
import { Filter } from "./forms/filter-form";

type ListFeedbacksProps = {
  feedbacks: FeedBack[];
};
export function ListFeedbacks({ feedbacks }: ListFeedbacksProps) {
  const [filter, setFilter] = useState<FeedBack[]>(feedbacks);

  useEffect(() => {
    console.log("filter", filter)

  }, [filter])

  return (
    <>
      <div className="p-4 rounded-lg border border-gray-300 max-w-[200px] w-full fixed">
        <h3 className="font-semibold">Filtro</h3>
        <Filter listFilter={setFilter} />
      </div>

      <div className="max-w-8/12 w-full mr-0 ml-auto flex flex-col gap-4">
        {
          filter.map((feedback) => (<Card key={feedback.id} companyId="dxsada" id={feedback.id} type={feedback.type} description={feedback.description} createdAt={feedback.createdAt} />))
        }
      </div>
    </>
  )
}