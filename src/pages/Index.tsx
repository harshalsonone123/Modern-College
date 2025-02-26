
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { ChevronRight, GraduationCap, BookOpen, Users, Mail } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed w-full bg-background/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="font-heading font-bold text-xl">Modern College</div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="nav-link">Home</a>
              <a href="#programs" className="nav-link">Programs</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>
            <Button variant="outline" className="hidden md:flex">
              Apply Now
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Shape Your Future at Modern College
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Experience excellence in education with our innovative programs and distinguished faculty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg">
                Explore Programs
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Request Information
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Our Programs</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {programs.map((program, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-accent" />
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">About Modern College</h2>
              <p className="text-muted-foreground mb-6">
                At Modern College, we believe in nurturing talent and fostering innovation. Our commitment to excellence drives everything we do, from our cutting-edge programs to our state-of-the-art facilities.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-card">
                    <p className="text-3xl font-bold text-accent mb-2">{stat.value}</p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* Placeholder for images - replace src with actual images */}
              <div className="aspect-square bg-muted rounded-lg"></div>
              <div className="aspect-square bg-muted rounded-lg mt-8"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="section-title">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              Have questions about our programs? We're here to help you take the next step in your educational journey.
            </p>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded-md border"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full p-3 rounded-md border"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 rounded-md border"
                  ></textarea>
                  <Button className="w-full" size="lg">
                    Send Message
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

const programs = [
  {
    title: "Business Administration",
    description: "Develop key management skills and business acumen for today's dynamic marketplace."
  },
  {
    title: "Computer Science",
    description: "Master the latest technologies and programming languages in our state-of-the-art labs."
  },
  {
    title: "Digital Marketing",
    description: "Learn to create and execute effective digital marketing strategies for the modern age."
  }
];

const stats = [
  { value: "15+", label: "Programs Offered" },
  { value: "92%", label: "Graduate Employment" },
  { value: "24", label: "Expert Faculty" },
  { value: "1:12", label: "Teacher-Student Ratio" }
];

export default Index;
