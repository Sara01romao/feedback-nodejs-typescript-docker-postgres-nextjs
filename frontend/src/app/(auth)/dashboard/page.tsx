import { logout } from "@/src/actions/logout";
import { validateToken } from "@/src/function/validate-token";

export default async function Dashboard() {
  const userData = await validateToken();
  console.log(userData)
  return (
    <div className="flex min-h-screen items-center justify-center font-sans ">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center  p-4 sm:items-start">
        <h1 className="text-lg">Dashboar</h1>
      </main>
    </div>
  )
}