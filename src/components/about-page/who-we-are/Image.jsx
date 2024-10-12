import main from "../../../images/about-page/aa.jpg";

function Image() {
  return (
    <div className="relative before:absolute before:left-8 before:top-0 before:h-1/2 before:w-2 after:absolute after:bottom-0 after:right-8 after:h-1/2 after:w-2 2xl:self-center">
      <img src={main} alt="" className="mx-auto w-3/4" />
    </div>
  );
}

export default Image;
