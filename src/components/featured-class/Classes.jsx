const cardStyles = `relative h-60 w-full cursor-pointer after:rounded-r-full after:bg-[70%] after:bg-no-repeat after:transition-all hover:after:bg-white group`;

const bgStyles = `h-full w-full 
bg-cover bg-center grayscale transition-all duration-700 group-hover:scale-150 group-hover:grayscale-0`;

function Classes() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-5 text-left 3xl:grid-cols-4">
      {/* Cycling */}
      <div
        className={`${cardStyles} after:bg-[url('./images/featured-class/cc.jpg')] hover:after:bg-[url('./images/featured-class/cycling-red.png')] 2xl:col-span-2`}
      >
        <div
          className={`${bgStyles} bg-[url('./images/featured-class/cc.jpg')]`}
        ></div>
        <div className="absolute bottom-0 z-10 mb-5 ml-5 cursor-text space-y-2 text-white">
          <h4 className="text-3xl text-red font-bold">Cycling</h4>
          <p className="bg-white text-red px-3 py-0.5">Wednesday: 9:00am-10:00am</p>
        </div>
      </div>

      {/* Karate */}
      <div
        className={`${cardStyles} after:bg-[url('./images/featured-class/aa.jpg')] hover:after:bg-[url('./images/featured-class/karate-red.png')]`}
      >
        <div
          className={`${bgStyles} bg-[url('./images/featured-class/aa.jpg')]`}
        ></div>
        <div className="absolute bottom-0 z-10 mb-5 ml-5 cursor-text space-y-2 text-white">
          <h4 className="text-3xl text-red font-bold">Karate</h4>
          <p className="whitespace-nowrap bg-white text-red px-3 py-0.5">
            Friday: 10:00am-11:00am
          </p>
        </div>
      </div>

      {/* Power */}
      <div
        className={`${cardStyles} after:bg-[url('./images/featured-class/dd.jpg')] hover:after:bg-[url('./images/featured-class/power-red.png')]`}
      >
        <div
          className={`${bgStyles} bg-[url('./images/featured-class/dd.jpg')]`}
        ></div>
        <div className="absolute bottom-0 z-10 mb-5 ml-5 cursor-text space-y-2 text-white">
          <h4 className="text-3xl text-red font-bold">Power</h4>
          <p className="whitespace-nowrap bg-white text-red px-3 py-0.5">
            Saturday: 9:00am-10:00am
          </p>
        </div>
      </div>

      {/* Meditation */}
      <div
        className={`${cardStyles} after:bg-[url('./images/featured-class/martial-arts.webp')] hover:after:bg-[url('./images/featured-class/meditation-red.png')]`}
      >
        <div
          className={`${bgStyles} bg-[url('./images/featured-class/martial-arts.webp')]`}
        ></div>
        <div className="absolute bottom-0 z-10 mb-5 ml-5 cursor-text space-y-2 text-white">
          <h4 className="text-3xl text-red font-bold">Meditation</h4>
          <p className="whitespace-nowrap bg-white text-red px-3 py-0.5">
            Friday: 1:00pm-2:00pm
          </p>
        </div>
      </div>

      {/* Martial Arts */}
      <div
        className={`${cardStyles} after:bg-[url('./images/featured-class/bb.jpg')] hover:after:bg-[url('./images/featured-class/martial-arts-red.png')]`}
      >
        <div
          className={`${bgStyles} bg-[url('./images/featured-class/bb.jpg')]`}
        ></div>
        <div className="absolute bottom-0 z-10 mb-5 ml-5 cursor-text space-y-2 text-white">
          <h4 className="text-3xl text-red font-bold">Martial Arts</h4>
          <p className="whitespace-nowrap bg-white text-red px-3 py-0.5">
            Sunday: 6:00pm-7:00pm
          </p>
        </div>
      </div>

      {/* Workout */}
      <div
        className={`${cardStyles} after:bg-[url('./images/featured-class/gg.jpg')] hover:after:bg-[url('./images/featured-class/workout-red.png')] 3xl:col-span-2`}
      >
        <div
          className={`${bgStyles} bg-[url('./images/featured-class/gg.jpg')]`}
        ></div>
        <div className="absolute bottom-0 z-10 mb-5 ml-5 cursor-text space-y-2 text-white">
          <h4 className="text-3xl text-red font-bold">Workout</h4>
          <p className="bg-white text-red px-3 py-0.5">Monday: 4:00pm-5:00pm</p>
        </div>
      </div>
    </div>
  );
}

export default Classes;
