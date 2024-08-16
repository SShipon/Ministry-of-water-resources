import Help from "./Help";
import HelpText from "./HelpText";

import Sidebar from "./Sidebar";
import Subjects from "./Subjects";

const Services = () => {
  return (
    <section className="container mx-auto p-4 ">
      <div className="grid grid-cols-12 gap-2">
        <div className="lg:col-span-9 col-span-12">
          <Subjects />
        </div>
        <div className="lg:col-span-3 col-span-12">
          <Sidebar />
        </div>

        <div className="col-span-12 ">
          <div className="flex flex-col  lg:flex-row ">
            <div className="lg:w-2/3 w-full  ">
           <Help />
            </div>
            <div className="lg:w-1/3 w-full ">
               <HelpText />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
