import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContact } from "@/hooks/useQueries";
import { CheckCircle, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { mutateAsync, isPending } = useSubmitContact();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await mutateAsync(form);
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-primary py-16 text-center">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-white/75">
              We're here to help. Reach out anytime.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-7">
                Fill in the form and we'll get back to you soon.
              </p>

              {submitted ? (
                <div
                  className="rounded-xl bg-green-50 border border-green-200 p-8 text-center"
                  data-ocid="contact.success_state"
                >
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-green-800 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-green-700">
                    Thank you for contacting us. We'll reach out to you shortly.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6 border-green-400 text-green-700 hover:bg-green-100"
                    onClick={() => setSubmitted(false)}
                    data-ocid="contact.secondary_button"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  data-ocid="contact.modal"
                >
                  <div>
                    <Label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      required
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, email: e.target.value }))
                      }
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Phone Number{" "}
                      <span className="text-muted-foreground text-xs">
                        (optional)
                      </span>
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Your phone number"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, phone: e.target.value }))
                      }
                      data-ocid="contact.input"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium"
                    >
                      Message <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      required
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                      data-ocid="contact.textarea"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    data-ocid="contact.submit_button"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />{" "}
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info + Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-8"
            >
              {/* Info Cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-xl bg-card border border-border p-5 shadow-card">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                      Phone
                    </p>
                    <a
                      href="tel:9490337907"
                      className="text-lg font-bold text-foreground hover:text-primary transition-colors"
                    >
                      9490337907
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-card border border-border p-5 shadow-card">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "#25D36620" }}
                  >
                    <MessageCircle
                      className="h-5 w-5"
                      style={{ color: "#25D366" }}
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/919490337907"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-bold text-foreground hover:text-primary transition-colors"
                      data-ocid="contact.link"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-card border border-border p-5 shadow-card">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                      Address
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      AV Online Services,
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      Sarojinidevi, Telangana
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      Phone: 9490337907
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl bg-card border border-border p-5 shadow-card">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:avonlineservices@gmail.com"
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                    >
                      avonlineservices@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed - Sarojinidevi, Telangana */}
              <div className="rounded-xl overflow-hidden border border-border shadow-card">
                <iframe
                  title="AV Online Services Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30456.52!2d78.4867!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a9f6c1d2b3d%3A0x1234567890abcdef!2sSarojini+Devi+Road%2C+Secunderabad%2C+Telangana!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
