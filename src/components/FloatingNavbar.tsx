export function FloatingNavbar() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
    }
  }

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50"
      style={{
        background: "rgba(12,5,22,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection("promo")} className="cursor-pointer">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-full border-2 border-[#FE0CF6] flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#FE0CF6]" style={{ boxShadow: "0 0 8px #FE0CF6" }} />
              </div>
              <span className="font-extrabold text-white text-xl tracking-wide">L.A.B SPACE</span>
            </div>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {[
              { id: "promo", label: "Пробная тренировка" },
              { id: "features", label: "Преимущества" },
              { id: "trainers", label: "Тренеры" },
              { id: "reviews", label: "Отзывы" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm text-white/60 transition-colors hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:+74954199754" className="hidden md:block text-white/55 text-sm hover:text-white transition-colors">
              +7 495 419-97-54
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-pink pink-glow px-5 py-2.5 text-sm font-semibold"
            >
              Записаться
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
