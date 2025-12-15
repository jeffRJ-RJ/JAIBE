import { Button } from "../components/ui/button";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import florCacau from "../assets/flordecacau.png";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-card relative overflow-hidden texture-noise">
      {/* Decorative Element */}
      <img
        src={florCacau}
        alt=""
        className="absolute -right-12 top-20 w-36 opacity-30 pointer-events-none rotate-12"
        aria-hidden="true"
      />
      
      {/* Accent line */}
      <div className="absolute bottom-0 right-1/4 w-px h-40 bg-gradient-to-t from-primary to-transparent" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-primary" />
              <span className="font-display text-primary text-lg tracking-[0.3em] uppercase">
                Contato
              </span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-6 leading-none">
              VAMOS CRIAR
              <br />
              <span className="text-primary">JUNTOS?</span>
            </h2>
            <p className="font-body text-foreground/70 mb-10 max-w-md text-base">
              Entre em contato pra agendar sua sessão ou conhecer minhas obras. 
              Cada projeto começa com uma conversa.
            </p>

            {/* Contact Info - street style */}
            <div className="space-y-4">
              <a
                href="mailto:contato@jaire.art"
                className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group p-3 border border-transparent hover:border-border"
              >
                <div className="w-10 h-10 bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-display text-xs text-muted-foreground tracking-wider">EMAIL</p>
                  <p className="font-body text-sm">contato@jaire.art</p>
                </div>
              </a>

              <a
                href="tel:+5511999999999"
                className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group p-3 border border-transparent hover:border-border"
              >
                <div className="w-10 h-10 bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-display text-xs text-muted-foreground tracking-wider">WHATSAPP</p>
                  <p className="font-body text-sm">(11) 99999-9999</p>
                </div>
              </a>

              <a
                href="https://instagram.com/jaire.tattoo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground/80 hover:text-primary transition-colors group p-3 border border-transparent hover:border-border"
              >
                <div className="w-10 h-10 bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Instagram size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-display text-xs text-muted-foreground tracking-wider">INSTAGRAM</p>
                  <p className="font-body text-sm">@jaire.tattoo</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-foreground/80 p-3">
                <div className="w-10 h-10 bg-secondary flex items-center justify-center">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <p className="font-display text-xs text-muted-foreground tracking-wider">ESTÚDIO</p>
                  <p className="font-body text-sm">São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-background p-8 border-2 border-border">
            <h3 className="font-display text-2xl text-foreground mb-6 tracking-wider">
              SOLICITE UM ORÇAMENTO
            </h3>
            <form className="space-y-4">
              <div>
                <label className="font-display text-xs text-muted-foreground tracking-wider mb-2 block">
                  NOME
                </label>
                <input
                  type="text"
                  className="w-full bg-secondary border-2 border-border px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="font-display text-xs text-muted-foreground tracking-wider mb-2 block">
                  EMAIL
                </label>
                <input
                  type="email"
                  className="w-full bg-secondary border-2 border-border px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="font-display text-xs text-muted-foreground tracking-wider mb-2 block">
                  TIPO DE TRABALHO
                </label>
                <select className="w-full bg-secondary border-2 border-border px-4 py-3 font-body text-foreground focus:outline-none focus:border-primary transition-colors">
                  <option value="">Selecione</option>
                  <option value="tatuagem">Tatuagem</option>
                  <option value="arte">Arte Plástica</option>
                  <option value="ambos">Ambos</option>
                </select>
              </div>
              <div>
                <label className="font-display text-xs text-muted-foreground tracking-wider mb-2 block">
                  MENSAGEM
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-secondary border-2 border-border px-4 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Descreva sua ideia..."
                />
              </div>
              <Button variant="hero" size="xl" className="w-full mt-2">
                Enviar
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
