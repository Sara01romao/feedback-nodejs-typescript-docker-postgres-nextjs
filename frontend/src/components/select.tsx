interface Select{
  options: option[];
  name:string;
  title: string;
  change: (value:string) => void;
}

type option ={
  label: string;
  value:string;
}

export default function Select({options, name, title, change}:Select){
  return(
   <div className="flex flex-col w-full">
    <label htmlFor={name} className="text-md font-medium text-gray-700">{title}</label>
      <select className="border border-[#A6A6A6]  rounded-sm p-1 px-2" name={name} onChange={(e) => change(e.target.value)}>
        {options.map(option => <option value={option.value} key={option.label}>{option.label}</option>)}
      </select>
   </div>
  )
}