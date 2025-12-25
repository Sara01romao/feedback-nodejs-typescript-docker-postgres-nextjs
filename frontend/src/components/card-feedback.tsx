import { FeedBack } from "../app/(auth)/dashboard/page";

export function Card({id, type, description, createdAt}:FeedBack) {
  return (
    <div className="w-full" key={id}>
      <div className="rounded-xl border-2 border-gray-100 bg-white">
        <div className="flex items-start gap-4 p-4 ">
          <div>
            <h3 className="font-medium uppercase text-[#643EE4]">
               {type == "critica"?"Crítica": type === "sugestao" ? "Sugestão":"Comentário" }
            </h3>

            <div className="mt-1 mb-2 sm:flex sm:items-center sm:gap-2">
              <div className="flex items-center gap-1 text-gray-500">
                <p className="text-xs">06 de Fev 2025</p>
              </div>
            </div>

            <p className="line-clamp-2 text-sm ">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}