import { Link } from "react-router-dom";
import { ComponentTeamItem } from "../../api/services/topology";
import { Icon } from "../Icon";

type Props = {
  team: ComponentTeamItem;
};

export function ComponentTeamLink({ team }: Props) {
  return (
    <Link
      to={{
        pathname: `/settings/teams/${team.team_id}`
      }}
    >
      <div className="flex flex-row w-full space-x-2 px-2" key={team.team_id}>
        <Icon className="w-auto h-5" name={team.team.icon} />
        <div className="flex-1">{team.team.name}</div>
      </div>
    </Link>
  );
}
