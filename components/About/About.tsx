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
    <SectionLayout className="w-full items-start">
      <div className="md:max-w-2/3 mb-20 flex w-full flex-col items-center space-y-4 text-sm md:space-y-11 md:pb-0 md:text-lg">
        <SubHeading dark align={Align.Left}>
          About
        </SubHeading>

        <Heading size="sm" dark className="font-extrabold">
          A business student turned claims analyst with a knack for numbers and data
        </Heading>

        <div className="flex flex-col space-y-4 leading-relaxed md:flex-row md:space-x-12 md:space-y-0">
          <p className="w-full whitespace-pre-line md:w-1/2">
            {`I am a business student (focused on accounting) with a passion for data analysis and problem-solving. 
            \nThroughout my academic and professional journey, I have developed a strong understanding of business operations and rebate claims processing.`}
          </p>

          <div className="w-full md:w-1/2">
            Currently, I am a Claims Analyst,{" "}
            <span className="font-bold">focusing on data analysis and claims processing</span>. On a
            daily basis, I work with various data analysis tools and methodologies to evaluate rebate claims and provide accurate settlements.
          </div>
        </div>
      </div>
      <Float config={about} />
    </SectionLayout>
  );
}
