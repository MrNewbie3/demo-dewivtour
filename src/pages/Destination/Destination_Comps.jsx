/* eslint-disable react/jsx-pascal-case */

import List from "./List";
import Sorter from "./Sorter";

const Destination_Comps = () => {
  return (
    <div className="wrapper px-16 my-6">
      <section className="flex flex-row gap-x-14">
        <div className="selection hidden lg:block">
          <Sorter />
        </div>
        <div className="destination-list w-full">
          <List />
        </div>
      </section>
    </div>
  );
};

export default Destination_Comps;
