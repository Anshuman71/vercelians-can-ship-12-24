import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const workoutSchedule = [
  { day: "Monday", time: "6:30 AM - 7:30 AM", workout: "Chest" },
  { day: "Tuesday", time: "6:30 AM - 7:30 AM", workout: "Back" },
  { day: "Wednesday", time: "6:30 AM - 7:30 AM", workout: "Legs" },
  { day: "Thursday", time: "6:30 AM - 7:30 AM", workout: "Shoulders" },
  { day: "Friday", time: "6:30 AM - 7:30 AM", workout: "Arms" },
  { day: "Saturday", time: "6:30 AM - 7:30 AM", workout: "Abs & Cardio" },
];

export default function GymSchedule() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = days[new Date().getDay()];

  return (
    <div className="w-full h-full max-w-4xl mx-auto overflow-hidden">
      <p className="font-medium text-center text-lg mb-2">My Gym Schedule</p>
      <Table className="w-full">
        <TableBody>
          {workoutSchedule.map((day) => (
            <TableRow
              key={day.day}
              className={`border-b-0 ${
                currentDay === day.day
                  ? "bg-neutral-700/60 text-neutral-200"
                  : "text-muted-foreground"
              }`}
            >
              <TableCell className="py-1.5 font-medium">{day.day}</TableCell>
              <TableCell className="py-1.5 text-center">{day.time}</TableCell>
              <TableCell className="py-1.5 text-right">{day.workout}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
