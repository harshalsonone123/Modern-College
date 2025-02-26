
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ApplyNow = () => {
  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary mb-8">
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        <div className="max-w-3xl mx-auto">
          <h1 className="section-title text-center mb-12">Apply to Modern College</h1>
          <Card>
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <input type="text" className="w-full p-3 rounded-md border" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <input type="email" className="w-full p-3 rounded-md border" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Program of Interest</label>
                  <select className="w-full p-3 rounded-md border">
                    <option>Business Administration</option>
                    <option>Computer Science</option>
                    <option>Digital Marketing</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Previous Education</label>
                  <textarea className="w-full p-3 rounded-md border" rows={4}></textarea>
                </div>
                <Button className="w-full" size="lg">Submit Application</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ApplyNow;
