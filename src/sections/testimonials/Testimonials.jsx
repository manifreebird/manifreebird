


// import SectionWrapper from "@/components/core/SectionWrapper";
// import Container from "@/components/layout/Container";
// import { Star } from "lucide-react";

// export default function Testimonials() {
//   const testimonials = [
//     {
//       name: "Rahul Sharma",
//       role: "Startup Founder",
//       message:
//         "Working with Vamshi was a game-changer. He delivered a high-quality product faster than expected.",
//     },
//     {
//       name: "Anjali Verma",
//       role: "Product Manager",
//       message:
//         "Super clean code, modern UI, and excellent communication. Highly recommended for serious projects.",
//     },
//     {
//       name: "David Lee",
//       role: "SaaS Owner",
//       message:
//         "He understands business needs, not just code. The system he built increased our conversions significantly.",
//     },
//   ];

//   return (
//     <SectionWrapper>
//       <Container>
//         <div className="max-w-6xl mx-auto">

//           {/* Heading */}
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
//               What Clients Say
//             </h2>
//             <p className="text-muted-foreground mt-3">
//               Real feedback from people I’ve worked with
//             </p>
//           </div>

//           {/* Testimonials Grid */}
//           <div className="grid md:grid-cols-3 gap-6">
//             {testimonials.map((item, index) => (
//               <div
//                 key={index}
//                 className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition"
//               >
                
//                 {/* Stars */}
//                 <div className="flex gap-1 mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="w-4 h-4 fill-white" />
//                   ))}
//                 </div>

//                 {/* Message */}
//                 <p className="text-muted-foreground text-sm leading-relaxed mb-6">
//                   “{item.message}”
//                 </p>

//                 {/* User */}
//                 <div>
//                   <p className="font-medium">{item.name}</p>
//                   <p className="text-xs text-muted-foreground">
//                     {item.role}
//                   </p>
//                 </div>

//               </div>
//             ))}
//           </div>

//         </div>
//       </Container>
//     </SectionWrapper>
//   );
// }



import SectionWrapper from "@/components/core/SectionWrapper";
import Container from "@/components/layout/Container";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Karthik Reddy",
      role: "Engineering Student",
      message:
        "Before this workshop, AI felt complicated. Mani sir simplified everything. With Vamshi’s guidance, I built my first AI agent in just a few hours.",
    },
    {
      name: "Sneha Patel",
      role: "CSE Student",
      message:
        "This wasn’t just theory. We actually built real projects. I now understand how AI works and how to use it to create something useful.",
    },
    {
      name: "Arjun Kumar",
      role: "Final Year Student",
      message:
        "The way concepts were broken down was amazing. I went from zero knowledge to building a working demo AI agent confidently.",
    },
    {
      name: "Meghana Rao",
      role: "Engineering Student",
      message:
        "Hands-on learning made all the difference. This workshop gave me clarity and confidence to explore AI seriously.",
    },
    {
      name: "Rahul Verma",
      role: "Student Developer",
      message:
        "I’ve attended many sessions before, but this was different. Practical, clear, and impactful. I actually built something on my own.",
    },
    {
      name: "Sai Teja",
      role: "B.Tech Student",
      message:
        "Mani sir’s teaching + Vamshi’s support = perfect combo. I finally understood how to build with AI instead of just watching tutorials.",
    },
  ];

  return (
    <SectionWrapper>
      <Container>
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              What Students Say
            </h2>
            <p className="text-muted-foreground mt-3">
              Real feedback from students who built with AI
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition"
              >
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-white" />
                  ))}
                </div>

                {/* Message */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  “{item.message}”
                </p>

                {/* Proof */}
                <p className="text-xs text-green-400 mb-4">
                  Built: AI Agent Demo
                </p>

                {/* User */}
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.role}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </Container>
    </SectionWrapper>
  );
}