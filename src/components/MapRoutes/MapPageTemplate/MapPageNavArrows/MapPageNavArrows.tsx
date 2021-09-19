import { Link } from "react-router-dom";

interface Props {
  previousProjectLink: string | null;
  nextProjectLink: string | null;
}
export const MapPageNavArrows = ({
  previousProjectLink,
  nextProjectLink,
}: Props) => {
  return (
    <div className="flex justify-between">
      <Link to="/">&larr; Back to Maps</Link>
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
