import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { navLinks } from "../../constants";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent", backdropFilter: "blur(0px)" },
      {
        backgroundColor: "#00000030",
        backdropFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  });
  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="logo"
            className="w-6 h-6 object-contain"
          />
          <p>Nova Bar</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
