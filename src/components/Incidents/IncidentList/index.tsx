import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { AvatarGroup } from "../../AvatarGroup";
import { IncidentStatusTag } from "../../IncidentStatusTag";
import { IncidentSeverityTag } from "../../IncidentSeverityTag";
import { IncidentTypeTag } from "../../incidentTypeTag";
import { Incident } from "../../../api/services/incident";
import { relativeDateTime } from "../../../utils/date";

type Props = {
  list: Incident[];
} & React.HTMLAttributes<HTMLTableElement>;

export function IncidentList({ list, ...props }: Props) {
  return (
    <div className="flex flex-col overflow-y-auto flex-1  w-full">
      <table
        className="table-auto w-full border border-gray-200 rounded-md"
        aria-label="table"
        {...props}
      >
        <thead className="rounded-md sticky top-0">
          <tr className="border-b border-gray-200 uppercase bg-column-background rounded-t-md items-center">
            <th className="px-3 py-3 text-gray-500 font-medium text-xs text-left w-40">
              Type
            </th>
            <th className="px-3 py-3 text-gray-500 font-medium text-xs text-left w-32">
              Severity
            </th>
            <th className="px-3 py-3 text-gray-500 font-medium text-xs text-left w-32">
              Status
            </th>
            <th
              className="px-6 py-3 text-gray-500 font-medium text-xs col-span-2 text-left"
              colSpan={2}
            >
              Name
            </th>
            <th className="px-3 py-3 text-gray-500 font-medium text-xs text-left">
              Age
            </th>
            <th
              className="px-3 py-3 text-gray-500 font-medium text-xs col-span-2 text-left"
              colSpan={2}
            >
              Responders
            </th>
          </tr>
        </thead>
        <tbody className="flex-1 overflow-y-auto">
          {list.map((incident) => (
            <IncidentItem incident={incident} key={uuid()} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function IncidentItem({ incident }: { incident: Incident }) {
  const {
    title,
    id,
    created_at: createdAt
    // status
  } = incident;
  const age = relativeDateTime(createdAt, true);
  const navigate = useNavigate();
  const navigateToIncidentDetails = (id: string) => {
    navigate(`/incidents/${id}`);
  };

  return (
    <tr
      className="last:border-b-0 border-b cursor-pointer"
      onClick={() => navigateToIncidentDetails(id)}
    >
      <td className="py-4 px-3">
        <div className="flex flex-row items-center">
          <IncidentTypeTag type={incident.type!} />
        </div>
      </td>
      <td className="py-4 px-3">
        <div className="flex flex-row items-center">
          <IncidentSeverityTag severity={incident.severity} />
        </div>
      </td>
      <td className="px-3 py-4 shrink-0">
        <div className="flex">
          <IncidentStatusTag className="px-2" status={incident.status!} />
        </div>
      </td>
      <td
        colSpan={2}
        className="px-6 py-4 text-gray-900 col-span-2 text-sm leading-5 font-medium"
      >
        {title}
      </td>
      <td className="px-3 text-gray-500 text-sm py-4">{age}</td>
      <td className="px-3 text-sm py-4" colSpan={2}>
        <div className="flex">
          {Boolean(incident?.involved?.length) && (
            <AvatarGroup maxCount={5} users={incident.involved} />
          )}
        </div>
      </td>
    </tr>
  );
}
