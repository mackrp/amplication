import { Datum as TDatum } from "../api/datum/Datum";

export const DATUM_TITLE_FIELD = "name";

export const DatumTitle = (record: TDatum): string => {
  return record.name || record.id;
};
