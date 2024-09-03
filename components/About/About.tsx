import { useEffect, useState } from "react";
import { about } from "../Float/config";
import Float from "../Float/Float";
import { SectionLayout } from "../Layout";
import { Heading, SubHeading } from "../Typography";
import { Align } from "../Typography/types";
import MobileTechList from "./MobileTechList";
import TechList from "./TechList";
import { FaFileAlt } from "react-icons/fa";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <SectionLayout className="bg-pink-50 mb-20 w-full items-start overflow-auto rounded-lg p-6 pb-20 shadow-lg">
      {" "}
      <div className="flex flex-col items-center">
        <SubHeading dark align={Align.Left} className="text-purple-600">
          About
        </SubHeading>
        <img
          src="/images/headshot.jpg"
          alt="Headshot"
          className="mb-4 h-72 w-72 rounded-full border-4 border-purple-300 object-cover shadow-md"
        />
        <Heading size="sm" dark className="font-extrabold text-purple-700">
          A business student turned claims analyst with a knack for numbers and
          data
        </Heading>
        <p className="mt-4 mb-4 rounded-lg bg-customPurple bg-opacity-50 text-center text-lg text-white transition-all duration-200 ease-in-out">
          Mahee Upadhyaya is a dynamic business enthusiast with a rich global
          educational background. Her journey began in the vibrant classrooms of
          Geethanjali Vidyalaya in Bangalore, where she developed her leadership
          skills among a bustling class of 60 students. Mahee&apos;s academic
          excellence continued at Deeksha School, where she consistently ranked
          in the top 10 in Business Studies, Accounting, Economics, and Computer
          Science.
        </p>
        <p className="mt-4 mb-4 rounded-lg bg-customPurple bg-opacity-50 text-center text-lg text-white transition-all duration-200 ease-in-out">
          Currently, Mahee is completing her senior year at Tompkins High School
          in the USA. Alongside her studies, she is gaining valuable practical
          experience as a Rebate Claim Specialist at Unified Resources. Driven
          by her ambition to become a leading figure in business administration,
          Mahee&apos;s dedication to her studies and future career is
          unwavering.
        </p>
        <a
          href="/assets/MaheeResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-gray-200 px-3 py-1 text-gray-800"
        >
          <FaFileAlt className="h-6 w-6" />
          <span className="ml-2">Open Resume in new tab</span>
        </a>{" "}
      </div>
      <Float config={about} />
    </SectionLayout>
  );
}
