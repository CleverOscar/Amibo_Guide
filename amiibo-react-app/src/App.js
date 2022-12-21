import AmiiboCard from "./Views/AmiiboCard";
import Footer from "./Views/Footer";


function App() {
  return (
    <div className="flex flex-col justify-between h-full">
        <header >

        </header>

          <div className="flex flex-wrap flex-row items-center mx-auto justify-center shadow-xl border-b border-gray-900/20 w-full">
            
            

            <a href="/" >
              <img  src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Amiibo_logo.png" 
                    alt="amiibo logo" 
                    className="max-w-xs"
                    />
            </a>

            <p className="text-5xl font-tit"> React App </p>

          </div>



          <div className="container mx-auto min-h-screen ">
            <AmiiboCard />
          </div>
        

          <Footer />


      

        

    </div>
  );
}

export default App;
