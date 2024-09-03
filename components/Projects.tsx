import { projects } from "./Float/config";
import Float from "./Float/Float";
import { SectionLayout } from "./Layout";
import { SplitText } from "./SplitText";
import { Heading, SubHeading } from "./Typography";
import { Align } from "./Typography/types";

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
          <img
            className="h-75 col-span-1 row-span-1 object-cover"
            src="/images/photo1.JPG"
            alt="Photo 1"
          />
          <img
            className="h-75 col-span-1 row-span-1 object-cover"
            src="/images/photo2.JPG"
            alt="Photo 2"
          />
          <img
            className="h-75 col-span-1 row-span-1 object-cover"
            src="/images/photo3.PNG"
            alt="Photo 3"
          />
          <img
            className="h-75 col-span-2 row-span-1 object-cover"
            src="/images/photo4.PNG"
            alt="Photo 4"
          />
          <img
            className="h-75 col-span-1 row-span-1 object-cover"
            src="/images/photo5.PNG"
            alt="Photo 5"
          />
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

        <p className="whitespace-pre-line text-xs font-bold">
          Meanwhile, this site is being built & designed with NextJS,
          TypeScript, Tailwind CSS, GSAP & Figma
        </p>
      </div>
      <Float config={projects} />
    </SectionLayout>
  );
}
