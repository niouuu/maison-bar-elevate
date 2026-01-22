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
import { motion } from "framer-motion";
import contactImage from "@/assets/Maison_du_Bar_0079.jpg";

const Contact = () => {
  const [eventType, setEventType] = useState("");
  const [packagePreference, setPackagePreference] = useState("");
  const [heardFrom, setHeardFrom] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [checkboxError, setCheckboxError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!agreeToTerms) {
      e.preventDefault();
      setCheckboxError("Please agree to the Privacy Policy before submitting.");
      return;
    }
    setCheckboxError("");
    // Form will submit natively to Formspree
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 bg-foreground text-background">
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
            <p className="font-sans text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Ready to bring luxury bar service to your event? Let's start planning
              your perfect experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Split Layout */}
      <section className="py-16 sm:py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:pr-12"
            >
              <div className="bg-background p-8 border-2 border-border rounded-lg lg:rounded-r-none">
                <h2 className="font-chamberi text-3xl font-bold mb-6 text-foreground">
                  Send Us a Message
                </h2>
                <form 
                  action="https://formspree.io/f/xnnebzno" 
                  method="POST" 
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Hidden inputs for select values */}
                  <input type="hidden" name="eventType" value={eventType} />
                  <input type="hidden" name="packagePreference" value={packagePreference} />
                  <input type="hidden" name="heardFrom" value={heardFrom} />
                  <input type="hidden" name="agreeToTerms" value={agreeToTerms ? "yes" : "no"} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="font-sans text-foreground">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className="mt-2 border-2 border-border focus:border-foreground"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="font-sans text-foreground">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-2 border-2 border-border focus:border-foreground"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="font-sans text-foreground">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="mt-2 border-2 border-border focus:border-foreground"
                      />
                    </div>
                    <div>
                      <Label htmlFor="eventType" className="font-sans text-foreground">Event Type *</Label>
                      <Select
                        value={eventType}
                        onValueChange={(value) => setEventType(value)}
                        required
                      >
                        <SelectTrigger className="mt-2 border-2 border-border focus:border-foreground">
                          <SelectValue placeholder="Select event type" />
                        </SelectTrigger>
                        <SelectContent className="bg-background border-2 border-foreground z-50">
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
                      <Label htmlFor="eventDate" className="font-sans text-foreground">Event Date</Label>
                      <Input
                        id="eventDate"
                        name="eventDate"
                        type="date"
                        className="mt-2 border-2 border-border focus:border-foreground"
                      />
                    </div>
                    <div>
                      <Label htmlFor="guests" className="font-sans text-foreground">Number of Guests</Label>
                      <Input
                        id="guests"
                        name="guests"
                        type="number"
                        placeholder="Approximate number"
                        className="mt-2 border-2 border-border focus:border-foreground"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="packagePreference" className="font-sans text-foreground">Package Preference</Label>
                      <Select
                        value={packagePreference}
                        onValueChange={(value) => setPackagePreference(value)}
                      >
                        <SelectTrigger className="mt-2 border-2 border-border focus:border-foreground">
                          <SelectValue placeholder="Select package" />
                        </SelectTrigger>
                        <SelectContent className="bg-background border-2 border-foreground z-50">
                          <SelectItem value="standard">Standard</SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                          <SelectItem value="premium">Premium</SelectItem>
                          <SelectItem value="ultra-premium">Ultra Premium</SelectItem>
                          <SelectItem value="custom">Custom Package</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="heardFrom" className="font-sans text-foreground">How did you hear about us?</Label>
                      <Select
                        value={heardFrom}
                        onValueChange={(value) => setHeardFrom(value)}
                      >
                        <SelectTrigger className="mt-2 border-2 border-border focus:border-foreground">
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent className="bg-background border-2 border-foreground z-50">
                          <SelectItem value="instagram">Instagram</SelectItem>
                          <SelectItem value="google">Google Search</SelectItem>
                          <SelectItem value="referral">Friend/Family Referral</SelectItem>
                          <SelectItem value="event-planner">Event Planner</SelectItem>
                          <SelectItem value="previous-event">Saw at Previous Event</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-sans text-foreground">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your event and any specific requirements..."
                      className="mt-2 border-2 border-border focus:border-foreground"
                    />
                  </div>

                  {/* GDPR Consent Checkbox */}
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="agreeToTerms"
                        checked={agreeToTerms}
                        onCheckedChange={(checked) => {
                          setAgreeToTerms(checked === true);
                          if (checked) setCheckboxError("");
                        }}
                        className="mt-1"
                      />
                      <Label
                        htmlFor="agreeToTerms"
                        className="font-sans text-sm text-foreground leading-relaxed cursor-pointer"
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
                      <p className="text-sm text-destructive font-sans ml-7">
                        {checkboxError}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full font-sans font-medium text-base py-6 bg-foreground text-background hover:bg-background hover:text-foreground border-2 border-foreground transition-all duration-300"
                  >
                    Send Inquiry
                  </Button>
                </form>
              </div>

              {/* Contact Information - Below form on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 lg:hidden"
              >
                <div className="bg-background p-8 border-2 border-border rounded-lg">
                  <h2 className="font-chamberi text-2xl font-bold mb-6 text-foreground">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Mail className="text-foreground flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-sans font-semibold text-foreground text-sm">Email</p>
                        <a
                          href="mailto:info@maisondubar.com"
                          className="font-sans text-muted-foreground hover:text-foreground transition-colors text-sm"
                        >
                          info@maisondubar.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone className="text-foreground flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-sans font-semibold text-foreground text-sm">Phone</p>
                        <a
                          href="tel:6973291777"
                          className="font-sans text-muted-foreground hover:text-foreground transition-colors text-sm block"
                        >
                          697 329 1777
                        </a>
                        <a
                          href="tel:6944199717"
                          className="font-sans text-muted-foreground hover:text-foreground transition-colors text-sm block"
                        >
                          694 419 9717
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <MapPin className="text-foreground flex-shrink-0 mt-1" size={20} />
                      <div>
                        <p className="font-sans font-semibold text-foreground text-sm">Service Area</p>
                        <p className="font-sans text-muted-foreground text-sm">
                          Serving all regions of Greece
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right side - Image and Contact Info (Desktop) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden lg:flex flex-col"
            >
              {/* Full-height bar image */}
              <div className="relative flex-grow rounded-r-lg overflow-hidden">
                <img
                  src={contactImage}
                  alt="Maison du Bar luxury bar setup"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Contact info overlay on image */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="font-chamberi text-2xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail className="flex-shrink-0" size={18} />
                      <a href="mailto:info@maisondubar.com" className="font-sans text-sm hover:underline">
                        info@maisondubar.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="flex-shrink-0" size={18} />
                      <div className="font-sans text-sm">
                        <a href="tel:6973291777" className="hover:underline">697 329 1777</a>
                        <span className="mx-2">•</span>
                        <a href="tel:6944199717" className="hover:underline">694 419 9717</a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="flex-shrink-0" size={18} />
                      <span className="font-sans text-sm">Serving all regions of Greece</span>
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
