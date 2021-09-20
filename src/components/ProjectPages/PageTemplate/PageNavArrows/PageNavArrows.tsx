import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "./utils";

interface Props {
  previousProjectLink: string | null;
  nextProjectLink: string | null;
  gridName: string;
}
export const PageNavArrows = ({
  previousProjectLink,
  nextProjectLink,
  gridName,
}: Props) => {
  return (
    <div className="flex justify-between">
      <Link to={"/" + gridName}>
        &larr; Back to{" "}
        {gridName === "" ? "Maps" : capitalizeFirstLetter(gridName)}
      </Link>
      <div className="flex">
        {previousProjectLink ? (
          <Link to={previousProjectLink} className="mx-2">
            &larr; prev
          </Link>
        ) : (
          <div className="mx-2 opacity-50"> &larr; prev</div>
        )}
        <div>/</div>
        {nextProjectLink ? (
          <Link to={nextProjectLink} className="mx-2">
            next &rarr;
          </Link>
        ) : (
          <div className="mx-2 opacity-50">next &rarr;</div>
        )}
      </div>
    </div>
  );
};
