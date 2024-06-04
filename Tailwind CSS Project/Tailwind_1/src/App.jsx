import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

function App() {
  

  return (
    <>
      <div className="bg-amber-50 min-h-screen px-6 py-6 flex flex-col gap-16 md:justify-between md:px-10 md:py-7 lg:px-36 lg:py-10">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  )
}

export default App
