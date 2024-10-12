import SecondaryHeading from "../headings/SecondaryHeading";
import TertiaryHeading from "../headings/TertiaryHeading";

function Title() {
  return (
    <div className="text-center">
      <SecondaryHeading>Latest blog</SecondaryHeading>
      <p className="mx-auto max-w-[50ch] font-medium text-gray-300">
        GymMart an unknown printer took a galley of type and scrambled make a type
        specimen book.
      </p>
    </div>
  );
}

export default Title;
