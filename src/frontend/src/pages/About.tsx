import { Card, CardContent } from "@/components/ui/card";
import { IndianRupee, ShieldCheck, Users } from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    description:
      "We deliver accurate, timely service every time. Students and job seekers can count on us for their most critical documents and applications.",
  },
  {
    icon: IndianRupee,
    title: "Affordability",
    description:
      "Transparent, student-friendly pricing with no hidden charges. We believe quality services should be accessible to everyone in the community.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We are part of this community. Our goal is to empower local residents, students, and job seekers with the tools and services they need.",
  },
];

export default function About() {
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
              About Us
            </h1>
            <p className="mt-4 text-lg text-white/75 max-w-xl mx-auto">
              Trusted by thousands of students and residents since our founding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-semibold text-accent uppercase tracking-widest">
                Our Story
              </span>
              <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  AV Online Services is a trusted internet and Xerox shop
                  serving the local community of Hyderabad. We started with a
                  simple mission: to provide fast, affordable, and high-quality
                  digital and printing services to everyone — especially
                  students and job seekers.
                </p>
                <p>
                  Over the years, we have helped thousands of customers with
                  Xerox printing, Aadhaar card services, PAN card applications,
                  scholarship forms, government job applications, and much more.
                  We understand how important these services are and take every
                  task seriously.
                </p>
                <p>
                  Our team is dedicated, friendly, and always ready to help.
                  Whether you need a single printout or complete assistance with
                  an online application, we are here for you.
                </p>
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
                src="/assets/generated/hero-internet-cafe.dim_1200x600.jpg"
                alt="AV Online Services"
                className="w-full h-80 object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-accent uppercase tracking-widest">
              Our Values
            </span>
            <h2 className="mt-2 text-3xl font-bold text-foreground md:text-4xl">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
              >
                <Card
                  className="h-full border border-border shadow-card text-center"
                  data-ocid={`about.item.${i + 1}`}
                >
                  <CardContent className="p-7">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="rounded-2xl bg-primary/5 border border-primary/20 p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Visit Our Shop
            </h2>
            <p className="text-muted-foreground mb-2">
              Near Bus Stand, Hyderabad, Telangana, India
            </p>
            <p className="text-muted-foreground mb-6">
              Mon – Sat: 9:00 AM – 8:00 PM &nbsp;|&nbsp; Sun: 10:00 AM – 5:00 PM
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:9701880499"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white hover:bg-primary/90 transition-colors"
                data-ocid="about.primary_button"
              >
                Call Us: 9701880499
              </a>
              <a
                href="https://wa.me/919701880499"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
                data-ocid="about.secondary_button"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
