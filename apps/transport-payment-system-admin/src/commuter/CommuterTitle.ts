import { Commuter as TCommuter } from "../api/commuter/Commuter";

export const COMMUTER_TITLE_FIELD = "name";

export const CommuterTitle = (record: TCommuter): string => {
  return record.name?.toString() || String(record.id);
};
