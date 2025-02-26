
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, GraduationCap, Clock, Users, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const ExplorePrograms = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        <h1 className="section-title text-center mb-12">Our Academic Programs</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {detailedPrograms.map((program, index) => (
            <Card key={index} className="card-hover overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  {program.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6">{program.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-secondary" />
                    <span className="text-sm">{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-secondary" />
                    <span className="text-sm">{program.classSize}</span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-accent" />
                    <span className="text-sm font-medium">Key Outcomes</span>
                  </div>
                  <ul className="mt-2 space-y-1">
                    {program.outcomes.map((outcome, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">• {outcome}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

const detailedPrograms = [
  {
    title: "Business Administration",
    description: "Develop comprehensive business acumen and leadership skills needed for today's dynamic global marketplace.",
    duration: "3 Years",
    classSize: "30 Students",
    outcomes: [
      "Strategic management expertise",
      "Financial analysis skills",
      "Leadership capabilities",
      "Global business understanding"
    ]
  },
  {
    title: "Computer Science",
    description: "Master cutting-edge technologies and programming concepts in our state-of-the-art computing facilities.",
    duration: "4 Years",
    classSize: "25 Students",
    outcomes: [
      "Advanced programming skills",
      "Software development expertise",
      "Problem-solving abilities",
      "Technical project management"
    ]
  },
  {
    title: "Digital Marketing",
    description: "Learn to create and execute effective digital marketing strategies for the modern digital landscape.",
    duration: "2 Years",
    classSize: "28 Students",
    outcomes: [
      "Social media expertise",
      "SEO & Analytics skills",
      "Content strategy",
      "Digital campaign management"
    ]
  },
  {
    title: "Data Science",
    description: "Explore the world of data analytics and machine learning with hands-on projects and real-world applications.",
    duration: "3 Years",
    classSize: "24 Students",
    outcomes: [
      "Statistical analysis",
      "Machine learning",
      "Data visualization",
      "Predictive modeling"
    ]
  }
];

export default ExplorePrograms;
