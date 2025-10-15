import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const privileges = [
    {
      title: 'STARTER',
      price: 299,
      benefits: [
        'Доступ на VIP сервер',
        'Приоритет в очереди',
        'Цветной ник',
        '5 домов',
        'Базовый кит'
      ],
      icon: 'Gamepad2'
    },
    {
      title: 'PREMIUM',
      price: 599,
      benefits: [
        'Все из STARTER',
        'Приватные арены',
        'Личный телепорт',
        '15 домов',
        'Расширенный кит',
        'Эксклюзивные эффекты'
      ],
      icon: 'Crown',
      popular: true
    },
    {
      title: 'ULTIMATE',
      price: 999,
      benefits: [
        'Все из PREMIUM',
        'Бессмертие 1 раз в день',
        'Креативный режим',
        'Неограниченно домов',
        'Legendary кит',
        'Кастомные команды',
        'Личный Prefix'
      ],
      icon: 'Shield'
    }
  ];

  const rules = [
    { title: 'Запрещен читинг', description: 'Использование читов карается перманентным баном' },
    { title: 'Уважение к игрокам', description: 'Оскорбления и токсичность недопустимы' },
    { title: 'Запрещен спам', description: 'Флуд в чате приведет к муту' },
    { title: 'Гриф разрешен', description: 'Но только вне защищенных территорий' },
    { title: 'Донат не возвращается', description: 'После покупки возврат средств невозможен' }
  ];

  const renderHome = () => (
    <div className="space-y-20">
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0VGNDQ0NCIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="relative z-10 text-center space-y-8 px-4 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
            NIGHT-TIMES
            <span className="block text-primary text-5xl md:text-7xl mt-2">DONATION SHOP</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Прокачай свой игровой опыт на лучшем сервере
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 hover:scale-105 transition-transform"
              onClick={() => setActiveSection('privileges')}
            >
              <Icon name="ShoppingCart" className="mr-2" size={20} />
              Купить привилегию
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 hover:scale-105 transition-transform"
              onClick={() => setActiveSection('rules')}
            >
              <Icon name="BookOpen" className="mr-2" size={20} />
              Правила
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:scale-105 transition-transform bg-card/50 backdrop-blur border-primary/20">
            <CardHeader>
              <Icon name="Zap" className="w-12 h-12 text-primary mb-2" />
              <CardTitle>Мгновенная выдача</CardTitle>
              <CardDescription>Привилегии активируются автоматически</CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:scale-105 transition-transform bg-card/50 backdrop-blur border-primary/20">
            <CardHeader>
              <Icon name="Shield" className="w-12 h-12 text-primary mb-2" />
              <CardTitle>Безопасность</CardTitle>
              <CardDescription>Защищенные платежи и гарантия</CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:scale-105 transition-transform bg-card/50 backdrop-blur border-primary/20">
            <CardHeader>
              <Icon name="Users" className="w-12 h-12 text-primary mb-2" />
              <CardTitle>Поддержка 24/7</CardTitle>
              <CardDescription>Всегда готовы помочь</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
    </div>
  );

  const renderPrivileges = () => (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-5xl font-bold mb-4">ДОНАТ-ПРИВИЛЕГИИ</h2>
        <p className="text-xl text-muted-foreground">Выбери свой путь к величию</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {privileges.map((priv, idx) => (
          <Card 
            key={idx} 
            className={`relative hover:scale-105 transition-all duration-300 ${
              priv.popular ? 'border-primary border-2 shadow-lg shadow-primary/50' : ''
            }`}
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {priv.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-4 py-1 text-sm">
                  ПОПУЛЯРНОЕ
                </Badge>
              </div>
            )}
            <CardHeader className="text-center">
              <Icon name={priv.icon as any} className="w-16 h-16 mx-auto text-primary mb-4" />
              <CardTitle className="text-3xl">{priv.title}</CardTitle>
              <CardDescription className="text-4xl font-bold text-primary mt-2">
                {priv.price}₽
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {priv.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full text-lg py-6"
                onClick={() => setActiveSection('payment')}
              >
                <Icon name="ShoppingCart" className="mr-2" size={20} />
                Купить
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderRules = () => (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-5xl font-bold mb-4">ПРАВИЛА СЕРВЕРА</h2>
        <p className="text-xl text-muted-foreground">Соблюдай правила - играй с удовольствием</p>
      </div>
      
      <div className="max-w-4xl mx-auto space-y-4">
        {rules.map((rule, idx) => (
          <Card key={idx} className="hover:border-primary/50 transition-all">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 rounded-full p-3">
                  <Icon name="AlertCircle" className="text-primary" size={24} />
                </div>
                <div>
                  <CardTitle className="text-2xl mb-2">{rule.title}</CardTitle>
                  <CardDescription className="text-base">{rule.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderContacts = () => (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-5xl font-bold mb-4">КОНТАКТЫ</h2>
        <p className="text-xl text-muted-foreground">Свяжись с нами</p>
      </div>
      
      <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-6">
        <Card className="hover:scale-105 transition-transform">
          <CardHeader className="text-center">
            <Icon name="MessageCircle" className="w-16 h-16 mx-auto text-primary mb-4" />
            <CardTitle className="text-2xl">Discord</CardTitle>
            <CardDescription className="text-lg">discord.gg/night-times</CardDescription>
          </CardHeader>
        </Card>
        
        <Card className="hover:scale-105 transition-transform">
          <CardHeader className="text-center">
            <Icon name="Send" className="w-16 h-16 mx-auto text-primary mb-4" />
            <CardTitle className="text-2xl">Telegram</CardTitle>
            <CardDescription className="text-lg">@nighttimes_support</CardDescription>
          </CardHeader>
        </Card>
        
        <Card className="hover:scale-105 transition-transform">
          <CardHeader className="text-center">
            <Icon name="Mail" className="w-16 h-16 mx-auto text-primary mb-4" />
            <CardTitle className="text-2xl">Email</CardTitle>
            <CardDescription className="text-lg">support@night-times.su</CardDescription>
          </CardHeader>
        </Card>
        
        <Card className="hover:scale-105 transition-transform">
          <CardHeader className="text-center">
            <Icon name="Globe" className="w-16 h-16 mx-auto text-primary mb-4" />
            <CardTitle className="text-2xl">Сервер</CardTitle>
            <CardDescription className="text-lg">night-times.su</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );

  const renderPayment = () => (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-5xl font-bold mb-4">ОПЛАТА</h2>
        <p className="text-xl text-muted-foreground">Выберите удобный способ оплаты</p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Инструкция по оплате</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
              <p>Выберите желаемую привилегию в разделе "Донат-привилегии"</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
              <p>Нажмите кнопку "Купить" и введите ваш игровой ник</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
              <p>Выберите способ оплаты и завершите платеж</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
              <p>Привилегия активируется автоматически в течение 1 минуты</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-4">
          <Card className="hover:border-primary transition-all cursor-pointer">
            <CardHeader className="text-center">
              <Icon name="CreditCard" className="w-12 h-12 mx-auto text-primary mb-2" />
              <CardTitle>Банковская карта</CardTitle>
            </CardHeader>
          </Card>
          <Card className="hover:border-primary transition-all cursor-pointer">
            <CardHeader className="text-center">
              <Icon name="Smartphone" className="w-12 h-12 mx-auto text-primary mb-2" />
              <CardTitle>СБП</CardTitle>
            </CardHeader>
          </Card>
          <Card className="hover:border-primary transition-all cursor-pointer">
            <CardHeader className="text-center">
              <Icon name="Wallet" className="w-12 h-12 mx-auto text-primary mb-2" />
              <CardTitle>Электронный кошелек</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveSection('home')}>
              <div className="bg-gradient-to-br from-primary to-primary/60 p-2 rounded-lg">
                <Icon name="Gamepad2" className="text-primary-foreground" size={28} />
              </div>
              <span className="text-2xl font-bold hidden sm:block">NIGHT-TIMES</span>
            </div>
            
            <div className="flex gap-1 md:gap-2">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'privileges', label: 'Привилегии', icon: 'Crown' },
                { id: 'rules', label: 'Правила', icon: 'BookOpen' },
                { id: 'contacts', label: 'Контакты', icon: 'MessageCircle' },
                { id: 'payment', label: 'Оплата', icon: 'CreditCard' }
              ].map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  className="gap-2"
                  onClick={() => setActiveSection(item.id)}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span className="hidden md:inline">{item.label}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="pb-20">
        {activeSection === 'home' && renderHome()}
        {activeSection === 'privileges' && renderPrivileges()}
        {activeSection === 'rules' && renderRules()}
        {activeSection === 'contacts' && renderContacts()}
        {activeSection === 'payment' && renderPayment()}
      </main>

      <footer className="border-t border-border py-8 bg-card/50 backdrop-blur">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Night-Times.su - Все права защищены
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Лучший игровой сервер для настоящих героев
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;