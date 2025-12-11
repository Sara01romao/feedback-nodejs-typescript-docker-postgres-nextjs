interface Input {
  name: string;
  type:string;
  title:string;
  change: (value: string) => void; 
}

export function Input({name, type, title, change}:Input) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="text-md font-medium text-gray-700">{title}</label>
      <input type={type} name={name} className="border border-[#A6A6A6] rounded-sm p-1 px-2" onChange={(e)=>change(e.target.value)} />
    </div>
  )
}