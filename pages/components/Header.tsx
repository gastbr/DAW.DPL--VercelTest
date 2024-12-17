import Head from "next/head";
import Image from "next/image";
import gaston from "../../public/joona.jpg";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Header = () => {
  return (
    <section>
      <Head>
        <title>Gastón Bermúdez Rochietti Portfolio</title>
      </Head>
      <div className="text-center px-5 md:px-20 lg:px-30 mt-10">
        <h2 className="text-5xl py-2 text-white font-medium md:text-6xl">
          Gastón Bermúdez Rochietti
        </h2>
        <h3 className="text-2xl py-2 md:text-3xl text-neutral-200">
          Full-Stack Developer
        </h3>
        <p className="text-lg xl:text-xl py-5 max-px-9 leading-6 text-neutral-400 max-w-xl mx-auto ">
          I am Gastón, a passionate Full-Stack Developer with experience in various web technologies, including PHP, Laravel, JavaScript, React, and more. I enjoy solving problems and building efficient, scalable applications. Coding is like assembling a puzzle — finding the right pieces can be challenging, but the sense of achievement keeps me motivated.
        </p>
      </div>
      <div className="flex justify-center">
        <Image
          src={gaston}
          alt="Gastón Bermúdez Rochietti"
          className="rounded-full object-cover mx-auto w-80 h-80 mt-9 md:h-96 md:w-96 shadow-md"
          priority
        />
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3">
        <a
          href="https://github.com/YourGitHubUsername"
          className="hover:text-white duration-500 text-neutral-400"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/YourLinkedInProfile"
          className="hover:text-white duration-500 text-neutral-400"
        >
          <AiFillLinkedin />
        </a>
      </div>
      <hr
        className="mx-auto"
        style={{
          marginTop: "50px",
          border: "1px solid #242424",
          width: "80%",
        }}
      />
    </section>
  );
};

export default Header;
