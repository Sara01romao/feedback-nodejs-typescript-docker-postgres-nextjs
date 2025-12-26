import { Card } from "@/src/components/card-feedback";
import { Filter } from "@/src/components/forms/filter-form";
import { ListFeedbacks } from "@/src/components/list-feedbacks";
import { validateToken } from "@/src/function/validate-token";

export type FeedBack = {
  id: string;
  type: string;
  description: string;
  createdAt: string;
  companyId: string;
}
export type feedbackType = {
  codeCompany: string,
  feedbacks: FeedBack[]
}

export default async function Dashboard() {

  const { data }: { data: feedbackType } = await validateToken();

  return (
    <div className="flex min-h-screen items-center justify-center font-sans ">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center  p-4 sm:items-start">
       <div>
        
       </div>

        <section className="flex items-start w-full gap-4">
          <ListFeedbacks feedbacks={data.feedbacks} />
        </section>
      </main>
    </div>
  )
}