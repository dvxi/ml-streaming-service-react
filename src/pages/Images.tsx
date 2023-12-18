import { useEffect, useState } from "react";

const Images : React.FC = () => {
    const url = "http://localhost:3000/ml/com_port";
    const [data, setData] = useState("");

    const fetchImage = async () => {
      const res = await fetch(url);
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setData(imageObjectURL);
    };
  
    useEffect(() => {
      fetchImage();
    }, []);

    useEffect(() => {
      const timer = setInterval(fetchImage, 1000);
      return () => clearInterval(timer);
    }, []);

    return(
      <>
        <div className="border-b border-zinc-800 mb-10">
          <div className="container mx-auto mt-10">
            <h1 className="text-3xl font-semibold text-zinc-50 mb-3">Live Images Feed</h1>
            <p className="text-zinc-600 mb-10">Below you can watch live filtered footage from our camera</p>
          </div>
        </div>
        <div className="container mx-auto p-5 rounded-lg shadow-lg border border-zinc-800 bg-zinc-950 grid place-items-center">
          {data ? <img src={data} alt="Live Image" /> : <p>Loading...</p>}
        </div>
      </>
    )
  };
  
  export default Images;