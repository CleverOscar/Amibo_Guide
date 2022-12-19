import AmiiboCard from "./Views/AmiiboCard";
import Footer from "./Views/Footer";


function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
        <header >

        </header>

          <div className="flex flex-wrap flex-row items-center mx-auto justify-center shadow-xl border-b border-gray-900/20">
            
            

            <img  src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Amiibo_logo.png" 
                  alt="amiibo logo" 
                  className="max-w-xs"
                  />

            <p className="text-5xl font-tit"> React App </p>

          </div>



          <div className="container mx-auto">
            <p className="border-blue border-8 bg-blue-900/80 border-double py-4 text-center my-10 mx-4 font-jost">A fan made Amiibo Site that displays all available amiibos and gives a description of where they are from.</p>


            <AmiiboCard />

           
          
          </div>
        

          <Footer />


      

        

    </div>
  );
}

export default App;
