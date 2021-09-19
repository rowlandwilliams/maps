import { ClientProject } from "../../../../types/types";

interface Props {
  columnTitle: string;
  columnProjects: ClientProject[];
}

export const ClientProjectTypeColumn = ({
  columnTitle,
  columnProjects,
}: Props) => {
  return (
    <div className="py-2 text-sm mr-4">
      <div className="font-inter-medium">{columnTitle}</div>
      <div className="py-2">
        {columnProjects.map((project) => (
          <div className="hover:underline">
            <a
              href={project.clientUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              {project.clientName}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
