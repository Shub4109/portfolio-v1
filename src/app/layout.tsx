import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";

// Next.js infers the Metadata type from this export automatically
export const metadata = {
  title: "Shubham Nagula — Senior Data Engineering Consultant",
  description:
    "Helping startups and enterprises design modern cloud-native data platforms using Azure, Databricks, Spark, Kafka, Airflow, Python and AI automation.",
  keywords: [
    "Data Engineering",
    "Azure",
    "Databricks",
    "Kafka",
    "Spark",
    "Data Platform",
    "Consultant",
  ],
  authors: [{ name: "Shubham Nagula" }],
  openGraph: {
    title: "Shubham Nagula — Senior Data Engineering Consultant",
    description:
      "Building enterprise data platforms that scale. Azure · Databricks · AI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shubham Nagula — Senior Data Engineering Consultant",
    description: "Building enterprise data platforms that scale.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
