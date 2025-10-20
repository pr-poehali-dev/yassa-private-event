import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для подтверждения участия."
    });
    setFormData({ name: '', email: '', phone: '', company: '' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/50" />
        
        <div className="absolute top-0 left-0 w-px h-32 bg-gradient-to-b from-gold to-transparent opacity-60" />
        <div className="absolute top-0 right-0 w-px h-32 bg-gradient-to-b from-gold to-transparent opacity-60" />
        <div className="absolute bottom-0 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />
        
        <div className="relative max-w-5xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
            <span className="block text-4xl md:text-5xl lg:text-6xl font-light text-foreground/90 mb-2">
              YASSA PRIVATE BUSINESS EVENING
            </span>
          </h1>

          <div className="max-w-3xl mx-auto mb-8 space-y-3">
            <p className="text-xl md:text-2xl text-gold-light font-light tracking-wide">
              Лидерство. Инвестиции. Искусственный интеллект.
            </p>
            <p className="text-lg md:text-xl text-foreground/70 font-light">
              Неформальный нетворкинг с бизнес-элитой страны.
            </p>
          </div>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />

          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Образование мирового уровня теперь в Кыргызстане - <br className="hidden md:block" />
            закрытая презентация <span className="text-gold font-medium">Yassa Business Institute KG</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 text-foreground/80">
            <div className="flex items-center gap-2">
              <Icon name="Calendar" size={20} className="text-gold" />
              <span className="font-medium">28 октября, 18:30</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-gold/50" />
            <div className="flex items-center gap-2">
              <Icon name="MapPin" size={20} className="text-gold" />
              <span className="font-medium">Бишкек, Technopark</span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 mb-10 border border-gold/30 rounded-full bg-gold/5 backdrop-blur-sm">
            <Icon name="Lock" size={16} className="text-gold" />
            <span className="text-sm font-medium tracking-wider text-gold-light">INVITE ONLY, 50 УЧАСТНИКОВ</span>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              Интеллектуальные воркшопы от президента ассоциации предпринимателей 
              <span className="text-gold font-medium"> Harvard University</span>, 
              инвесторов и управленцев
            </p>
          </div>

          <Button 
            size="lg" 
            className="bg-gold hover:bg-gold/90 text-background font-semibold text-lg px-12 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-gold/20"
            onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Регистрация
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gold">
              Спикеры вечера
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <Card className="bg-card/50 backdrop-blur-sm border-gold/20 p-8 hover:border-gold/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <Icon name="User" size={28} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gold-light mb-2">Regina Ryan</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Президент мировой ассоциации предпринимателей Harvard University, партнер Yassa Business Institute
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-gold/20 p-8 hover:border-gold/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <Icon name="User" size={28} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gold-light mb-2">Аманат Молдокеева</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Глава Yassa Business Institute Kyrgyzstan. Председатель совета директоров ОАО "Евразийский Сберегательный банк"
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-gold/20 p-8 hover:border-gold/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <Icon name="User" size={28} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gold-light mb-2">Жан Карсыбаев</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Со-основатель американского инвестиционного фонда BigSkyCapital, член Совета Директоров Yassa Business Institute
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-gold/20 p-8 hover:border-gold/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <Icon name="User" size={28} className="text-gold" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gold-light mb-2">Кристина Вебер</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    СЕО, со-основатель Yassa Business Institute Global
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-gold">
              Программа вечера
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-6" />
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-gold/20 p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center gap-2 text-gold">
                    <Icon name="Clock" size={20} />
                    <span className="text-xl font-semibold">18:30</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-lg text-foreground/80">
                    Сбор гостей и Welcome drink
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-gold/20 p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center gap-2 text-gold">
                    <Icon name="Clock" size={20} />
                    <span className="text-xl font-semibold">19:00 - 21:00</span>
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-gold font-bold text-lg flex-shrink-0">1.</span>
                    <p className="text-lg text-foreground/80">
                      <span className="text-gold-light font-semibold">AI & Leadership: Практика Harvard.</span> Как AI трансформирует бизнес и лидерство
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gold font-bold text-lg flex-shrink-0">2.</span>
                    <p className="text-lg text-foreground/80">
                      <span className="text-gold-light font-semibold">Investment Mindset:</span> как бизнесу Центральной Азии масштабироваться на международные рынки
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gold font-bold text-lg flex-shrink-0">3.</span>
                    <p className="text-lg text-foreground/80">
                      <span className="text-gold-light font-semibold">Education That Works.</span> Мировая экспертиза. AI-driven, практикоориентированный подход. Какие возможности открывает Yassa Business Institute для бизнеса Кыргызстана
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-gold font-bold text-lg flex-shrink-0">4.</span>
                    <p className="text-lg text-foreground/80">
                      <span className="text-gold-light font-semibold">People & Growth:</span> команда мечты
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-gold/20 p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center gap-2 text-gold">
                    <Icon name="Clock" size={20} />
                    <span className="text-xl font-semibold">21:00 - 22:00</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-lg text-foreground/80">
                    Неформальный нетворкинг, закуски и игристое
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-8">
              <img 
                src="https://static.tildacdn.com/tild6235-3932-4534-b238-636335623331/86eb11a73ab5a10bdc32.svg" 
                alt="Yassa Business Institute" 
                className="h-16 md:h-20"
              />
            </div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-12" />
            
            <p className="text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed mb-16">
              Yassa Business Institute — международный институт нового поколения, формирующий образовательную экосистему для предпринимателей, топ-менеджеров и лидеров бизнеса в Центральной Азии.
            </p>
          </div>

          <div className="mb-20">
            <h3 className="text-3xl md:text-4xl font-bold text-gold mb-12 text-center">
              Уникальность подхода Yassa
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-card/50 backdrop-blur-sm border-gold/20 p-6 hover:border-gold/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gold mt-2" />
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                    Искусственный интеллект встроен в саму логику программы.
                  </p>
                </div>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-gold/20 p-6 hover:border-gold/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gold mt-2" />
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                    Каждый участник получает персонализированный трек развития.
                  </p>
                </div>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-gold/20 p-6 hover:border-gold/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gold mt-2" />
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                    Образование строится через ПРАКТИКУ, а не лекции.
                  </p>
                </div>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-gold/20 p-6 hover:border-gold/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gold mt-2" />
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                    Диагностика, трекинг, симуляции и практические кейсы — всё интегрировано в единую Yassa GrowthOS.
                  </p>
                </div>
              </Card>
            </div>

            <p className="text-xl md:text-2xl text-gold-light text-center font-light mt-12">
              Это не просто обучение. Это система роста.
            </p>
          </div>

          <div className="mb-20">
            <h3 className="text-3xl md:text-4xl font-bold text-gold mb-8 text-center">
              Почему Кыргызстан
            </h3>
            
            <div className="max-w-4xl mx-auto space-y-6 mb-8">
              <Card className="bg-card/50 backdrop-blur-sm border-gold/20 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gold mt-2" />
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                    Кыргызстан становится центром роста бизнеса и технологий в регионе.
                  </p>
                </div>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-gold/20 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gold mt-2" />
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                    Бизнесу нужны новые управленцы — гибкие, стратегичные, технологичные.
                  </p>
                </div>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-gold/20 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-2 h-2 rounded-full bg-gold mt-2" />
                  <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
                    Yassa привозит международный стандарт бизнес-образования и адаптирует его под локальный контекст.
                  </p>
                </div>
              </Card>
            </div>

            <p className="text-xl md:text-2xl text-gold-light text-center font-light">
              Yassa - это мост между Центральной Азией и мировым деловым сообществом.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gold mb-8 text-center">
              Сила Yassa — в глобальных альянсах
            </h3>
            
            <p className="text-lg text-foreground/70 text-center mb-12">Партнёры:</p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12 items-center justify-items-center">
              <div className="flex flex-col items-center gap-4 p-4">
                <img 
                  src="https://static.tildacdn.com/tild3362-3265-4238-a563-633062663764/photo.svg" 
                  alt="Harvard Alumni Entrepreneurs" 
                  className="h-16 md:h-20 object-contain filter brightness-90 hover:brightness-110 transition-all"
                />
              </div>

              <div className="flex flex-col items-center gap-4 p-4">
                <img 
                  src="https://static.tildacdn.com/tild6138-6566-4333-b333-323935666637/swiss-1.svg" 
                  alt="Swiss SITE" 
                  className="h-16 md:h-20 object-contain filter brightness-90 hover:brightness-110 transition-all"
                />
              </div>

              <div className="flex flex-col items-center gap-4 p-4">
                <img 
                  src="https://static.tildacdn.com/tild3765-3639-4637-b438-346639636333/BigSky_white.svg" 
                  alt="Big Sky Capital" 
                  className="h-16 md:h-20 object-contain filter brightness-90 hover:brightness-110 transition-all"
                />
              </div>

              <div className="flex flex-col items-center gap-4 p-4">
                <img 
                  src="https://static.tildacdn.com/tild6434-6461-4430-a339-656430343338/logoAlibaba.svg" 
                  alt="Alibaba Group" 
                  className="h-16 md:h-20 object-contain filter brightness-90 hover:brightness-110 transition-all"
                />
              </div>

              <div className="flex flex-col items-center gap-4 p-4 col-span-2 md:col-span-3 lg:col-span-1">
                <img 
                  src="https://static.tildacdn.com/tild6338-6163-4661-b966-346262393366/Logo_TechnoWomen_po.svg" 
                  alt="TechnoWomen Association" 
                  className="h-16 md:h-20 object-contain filter brightness-90 hover:brightness-110 transition-all"
                />
              </div>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              <Card className="bg-card/50 backdrop-blur-sm border-gold/20 p-6">
                <div className="flex items-start gap-4">
                  <Icon name="GraduationCap" size={24} className="text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground/80 leading-relaxed">
                      <span className="font-semibold text-gold-light">Harvard Alumni Entrepreneurs (США)</span> — сертификационные программы
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-gold/20 p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Award" size={24} className="text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground/80 leading-relaxed">
                      <span className="font-semibold text-gold-light">Swiss SITE (Швейцария)</span> — диплом Executive MBA
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-gold/20 p-6">
                <div className="flex items-start gap-4">
                  <Icon name="TrendingUp" size={24} className="text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground/80 leading-relaxed">
                      <span className="font-semibold text-gold-light">Big Sky Capital (США / ЦА)</span> — инвестиции, венчурные инициативы
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-gold/20 p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Rocket" size={24} className="text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground/80 leading-relaxed">
                      <span className="font-semibold text-gold-light">Alibaba Group (Азия)</span> — акселерационные программы и AI-практики
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-gold/20 p-6">
                <div className="flex items-start gap-4">
                  <Icon name="Users" size={24} className="text-gold flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground/80 leading-relaxed">
                      <span className="font-semibold text-gold-light">TechnoWomen Association</span> — развитие женского лидерства
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <p className="text-xl md:text-2xl text-gold-light text-center font-light mt-12">
              Мы интегрируем лучшие практики Гарварда, Швейцарии и Силиконовой долины.
            </p>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold/90 text-background font-semibold text-lg px-12 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-gold/20"
              onClick={() => document.getElementById('registration')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Регистрация на вечер
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <section id="registration" className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
        
        <div className="relative max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gold">
              Регистрация
            </h2>
            <p className="text-foreground/60 text-lg">
              Количество мест ограничено. Заполните форму для участия в мероприятии.
            </p>
          </div>

          <Card className="bg-card/80 backdrop-blur-sm border-gold/20 p-8 md:p-10 animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground/80">
                  Имя и Фамилия *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background/50 border-gold/20 focus:border-gold text-foreground"
                  placeholder="Введите ваше имя"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground/80">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background/50 border-gold/20 focus:border-gold text-foreground"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground/80">
                  Телефон *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background/50 border-gold/20 focus:border-gold text-foreground"
                  placeholder="+996 XXX XXX XXX"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-foreground/80">
                  Компания / Должность
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-background/50 border-gold/20 focus:border-gold text-foreground"
                  placeholder="Название компании и должность"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gold hover:bg-gold/90 text-background font-semibold text-lg py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-gold/20"
              >
                Отправить заявку
                <Icon name="Send" size={20} className="ml-2" />
              </Button>

              <p className="text-sm text-foreground/50 text-center">
                * Обязательные поля для заполнения
              </p>
            </form>
          </Card>
        </div>
      </section>

      <footer className="relative py-12 px-4 border-t border-gold/10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold font-bold text-2xl mb-2">YASSA BUSINESS INSTITUTE KG</p>
          <p className="text-foreground/50 text-sm">
            Образование мирового уровня в Кыргызстане
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;