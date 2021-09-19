import { clientProjects } from "./clientProjects";
import { ClientProjectTypeColumn } from "./ClientProjectTypeColumn/ClientProjectTypeColumn";

export const Clients = () => {
  return (
    <div className="border-gray-400 border-t-1 py-8">
      <div className="text-base font-inter-medium pb-4">
        Clients & Experience
      </div>
      <div className="flex">
        {clientProjects.map((clientProject) => (
          <ClientProjectTypeColumn
            columnTitle={clientProject.columnTitle}
            columnProjects={clientProject.columnProjects}
          />
        ))}
      </div>
    </div>
  );
};
