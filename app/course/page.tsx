import { PiChalkboardTeacherFill } from "react-icons/pi";

export default function Course() {
  return (
    <div className="min-h-fit w-full p-4 ">
      <div className="text-6xl mx-auto w-fit">
        <PiChalkboardTeacherFill />
      </div>
      <p className="max-w-[500px] mx-auto text-center">
        Piano Lessons are still under development. I will inform everyone once
        it's done!
      </p>
    </div>
  );
}
