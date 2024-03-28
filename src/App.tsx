import { useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"


function App() {
  const textareaRef = useRef(null)
  const [val, setVal] = useState("");

  return (
    <main className="flex flex-col p-5">
      <textarea className="opacity-0 w-0 h-0" ref={textareaRef} onChange={e => setVal(e.target.value)} />
      <div className="min-h-60 bg-neutral-900 text-slate-100 font-spaceGrotesk whitespace-pre-wrap text-xl min-w-full p-5 overflow-x-hidden"></div>
    </main>
  )
}

export default App
