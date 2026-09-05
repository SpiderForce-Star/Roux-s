/** America/Chicago hours from Roux's own site. Last seating, not kitchen close. */
export const WEEKLY_HOURS: Record<
  number,
  { open: string; lastSeating: string; label: string }
> = {
  0: { open: "11:00", lastSeating: "19:30", label: "Sunday" },
  1: { open: "11:00", lastSeating: "19:30", label: "Monday" },
  2: { open: "11:00", lastSeating: "19:30", label: "Tuesday" },
  3: { open: "11:00", lastSeating: "19:30", label: "Wednesday" },
  4: { open: "11:00", lastSeating: "19:30", label: "Thursday" },
  5: { open: "11:00", lastSeating: "20:30", label: "Friday" },
  6: { open: "11:00", lastSeating: "20:30", label: "Saturday" },
};

export const HAPPY_HOUR = { start: "15:00", end: "18:00" };

function partsInNashville(date = new Date()) {
  const fmt = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  });
  const bag = Object.fromEntries(
    fmt.formatToParts(date).map((p) => [p.type, p.value]),
  );
  const weekdayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  const weekday = weekdayMap[bag.weekday ?? "Sun"] ?? 0;
  const minutes =
    Number(bag.hour ?? 0) * 60 + Number(bag.minute ?? 0);
  return { weekday, minutes };
}

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return (h ?? 0) * 60 + (m ?? 0);
}

export function formatClock(hhmm: string) {
  const [hRaw, m] = hhmm.split(":").map(Number);
  const h = hRaw ?? 0;
  const suffix = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  if (m === 0) return `${h12} ${suffix}`;
  return `${h12}:${String(m).padStart(2, "0")} ${suffix}`;
}

export type HouseStatus = {
  open: boolean;
  happyHour: boolean;
  label: string;
  today: string;
};

export function getHouseStatus(now = new Date()): HouseStatus {
  const { weekday, minutes } = partsInNashville(now);
  const today = WEEKLY_HOURS[weekday]!;
  const openMin = toMinutes(today.open);
  const closeMin = toMinutes(today.lastSeating);
  const open = minutes >= openMin && minutes < closeMin;
  const happyHour =
    open &&
    minutes >= toMinutes(HAPPY_HOUR.start) &&
    minutes < toMinutes(HAPPY_HOUR.end);

  let label: string;
  if (happyHour) {
    label = "Happy Hour now · 3–6 PM";
  } else if (open) {
    label = `Open · last seating ${formatClock(today.lastSeating)}`;
  } else if (minutes < openMin) {
    label = `Opens today at ${formatClock(today.open)}`;
  } else {
    const tomorrow = WEEKLY_HOURS[(weekday + 1) % 7]!;
    label = `Closed · opens ${tomorrow.label} ${formatClock(tomorrow.open)}`;
  }

  return { open, happyHour, label, today: today.label };
}
