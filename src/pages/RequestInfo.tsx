
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, Mail, Phone, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const RequestInfo = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        <div className="max-w-3xl mx-auto">
          <h1 className="section-title text-center">Request Information</h1>
          <p className="text-center text-muted-foreground mb-12">
            Get detailed information about our programs, admission process, and campus life.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Methods</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>admissions@moderncollege.edu</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <span>Live Chat (9 AM - 5 PM EST)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="card-hover">
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
                  <select className="w-full p-3 rounded-md border">
                    <option value="">Select Information Type</option>
                    <option value="programs">Programs</option>
                    <option value="admissions">Admissions</option>
                    <option value="financial">Financial Aid</option>
                    <option value="campus">Campus Life</option>
                  </select>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 rounded-md border"
                  ></textarea>
                  <Button className="w-full">
                    Send Request
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestInfo;
