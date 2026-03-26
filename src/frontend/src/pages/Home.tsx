import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Camera,
  CheckCircle,
  CreditCard,
  FileText,
  Laptop,
  Palette,
  Phone,
  Printer,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Printer,
    title: "Xerox (Black & White / Color)",
    description:
      "High-speed black & white and color Xerox printing for documents, forms, and certificates at affordable rates.",
  },
  {
    icon: Palette,
    title: "Lamination",
    description:
      "Professional lamination services to protect your important documents and photos.",
  },
  {
    icon: CreditCard,
    title: "Aadhaar Print & Update",
    description:
      "Aadhaar card printing, lamination, and update assistance done quickly and accurately.",
  },
  {
    icon: FileText,
    title: "PAN Card Apply",
    description:
      "Apply for new PAN card or make corrections with expert assistance.",
  },
  {
    icon: Laptop,
    title: "Online Applications",
    description:
      "Expert help with Jobs, Scholarships, and Government Certificates online applications.",
  },
  {
    icon: Camera,
    title: "Photo Printing",
    description:
      "Professional photo prints in all sizes — passport, ID, and custom prints.",
  },
];

const whyUs = [
  "Fast & efficient service — get your work done quickly",
  "Affordable prices — student-friendly rates for every service",
  "Trusted by thousands of students and job seekers",
];

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('/assets/generated/xerox-shop-bg.dim_1600x900.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 container mx-auto px-4 max-w-6xl py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white mb-6">
              Internet & Xerox Shop
            </span>
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-tight mb-4">
              AV Online Services
            </h1>
            <p className="text-xl text-blue-200 font-semibold mb-3">
              All Xerox &amp; Online Services Available Here
            </p>
            <p className="text-base text-white/80 max-w-2xl mx-auto mb-10 font-medium">
              మీకు కావలసిన అన్ని ఆన్‌లైన్ సేవలు ఒకే చోట లభిస్తాయి
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
                data-ocid="hero.primary_button"
              >
                <Link to="/services">
                  Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold"
                data-ocid="hero.secondary_button"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>

          {/* Quick Phone */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 flex items-center justify-center gap-2 text-white/70"
          >
            <Phone className="h-4 w-4" />
            <a
              href="tel:9490337907"
              className="text-white font-semibold hover:text-blue-200 transition-colors"
            >
              9490337907
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">
              What We Offer
            </span>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
              Our Services
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Everything you need — printing, online applications, and more —
              all under one roof.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card
                  className="h-full border border-border shadow-card hover:shadow-md transition-shadow"
                  data-ocid={`services.item.${i + 1}`}
                >
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5"
              data-ocid="services.secondary_button"
            >
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">
                Why Us
              </span>
              <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl mb-8">
                Why Choose AV Online Services?
              </h2>
              <ul className="space-y-5">
                {whyUs.map((text) => (
                  <li key={text} className="flex items-start gap-4">
                    <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                    <p className="text-foreground font-medium">{text}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  asChild
                  className="bg-primary hover:bg-primary/90 text-white"
                  data-ocid="why.primary_button"
                >
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="/assets/generated/xerox-shop-bg.dim_1600x900.jpg"
                alt="AV Online Services shop interior"
                className="w-full h-72 object-cover lg:h-80"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl mb-4">
            Ready to get started?
          </h2>
          <p className="text-white/80 mb-8">
            Visit us today or call us for any assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-semibold"
              data-ocid="cta.primary_button"
            >
              <a href="tel:9490337907">
                <Phone className="mr-2 h-4 w-4" /> Call 9490337907
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              data-ocid="cta.secondary_button"
            >
              <a
                href="https://wa.me/919490337907"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
