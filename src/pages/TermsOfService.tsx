import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
                Legal
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
                Terms of <span className="italic">Service</span>
              </h1>
            </div>

            {/* Content */}
            <div className="space-y-8 font-body text-muted-foreground leading-relaxed">
              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Acceptance of Terms</h2>
                <p>
                  By accessing and using the OBSQURA website and services, you accept and agree to be bound 
                  by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Products and Pricing</h2>
                <p>
                  All products are subject to availability. We reserve the right to discontinue any product 
                  at any time. Prices are subject to change without notice. We strive to display accurate 
                  colors in product images, but actual colors may vary slightly due to monitor settings.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Orders and Payment</h2>
                <p>
                  By placing an order, you warrant that you are legally capable of entering into binding contracts. 
                  All orders are subject to acceptance and availability. We reserve the right to refuse or cancel 
                  any order for any reason, including suspected fraudulent activity.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Intellectual Property</h2>
                <p>
                  All content on this website, including text, graphics, logos, images, and software, is the 
                  property of OBSQURA and is protected by copyright and intellectual property laws. You may not 
                  reproduce, distribute, or use any content without our prior written consent.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">User Accounts</h2>
                <p>
                  You are responsible for maintaining the confidentiality of your account credentials and for 
                  all activities that occur under your account. You agree to notify us immediately of any 
                  unauthorized use of your account.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Limitation of Liability</h2>
                <p>
                  OBSQURA shall not be liable for any indirect, incidental, special, or consequential damages 
                  arising from your use of our services or products. Our total liability shall not exceed the 
                  amount paid for the product in question.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Governing Law</h2>
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the laws of India. 
                  Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Contact</h2>
                <p>
                  For any questions regarding these Terms of Service, please contact us at obsqura.in@gmail.com.
                </p>
              </section>

              <p className="text-sm text-muted-foreground/70 pt-8 border-t border-border">
                Last updated: January 2025
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
