import Slider from "../Slider/Slider";
import { Helmet } from "react-helmet";
import Feature from "../Feature/Feature";
import Adventure from "../Adventure/Adventure";
import { useLoaderData } from "react-router-dom";
import Extra from "../Extra/Extra";

const Home = () => {
  const mountainData = useLoaderData();


  return (
    <div>
      <Helmet>
        <title>Home | Mountes Track</title>
      </Helmet>

      <Slider />
      <Feature />
      <Adventure mountainData={mountainData} />

      <Extra></Extra>
    </div>
  );
};

export default Home;
