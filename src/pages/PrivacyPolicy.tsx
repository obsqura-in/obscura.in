import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
                Privacy <span className="italic">Policy</span>
              </h1>
            </div>

            {/* Content */}
            <div className="space-y-8 font-body text-muted-foreground leading-relaxed">
              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Information We Collect</h2>
                <p>
                  At OBSQURA, we collect information you provide directly to us, such as when you create an account, 
                  make a purchase, subscribe to our newsletter, or contact us for support. This may include your name, 
                  email address, postal address, phone number, and payment information.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">How We Use Your Information</h2>
                <p>
                  We use the information we collect to process transactions, send you order confirmations, 
                  respond to your comments and questions, send you marketing communications (with your consent), 
                  and improve our services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to outside parties 
                  except as necessary to provide our services (such as shipping partners and payment processors). 
                  We may also release information when required by law.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Data Security</h2>
                <p>
                  We implement a variety of security measures to maintain the safety of your personal information. 
                  Your personal information is contained behind secured networks and is only accessible by a 
                  limited number of persons who have special access rights.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Cookies</h2>
                <p>
                  We use cookies to enhance your experience, gather general visitor information, and track visits 
                  to our website. You can choose to have your computer warn you each time a cookie is being sent, 
                  or you can choose to turn off all cookies via your browser settings.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Your Rights</h2>
                <p>
                  You have the right to access, correct, or delete your personal information. You may also opt 
                  out of marketing communications at any time. Contact us at obsqura.in@gmail.com for any 
                  privacy-related requests.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at obsqura.in@gmail.com.
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

export default PrivacyPolicy;
