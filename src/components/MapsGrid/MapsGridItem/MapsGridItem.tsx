import { ImgData } from "../../../types/types";

interface Props {
  projectTitle: string;
  projectThumbnail: ImgData;
}

export const MapsGridItem = ({ projectTitle, projectThumbnail }: Props) => {
  console.log(projectThumbnail);
  return (
    <div className="flex flex-col items-center">
      <div className="w-80 h-80 transition-opacity duration-150 hover:opacity-90">
        <img
          src={projectThumbnail.module.default}
          alt={projectThumbnail.slug}
        />
      </div>
      <div className="py-2 text-xs">{projectTitle}</div>;
    </div>
  );
};
