import { FeedbackForm } from "@/src/components/forms/feedback-form";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans ">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center  p-4 sm:items-start">
        <FeedbackForm/>
      </main>
    </div>
  );
}
