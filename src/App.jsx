import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="flex-center h-screen">
      <h1 className="text-5xl text-blue-500">GSAP Animation</h1>
    </div>
  );
};

export default App;
