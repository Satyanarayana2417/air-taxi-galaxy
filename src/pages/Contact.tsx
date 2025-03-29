
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const heroVideoSrc = "https://assets.mixkit.co/videos/preview/mixkit-working-at-a-financial-company-29877-large.mp4";
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Thank you for your message! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection
          title="Contact AIRavata"
          subtitle="Reach out to our team"
          videoSrc={heroVideoSrc}
          buttonText=""
          buttonLink=""
        />
        
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg mb-8">
                  Have questions about our services or need assistance with your booking? 
                  Our team is here to help. Fill out the form, and we'll get back to you as soon as possible.
                </p>
                
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6 flex items-center">
                      <div className="h-12 w-12 rounded-full bg-airavata-purple/10 flex items-center justify-center mr-4">
                        <MapPin className="h-6 w-6 text-airavata-purple" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Headquarters</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          AIRavata Tower, Cyber City,<br />
                          Hyderabad, Telangana 500081, India
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6 flex items-center">
                      <div className="h-12 w-12 rounded-full bg-airavata-purple/10 flex items-center justify-center mr-4">
                        <Phone className="h-6 w-6 text-airavata-purple" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Phone</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Customer Support: +91 8005550123<br />
                          Booking Inquiries: +91 8005550124
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6 flex items-center">
                      <div className="h-12 w-12 rounded-full bg-airavata-purple/10 flex items-center justify-center mr-4">
                        <Mail className="h-6 w-6 text-airavata-purple" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Email</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          General Inquiries: info@airavata.com<br />
                          Customer Support: support@airavata.com
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6 flex items-center">
                      <div className="h-12 w-12 rounded-full bg-airavata-purple/10 flex items-center justify-center mr-4">
                        <MessageCircle className="h-6 w-6 text-airavata-purple" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Live Chat</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                          Our support team is available for live chat during business hours.
                        </p>
                        <Button variant="outline" className="text-airavata-purple border-airavata-purple">
                          Start Chat
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div>
                <Card className="shadow-lg border-0">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">
                      Send Us a Message
                    </h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-1">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-airavata-purple hover:bg-airavata-purple/90 text-white"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : "Send Message"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">
                Our Locations
              </h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
                Visit us at one of our offices or air taxi terminals
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="overflow-hidden">
                <div className="h-48 bg-gray-300">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.557271584943!2d78.37739907507845!3d17.39266423850129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97ca3cca33f7%3A0x8353cb68a83ed8c9!2sHitech%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1718060284559!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Hyderabad (HQ)</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    AIRavata Tower, Cyber City,<br />
                    Hyderabad, Telangana 500081
                  </p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <div className="h-48 bg-gray-300">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5988297657604!2d72.94825387515435!3d19.031778682178825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c5f39a7d77ed%3A0x9ebbdeaea9ec24ae!2sNavi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1718060321057!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Mumbai</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    AIRavata Terminal, Bandra Kurla Complex,<br />
                    Mumbai, Maharashtra 400051
                  </p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <div className="h-48 bg-gray-300">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.01006602576!2d77.56620797496014!3d12.969378887379753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15c84ae3f8f7%3A0xfdc5e326e6f2bbfb!2sVidhana%20Soudha!5e0!3m2!1sen!2sin!4v1718060344431!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={false} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">Bangalore</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    AIRavata Innovation Center, Whitefield,<br />
                    Bangalore, Karnataka 560066
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
