const iconStyles = `rounded-[50%] hover:text-red absolute top-5 z-10 cursor-pointer rounded-full bg-gray-300 bg-center bg-no-repeat p-12 shadow-xl transition-all duration-300 group-hover:bg-red`;

const cardStyles = `rounded-[50%] before:rounded-[50%] relative cursor-pointer bg-white px-6 py-28 shadow-2xl before:absolute before:right-full before:top-0 before:z-[-1] before:h-full before:w-full group-hover:text-red before:bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('./images/featured-class/cycling.webp')] before:bg-cover before:grayscale before:transition-all before:duration-300 group-hover:before:right-0`;

function ClassCards() {
  return (
    <section className="bg-gray-50 px-6 py-32 text-center">
      <div className="container grid gap-10 lg:grid-cols-2 3xl:grid-cols-3">
        {/* Cycling */}
        <div className="rounded-[50%] group relative">
          <div
            className={`${iconStyles} bg-[url('./images/featured-class/cycling-white.png')]`}
          ></div>

          <div
            className={`${cardStyles} before:bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('./images/featured-class/cycling.webp')]`}
          >
            <h3 className="mb-3 text-2xl font-bold transition-all group-hover:text-red">
              Cycling
            </h3>
            <p className="font-medium text-gray-300 transition-all group-hover:text-red">
              The Best Body Fitness in Town Authoritatively disseminate
              multimedia based
            </p>
          </div>
        </div>

        {/* Meditation */}
        <div className=" rounded-[50%] group relative">
          <div
            className={`${iconStyles} bg-[url('./images/featured-class/meditation-white.png')]`}
          ></div>

          <div
            className={`${cardStyles} before:bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('./images/featured-class/meditation.webp')]`}
          >
            <h3 className="mb-3 text-2xl font-bold transition-all group-hover:text-red">
              Meditation
            </h3>
            <p className="font-medium text-gray-300 transition-all group-hover:text-red">
              The Best Body Fitness in Town Authoritatively disseminate
              multimedia based
            </p>
          </div>
        </div>

        {/* Martial Arts */}
        <div className=" rounded-[50%] group relative">
          <div
            className={`${iconStyles} bg-[url('./images/featured-class/martial-arts-white.png')]`}
          ></div>

          <div
            className={`${cardStyles} before:bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('./images/featured-class/martial-arts.webp')]`}
          >
            <h3 className="mb-3 text-2xl font-bold transition-all group-hover:text-red">
              Martial Arts
            </h3>
            <p className="font-medium text-gray-300 transition-all group-hover:text-red">
              The Best Body Fitness in Town Authoritatively disseminate
              multimedia based
            </p>
          </div>
        </div>

        {/* Karate */}
        <div className=" rounded-[50%] group relative">
          <div
            className={`${iconStyles} bg-[url('./images/featured-class/karate-white.png')]`}
          ></div>

          <div
            className={`${cardStyles} before:bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('./images/featured-class/karate.webp')]`}
          >
            <h3 className="mb-3 text-2xl font-bold transition-all group-hover:text-red">
              Karate
            </h3>
            <p className="font-medium text-gray-300 transition-all group-hover:text-red">
              The Best Body Fitness in Town Authoritatively disseminate
              multimedia based
            </p>
          </div>
        </div>

        {/* Power Lifting */}
        <div className=" rounded-[50%] group relative">
          <div
            className={`${iconStyles} bg-[url('./images/featured-class/power-white.png')]`}
          ></div>

          <div
            className={`${cardStyles} before:bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('./images/featured-class/power.webp')]`}
          >
            <h3 className="mb-3 text-2xl font-bold transition-all group-hover:text-red">
              Power Lifting
            </h3>
            <p className="font-medium text-gray-300 transition-all group-hover:text-red">
              The Best Body Fitness in Town Authoritatively disseminate
              multimedia based
            </p>
          </div>
        </div>

        {/* Workout */}
        <div className=" rounded-[50%] group relative">
          <div
            className={`${iconStyles} bg-[url('./images/featured-class/workout-white.png')]`}
          ></div>

          <div
            className={`${cardStyles} before:bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('./images/featured-class/workout.webp')] before:bg-right`}
          >
            <h3 className="mb-3 text-2xl font-bold transition-all group-hover:text-red">
              Workout
            </h3>
            <p className="font-medium text-gray-300 transition-all group-hover:text-red">
              The Best Body Fitness in Town Authoritatively disseminate
              multimedia based
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClassCards;
