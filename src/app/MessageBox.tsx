
export default function MessageBox({text}:{text:string}) {
  return (
   <div className="m-4 rounded-full px-6 py-1 font-bold text-sm text-center text-red-800 bg-white border-2 transition-all duration-300 ease scale-105">{text}</div>
  )
}
