import React from "react";

const MyBackground = () => {
  return (
    <section className="px-5 md:px-20 lg:px-30">
      <div className="mt-10 text-center max-w-3xl mx-auto">
        <h3 className="text-3xl text-neutral-200 font-medium ">Background</h3>
        <div className="text-md py-5 leading-6 text-neutral-400 text-left md:px-30 lg:px-30 ">
          <p>
            Before starting my programming studies, I worked as an Operations Administrator at Arvato Bertelsmann in Venlo, Netherlands. My role involved coordinating various processes in the assembly department, which included problem-solving and optimizing workflows. Working with SAP, I handled data management tasks and helped ensure smooth operations. I worked in this role for about a year before deciding to pursue a career in programming. The decision was motivated by a desire for more challenging work and broader career opportunities in the tech field.
            <br />
            <br />
            In late 2021, I discovered programming through YouTube, which sparked my interest in this field. I started coding in <b>HTML</b> and <b>CSS</b> and soon moved on to the fascinating world of <b>JavaScript</b>. I have been passionate about technology from a young age, having been involved with computers since I was 6 years old. When I was 14, I assembled my own computer, which I still upgrade from time to time.
            <br />
            <br />
            In October 2021, I joined the H2C (Highway 2 Code) program in Vaasa, Finland. The course, which I completed alongside my work, provided a solid foundation for my programming career. The program lasted for six months, and I earned 30 ECTS credits, which were recognized towards my degree. Since then, I have been actively coding personal projects to further develop my skills.
          </p>

          <p className="py-2">
            During the course, I learned the fundamentals of the following technologies:
          </p>
          <b>
            <ul className="px-5 py-2 list-disc ">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>React Testing Library</li>
              <li>Firebase</li>
              <li>Git / GitLab</li>
              <li>PHP</li>
              <li>MySQL</li>
            </ul>
          </b>
        </div>
      </div>
    </section>
  );
};

export default MyBackground;
