import { useEffect, useState } from "react";
import { about } from "../Float/config";
import Float from "../Float/Float";
import { SectionLayout } from "../Layout";
import { Heading, SubHeading } from "../Typography";
import { Align } from "../Typography/types";
import MobileTechList from "./MobileTechList";
import TechList from "./TechList";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <SectionLayout className="w-full items-start mb-20 bg-pink-50 p-6 rounded-lg shadow-lg">
      <div className="flex flex-col items-center">
        <SubHeading dark align={Align.Left} className="text-purple-600">
          About
        </SubHeading>

        <img
          src="/images/headshot.png"
          alt="Headshot"
          className="rounded-full border-4 border-purple-300 shadow-md mb-4"
        />

        <Heading size="sm" dark className="font-extrabold text-purple-700">
          A business student turned claims analyst with a knack for numbers and
          data
        </Heading>

        <p className="text-gray-700 text-center mt-4">
          Meet Mahee Upadhyaya, a charming business enthusiast with a global
          educational journey. Starting from the vibrant classrooms of
          Geethanjali Vidyalaya in Bangalore, she honed her leadership skills
          amidst a bustling class of 60. Her academic prowess shone at Deeksha
          School, consistently ranking in the top 10 in Business Studies,
          Accounting, Economics, and Computer Science.
        </p>

        <p className="text-gray-700 text-center mt-4">
          Now, she's wrapping up her senior year at Tompkins High School in the
          USA, while also gaining practical experience as a Rebate Claim
          Specialist. Her ultimate dream? To become a leading lady in the world
          of business administration. This ambition fuels her dedication to her
          studies and future career.
        </p>
      </div>
      <Float config={about} />
    </SectionLayout>
  );
}
