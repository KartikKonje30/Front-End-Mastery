
function App() {


  return (
    <>
     <div className="max-w-8xl min-h-screen bg-slate-900 ">
      <nav className="relative flex items-center px-8 py-4 justify-between">
        <div className="flex items-center gap-2">
        <img src="logo.png" alt="logo" className="w-8 h-8"/>
        <h1 className="text-2xl text-white tracking-wide font-sans">tailwindcss</h1>
        </div>
        <div className="relative flex items-center gap-16 " >
        <ul className="text-slate-200 text-center text-sm space-x-8 ">
        <li className="list-none inline-block"><a href="#">Docs</a></li>
        <li className="list-none inline-block"><a href="#">Components</a></li>
        <li className="list-none inline-block"><a href="#">Blog</a></li>
        <li className="list-none inline-block"><a href="#">Showcase</a></li>
        </ul>
        <div className="relative flex items-center gap-4 border-l border-slate-800">
        <img src="moon_logo.png" alt="button" className="w-6 h-6"/>
        <a href="#"><img src="github.png" alt="github" className="w-6 h-6"/></a>
        </div>
        
        </div>
        
       </nav>
      </div>
    </>
  )
}

export default App
