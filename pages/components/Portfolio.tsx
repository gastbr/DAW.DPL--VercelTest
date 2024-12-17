const Portfolio = () => {
  return (
    <section className="px-5 md:px-20 lg:px-30 mt-16">
      <div className=" text-center max-w-3xl mx-auto">
        <h3 className="text-3xl text-neutral-200 font-medium">Portfolio</h3>
        <p className="text-md py-5 leading-6 text-neutral-400 text-left">
          My expertise is primarily in frontend development, and I mostly build projects using <b>React</b>. I've been working with React actively for over a year now. I've also experimented with related frameworks like <b>Next.js</b>. For example, this portfolio site was built using <b>Next.js and Tailwind CSS</b> frameworks. Here's the{" "}
          <a
            href="https://github.com/jjonez96/porfolio"
            className="hover:underline  text-white font-semibold"
          >
            source code
          </a>{" "}
          for this portfolio.
          <br /> <br /> Recently, I've been getting more familiar with <b>Node.js and Express</b> while working on my current project, Scootlator. I primarily use these technologies to create APIs for the frontend and filter out unnecessary data.
          <br /> <br /> In school, we started courses on <b>C# and SQL</b> this spring semester, which have been interesting, as I haven't had the chance to work with these technologies in a professional setting yet.
        </p>
        <h3 className="text-lg font-medium relative top-6 text-neutral-100">
          Additional details about the projects can be found in the readme sections of my GitHub repositories.
        </h3>
      </div>
    </section>
  );
};

export default Portfolio;
