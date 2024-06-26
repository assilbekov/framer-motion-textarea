import { useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"


function App() {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const [val, setVal] = useState("");

  const rotateValue = Math.floor(Math.random() * 201) - 100

  return (
    <main className="flex flex-col p-5">
      <textarea className="opacity-0 w-0 h-0" ref={textareaRef} onChange={e => setVal(e.target.value)} />
      <div
        className="min-h-60 bg-neutral-900 text-slate-100 font-spaceGrotesk whitespace-pre-wrap text-xl min-w-full p-5 overflow-x-hidden"
        onClick={() => textareaRef.current!.focus()}
      >
        <AnimatePresence>
          {val.split("").map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 100, rotate: rotateValue }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{
                opacity: 0,
                y: 100,
                transition: {
                  duration: 0.5,
                },
                rotate: -rotateValue,
              }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              className={letter !== "\n" ? "inline-block mr-0.5" : "inline"}
            >{letter}</motion.span>
          ))}
        </AnimatePresence>
      </div>
    </main>
  )
}

export default App
