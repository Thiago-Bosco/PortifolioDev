import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar } from "lucide-react";

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export default function ExperienceCard({ company, role, period, achievements }: ExperienceCardProps) {
  return (
    <Card className="transition-all duration-300 hover:shadow-md">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Building2 className="w-5 h-5 text-primary" />
              {company}
            </CardTitle>
            <CardDescription className="text-base font-medium text-foreground mt-1">
              {role}
            </CardDescription>
          </div>
          <Badge variant="outline" className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {period}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Principais Realizações:</h4>
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="leading-relaxed">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}