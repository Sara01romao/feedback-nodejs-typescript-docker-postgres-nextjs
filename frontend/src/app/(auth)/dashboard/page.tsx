import { ListFeedbacks } from "@/src/app/(auth)/components/list-feedbacks";
import { validateToken } from "@/src/function/validate-token";
import { Header } from "../components/header";

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
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center p-4 sm:items-start">
        <Header code={data.codeCompany} />

        <h2 className="text-center text-2xl font-semibold w-full mb-4">Feedbacks</h2>
        
        {/* <div className=" bg-blue-400">
           jhfjksdfh
       
        </div> */}
       
        <section className="flex flex-col items-center md:items-start w-full gap-4 md:flex-row relative">
          <ListFeedbacks feedbacks={data.feedbacks} />
        </section>

      </main>
    </div>
  )
}