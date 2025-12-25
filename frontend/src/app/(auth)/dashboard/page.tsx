import { Card } from "@/src/components/card-feedback";
import { validateToken } from "@/src/function/validate-token";

export type  FeedBack = {
  id: string;
  type: string;
  description: string;
  createdAt: Date;
}
type feedbackType = {
  codeCompany: string,
  feedbacks: FeedBack[]
}

export default async function Dashboard() {
  const { data }:{data:feedbackType} = await validateToken();

  return (
    <div className="flex min-h-screen items-center justify-center font-sans ">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center  p-4 sm:items-start">
        <h1 className="text-lg">Dashboar</h1>

        <div className="w-full flex flex-col gap-2">
          {
            data.feedbacks.map((feedback) => (<Card key={feedback.id} id={feedback.id} type={feedback.type} description={feedback.description} createdAt={feedback.createdAt}/>))
          }
        </div>
      </main>
    </div>
  )
}