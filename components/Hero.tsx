import { home } from "./Float/config";
import Float from "./Float/Float";
import { SectionLayout } from "./Layout";
import SplitText from "./SplitText/SplitText";
import { Heading, SubHeading } from "./Typography";

export default function Home() {
  return (
    <SectionLayout className="overflow-hidden">
      <div className="md:max-w-2/3 flex w-full flex-col items-center space-y-11">
        <SubHeading dark>
          <span className="font-bold">Hello! </span>My name is
        </SubHeading>

        <Heading dark className="text-center font-extrabold">
          <SplitText text="Mahee" />
          <SplitText text="Upadhyaya" />
        </Heading>

        <p className="text-center md:whitespace-pre-line">
          {`I am a senior high school student with a focus on advanced accounting. \n I am passionate about building simple and elegant solutions to complex problems.`}
        </p>
      </div>
      <Float config={home} />
    </SectionLayout>
  );
}
