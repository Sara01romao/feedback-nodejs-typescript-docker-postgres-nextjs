import { CodeForm } from "@/src/components/forms/code-generator-form";

export default function Code() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans ">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center  p-4 sm:items-start">
        <CodeForm/>
      </main>
    </div>
  )
}