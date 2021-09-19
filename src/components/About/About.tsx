import { Bio } from "./Bio/Bio";
import { Clients } from "./Clients/Clients";

export const About = () => {
  return (
    <div className="block mx-auto py-8 h-screen  w-full lg:px-16 xl:w-3/4">
      <Bio />
      <Clients />
    </div>
  );
};
