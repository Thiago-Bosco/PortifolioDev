import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  Code2,
  Server,
  Database,
  Cloud,
  ExternalLink,
  GraduationCap
} from "lucide-react";
import SkillBadge from "@/components/SkillBadge";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import { personalInfo, skills, experience, projects, education } from "@/lib/data";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      {/* Hero Section */}
      <section className="relative py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-primary to-primary/60 rounded-full mb-6 shadow-lg">
              <span className="text-3xl font-bold text-white">TB</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                {personalInfo.name}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                {personalInfo.title}
              </p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-6">
              <Button asChild size="lg" className="shadow-lg">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Contato
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Code2 className="w-6 h-6 text-primary" />
                Sobre Mim
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {personalInfo.summary}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Habilidades Técnicas</h2>
            <p className="text-muted-foreground">Tecnologias e ferramentas que domino</p>
          </div>

          <div className="space-y-12">
            {/* Languages */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Code2 className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Linguagens de Programação</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {skills.languages.map((skill, index) => (
                  <SkillBadge key={index} {...skill} />
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Server className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Frameworks & Libraries</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {skills.frameworks.map((skill, index) => (
                  <SkillBadge key={index} {...skill} />
                ))}
              </div>
            </div>

            {/* Databases */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Database className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Bancos de Dados</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {skills.databases.map((skill, index) => (
                  <SkillBadge key={index} {...skill} />
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Cloud className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">DevOps & Infraestrutura</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {skills.devops.map((skill, index) => (
                  <SkillBadge key={index} {...skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Experiência Profissional</h2>
            <p className="text-muted-foreground">Minha trajetória no desenvolvimento de software</p>
          </div>

          <div className="space-y-6">
            {experience.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Projetos em Destaque</h2>
            <p className="text-muted-foreground">Alguns dos meus projetos mais relevantes</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Formação Acadêmica</h2>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                {education.degree}
              </CardTitle>
              <CardDescription className="text-base">
                {education.institution} • {education.status}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Vamos Conversar?</h2>
            <p className="text-muted-foreground">Estou sempre aberto a novas oportunidades e desafios</p>
          </div>

          <Card className="shadow-lg">
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href={`mailto:${personalInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Telefone</p>
                      <a href={`tel:${personalInfo.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                        Ver perfil <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">GitHub</p>
                      <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                        Ver repositórios <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">
            © 2024 {personalInfo.name}. Desenvolvido com React, TypeScript e Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}