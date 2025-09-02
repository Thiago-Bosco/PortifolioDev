import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star } from "lucide-react";

interface ProjectCardProps {
  name: string;
  description: string;
  technologies: string[];
  features: string[];
  github: string;
  highlight?: boolean;
  date?: string;
}

export default function ProjectCard({ 
  name, 
  description, 
  technologies, 
  features, 
  github, 
  highlight = false,
  date 
}: ProjectCardProps) {
  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${
      highlight ? 'ring-2 ring-primary/20 bg-gradient-to-br from-primary/5 to-transparent' : ''
    }`}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="flex items-center gap-2">
              {name}
              {highlight && <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
            </CardTitle>
            {date && <p className="text-sm text-muted-foreground mt-1">{date}</p>}
          </div>
        </div>
        <CardDescription className="text-sm leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-semibold text-sm mb-2">Principais Funcionalidades:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-sm mb-2">Tecnologias:</h4>
          <div className="flex flex-wrap gap-1">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="flex gap-2 pt-2">
          <Button size="sm" variant="outline" asChild>
            <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              Código
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}