import Image from "next/image";
import design from "../../public/design.png";
import nail from "../../public/nail.png";
import iot from "../../public/iot.png";
import cryptocurrency from "../../public/cryptocurrency.png";

const ProjectCards = () => {
  return (
    <section className="px-5 md:px-20 xl:px-20">
      <div className="xl:flex gap-5 mt-10">
        <div className="text-center shadow-lg p-6 bg-black border border-stone-700 rounded-xl my-10 dark:bg-gray-800 dev">
          <Image src={design} alt="design" className="mx-auto" height={100} />
          <h3 className="text-xl font-medium pt-8 pb-2 text-white">
            Scootlator
          </h3>
          <div className="py-4 text-neutral-400 text-left">
            Scootlator is a handy and fast app for calculating scooter ride prices.
            The idea for this project came from my own thoughts. I often heard the question: <q>How much does a scooter ride cost?</q> and that sparked the idea for the app. Apps like Tier and Voi don’t have such a calculator. The map shows Tier and Voi scooters in Örebro since they are off the streets in Finland during winter. Development started in mid-July 2022 and is still ongoing.
          </div>
          <h4 className="text-white font-medium">Technologies</h4>
          <ul className="py-1 font-bold text-neutral-400 lg:flex justify-center gap-5">
            <li>React</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Bootstrap</li>
            <li>Google Maps API</li>
          </ul>
          <br />
          <hr style={{ marginTop: "10px", border: "1px solid #222222" }} />
          <div className="xl:flex justify-center pt-2 mt-2 ml-7">
            <a
              href="https://scootlator.vercel.app/"
              className="hover:text-white text-stone-300 duration-500 border border-stone-700 hover:border-white p-2 rounded-md focus:text-white mr-2"
            >
              Demo
            </a>
            <a
              href="https://github.com/jjonez96/scootlator-nextjs"
              className="hover:text-white text-stone-300 duration-500 border border-stone-700 hover:border-white p-2 rounded-md focus:text-white ml-2"
            >
              Source Code
            </a>
          </div>
        </div>
        <div className="text-center shadow-lg p-6 rounded-xl bg-black border border-stone-700 my-10 dev">
          <Image src={nail} alt="nail" width={100} className="mx-auto" />
          <h3 className="text-xl font-medium pt-8 pb-2 text-white">
            Lillaiita Nail Technician Website
          </h3>
          <p className="py-4 text-neutral-400 text-left">
            These were the first concrete websites I developed and designed from scratch. I created this site for Iida, listening to her ideas and vision, then implementing the site based on that. I regularly sought feedback and made adjustments accordingly. This project started in August 2022 and was completed by the end of November.
          </p>
          <br />
          <div className="relative top-6">
            <h4 className="text-white font-medium">Technologies</h4>
            <ul className="py-1 font-bold text-neutral-400 lg:flex justify-center gap-5">
              <li>HTML</li>
              <li>CSS</li>
            </ul>
            <hr
              style={{ marginTop: "10px", border: "1px solid #222222" }}
              className="relative top-6"
            />
          </div>
          <br />
          <div className="xl:flex justify-center pt-2 mt-8 ml-6">
            <a
              href="https://lillaiita.netlify.app/"
              className="hover:text-white text-stone-300 duration-500 border border-stone-700 hover:border-white p-2 rounded-md focus:text-white mr-2"
            >
              Demo
            </a>
            <a
              href="https://github.com/jjonez96/kynsiteknikon-sivut"
              className="hover:text-white text-stone-300 duration-500 border border-stone-700 hover:border-white p-2 rounded-md focus:text-white ml-2"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
      <div className="xl:flex justify-center gap-5">
        <div className="text-center shadow-lg p-6 rounded-xl my-10 bg-black border border-stone-700 dev">
          <Image
            src={cryptocurrency}
            alt="cryptocurrency"
            width={100}
            className="mx-auto"
          />
          <h3 className="text-xl font-medium pt-8 pb-2 text-white">
            Crypto Tracker
          </h3>
          <p className="py-4 text-neutral-400 text-left">
            This app allows you to track cryptocurrencies and related news. All added news and cryptos are displayed on the homepage and stored in Firebase. This project was my final project for a React course, which I started in March and continued to develop actively until July 2022.
          </p>
          <div className="relative top-10">
            <h4 className="text-white font-medium">Technologies</h4>
            <ul className="py-1 font-bold text-neutral-400 lg:flex justify-center gap-5">
              <li>React</li>
              <li>Firebase</li>
              <li>React-Router</li>
              <li>React-Styled-Components</li>
            </ul>
            <hr
              style={{ marginTop: "10px", border: "1px solid #222222" }}
              className="relative top-6"
            />
          </div>
          <br />
          <div className="xl:flex justify-center pt-2 mt-14 ml-6">
            <a
              href="https://coin-app-8164d.web.app/Home"
              className="hover:text-white text-stone-300 duration-500 border border-stone-700 hover:border-white p-2 rounded-md focus:text-white mr-2"
            >
              Demo
            </a>
            <a
              href="https://github.com/jjonez96/Crypto-tracker"
              className="hover:text-white text-stone-300 duration-500 border border-stone-700 hover:border-white p-2 rounded-md focus:text-white ml-2"
            >
              Source Code
            </a>
          </div>
        </div>
        <div className="text-center shadow-lg p-6 rounded-xl my-10 bg-black border border-stone-700 dark:bg-gray-800 dev">
          <Image src={iot} alt="iot" width={100} className="mx-auto" />
          <h3 className="text-xl font-medium pt-8 pb-2 text-white">
            IOT-Fridgesensor
          </h3>
          <p className="p-1 text-neutral-400 text-left">
            This IoT app monitors the temperature of a refrigerator. It sends a message to the user if the temperature goes too high or too low. This project was the final work for the H2C course, which I worked on with Henna. The project started in March 2022 and was completed by the end of May.
          </p>

          <b className="text-center font-medium text-white">
            In our video, we explain this app and the IoT-Ticket in more detail.
            <br />
          </b>
          <a
            href="https://www.youtube.com/watch?v=jrhlCqbzOag"
            className="hover:text-white text-stone-300 duration-500 border border-stone-700 hover:border-white p-2 relative top-4 rounded-md focus:text-white"
          >
            Video
          </a>
          <div className="relative top-3">
            <h4 className="text-white font-medium mt-4">Technologies</h4>
            <ul className="py-1 font-bold text-neutral-400 lg:flex justify-center gap-5">
              <li>React</li>
              <li>Node.js</li>
              <li>Wapice Oy IoT-Ticket</li>
            </ul>
          </div>
          <hr style={{ marginTop: "34px", border: "1px solid #222222" }} />
          <br />
          <div className="xl:flex justify-center ml-6">
            <a
              href="https://iotgreenteam.netlify.app/"
              className="hover:text-white text-stone-300 duration-500 border border-stone-700 hover:border-white p-2 rounded-md focus:text-white mr-2"
            >
              Demo
            </a>
            <a
              href="https://github.com/jjonez96/IOT-Fridgesensor"
              className="hover:text-white text-stone-300 duration-500 border border-stone-700 hover:border-white p-2 rounded-md focus:text-white ml-2"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCards;
