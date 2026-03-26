import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Camera,
  CreditCard,
  FileText,
  Laptop,
  Palette,
  Printer,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Printer,
    title: "Xerox (Black & White / Color)",
    description:
      "High-speed black & white and color Xerox/printing for documents, forms, certificates, and more. A4, A3, and legal sizes available.",
    pricing: "B&W from ₹2/page • Color from ₹10/page",
    tags: ["Black & White", "Color", "A4/A3"],
  },
  {
    icon: Palette,
    title: "Lamination",
    description:
      "Protect your documents with professional lamination. Available in A4, A3, credit-card, and custom sizes.",
    pricing: "From ₹15/sheet",
    tags: ["A4", "A3", "Custom Sizes"],
  },
  {
    icon: CreditCard,
    title: "Aadhaar Print & Update",
    description:
      "Get your Aadhaar card printed, laminated, and updated. Fast and accurate service.",
    pricing: "Aadhaar Print ₹30 • Update ₹100",
    tags: ["Aadhaar Print", "Update", "Lamination"],
  },
  {
    icon: Laptop,
    title: "PAN Card Apply",
    description:
      "Apply for a new PAN card or make corrections and updates with our expert assistance.",
    pricing: "PAN Application ₹200",
    tags: ["New PAN", "Corrections", "Updates"],
  },
  {
    icon: FileText,
    title: "Online Applications",
    description:
      "Expert assistance with Jobs, Scholarships, and Government Certificate applications online.",
    pricing: "Starting from ₹75/application",
    tags: ["Jobs", "Scholarships", "Certificates"],
  },
  {
    icon: Camera,
    title: "Photo Printing",
    description:
      "Professional quality photo prints for passport, ID, visa, and personal use in all standard sizes.",
    pricing: "Passport size 6 prints ₹60",
    tags: ["Passport Size", "ID Photo", "Custom Size"],
  },
];

export default function Services() {
  return (
    <main>
      {/* Page Hero */}
      <section className="bg-primary py-16 text-center">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-lg text-white/75 max-w-xl mx-auto">
              Comprehensive printing, online, and documentation services for
              everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Card
                  className="h-full border border-border shadow-card hover:shadow-md transition-all group"
                  data-ocid={`services.item.${i + 1}`}
                >
                  <CardContent className="p-7">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-5 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary border-0"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-primary border-t border-border pt-3">
                      {service.pricing}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
