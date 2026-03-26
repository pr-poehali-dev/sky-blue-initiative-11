import { FloatingNavbar } from "@/components/FloatingNavbar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Icon from "@/components/ui/icon"

const HERO_BG = "https://cdn.poehali.dev/projects/5e9f89bc-6533-4f3c-a6b5-a3eb69a6cd19/files/f2b56676-97f9-44df-b7e3-9dea160399eb.jpg"
const STUDIO_IMG = "https://cdn.poehali.dev/projects/5e9f89bc-6533-4f3c-a6b5-a3eb69a6cd19/files/59cac769-59d4-405a-b0ef-ca640764b1b8.jpg"
const TRAINER_F = "https://cdn.poehali.dev/projects/5e9f89bc-6533-4f3c-a6b5-a3eb69a6cd19/files/79aaf5d6-94c0-4aae-86c8-77074630349e.jpg"
const TRAINER_M = "https://cdn.poehali.dev/projects/5e9f89bc-6533-4f3c-a6b5-a3eb69a6cd19/files/be2f4002-3db8-45ae-88ce-67c4c5dc55fe.jpg"

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export default function Index() {
  return (
    <main style={{ background: "#212226" }} className="overflow-x-hidden">
      <FloatingNavbar />

      {/* ═══ HERO ═══ */}
      <section id="promo" className="relative min-h-screen flex items-center justify-center pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        {/* Overlay как на реальном сайте — тёмно-фиолетовый с небольшим затемнением */}
        <div className="absolute inset-0" style={{ background: "rgba(33,20,60,0.62)" }} />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <h1
            className="text-white leading-none mb-5"
            style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3.5rem, 10vw, 7rem)", letterSpacing: "0.02em" }}
          >
            СЕТЬ СТУДИЙ РАСТЯЖКИ<br />И ФИТНЕСА В МОСКВЕ
          </h1>

          <p className="text-white/80 text-base md:text-lg max-w-md mx-auto mb-8 leading-relaxed">
            Погрузитесь в мир движения, энергии<br />
            и уникальных тренировок L.A.B SPACE.
          </p>

          {/* Price block — точно как на сайте */}
          <div className="flex items-baseline justify-center gap-3 mb-8">
            <span className="text-white/50 text-base">от</span>
            <div className="flex flex-col items-end leading-none">
              <span className="text-white/50 text-base line-through">2100Р</span>
            </div>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3.5rem, 10vw, 5.5rem)", color: "#FE0CF6", lineHeight: 1, textShadow: "0 0 30px rgba(254,12,246,0.5)" }}>
              500 ₽
            </span>
            <span className="text-white text-lg leading-tight text-left">
              Первая<br />тренировка
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("contact")}
              className="btn-pink pink-glow px-10 py-4 text-lg"
            >
              Записаться на тренировку
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="btn-outline-white px-10 py-4 text-lg"
            >
              Купить абонемент
            </button>
          </div>
        </div>
      </section>

      {/* ═══ АКЦИЯ-БАННЕР ═══ */}
      <div style={{ background: "#2e1060" }} className="py-10 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <p className="text-[#FE0CF6] text-sm font-semibold uppercase tracking-widest mb-1">Акция</p>
            <h2
              className="text-white"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", letterSpacing: "0.02em" }}
            >
              При покупке абонемента на 12 месяцев —{" "}
              <span style={{ color: "#FE0CF6" }}>3 месяца в подарок</span>
            </h2>
          </div>
          <button
            onClick={() => scrollTo("contact")}
            className="btn-pink pink-glow px-10 py-4 text-base flex-shrink-0"
          >
            Записаться
          </button>
        </div>
      </div>

      {/* ═══ TICKER ═══ */}
      <div style={{ background: "#FE0CF6" }} className="overflow-hidden py-3">
        <div className="flex animate-scroll-left whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="text-white font-semibold tracking-widest text-sm mx-8">
              L.A.B SPACE · СТУДИЯ РАСТЯЖКИ И ФИТНЕСА · 3 МЕСЯЦА В ПОДАРОК · ЗАПИСАТЬСЯ ·
            </span>
          ))}
        </div>
      </div>

      {/* ═══ ПРЕИМУЩЕСТВА ═══ */}
      <section id="features" style={{ background: "#212226" }} className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#FE0CF6] text-sm font-semibold uppercase tracking-widest mb-3">Почему выбирают нас</p>
            <h2
              className="text-white"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "0.02em" }}
            >
              Преимущества студии
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "Dumbbell", title: "Профессиональное оборудование", desc: "Тренажёры премиум-класса для максимального результата" },
              { icon: "Users", title: "Опытные тренеры", desc: "Персональный подход и программы под ваши цели" },
              { icon: "Clock", title: "Удобное расписание", desc: "Тренировки утром, днём и вечером — 7 дней в неделю" },
              { icon: "Star", title: "Небольшие группы", desc: "До 10 человек — максимум внимания каждому" },
              { icon: "Zap", title: "Пробное занятие", desc: "Первая тренировка всего за 500 ₽" },
              { icon: "Shield", title: "Комфортная атмосфера", desc: "Современная раздевалка, душ и зона отдыха" },
            ].map((item) => (
              <div
                key={item.title}
                className="p-7 border border-white/8 hover:border-[#FE0CF6]/50 transition-all group"
                style={{ background: "#2a2b30", borderRadius: "12px" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ background: "rgba(254,12,246,0.15)" }}
                >
                  <Icon name={item.icon as "Star"} size={22} className="text-[#FE0CF6]" />
                </div>
                <h3
                  className="text-white mb-2"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.2rem", letterSpacing: "0.04em" }}
                >
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ФОТО СТУДИИ ═══ */}
      <section style={{ background: "#1c1d21" }} className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative overflow-hidden h-80 md:h-96" style={{ borderRadius: "12px" }}>
            <img src={STUDIO_IMG} alt="Студия" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(33,34,38,0.7) 0%, transparent 55%)", borderRadius: "12px" }} />
            <p
              className="absolute bottom-5 left-6 text-white"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.5rem", letterSpacing: "0.04em" }}
            >
              Наша студия
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden h-44" style={{ borderRadius: "12px" }}>
              <img src={TRAINER_F} alt="Тренер" className="w-full h-full object-cover object-top" />
            </div>
            <div className="overflow-hidden h-44" style={{ borderRadius: "12px" }}>
              <img src={TRAINER_M} alt="Тренер" className="w-full h-full object-cover object-top" />
            </div>
            <div
              className="col-span-2 flex items-center justify-center h-36 border border-[#FE0CF6]/20"
              style={{ background: "rgba(254,12,246,0.07)", borderRadius: "12px" }}
            >
              <div className="text-center">
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3rem", color: "#FE0CF6", letterSpacing: "0.02em", lineHeight: 1 }}>
                  +3 месяца
                </p>
                <p className="text-white/50 text-sm mt-1">при покупке абонемента на год</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ТРЕНЕРЫ ═══ */}
      <section id="trainers" style={{ background: "#212226" }} className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#FE0CF6] text-sm font-semibold uppercase tracking-widest mb-3">Команда</p>
            <h2
              className="text-white"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "0.02em" }}
            >
              Наши тренеры
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { img: TRAINER_F, name: "Анна Соколова", role: "Персональный тренер · 7 лет опыта", spec: "Функциональный тренинг, похудение, растяжка" },
              { img: TRAINER_M, name: "Максим Ковалев", role: "Силовой тренер · 5 лет опыта", spec: "Силовые тренировки, набор массы, кроссфит" },
            ].map((t) => (
              <div key={t.name} className="relative overflow-hidden group" style={{ borderRadius: "12px" }}>
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-[460px] object-cover object-top transition-transform duration-500 group-hover:scale-104"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(33,34,38,0.95) 0%, rgba(33,34,38,0.1) 55%, transparent 100%)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3
                    className="text-white mb-1"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem", letterSpacing: "0.04em" }}
                  >
                    {t.name}
                  </h3>
                  <p className="text-[#FE0CF6] text-sm font-semibold mb-1">{t.role}</p>
                  <p className="text-white/50 text-sm">{t.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ОТЗЫВЫ ═══ */}
      <section id="reviews" style={{ background: "#1c1d21" }} className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#FE0CF6] text-sm font-semibold uppercase tracking-widest mb-3">Клиенты</p>
            <h2
              className="text-white"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "0.02em" }}
            >
              Отзывы
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { name: "Мария К.", role: "Клиент 2 года", text: "Записалась на пробное занятие и осталась навсегда. За 3 месяца сбросила 8 кг — лучшая инвестиция!" },
              { name: "Дмитрий В.", role: "Клиент 1.5 года", text: "Небольшие группы — огромный плюс. Тренер всегда поправит технику и составит программу именно под тебя." },
              { name: "Екатерина Л.", role: "Клиент 8 месяцев", text: "Взяла абонемент на год и получила 3 месяца в подарок. Результат виден уже через первый месяц занятий!" },
            ].map((r) => (
              <div
                key={r.name}
                className="p-7 border border-white/8 hover:border-[#FE0CF6]/30 transition-all"
                style={{ background: "#2a2b30", borderRadius: "12px" }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FE0CF6">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6">«{r.text}»</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-bold text-white text-sm">{r.name}</p>
                  <p className="text-[#FE0CF6] text-xs mt-0.5">{r.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ФОРМА ═══ */}
      <section id="contact" style={{ background: "#212226" }} className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#FE0CF6] text-sm font-semibold uppercase tracking-widest mb-3">Начни сейчас</p>
            <h2
              className="text-white"
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.5rem)", letterSpacing: "0.02em" }}
            >
              Записаться
            </h2>
            <p className="text-white/45 mt-3 max-w-md mx-auto text-sm">
              Оставьте заявку — свяжемся в течение часа и подберём удобное время
            </p>
          </div>

          <div
            className="overflow-hidden grid grid-cols-1 lg:grid-cols-2 border border-white/8"
            style={{ background: "#2a2b30", borderRadius: "16px" }}
          >
            {/* Контакты */}
            <div className="p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/8">
              <div>
                <h3
                  className="text-white mb-8"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.6rem", letterSpacing: "0.04em" }}
                >
                  Контакты
                </h3>
                <div className="space-y-5">
                  {[
                    { icon: "Phone", text: "+7 (495) 419-97-54" },
                    { icon: "Mail", text: "info@labspacefit.ru" },
                    { icon: "MapPin", text: "Москва, ул. Примерная, 10" },
                    { icon: "Clock", text: "Пн–Вс: 07:00 – 23:00" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(254,12,246,0.12)" }}
                      >
                        <Icon name={item.icon as "Phone"} size={16} className="text-[#FE0CF6]" />
                      </div>
                      <span className="text-white/65 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="mt-10 p-6 border border-[#FE0CF6]/20"
                style={{ background: "rgba(254,12,246,0.07)", borderRadius: "10px" }}
              >
                <p className="text-white/45 text-xs uppercase tracking-widest mb-1">Акция</p>
                <p style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", color: "#FE0CF6", letterSpacing: "0.02em", lineHeight: 1.2 }}>
                  3 месяца в подарок
                </p>
                <p className="text-white/45 text-sm mt-2">При покупке абонемента на 12 месяцев</p>
              </div>
            </div>

            {/* Форма */}
            <div className="p-10">
              <form className="space-y-5">
                <div>
                  <Label className="text-white/40 text-xs uppercase tracking-widest mb-1.5 block">Имя</Label>
                  <Input
                    type="text"
                    placeholder="Ваше имя"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:border-[#FE0CF6] focus-visible:ring-0"
                    style={{ borderRadius: "8px" }}
                  />
                </div>
                <div>
                  <Label className="text-white/40 text-xs uppercase tracking-widest mb-1.5 block">Телефон</Label>
                  <Input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:border-[#FE0CF6] focus-visible:ring-0"
                    style={{ borderRadius: "8px" }}
                  />
                </div>
                <div>
                  <Label className="text-white/40 text-xs uppercase tracking-widest mb-2 block">Что интересует?</Label>
                  <div className="flex flex-wrap gap-2">
                    {["Пробное — 500 ₽", "Абонемент на год", "Персональный тренинг"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        className="text-xs px-4 py-2 border border-white/12 text-white/50 hover:border-[#FE0CF6] hover:text-[#FE0CF6] transition-all"
                        style={{ borderRadius: "9999px" }}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <Label className="text-white/40 text-xs uppercase tracking-widest mb-1.5 block">Комментарий</Label>
                  <Textarea
                    placeholder="Любые пожелания..."
                    rows={3}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:border-[#FE0CF6] focus-visible:ring-0 resize-none"
                    style={{ borderRadius: "8px" }}
                  />
                </div>
                <button type="button" className="btn-pink pink-glow w-full py-4 text-base">
                  Отправить заявку
                </button>
                <p className="text-white/22 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer
        className="border-t py-8 px-4"
        style={{ background: "#1c1d21", borderColor: "rgba(255,255,255,0.07)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <img
            src="https://cdn.poehali.dev/projects/5e9f89bc-6533-4f3c-a6b5-a3eb69a6cd19/bucket/b19436f1-192d-44ce-8c75-8fe7f389d985.png"
            alt="L.A.B SPACE"
            className="h-8 w-auto object-contain"
          />
          <p className="text-white/25 text-xs">© 2024 L.A.B SPACE FITNESS STUDIO. Все права защищены.</p>
          <div className="flex gap-6">
            {["Instagram", "VK", "Telegram"].map((s) => (
              <a key={s} href="#" className="text-white/30 hover:text-[#FE0CF6] transition-colors text-xs">{s}</a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  )
}
