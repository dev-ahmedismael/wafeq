/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Navbar
    "src/components/navbar/navbar.component.html",
    "src/components/navbar/navbar.component.ts",

    // HOME
    // Header
    "src/components/home/header/header.component.html",
    "src/components/home/header/header.component.ts",

    // Testimonial
    "src/components/home/testimonial/testimonial.component.html",
    "src/components/home/testimonial/testimonial.component.ts",

    // Advantages
    "src/components/home/advantages/advantages.component.html",
    "src/components/home/advantages/advantages.component.ts",

    // Ebill
    "src/components/home/ebill/ebill.component.html",
    "src/components/home/ebill/ebill.component.ts",

    // Reports
    "src/components/home/reports/reports.component.html",
    "src/components/home/reports/reports.component.ts",

    // VAT
    "src/components/home/vat/vat.component.html",
    "src/components/home/vat/vat.component.ts",

    // Manage Team
    "src/components/home/manage-team/manage-team.component.html",
    "src/components/home/manage-team/manage-team.component.ts",

    // Save Time
    "src/components/home/save-time/save-time.component.html",
    "src/components/home/save-time/save-time.component.ts",

    // Testimonials
    "src/components/home/testimonials/testimonials.component.html",
    "src/components/home/testimonials/testimonials.component.ts",

    // Education
    "src/components/home/education/education.component.html",
    "src/components/home/education/education.component.ts",

    // Footer
    "src/components/footer/footer.component.html",
    "src/components/footer/footer.component.ts",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [],
};
