
interface Textarea {
  name: string;
  title: string;
  change: (value: string) => void;
}

export default function Textarea({name, title, change}:Textarea){
  return(
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="text-md font-medium text-gray-700">{title}</label>
      <textarea className="border border-[#A6A6A6] rounded-sm p-1 px-2" name={name} id={name} onChange={(e)=> change(e.target.value)} rows={4} cols={40} ></textarea>
    </div>
  )
}