import phone from "../assets/images/phone.svg";
import { useGlobalContext } from "../context/context";

const Hero = () => {
  const data = useGlobalContext();
  console.log(data);
  return <h2>Hero</h2>;
};

export default Hero;
