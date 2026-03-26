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
            <img
              src="https://cdn.poehali.dev/projects/5e9f89bc-6533-4f3c-a6b5-a3eb69a6cd19/bucket/b19436f1-192d-44ce-8c75-8fe7f389d985.png"
              alt="L.A.B SPACE"
              className="h-10 w-auto object-contain"
            />
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
                className="font-bebas tracking-widest text-base text-white/60 transition-colors hover:text-white"
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
              className="btn-pink pink-glow px-6 py-2.5 font-bebas tracking-widest text-base"
            >
              Записаться
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}