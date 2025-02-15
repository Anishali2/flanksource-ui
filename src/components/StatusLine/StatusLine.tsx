import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import { Chip } from "../Chip";
import { Icon } from "../Icon";

export type StatusInfo = {
  label: string | number;
  color: "red" | "green" | "orange" | "gray";
  icon?: string | React.ReactNode;
  url?: string;
};

export type StatusLineData = {
  icon?: string | React.ReactNode;
  label: string;
  url?: string;
  statuses: StatusInfo[];
};

export type StatusLineProps = React.HTMLProps<HTMLDivElement> & StatusLineData;

const renderIcon = (icon: string | React.ReactNode) => {
  if (!icon) {
    return null;
  }
  if (typeof icon === "object") {
    return icon;
  } else if (typeof icon === "string") {
    return <Icon name={icon} className="w-4 h-4" />;
  }
};

const StatusInfoEntry = ({ statusInfo }: { statusInfo: StatusInfo }) => {
  if (statusInfo.url) {
    return (
      <Link
        className="inline-flex space-x-1"
        key={statusInfo.url}
        to={statusInfo.url}
      >
        {statusInfo.icon && renderIcon(statusInfo.icon)}
        <Chip text={statusInfo.label} color={statusInfo.color} />
      </Link>
    );
  } else {
    return (
      <span className="inline-flex space-x-1">
        {statusInfo.icon && renderIcon(statusInfo.icon)}
        <Chip text={statusInfo.label} color={statusInfo.color} />
      </span>
    );
  }
};

export function StatusLine({
  icon,
  label,
  url,
  statuses,
  className = "py-1",
  ...rest
}: StatusLineProps) {
  return (
    <div
      className={clsx("flex flex-row space-x-1 items-center", className)}
      {...rest}
    >
      {icon && renderIcon(icon)}
      {url && (
        <Link className="text-xs cursor-pointer" to={url}>
          {label}
        </Link>
      )}
      {!url && <span className="text-xs cursor-pointer">{label}</span>}
      <div className="flex flex-row space-x-1.5">
        {statuses.map((status, index) => {
          return <StatusInfoEntry statusInfo={status} key={index} />;
        })}
      </div>
    </div>
  );
}
