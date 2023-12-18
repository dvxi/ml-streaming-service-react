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
      <div className="container mx-auto">
        <h1 className="text-2xl">Live Image</h1>
        {data ? <img src={data} alt="Live Image" /> : <p>Loading...</p>}
      </div>
    )
  };
  
  export default Images;