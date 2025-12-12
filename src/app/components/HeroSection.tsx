import Image from "next/image";
import { Button } from "../components/ui/button";
import { ArrowDown } from "lucide-react";
// Certifique-se de que 'placa' aponta para a imagem já com fundo transparente (PNG)
import placa from "../assets/placa.png";

// Imagem decorativa usada atrás das palavras
import florDecorativa_1 from "../assets/flores_2.png";
import florDecorativa_2 from "../assets/flores.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background texture-noise">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.1] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--calendula) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--calendula) / 0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Accent lines */}
      <div className="absolute top-0 right-0 w-1 h-[60%] bg-primary/30 transform rotate-12 origin-top-right hidden md:block" />
      <div className="absolute bottom-0 left-0 w-1 h-[40%] bg-primary/20 transform -rotate-12 origin-bottom-left hidden md:block" />

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo / Placa */}
        <div
          className="mb-8 animate-fade-up flex justify-center perspective-1000"
          style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
        >
          <div className="relative group cursor-pointer">
            {/* Glow atrás da placa */}
            <div className="absolute inset-0 bg-primary/20 blur-[40px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <Image
              src={placa}
              alt="Jaibe Tattoo Logo"
              width={480}
              height={480}
              className="relative z-10 object-contain mx-auto 
                         drop-shadow-2xl 
                         transition-all duration-500 ease-out
                         hover:scale-105 hover:rotate-3 hover:drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]"
              priority
            />
          </div>
        </div>

        {/* Texto com imagens atrás das palavras */}
        <div
          className="mb-4 animate-fade-up"
          style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}
        >
          <p className="font-display text-xl md:text-2xl text-primary tracking-[0.4em] uppercase relative inline-flex flex-wrap justify-center gap-3">
            {/* Tatuadora + imagem atrás */}
            <span className="relative inline-flex items-center">
              <Image
                src={florDecorativa_1}
                alt=""
                width={110}
                height={110}
                aria-hidden
                className="absolute -left-10 top-6 -z-10 opacity-30 pointer-events-none select-none object-contain"
              />
              <span>Tatuadora</span>
            </span>

            <span>&</span>

            {/* Artista Plástica + imagem atrás */}
            <span className="relative inline-flex items-center">
              <Image
                src={florDecorativa_2}
                alt=""
                width={110}
                height={110}
                aria-hidden
                className="absolute -right-10 top-6 -z-10 opacity-30 pointer-events-none select-none object-contain"
              />
              <span>Artista Plástica</span>
            </span>
          </p>
        </div>

        <div
          className="flex items-center justify-center gap-4 my-6 animate-fade-up"
          style={{ animationDelay: "0.5s", opacity: 0, animationFillMode: "forwards" }}
        >
          <div className="w-12 md:w-20 h-1 bg-primary" />
          <div className="w-3 h-3 bg-primary rotate-45" />
          <div className="w-12 md:w-20 h-1 bg-primary" />
        </div>

        <p
          className="font-body text-foreground/80 max-w-lg mx-auto mb-10 text-base md:text-lg leading-relaxed animate-fade-up"
          style={{ animationDelay: "0.8s", opacity: 0, animationFillMode: "forwards" }}
        >
          Precisão nas linhas. Expressão na arte.
          <br />
          <span className="text-primary font-semibold">Cada tattoo é única.</span>
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: "1s", opacity: 0, animationFillMode: "forwards" }}
        >
          <Button variant="hero" size="xl">
            Agendar Sessão
          </Button>
          <Button variant="heroOutline" size="xl">
            Ver Portfólio
          </Button>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary hover:text-foreground transition-colors group"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-display text-xs tracking-widest opacity-60 group-hover:opacity-100">
            SCROLL
          </span>
          <ArrowDown size={24} className="animate-bounce" />
        </div>
      </a>
    </section>
  );
};

export default HeroSection;
