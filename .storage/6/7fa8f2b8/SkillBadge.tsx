import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  name: string;
  level: string;
  color: string;
}

export default function SkillBadge({ name, level, color }: SkillBadgeProps) {
  return (
    <div className="flex flex-col items-center p-4 bg-card rounded-lg border hover:shadow-md transition-all duration-300 hover:scale-105">
      <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center mb-3 shadow-lg`}>
        <span className="text-white font-bold text-lg">
          {name.charAt(0).toUpperCase()}
        </span>
      </div>
      <h4 className="font-semibold text-sm text-center mb-1">{name}</h4>
      <Badge variant="secondary" className="text-xs">
        {level}
      </Badge>
    </div>
  );
}