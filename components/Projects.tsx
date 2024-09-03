import { projects } from "./Float/config";
import Float from "./Float/Float";
import { SectionLayout } from "./Layout";
import { SplitText } from "./SplitText";
import { Heading, SubHeading } from "./Typography";
import { Align } from "./Typography/types";

export default function Writing() {
  return (
    <SectionLayout className="">
      <div className="md:max-w-2/3 flex w-full flex-col items-start space-y-11">
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
            chefs. The challenge? A national &aposCooking Without Fire&apos competition.
            With a sprinkle of guidance, a dash of motivation, and a generous
            helping of teamwork, we navigated through the choppy waters of
            culinary challenges. Leading this team wasn&apost just about winning, it
            was about blending our skills to create something deliciously
            extraordinary. That&aposs the essence of leadership!
            <img
              src="/images/cookingWithoutFire.jpg"
              alt="Certificate"
              className="mx-auto w-full max-w-xs transform"
            />
          </p>
        </div>

        <div>
          <Heading size="sm" dark className="font-extrabold">
            <SplitText text="Skill-2" />
          </Heading>
          <p>
            {" "}
            Throughout my school days, I have demonstrated strong leadership
            skills through various roles, including team management, project
            leadership, and strategic planning. My leadership experience has
            been marked by successful project outcomes, team development, and
            strategic improvements. Imagine being the captain of a ship, but
            your ship is a kitchen, and your crew is a team of six enthusiastic
            chefs. The challenge? A national &aposCooking Without Fire&apos competition.
            With a sprinkle of guidance, a dash of motivation, and a generous
            helping of teamwork, we navigated through the choppy waters of
            culinary challenges. Leading this team wasn&apost just about winning, it
            was about blending our skills to create something deliciously
            extraordinary. That&aposs the essence of leadership!
          </p>
        </div>

        <div>
          <Heading size="sm" dark className="font-extrabold">
            <SplitText text="Skill-3 Leadership" />
          </Heading>
          <p>
            Throughout my school days, I have demonstrated strong leadership
            skills through various roles, including team management, project
            leadership, and strategic planning. My leadership experience has
            been marked by successful project outcomes, team development, and
            strategic improvements. Imagine being the captain of a ship, but
            your ship is a kitchen, and your crew is a team of six enthusiastic
            chefs. The challenge? A national &aposCooking Without Fire&apos competition.
            With a sprinkle of guidance, a dash of motivation, and a generous
            helping of teamwork, we navigated through the choppy waters of
            culinary challenges. Leading this team wasn&apost just about winning, it
            was about blending our skills to create something deliciously
            extraordinary. That&aposs the essence of leadership!
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
