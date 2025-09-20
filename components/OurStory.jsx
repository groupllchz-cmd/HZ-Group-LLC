export default function OurStory() {
  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-7xl items-center mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-6">
        
        {/* Left side */}
        <div>
          <p className="text-sm font-semibold text-[#001E80] uppercase tracking-wide">
            Our Story
          </p>
          <h2 className="mt-2 text-4xl  md:text-5xl font-bold text-[#535252] leading-tight">
            Bring intelligent automation <br />
            to your business with{" "}
            <span className="bg-gradient-to-r from-green-400 to-[#183ec2] bg-clip-text text-transparent">
              Enterprise AI agents
            </span>
          </h2>
        </div>
        <div className="text-gray-600 leading-relaxed">
          <p>
            We help organizations transform workflows with secure, scalable AI. 
            From multi-agent automation to knowledge assistants, our solutions 
            deliver measurable impact across operations and decision-making.
          </p>
          <p className="mt-4">
            Our mission is to provide enterprises with adaptive AI systems — 
            trustworthy, integrated, and designed for resilience. We empower 
            teams to innovate faster while maintaining control and compliance.
          </p>
        </div>
      </div>
    </section>
  );
}
