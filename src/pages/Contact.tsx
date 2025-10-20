import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guests: "",
    message: "",
    agreeToTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checkboxError, setCheckboxError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate consent checkbox
      if (!formData.agreeToTerms) {
        setCheckboxError("Please agree to the Privacy Policy before submitting.");
        setIsSubmitting(false);
        return;
      }
      setCheckboxError("");

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast.error("Please enter a valid email address");
        setIsSubmitting(false);
        return;
      }

      // Call the edge function
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) {
        console.error("Error sending email:", error);
        
        const errorMessage = error.message || "Failed to send message";
        
        toast.error(
          `${errorMessage}. Please try emailing us directly at info@maisondubar.com or calling +30 697 329 1777`,
          { duration: 6000 }
        );
        
        setIsSubmitting(false);
        return;
      }

      console.log("Email sent successfully:", data);
      toast.success("Thank you! We'll get back to you shortly.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        guests: "",
        message: "",
        agreeToTerms: false,
      });
      setCheckboxError("");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-chamberi text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8">
              Get In Touch
            </h1>
            <p className="font-sans text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              Ready to bring luxury bar service to your event? Let's start planning
              your perfect experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white p-8 border-2 border-gray-200">
                <h2 className="font-chamberi text-3xl font-bold mb-6 text-black">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="font-sans text-black">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-2 border-2 border-gray-300 focus:border-black"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="font-sans text-black">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-2 border-2 border-gray-300 focus:border-black"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="font-sans text-black">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="mt-2 border-2 border-gray-300 focus:border-black"
                      />
                    </div>
                    <div>
                      <Label htmlFor="eventType" className="font-sans text-black">Event Type *</Label>
                      <Select
                        value={formData.eventType}
                        onValueChange={(value) =>
                          setFormData({ ...formData, eventType: value })
                        }
                        required
                      >
                        <SelectTrigger className="mt-2 border-2 border-gray-300 focus:border-black">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-2 border-black z-50">
                          <SelectItem value="wedding">Wedding</SelectItem>
                          <SelectItem value="corporate">Corporate Event</SelectItem>
                          <SelectItem value="birthday">Birthday Party</SelectItem>
                          <SelectItem value="private">Private Celebration</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="eventDate" className="font-sans text-black">Event Date</Label>
                      <Input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="mt-2 border-2 border-gray-300 focus:border-black"
                      />
                    </div>
                    <div>
                      <Label htmlFor="guests" className="font-sans text-black">Number of Guests</Label>
                      <Input
                        id="guests"
                        name="guests"
                        type="number"
                        value={formData.guests}
                        onChange={handleChange}
                        placeholder="Approximate number"
                        className="mt-2 border-2 border-gray-300 focus:border-black"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-sans text-black">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your event and any specific requirements..."
                      className="mt-2 border-2 border-gray-300 focus:border-black"
                    />
                  </div>

                  {/* GDPR Consent Checkbox */}
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => {
                          setFormData({ ...formData, agreeToTerms: checked === true });
                          if (checked) setCheckboxError("");
                        }}
                        className="mt-1"
                      />
                      <Label
                        htmlFor="agreeToTerms"
                        className="font-sans text-sm text-black leading-relaxed cursor-pointer"
                      >
                        I agree to the{" "}
                        <a
                          href="/privacy-policy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold underline hover:opacity-70"
                        >
                          Privacy Policy
                        </a>{" "}
                        and{" "}
                        <a
                          href="/terms-and-conditions"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold underline hover:opacity-70"
                        >
                          Terms of Service
                        </a>
                        .
                      </Label>
                    </div>
                    
                    {checkboxError && (
                      <p className="text-sm text-red-600 font-sans ml-7">
                        {checkboxError}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full font-sans font-medium text-base py-6 bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Inquiry"}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white p-8 border-2 border-gray-200">
                <h2 className="font-chamberi text-2xl font-bold mb-6 text-black">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Mail className="text-black flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-sans font-semibold text-black text-sm">Email</p>
                      <a
                        href="mailto:maisondubar25@gmail.com"
                        className="font-sans text-gray-600 hover:text-black transition-colors text-sm"
                      >
                        maisondubar25@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="text-black flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-sans font-semibold text-black text-sm">Phone</p>
                      <a
                        href="tel:6973291777"
                        className="font-sans text-gray-600 hover:text-black transition-colors text-sm block"
                      >
                        697 329 1777
                      </a>
                      <a
                        href="tel:6944199717"
                        className="font-sans text-gray-600 hover:text-black transition-colors text-sm block"
                      >
                        694 419 9717
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="text-black flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-sans font-semibold text-black text-sm">Service Area</p>
                      <p className="font-sans text-gray-600 text-sm">
                        Serving all regions of Greece
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
