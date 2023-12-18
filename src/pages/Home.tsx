const Home : React.FC = () => {
    return (
      <>
        <div className="border-b border-zinc-800 mb-10">
          <div className="container mx-auto mt-10">
            <h1 className="text-3xl font-semibold text-zinc-50 mb-3">Welcome to Embedded Software</h1>
            <p className="text-zinc-600 mb-10">Below you can watch live filtered footage from our camera</p>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-400 p-1 px-4 mb-2
          hover:bg-zinc-800 hover:text-zinc-200">
            <a href="https://github.com/General-Embedded/pico-tflmicro">Embedded Software Repository</a>
          </div>
          <div className="rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-400 p-1 px-4 mb-2
          hover:bg-zinc-800 hover:text-zinc-200">
            <a href="https://github.com/OmegaCreations/StreamingService-for-Ethernet-Data">Backend Repository</a>
          </div>
          <div className="rounded-lg border border-zinc-700 bg-zinc-900 text-zinc-400 p-1 px-4 mb-2
          hover:bg-zinc-800 hover:text-zinc-200">
            <a href="https://github.com/dvxi/ml-streaming-service-react">Frontend Repository</a>
          </div>
        </div>
      </>
    )
  };
  
  export default Home;