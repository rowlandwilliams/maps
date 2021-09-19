import { clientProjects } from "./clientProjects";
import { ClientProjectTypeColumn } from "./ClientProjectTypeColumn/ClientProjectTypeColumn";

export const Clients = () => {
  return (
    <div className="border-gray-400 border-t-1 py-8 px-2 md:px-0">
      <div className="text-base font-inter-medium pb-4">
        Clients & Experience
      </div>
      <div className="flex">
        {clientProjects.map((clientProject) => (
          <ClientProjectTypeColumn
            key={clientProject.columnTitle}
            columnTitle={clientProject.columnTitle}
            columnProjects={clientProject.columnProjects}
          />
        ))}
      </div>
    </div>
  );
};
