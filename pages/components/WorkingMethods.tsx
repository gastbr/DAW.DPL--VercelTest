const WorkingMethods = () => {
  return (
    <section className="px-5 md:px-20 lg:px-30">
      <div className="mt-20 text-center max-w-3xl mx-auto">
        <h3 className="text-3xl text-neutral-200 font-medium ">
          Working Methods
        </h3>
        <p className="text-md py-5 leading-6 text-neutral-400 text-left">
          I enjoy starting projects from scratch and making them my own. This method has taught me the most because I have to truly think through the problems. My thought process usually starts with mentally analyzing the problem. Once I have an idea, I translate it into code and test it until it works the way I want. There have been many challenges throughout the year, but giving up has never crossed my mind.
          <br />
          <br />
          I use version control a lot in my projects, especially <b>(Git)</b>. Over the past year, I&aposve seen just how useful Git really is, and it has saved my projects multiple times.
        </p>
        <p className="text-md py-5 leading-6 text-neutral-400 text-left">
          I particularly enjoy working in groups or pairs because it allows for discussions, brainstorming, and sharing opinions. I also value receiving constructive feedback and enjoy presenting my own views and ideas. At school, we often work on group projects, which I see as a big advantage.
        </p>
      </div>
      <hr
        id="portfolio"
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

export default WorkingMethods;
