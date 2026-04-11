


import SectionWrapper from "@/components/core/SectionWrapper";
import Container from "@/components/layout/Container";

export default function TrustBar() {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  ];

  return (
    <SectionWrapper>
      <Container>
        <div className="max-w-6xl mx-auto">

          {/* Top Text */}
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground">
              Trusted by teams and founders worldwide
            </p>
          </div>

          {/* Logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-10 opacity-70">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="brand"
                className="h-6 md:h-8 object-contain grayscale hover:grayscale-0 transition"
              />
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div>
              <p className="text-2xl font-bold">50+</p>
              <p className="text-xs text-muted-foreground">
                Projects Delivered
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">20+</p>
              <p className="text-xs text-muted-foreground">
                Happy Clients
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">5★</p>
              <p className="text-xs text-muted-foreground">
                Average Rating
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold">2+</p>
              <p className="text-xs text-muted-foreground">
                Years Experience
              </p>
            </div>

          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}