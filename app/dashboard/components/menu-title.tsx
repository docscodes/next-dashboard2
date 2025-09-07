import { PersonStandingIcon } from "lucide-react";

export default function MenuTitle() {
  return (
    <h5 className="flex items-center">
      <PersonStandingIcon
        size={30}
        className="text-primary"
      />
      My Dashboard
    </h5>
  );
}
