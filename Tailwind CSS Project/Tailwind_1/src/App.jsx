import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

function App() {
  

  return (
    <>
      <div className="bg-amber-50 min-h-screen px-6 py-4 flex flex-col gap-16">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  )
}

export default App
