import AmiiboCard from "./Views/AmiiboCard";


function App() {
  return (
    <div className=" border-2 border-black border-solid">
        <header >

        </header>

        <div className="flex flex-row items-center mx-auto justify-center shadow-xl">
          
          

          <img  src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Amiibo_logo.png" 
                alt="amiibo logo" 
                className="max-w-xs"
                />

          <p className="text-5xl"> React App </p>

        </div>



        <div className="container mx-auto border-blue border-8 bg-blue-900/10 border-double py-4 text-center my-10">
          <p>A fan made Amiibo Site that displays all available amiibos and gives a description of where they are from.</p>
        </div>


        <AmiiboCard />

    </div>
  );
}

export default App;
