import { AboutFeatures } from "../../constant/Feature";

const Feature = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-10 md:py-14">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 ">
          {AboutFeatures.map((item) => (
            <div
              key={item.id}
              className="group bg-white dark:bg-gray-700 p-4 md:p-6 rounded-xl lg:rounded-2xl
            hover:shadow-3xl duration-500 border border-gray-100 dark:border-gray-800
             hover:border-primary"
            >
              <div
                className="bg-primary/10 h-12 w-12 lg:h-16 lg:w-16 flex justify-center items-center
                 group-hover:bg-primary
              duration-500 rounded-xl md:rounded-2xl mb-3 md:mb-4"
              >
                <item.icon className="text-primary text-lg md:text-2xl group-hover:text-white" />
              </div>
              <h3 className="font-semibold md:font-bold text-xs md:text-base dark:text-white
               group-hover:text-primary duration-300">
                {item.text}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
