import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(timezone);
dayjs.extend(utc);

const tz = "America/Sao_Paulo";

export function getCreatedAt(): Date {
    return dayjs().tz().startOf("day").toDate();
}