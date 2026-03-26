import { FloatingNavbar } from "@/components/FloatingNavbar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Icon from "@/components/ui/icon"

const STUDIO_IMG = "https://cdn.poehali.dev/projects/5e9f89bc-6533-4f3c-a6b5-a3eb69a6cd19/files/59cac769-59d4-405a-b0ef-ca640764b1b8.jpg"
const TRAINER_F = "https://cdn.poehali.dev/projects/5e9f89bc-6533-4f3c-a6b5-a3eb69a6cd19/files/79aaf5d6-94c0-4aae-86c8-77074630349e.jpg"
const TRAINER_M = "https://cdn.poehali.dev/projects/5e9f89bc-6533-4f3c-a6b5-a3eb69a6cd19/files/be2f4002-3db8-45ae-88ce-67c4c5dc55fe.jpg"

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export default function Index() {
  return (
    <main className="bg-[#212226] text-white overflow-x-hidden">
      <FloatingNavbar />

      {/* HERO / PROMO SECTION */}
      <section
        id="promo"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${STUDIO_IMG})` }}
        />
        <div className="absolute inset-0 bg-[#212226]/75" />

        {/* Pink accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#FE0CF6]" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-block border border-[#FE0CF6] px-4 py-1 mb-6">
            <span className="font-bebas tracking-widest text-[#FE0CF6] text-sm">СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ</span>
          </div>

          <h1 className="font-bebas text-7xl md:text-9xl lg:text-[12rem] leading-none text-white mb-2">
            3 МЕСЯЦА
          </h1>
          <h2 className="font-bebas text-4xl md:text-6xl lg:text-8xl leading-none text-[#FE0CF6] text-pink-glow mb-8">
            В ПОДАРОК
          </h2>

          <p className="font-open-sans text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            При покупке абонемента на <span className="text-white font-semibold">12 месяцев</span> — получаете 3 месяца в подарок.<br />
            Пробная тренировка — от <span className="text-[#FE0CF6] font-semibold">500 ₽</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("contact")}
              className="font-bebas tracking-widest bg-[#FE0CF6] text-white px-10 py-4 text-xl hover:bg-[#FE0CF6]/80 transition-all pink-glow"
            >
              ЗАПИСАТЬСЯ НА ПРОБНОЕ
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="font-bebas tracking-widest border-2 border-white text-white px-10 py-4 text-xl hover:border-[#FE0CF6] hover:text-[#FE0CF6] transition-all"
            >
              КУПИТЬ АБОНЕМЕНТ
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-[#FE0CF6]" />
        </div>
      </section>

      {/* TICKER */}
      <div className="bg-[#FE0CF6] py-3 overflow-hidden">
        <div className="flex animate-scroll-left whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="font-bebas tracking-widest text-white text-lg mx-8">
              L.A.B SPACE · ФИТНЕС СТУДИЯ · 3 МЕСЯЦА В ПОДАРОК · ЗАПИСАТЬСЯ СЕЙЧАС ·
            </span>
          ))}
        </div>
      </div>

      {/* FEATURES */}
      <section id="features" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <span className="font-bebas tracking-widest text-[#FE0CF6] text-lg">ПОЧЕМУ МЫ</span>
            <h2 className="font-bebas text-5xl md:text-7xl text-white mt-2">ПРЕИМУЩЕСТВА СТУДИИ</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {[
              {
                icon: "Dumbbell",
                title: "ПРОФЕССИОНАЛЬНОЕ ОБОРУДОВАНИЕ",
                desc: "Тренажёры премиум-класса для максимального результата",
              },
              {
                icon: "Users",
                title: "ОПЫТНЫЕ ТРЕНЕРЫ",
                desc: "Персональный подход и программы под ваши цели",
              },
              {
                icon: "Clock",
                title: "УДОБНОЕ РАСПИСАНИЕ",
                desc: "Тренировки утром, днём и вечером — 7 дней в неделю",
              },
              {
                icon: "Star",
                title: "НЕБОЛЬШИЕ ГРУППЫ",
                desc: "До 10 человек в группе — максимум внимания каждому",
              },
              {
                icon: "Zap",
                title: "ПРОБНОЕ ЗАНЯТИЕ",
                desc: "Попробуй первую тренировку всего за 500 ₽",
              },
              {
                icon: "Shield",
                title: "КОМФОРТНАЯ АТМОСФЕРА",
                desc: "Современная раздевалка, душ, зона отдыха",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#212226] p-8 group hover:bg-[#2a2a2e] transition-colors"
              >
                <div className="mb-4 inline-flex w-12 h-12 items-center justify-center border border-[#FE0CF6]/40 group-hover:border-[#FE0CF6] transition-colors">
                  <Icon name={item.icon as "Star"} size={22} className="text-[#FE0CF6]" />
                </div>
                <h3 className="font-bebas text-xl tracking-wide text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINERS */}
      <section id="trainers" className="py-24 px-4 bg-[#1a1b1e]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <span className="font-bebas tracking-widest text-[#FE0CF6] text-lg">КОМАНДА</span>
            <h2 className="font-bebas text-5xl md:text-7xl text-white mt-2">НАШИ ТРЕНЕРЫ</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group overflow-hidden">
              <img
                src={TRAINER_F}
                alt="Тренер Анна"
                className="w-full h-[500px] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#212226] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="border-l-2 border-[#FE0CF6] pl-4">
                  <h3 className="font-bebas text-3xl text-white">АННА СОКОЛОВА</h3>
                  <p className="text-[#FE0CF6] font-bebas tracking-wide">ПЕРСОНАЛЬНЫЙ ТРЕНЕР · 7 ЛЕТ ОПЫТА</p>
                  <p className="text-gray-400 text-sm mt-2">Специализация: функциональный тренинг, похудение, реабилитация</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden">
              <img
                src={TRAINER_M}
                alt="Тренер Максим"
                className="w-full h-[500px] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#212226] via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="border-l-2 border-[#FE0CF6] pl-4">
                  <h3 className="font-bebas text-3xl text-white">МАКСИМ КОВАЛЕВ</h3>
                  <p className="text-[#FE0CF6] font-bebas tracking-wide">ТРЕНЕР ПО СИЛОВЫМ · 5 ЛЕТ ОПЫТА</p>
                  <p className="text-gray-400 text-sm mt-2">Специализация: силовые тренировки, набор массы, кроссфит</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <span className="font-bebas tracking-widest text-[#FE0CF6] text-lg">КЛИЕНТЫ</span>
            <h2 className="font-bebas text-5xl md:text-7xl text-white mt-2">ОТЗЫВЫ</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {[
              {
                name: "Мария К.",
                role: "Клиент 2 года",
                text: "Записалась на пробное занятие и осталась навсегда. Анна — лучший тренер, которого я встречала. За 3 месяца сбросила 8 кг!",
                stars: 5,
              },
              {
                name: "Дмитрий В.",
                role: "Клиент 1.5 года",
                text: "Отличная студия с приятной атмосферой. Небольшие группы — это огромный плюс. Тренер всегда подскажет и поправит технику.",
                stars: 5,
              },
              {
                name: "Екатерина Л.",
                role: "Клиент 8 месяцев",
                text: "Взяла абонемент на год и получила 3 месяца в подарок — отличное предложение! Результат виден уже после первого месяца.",
                stars: 5,
              },
            ].map((review) => (
              <div key={review.name} className="bg-[#212226] p-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.stars }).map((_, i) => (
                    <Icon key={i} name="Star" size={14} className="text-[#FE0CF6] fill-[#FE0CF6]" />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6">«{review.text}»</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-bebas text-lg text-white">{review.name}</p>
                  <p className="text-[#FE0CF6] text-xs tracking-wide">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section id="contact" className="py-24 px-4 bg-[#1a1b1e]">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <span className="font-bebas tracking-widest text-[#FE0CF6] text-lg">НАЧНИ СЕЙЧАС</span>
            <h2 className="font-bebas text-5xl md:text-7xl text-white mt-2">ЗАПИСАТЬСЯ</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Оставьте заявку — мы свяжемся с вами в течение часа и подберём удобное время
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10">
            <div className="bg-[#212226] p-10 flex flex-col justify-between">
              <div>
                <h3 className="font-bebas text-3xl text-white mb-8">КОНТАКТЫ</h3>
                <div className="space-y-6">
                  {[
                    { icon: "Phone", label: "+7 (495) 123-45-67" },
                    { icon: "Mail", label: "info@labspacefit.ru" },
                    { icon: "MapPin", label: "Москва, ул. Примерная, 10" },
                    { icon: "Clock", label: "Пн–Вс: 07:00 – 23:00" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className="w-10 h-10 border border-[#FE0CF6]/40 flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon as "Phone"} size={18} className="text-[#FE0CF6]" />
                      </div>
                      <span className="text-gray-300 text-sm">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 p-6 border border-[#FE0CF6]/30 bg-[#FE0CF6]/5">
                <p className="font-bebas text-2xl text-white">АКЦИЯ</p>
                <p className="text-[#FE0CF6] font-bebas text-4xl">3 МЕСЯЦА В ПОДАРОК</p>
                <p className="text-gray-400 text-sm mt-2">При покупке абонемента на 12 месяцев</p>
              </div>
            </div>

            <div className="bg-[#212226] p-10">
              <form className="space-y-5">
                <div>
                  <Label className="font-bebas tracking-wide text-gray-400 text-sm">ИМЯ</Label>
                  <Input
                    type="text"
                    placeholder="Ваше имя"
                    className="mt-1 bg-transparent border-white/10 border-b-white/30 text-white placeholder:text-gray-600 rounded-none border-x-0 border-t-0 focus-visible:ring-0 focus-visible:border-b-[#FE0CF6] px-0"
                  />
                </div>
                <div>
                  <Label className="font-bebas tracking-wide text-gray-400 text-sm">ТЕЛЕФОН</Label>
                  <Input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="mt-1 bg-transparent border-white/10 border-b-white/30 text-white placeholder:text-gray-600 rounded-none border-x-0 border-t-0 focus-visible:ring-0 focus-visible:border-b-[#FE0CF6] px-0"
                  />
                </div>
                <div>
                  <Label className="font-bebas tracking-wide text-gray-400 text-sm">ЧТО VAS ИНТЕРЕСУЕТ</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {["Пробное занятие — 500 ₽", "Абонемент на 12 мес", "Персональный тренинг"].map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        className="border border-white/20 text-gray-400 text-xs px-3 py-1 hover:border-[#FE0CF6] hover:text-[#FE0CF6] transition-colors font-open-sans"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <Label className="font-bebas tracking-wide text-gray-400 text-sm">КОММЕНТАРИЙ</Label>
                  <Textarea
                    placeholder="Любые пожелания..."
                    rows={3}
                    className="mt-1 bg-transparent border-white/10 text-white placeholder:text-gray-600 rounded-none focus-visible:ring-0 focus-visible:border-[#FE0CF6] px-0 resize-none"
                  />
                </div>
                <button
                  type="button"
                  className="w-full font-bebas tracking-widest bg-[#FE0CF6] text-white py-4 text-xl hover:bg-[#FE0CF6]/80 transition-all pink-glow mt-2"
                >
                  ОТПРАВИТЬ ЗАЯВКУ
                </button>
                <p className="text-gray-600 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#212226] border-t border-white/10 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full border border-[#FE0CF6] flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-[#FE0CF6]" />
            </div>
            <span className="font-bebas text-lg tracking-widest text-white">L.A.B SPACE</span>
          </div>
          <p className="text-gray-600 text-xs">© 2024 L.A.B SPACE FITNESS STUDIO. ВСЕ ПРАВА ЗАЩИЩЕНЫ.</p>
          <div className="flex gap-4">
            {["Instagram", "Vk"].map((s) => (
              <a key={s} href="#" className="text-gray-600 hover:text-[#FE0CF6] transition-colors text-xs font-open-sans">
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  )
}
