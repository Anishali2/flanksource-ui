export const resources = {
  topology: "topology",
  health: "health",
  incidents: "incidents",
  config: "config",
  logs: "logs",
  "settings.connections": "settings.connections",
  "settings.users": "settings.users",
  "settings.teams": "settings.teams",
  "settings.rules": "settings.rules",
  "settings.config_scraper": "settings.config_scraper",
  "settings.topology": "settings.topology",
  "settings.health": "settings.health",
  "settings.job_history": "settings.job_history",
  "settings.feature_flags": "settings.feature_flags"
};

export const resourceToParentMap = {
  "settings.config_scraper": "config",
  "settings.topology": "topology",
  "settings.health": "health",
  "settings.job_history": "health"
};

export const resourceList = Object.keys(resources).map(
  (item) => `${item}.disable`
);
