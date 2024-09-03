import { projects } from "./Float/config";
import Float from "./Float/Float";
import { SectionLayout } from "./Layout";
import { SplitText } from "./SplitText";
import { Heading, SubHeading } from "./Typography";
import { Align } from "./Typography/types";
import Image from "next/image";

export default function Writing() {
  return (
    <SectionLayout className="">
      <div className="md:max-w-2/3 mb-16 flex w-full flex-col items-start space-y-11">
        <SubHeading dark align={Align.Left}>
          Skills
        </SubHeading>

        <div>
          <Heading size="sm" dark className="font-extrabold">
            <SplitText text="Leadership" />
          </Heading>
          <p>
            Throughout my school days, I have demonstrated strong leadership
            skills through various roles, including team management, project
            leadership, and strategic planning. My leadership experience has
            been marked by successful project outcomes, team development, and
            strategic improvements. Imagine being the captain of a ship, but
            your ship is a kitchen, and your crew is a team of six enthusiastic
            chefs. The challenge? A national &aposCooking Without Fire&apos
            competition. With a sprinkle of guidance, a dash of motivation, and
            a generous helping of teamwork, we navigated through the choppy
            waters of culinary challenges. Leading this team wasn&apost just
            about winning, it was about blending our skills to create something
            deliciously extraordinary. That&aposs the essence of leadership!
            <img
              src="/images/cookingWithoutFire.jpg"
              alt="Certificate"
              className="mx-auto w-full max-w-xs transform"
            />
          </p>
        </div>

        <div>
          <Heading size="sm" dark className="font-extrabold">
            <SplitText text="Photography" />
          </Heading>
          <p>
            {" "}
            Photography allows me to capture moments and explore the world
            through a creative lens, finding beauty in everyday life. It&aposs a
            way to express myself artistically while preserving memories that
            tell a story.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-75 relative col-span-1 row-span-1">
            <Image
              src="/images/photographyPhoto1.JPG"
              alt="Photo 1"
              height={500}
              width={500}
            />
          </div>
          <div className="h-75 relative col-span-1 row-span-1">
            <Image
              src="/images/photographyPhoto2.JPG"
              alt="Photo 2"
              height={500}
              width={500}
            />
          </div>
          <div className="h-75 relative col-span-1 row-span-1">
            <Image
              src="/images/photographyPhoto3.PNG"
              alt="Photo 3"
              height={500}
              width={500}
            />
          </div>
          <div className="h-75 relative col-span-2 row-span-1">
            <Image
              src="/images/photographyPhoto4.PNG"
              alt="Photo 4"
              height={500}
              width={500}
            />
          </div>
          <div className="h-75 relative col-span-1 row-span-1">
            <Image
              src="/images/photographyPhoto5.PNG"
              alt="Photo 5"
              height={500}
              width={500}
            />
          </div>
        </div>
        <div>
          <Heading size="sm" dark className="font-extrabold">
            <SplitText text="Drawing" />
          </Heading>
          <p>
            Drawing lets me bring my imagination to life, turning ideas into
            visual art that reflects my thoughts and emotions. It’s a relaxing
            and fulfilling way to explore creativity and improve my artistic
            skills.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-75 relative col-span-1 row-span-1">
            <Image
              src="/images/drawingPhoto1.jpg"
              alt="Photo 1"
              height={500}
              width={500}
            />
          </div>
          <div className="h-75 relative col-span-1 row-span-1">
            <Image
              src="/images/drawingPhoto2.jpg"
              alt="Photo 2"
              height={500}
              width={500}
            />
          </div>
          <div className="h-75 relative col-span-1 row-span-1">
            <Image
              src="/images/drawingPhoto3.jpg"
              alt="Photo 3"
              height={500}
              width={500}
            />
          </div>
          <div className="h-75 relative col-span-2 row-span-1">
            <Image
              src="/images/drawingPhoto4.jpg"
              alt="Photo 4"
              height={500}
              width={500}
            />
          </div>
          <div className="h-75 relative col-span-1 row-span-1">
            <Image
              src="/images/drawingPhoto5.jpg"
              alt="Photo 5"
              height={500}
              width={500}
            />
          </div>
        </div>
        <p className="whitespace-pre-line text-xs font-bold">
        </p>
      </div>
      <Float config={projects} />
    </SectionLayout>
  );
}
