const MeetPopSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 tracking-tight">
          MEET POP!<span className="text-pop-orange">_</span>OS
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Video placeholder with play button */}
          <div className="relative bg-space-dark/10 rounded-2xl overflow-hidden aspect-video shadow-space">
            <div className="absolute inset-0 bg-gradient-cosmic opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-pop-teal rounded-full flex items-center justify-center shadow-glow cursor-pointer hover:scale-110 transition-transform">
                <div className="w-0 h-0 border-l-[20px] border-l-white border-y-[12px] border-y-transparent ml-1"></div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-white font-semibold">
              Workflow Customization
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetPopSection;