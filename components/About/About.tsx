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
    <SectionLayout className="bg-pink-50 mb-20 w-full items-start rounded-lg p-6 pb-20 shadow-lg overflow-auto">
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
          Meet Mahee Upadhyaya, a charming business enthusiast with a global
          educational journey. Starting from the vibrant classrooms of
          Geethanjali Vidyalaya in Bangalore, she honed her leadership skills
          amidst a bustling class of 60. Her academic prowess shone at Deeksha
          School, consistently ranking in the top 10 in Business Studies,
          Accounting, Economics, and Computer Science.
        </p>
        <p className="mt-4 mb-4 rounded-lg bg-customPurple bg-opacity-50 text-center text-lg text-white transition-all duration-200 ease-in-out">
          Now, she&apos;s wrapping up her senior year at Tompkins High School in
          the USA, while also gaining practical experience as a Rebate Claim
          Specialist. Her ultimate dream? To become a leading lady in the world
          of business administration. This ambition fuels her dedication to her
          studies and future career.
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
