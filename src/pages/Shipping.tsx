import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">
                Delivery
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
                Shipping <span className="italic">Information</span>
              </h1>
            </div>

            {/* Content */}
            <div className="space-y-8 font-body text-muted-foreground leading-relaxed">
              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Domestic Shipping</h2>
                <p>
                  We offer free shipping on all orders within India above ₹1,500. Standard delivery 
                  typically takes 5-7 business days. Express shipping options are available at checkout 
                  for an additional fee.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Processing Time</h2>
                <p>
                  Orders are processed within 1-2 business days. During peak seasons or promotional 
                  periods, processing may take slightly longer. You will receive a confirmation email 
                  once your order has been shipped.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Tracking Your Order</h2>
                <p>
                  Once your order ships, you will receive an email with tracking information. You can 
                  use this to monitor your package's journey. For any tracking inquiries, please contact 
                  our support team.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">International Shipping</h2>
                <p>
                  We currently ship to select international destinations. International shipping rates 
                  and delivery times vary by location. Customs duties and taxes may apply and are the 
                  responsibility of the recipient.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Packaging</h2>
                <p>
                  Every OBSQURA piece is carefully packaged in our signature gift box, ensuring your 
                  jewelry arrives in perfect condition. Each item is wrapped in protective material 
                  and placed in an elegant box suitable for gifting.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Returns & Exchanges</h2>
                <p>
                  We accept returns within 7 days of delivery for items in their original, unworn 
                  condition with all tags attached. Please contact us at obsqura.in@gmail.com to 
                  initiate a return or exchange.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl text-foreground mb-4">Contact Us</h2>
                <p>
                  For shipping inquiries or assistance with your order, please reach out to us at 
                  obsqura.in@gmail.com or call us at 9892082068.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shipping;
