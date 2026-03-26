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
    <main className="overflow-x-hidden" style={{ background: "#12081e" }}>
      <FloatingNavbar />

      {/* HERO */}
      <section id="promo" className="relative min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_BG})` }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(18,8,30,0.5) 0%, rgba(40,10,80,0.6) 50%, rgba(18,8,30,0.88) 100%)",
          }}
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1
            className="font-extrabold text-white leading-tight mb-6"
            style={{ fontSize: "clamp(2.6rem, 8vw, 5.5rem)" }}
          >
            3 МЕСЯЦА<br />В ПОДАРОК
          </h1>

          <p className="text-white/80 text-lg md:text-xl max-w-lg mx-auto mb-8 leading-relaxed">
            Погрузитесь в мир движения, энергии<br />
            и уникальных тренировок L.A.B SPACE.
          </p>

          {/* Price */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="text-right">
              <span className="block text-white/45 text-sm line-through">2 100 ₽</span>
              <span className="text-white/45 text-sm">от</span>
            </div>
            <span className="font-extrabold text-pink-glow" style={{ fontSize: "clamp(3rem, 10vw, 5rem)", color: "#FE0CF6" }}>
              500 ₽
            </span>
            <span className="text-white text-base font-medium text-left">
              Первая<br />тренировка
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollTo("contact")} className="btn-pink pink-glow px-10 py-4 text-lg font-semibold">
              Записаться на тренировку
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-10 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full hover:border-[#FE0CF6] hover:text-[#FE0CF6] transition-all"
            >
              Купить абонемент
            </button>
          </div>
        </div>
      </section>

      {/* АКЦИЯ-ПЛАШКА */}
      <div className="py-10 px-4" style={{ background: "linear-gradient(135deg, #2d1060, #1a0840)" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <p className="text-[#FE0CF6] font-semibold uppercase tracking-widest text-sm mb-1">Специальное предложение</p>
            <h2 className="text-white font-extrabold text-2xl md:text-3xl">
              При покупке абонемента на 12 месяцев —{" "}
              <span className="text-[#FE0CF6]">3 месяца в подарок</span>
            </h2>
          </div>
          <button onClick={() => scrollTo("contact")} className="btn-pink pink-glow px-10 py-4 text-base font-semibold flex-shrink-0">
            Записаться
          </button>
        </div>
      </div>

      {/* TICKER */}
      <div className="overflow-hidden py-3" style={{ background: "#FE0CF6" }}>
        <div className="flex animate-scroll-left whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="text-white font-semibold tracking-widest text-sm mx-8">
              L.A.B SPACE · ФИТНЕС СТУДИЯ · 3 МЕСЯЦА В ПОДАРОК · ЗАПИСАТЬСЯ СЕЙЧАС ·
            </span>
          ))}
        </div>
      </div>

      {/* ПРЕИМУЩЕСТВА */}
      <section id="features" className="py-24 px-4" style={{ background: "#12081e" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#FE0CF6] font-semibold uppercase tracking-widest text-sm mb-2">Почему мы</p>
            <h2 className="font-extrabold text-white text-4xl md:text-5xl">Преимущества студии</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "Dumbbell", title: "Профессиональное оборудование", desc: "Тренажёры премиум-класса для максимального результата" },
              { icon: "Users", title: "Опытные тренеры", desc: "Персональный подход и программы под ваши цели" },
              { icon: "Clock", title: "Удобное расписание", desc: "Тренировки утром, днём и вечером — 7 дней в неделю" },
              { icon: "Star", title: "Небольшие группы", desc: "До 10 человек — максимум внимания каждому" },
              { icon: "Zap", title: "Пробное занятие", desc: "Попробуй первую тренировку всего за 500 ₽" },
              { icon: "Shield", title: "Комфортная атмосфера", desc: "Современная раздевалка, душ и зона отдыха" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-7 border border-white/8 hover:border-[#FE0CF6]/40 transition-all group"
                style={{ background: "rgba(45, 16, 96, 0.3)" }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ background: "linear-gradient(135deg, #FE0CF6, #8800aa)" }}
                >
                  <Icon name={item.icon as "Star"} size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ФОТО */}
      <section className="py-8 px-4" style={{ background: "#0e0620" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative overflow-hidden rounded-2xl h-80 md:h-96">
            <img src={STUDIO_IMG} alt="Студия" className="w-full h-full object-cover" />
            <div className="absolute inset-0 rounded-2xl" style={{ background: "linear-gradient(to top, rgba(18,8,30,0.65) 0%, transparent 60%)" }} />
            <p className="absolute bottom-5 left-6 text-white font-bold text-xl">Наша студия</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-2xl h-44">
              <img src={TRAINER_F} alt="Тренер Анна" className="w-full h-full object-cover object-top" />
            </div>
            <div className="relative overflow-hidden rounded-2xl h-44">
              <img src={TRAINER_M} alt="Тренер Максим" className="w-full h-full object-cover object-top" />
            </div>
            <div
              className="col-span-2 rounded-2xl flex items-center justify-center h-36 border border-[#FE0CF6]/25"
              style={{ background: "linear-gradient(135deg, rgba(254,12,246,0.12), rgba(45,16,96,0.5))" }}
            >
              <div className="text-center">
                <p className="text-[#FE0CF6] font-extrabold text-4xl">+3 месяца</p>
                <p className="text-white/55 text-sm mt-1">при покупке на год</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ТРЕНЕРЫ */}
      <section id="trainers" className="py-24 px-4" style={{ background: "#12081e" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#FE0CF6] font-semibold uppercase tracking-widest text-sm mb-2">Команда</p>
            <h2 className="font-extrabold text-white text-4xl md:text-5xl">Наши тренеры</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { img: TRAINER_F, name: "Анна Соколова", role: "Персональный тренер · 7 лет опыта", spec: "Функциональный тренинг, похудение, растяжка" },
              { img: TRAINER_M, name: "Максим Ковалев", role: "Силовой тренер · 5 лет опыта", spec: "Силовые тренировки, набор массы, кроссфит" },
            ].map((t) => (
              <div key={t.name} className="relative rounded-2xl overflow-hidden group">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-[460px] object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(18,8,30,0.95) 0%, rgba(18,8,30,0.15) 60%, transparent 100%)" }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className="font-bold text-white text-2xl mb-1">{t.name}</h3>
                  <p className="text-[#FE0CF6] text-sm font-semibold mb-2">{t.role}</p>
                  <p className="text-white/50 text-sm">{t.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ОТЗЫВЫ */}
      <section id="reviews" className="py-24 px-4" style={{ background: "#0e0620" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#FE0CF6] font-semibold uppercase tracking-widest text-sm mb-2">Клиенты</p>
            <h2 className="font-extrabold text-white text-4xl md:text-5xl">Отзывы</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { name: "Мария К.", role: "Клиент 2 года", text: "Записалась на пробное занятие и осталась навсегда. Анна — лучший тренер! За 3 месяца сбросила 8 кг." },
              { name: "Дмитрий В.", role: "Клиент 1.5 года", text: "Отличная студия с приятной атмосферой. Небольшие группы — огромный плюс. Тренер всегда поправит технику." },
              { name: "Екатерина Л.", role: "Клиент 8 месяцев", text: "Взяла абонемент на год и получила 3 месяца в подарок — отличное предложение! Результат виден сразу." },
            ].map((r) => (
              <div
                key={r.name}
                className="rounded-2xl p-7 border border-white/8 hover:border-[#FE0CF6]/25 transition-all"
                style={{ background: "rgba(45, 16, 96, 0.28)" }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FE0CF6"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="text-white/70 text-sm leading-relaxed mb-6">«{r.text}»</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-bold text-white">{r.name}</p>
                  <p className="text-[#FE0CF6] text-xs mt-0.5">{r.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ФОРМА */}
      <section id="contact" className="py-24 px-4" style={{ background: "#12081e" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#FE0CF6] font-semibold uppercase tracking-widest text-sm mb-2">Начни сейчас</p>
            <h2 className="font-extrabold text-white text-4xl md:text-5xl">Записаться</h2>
            <p className="text-white/45 mt-4 max-w-md mx-auto text-sm">
              Оставьте заявку — свяжемся в течение часа и подберём удобное время
            </p>
          </div>

          <div
            className="rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
            style={{ border: "1px solid rgba(254,12,246,0.15)", background: "rgba(30,10,60,0.5)" }}
          >
            <div className="p-10 flex flex-col justify-between" style={{ background: "linear-gradient(135deg, rgba(80,20,140,0.4), rgba(30,10,60,0.4))" }}>
              <div>
                <h3 className="font-bold text-white text-2xl mb-8">Контакты</h3>
                <div className="space-y-5">
                  {[
                    { icon: "Phone", text: "+7 (495) 419-97-54" },
                    { icon: "Mail", text: "info@labspacefit.ru" },
                    { icon: "MapPin", text: "Москва, ул. Примерная, 10" },
                    { icon: "Clock", text: "Пн–Вс: 07:00 – 23:00" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "rgba(254,12,246,0.18)" }}>
                        <Icon name={item.icon as "Phone"} size={16} className="text-[#FE0CF6]" />
                      </div>
                      <span className="text-white/65 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10 rounded-2xl p-6" style={{ background: "rgba(254,12,246,0.12)", border: "1px solid rgba(254,12,246,0.25)" }}>
                <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Акция</p>
                <p className="text-[#FE0CF6] font-extrabold text-3xl leading-tight">3 месяца<br />в подарок</p>
                <p className="text-white/45 text-sm mt-2">При покупке абонемента на 12 месяцев</p>
              </div>
            </div>

            <div className="p-10">
              <form className="space-y-5">
                <div>
                  <Label className="text-white/45 text-xs uppercase tracking-widest mb-1.5 block">Имя</Label>
                  <Input type="text" placeholder="Ваше имя" className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl focus-visible:border-[#FE0CF6] focus-visible:ring-0" />
                </div>
                <div>
                  <Label className="text-white/45 text-xs uppercase tracking-widest mb-1.5 block">Телефон</Label>
                  <Input type="tel" placeholder="+7 (___) ___-__-__" className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl focus-visible:border-[#FE0CF6] focus-visible:ring-0" />
                </div>
                <div>
                  <Label className="text-white/45 text-xs uppercase tracking-widest mb-2 block">Что вас интересует?</Label>
                  <div className="flex flex-wrap gap-2">
                    {["Пробное занятие — 500 ₽", "Абонемент на 12 мес", "Персональный тренинг"].map((opt) => (
                      <button key={opt} type="button" className="text-xs px-4 py-2 rounded-full border border-white/12 text-white/50 hover:border-[#FE0CF6] hover:text-[#FE0CF6] transition-all">
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <Label className="text-white/45 text-xs uppercase tracking-widest mb-1.5 block">Комментарий</Label>
                  <Textarea placeholder="Любые пожелания..." rows={3} className="bg-white/5 border-white/10 text-white placeholder:text-white/20 rounded-xl focus-visible:border-[#FE0CF6] focus-visible:ring-0 resize-none" />
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

      {/* FOOTER */}
      <footer className="border-t py-8 px-4" style={{ background: "#0e0620", borderColor: "rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full border-2 border-[#FE0CF6] flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FE0CF6]" />
            </div>
            <span className="font-extrabold text-white text-lg tracking-wide">L.A.B SPACE</span>
          </div>
          <p className="text-white/22 text-xs">© 2024 L.A.B SPACE FITNESS STUDIO. Все права защищены.</p>
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
