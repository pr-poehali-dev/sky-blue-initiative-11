export function FloatingNavbar() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" })
    }
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-4">
      <div className="mx-auto max-w-7xl border border-white/10 bg-[#212226]/90 px-6 py-4 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection("home")} className="cursor-pointer">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full border-2 border-[#FE0CF6] flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-[#FE0CF6]" />
              </div>
              <span className="font-bebas text-xl tracking-widest text-white">L.A.B SPACE</span>
            </div>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {[
              { id: "promo", label: "АКЦИЯ" },
              { id: "features", label: "ПРЕИМУЩЕСТВА" },
              { id: "trainers", label: "ТРЕНЕРЫ" },
              { id: "reviews", label: "ОТЗЫВЫ" },
              { id: "contact", label: "КОНТАКТЫ" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-bebas text-sm tracking-widest text-gray-400 transition-colors hover:text-[#FE0CF6]"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="font-bebas tracking-widest bg-[#FE0CF6] text-white px-5 py-2 text-sm hover:bg-[#FE0CF6]/80 transition-colors pink-glow"
          >
            ЗАПИСАТЬСЯ
          </button>
        </div>
      </div>
    </nav>
  )
}
