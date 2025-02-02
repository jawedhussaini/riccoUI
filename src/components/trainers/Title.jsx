import SecondaryHeading from "../headings/SecondaryHeading";
import TertiaryHeading from "../headings/TertiaryHeading";

function Title() {
  return (
    <div className="text-center">
      <SecondaryHeading>Gym trainers</SecondaryHeading>
      <TertiaryHeading>expert coaches</TertiaryHeading>
      <p className="mx-auto max-w-[42ch] font-medium text-red">
        Expert team of coaches helps you succeed in any goal, personalized
        guidance and motivation provided!
      </p>
    </div>
  );
}

export default Title;
