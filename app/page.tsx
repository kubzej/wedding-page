'use client';

import type React from 'react';
import Image from 'next/image';
import { MapPin, Clock, Car, Mail, Phone, Users, Shirt } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RsvpForm from '@/components/rsvp-form';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useEffect, useRef, useState } from 'react';

export default function WeddingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const thankYouCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isSubmitted && thankYouCardRef.current) {
      thankYouCardRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isSubmitted]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 via-zinc-50 to-zinc-100">
      {/* Fixed Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-200/30 shadow-sm">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <div className="text-2xl font-bodoni-moda tracking-wide text-gray-900">
              T & J
            </div>
            <ul className="hidden md:flex space-x-8">
              <li>
                <a
                  href="#uvod"
                  className="text-base font-medium tracking-wide hover:text-gray-900 transition-colors text-gray-700 font-bodoni-moda"
                >
                  Úvod
                </a>
              </li>
              <li>
                <a
                  href="#misto"
                  className="text-base font-medium tracking-wide hover:text-gray-900 transition-colors text-gray-700 font-bodoni-moda"
                >
                  Místo
                </a>
              </li>
              <li>
                <a
                  href="#program"
                  className="text-base font-medium tracking-wide hover:text-gray-900 transition-colors text-gray-700 font-bodoni-moda"
                >
                  Program
                </a>
              </li>
              <li>
                <a
                  href="#doprava"
                  className="text-base font-medium tracking-wide hover:text-gray-900 transition-colors text-gray-700 font-bodoni-moda"
                >
                  Doprava a ubytování
                </a>
              </li>
              <li>
                <a
                  href="#dress-code"
                  className="text-base font-medium tracking-wide hover:text-gray-900 transition-colors text-gray-700 font-bodoni-moda"
                >
                  Dress code
                </a>
              </li>
              <li>
                <a
                  href="#rsvp"
                  className="text-base font-medium tracking-wide hover:text-gray-900 transition-colors text-gray-700 font-bodoni-moda"
                >
                  RSVP
                </a>
              </li>
              <li>
                <a
                  href="#kontakty"
                  className="text-base font-medium tracking-wide hover:text-gray-900 transition-colors text-gray-700 font-bodoni-moda"
                >
                  Kontakty
                </a>
              </li>
            </ul>
            <Button
              variant="outline"
              size="sm"
              className="md:hidden border-gray-300 text-gray-900 hover:bg-gray-900 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              Menu
            </Button>
          </nav>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-zinc-50 backdrop-blur-sm border-t border-white/20 absolute left-0 right-0 top-16 shadow-xl shadow-md/50 backdrop-blur-sm">
              <ul className="flex flex-col py-4">
                <li>
                  <a
                    href="#uvod"
                    className="block px-4 py-3 text-base font-medium tracking-wide hover:text-gray-900 hover:bg-gray-900/10 transition-colors text-gray-700 font-bodoni-moda"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Úvod
                  </a>
                </li>
                <li>
                  <a
                    href="#misto"
                    className="block px-4 py-3 text-base font-medium tracking-wide hover:text-gray-900 hover:bg-gray-900/10 transition-colors text-gray-700 font-bodoni-moda"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Místo
                  </a>
                </li>
                <li>
                  <a
                    href="#program"
                    className="block px-4 py-3 text-base font-medium tracking-wide hover:text-gray-900 hover:bg-gray-900/10 transition-colors text-gray-700 font-bodoni-moda"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Program
                  </a>
                </li>
                <li>
                  <a
                    href="#doprava"
                    className="block px-4 py-3 text-base font-medium tracking-wide hover:text-gray-900 hover:bg-gray-900/10 transition-colors text-gray-700 font-bodoni-moda"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Doprava a ubytování
                  </a>
                </li>
                <li>
                  <a
                    href="#dress-code"
                    className="block px-4 py-3 text-base font-medium tracking-wide hover:text-gray-900 hover:bg-gray-900/10 transition-colors text-gray-700 font-bodoni-moda"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dress code
                  </a>
                </li>
                <li>
                  <a
                    href="#rsvp"
                    className="block px-4 py-3 text-base font-medium tracking-wide hover:text-gray-900 hover:bg-gray-900/10 transition-colors text-gray-700 font-bodoni-moda"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    RSVP
                  </a>
                </li>
                <li>
                  <a
                    href="#kontakty"
                    className="block px-4 py-3 text-base font-medium tracking-wide hover:text-gray-900 hover:bg-gray-900/10 transition-colors text-gray-700 font-bodoni-moda"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Kontakty
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[70vh] md:h-[100vh] flex items-center justify-center">
          {/* Background image container */}
          <div className="absolute inset-0">
            <Image
              src="/main.png"
              alt="Tereza & Jakub"
              fill
              priority
              className="object-cover object-[50%_70%] md:object-center"
            />
          </div>
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="font-bodoni-moda text-5xl md:text-8xl font-bold mb-4 md:mb-6 drop-shadow-2xl">
              Tereza & Jakub
            </h1>

            <div className="flex items-center justify-center">
              <div className="h-px w-12 md:w-16 bg-white/40"></div>
              <p className="text-xl md:text-3xl font-bodoni-moda text-white/95 mx-4 md:mx-6 drop-shadow-xl">
                30. května 2026
              </p>
              <div className="h-px w-12 md:w-16 bg-white/40"></div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section id="uvod" className="py-20 bg-zinc-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bodoni-moda font-bold text-gray-900 mb-8">
                Náš příběh
              </h2>
              <div className="space-y-4">
                <p className="font-bodoni-moda text-base leading-relaxed text-gray-700">
                  Naše cesty se propojily před lety… a od té doby jsme spolu
                  ušli pořádný kus života. Teď nastal okamžik udělat další krok
                  – slíbit si lásku před vámi všemi. Srdečně vás zveme, abyste
                  byli součástí našeho dne, kdy píšeme další kapitolu našeho
                  příběhu.
                </p>
                <p className="font-bodoni-moda text-base leading-relaxed text-gray-700">
                  Všechny potřebné informace o svatbě najdete níže – těšíme se
                  na vás!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Venue */}
        <section id="misto" className="py-16 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bodoni-moda font-bold text-gray-900 mb-12">
                Místo konání
              </h2>
              <div className="rounded-xl overflow-hidden">
                <div className="h-96 relative">
                  <Image
                    src="/smrciny.png?height=800&width=1200"
                    alt="Místo svatby"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-bodoni-moda font-bold mb-2">
                      Smrčiny
                    </h3>
                    <p className="text-lg font-bodoni-moda">
                      Obřad i hostina na jednom kouzelném místě
                    </p>
                  </div>
                </div>
                <div className="p-8 bg-white">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-gray-900 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900 font-bodoni-moda">
                          Adresa
                        </p>
                        <p className="text-gray-600 font-bodoni-moda">
                          Želiv 91, 394 44 Želiv
                        </p>
                      </div>
                    </div>
                    <Button
                      asChild
                      className="bg-gray-900 hover:bg-black text-white"
                    >
                      <a
                        href="https://www.google.com/maps/place/Smr%C4%8Diny+svatební+místo/@49.541958,15.2185712,17z/data=!3m1!4b1!4m6!3m5!1s0x470cf14049d12ab5:0xb2e4b09a4d8d8ca4!8m2!3d49.541958!4d15.2211461!16s%2Fg%2F11h0lcl5b2?entry=ttu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-bodoni-moda"
                      >
                        <MapPin className="h-4 w-4" />
                        Otevřít v Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program */}
        <section id="program" className="py-16 bg-zinc-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bodoni-moda font-bold text-gray-900 mb-12">
                Program dne
              </h2>

              <div className="relative max-w-2xl mx-auto">
                {/* Central vertical timeline */}
                <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-900 -translate-x-1/2"></div>

                <div className="space-y-12">
                  {/* Left side */}
                  <div className="flex items-center gap-8">
                    <div className="flex-1 text-right pr-8">
                      <div className="text-gray-900 font-bold text-lg mb-1 tracking-wide font-bodoni-moda">
                        10:00–11:00
                      </div>
                      <div className="text-gray-600 uppercase text-sm tracking-wider font-bodoni-moda">
                        Příjezd, uvítání hostů
                      </div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                    </div>
                    <div className="flex-1 pl-8"></div>
                  </div>

                  {/* Right side */}
                  <div className="flex items-center gap-8">
                    <div className="flex-1 pr-8"></div>
                    <div className="relative z-10">
                      <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                    </div>
                    <div className="flex-1 text-left pl-8">
                      <div className="text-gray-900 font-bold text-lg mb-1 tracking-wide font-bodoni-moda">
                        11:00–11:30
                      </div>
                      <div className="text-gray-600 uppercase text-sm tracking-wider font-bodoni-moda">
                        Svatební obřad
                      </div>
                    </div>
                  </div>

                  {/* Left side */}
                  <div className="flex items-center gap-8">
                    <div className="flex-1 text-right pr-8">
                      <div className="text-gray-900 font-bold text-lg mb-1 tracking-wide font-bodoni-moda">
                        11:30–13:00
                      </div>
                      <div className="text-gray-600 uppercase text-sm tracking-wider font-bodoni-moda">
                        Gratulace & společné fotografování
                      </div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                    </div>
                    <div className="flex-1 pl-8"></div>
                  </div>

                  {/* Right side */}
                  <div className="flex items-center gap-8">
                    <div className="flex-1 pr-8"></div>
                    <div className="relative z-10">
                      <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                    </div>
                    <div className="flex-1 text-left pl-8">
                      <div className="text-gray-900 font-bold text-lg mb-1 tracking-wide font-bodoni-moda">
                        13:00–14:00
                      </div>
                      <div className="text-gray-600 uppercase text-sm tracking-wider font-bodoni-moda">
                        Oběd
                      </div>
                    </div>
                  </div>

                  {/* Left side */}
                  <div className="flex items-center gap-8">
                    <div className="flex-1 text-right pr-8">
                      <div className="text-gray-900 font-bold text-lg mb-1 tracking-wide font-bodoni-moda">
                        14:00–17:00
                      </div>
                      <div className="text-gray-600 uppercase text-sm tracking-wider font-bodoni-moda">
                        Dort, káva a zábava
                      </div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                    </div>
                    <div className="flex-1 pl-8"></div>
                  </div>

                  {/* Right side */}
                  <div className="flex items-center gap-8">
                    <div className="flex-1 pr-8"></div>
                    <div className="relative z-10">
                      <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                    </div>
                    <div className="flex-1 text-left pl-8">
                      <div className="text-gray-900 font-bold text-lg mb-1 tracking-wide font-bodoni-moda">
                        17:00–18:30
                      </div>
                      <div className="text-gray-600 uppercase text-sm tracking-wider font-bodoni-moda">
                        Lehké občerstvení, raut
                      </div>
                    </div>
                  </div>

                  {/* Left side */}
                  <div className="flex items-center gap-8">
                    <div className="flex-1 text-right pr-8">
                      <div className="text-gray-900 font-bold text-lg mb-1 tracking-wide font-bodoni-moda">
                        18:30–19:00
                      </div>
                      <div className="text-gray-600 uppercase text-sm tracking-wider font-bodoni-moda">
                        První tanec a zahájení večera
                      </div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                    </div>
                    <div className="flex-1 pl-8"></div>
                  </div>

                  {/* Right side */}
                  <div className="flex items-center gap-8">
                    <div className="flex-1 pr-8"></div>
                    <div className="relative z-10">
                      <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                    </div>
                    <div className="flex-1 text-left pl-8">
                      <div className="text-gray-900 font-bold text-lg mb-1 tracking-wide font-bodoni-moda">
                        19:00+
                      </div>
                      <div className="text-gray-600 uppercase text-sm tracking-wider font-bodoni-moda">
                        Večerní zábava
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Travel */}
        <section id="doprava" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bodoni-moda font-bold text-gray-900 mb-12">
                Doprava a ubytování
              </h2>

              <div className="space-y-4">
                {/* Doprava */}
                <div className="border border-gray-200 bg-zinc-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bodoni-moda font-bold text-gray-900 mb-3">
                    Doprava
                  </h3>
                  <div className="space-y-2 text-gray-700 leading-relaxed font-bodoni-moda">
                    <p>
                      Smrčiny jsou lehce dostupné autem. Parkování je možné na
                      místě.
                    </p>
                    <p>
                      Prosíme o příjezd v dostatečném předstihu, aby obřad mohl
                      proběhnout bez zpoždění.
                    </p>
                  </div>
                </div>

                {/* Předsvatební setkání */}
                <div className="border border-gray-200 bg-zinc-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bodoni-moda font-bold text-gray-900 mb-3">
                    Předsvatební setkání
                  </h3>
                  <div className="space-y-2 text-gray-700 leading-relaxed font-bodoni-moda">
                    <p>
                      Zveme vás na neformální opékání buřtů a večerní setkání
                      den před svatbou – 29. 5. od 18:00 v areálu Smrčin. Akce
                      je určena pro hosty, kteří přijedou dříve, a bude skvělou
                      příležitostí se seznámit a užít si společný čas před
                      svatebním dnem.
                    </p>
                    <p>
                      Prosíme, potvrďte svou účast v RSVP, abychom s Vámi mohli
                      počítat.
                    </p>
                  </div>
                </div>

                {/* Ubytování */}
                <div className="border border-gray-200 bg-zinc-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bodoni-moda font-bold text-gray-900 mb-3">
                    Ubytování
                  </h3>
                  <div className="space-y-2 text-gray-700 leading-relaxed font-bodoni-moda">
                    <p>
                      Máme k dispozici ubytování přímo na Smrčinách, kde se
                      svatba koná. Budeme rádi, pokud nám dáte vědět, zda byste
                      tuto možnost využili.
                    </p>
                    <p>
                      Ubytování na Smrčinách bychom chtěli spíše dopřát těm,
                      kteří k nám pojedou z větší dálky a nebudou moci cestovat
                      zpět domů po svatbě. Pro ostatní z okolí bude zajištěn
                      odvoz.
                    </p>
                    <p>
                      Upozorňujeme, že většina pokojů je minimálně pro 3–4
                      osoby, a pokud by někdo nechtěl sdílet pokoj s někým
                      dalším, můžeme doporučit ubytování v Želivě.
                    </p>
                    <div className="mt-3 pt-3 border-t border-gray-300 font-bodoni-moda">
                      <p>
                        <strong className="font-bold text-gray-900 font-bodoni-moda">
                          Jak nám dát vědět:
                        </strong>{' '}
                        Své preference ohledně ubytování uveďte prosím v RSVP
                        formuláři nebo nám napište přímo. Rádi vám pomůžeme s
                        organizací!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dress Code */}
        <section id="dress-code" className="py-16 bg-zinc-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bodoni-moda font-bold text-gray-900 mb-12">
                Dress Code
              </h2>

              <div className="md:grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="border border-gray-200 bg-white p-6 rounded-xl">
                    <h3 className="text-xl font-bodoni-moda font-bold text-gray-900 mb-3">
                      Formální elegance
                    </h3>
                    <p className="text-gray-700 leading-relaxed font-bodoni-moda">
                      Prosíme Vás o formální oblečení odpovídající slavnostní
                      příležitosti. Pánové oblek, dámy šaty nebo kostýmek.
                    </p>
                  </div>

                  <div className="border border-gray-200 bg-white p-6 rounded-xl">
                    <h3 className="text-xl font-bodoni-moda font-bold text-gray-900 mb-3">
                      Barvy
                    </h3>
                    <p className="text-gray-700 leading-relaxed font-bodoni-moda">
                      Preferujeme pastelové barvy, které budou ladit s celkovou
                      atmosférou svatby.
                    </p>
                  </div>

                  <div className="border border-gray-200 bg-white p-6 rounded-xl">
                    <h3 className="text-xl font-bodoni-moda font-bold text-gray-900 mb-3">
                      Prosíme vyhnout se
                    </h3>
                    <div className="space-y-2 text-gray-700 leading-relaxed font-bodoni-moda">
                      <p>Čistě bílé oblečení (vyhrazeno pro nevěstu)</p>
                      <p>Příliš výrazným a zářivým barvám</p>
                      <p>Džínám a neformálnímu oblečení</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 md:mt-0 flex items-center justify-center">
                  <div className="text-center">
                    <Image
                      src="/dress-code.png"
                      alt="Dress code illustration"
                      width={288}
                      height={288}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* RSVP */}
        <section id="rsvp" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bodoni-moda font-bold text-gray-900 mb-12">
                RSVP
              </h2>

              {isSubmitted ? (
                <div
                  ref={thankYouCardRef}
                  className="border border-gray-200 bg-zinc-50 p-8 rounded-xl"
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-bodoni-moda font-bold mb-4 text-gray-900">
                      Děkujeme!
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Vaše RSVP bylo úspěšně odesláno. Těšíme se na vás!
                    </p>
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="border border-gray-200 bg-zinc-50 p-6 rounded-xl">
                      <RsvpForm onSubmit={() => setIsSubmitted(true)} />
                    </div>
                  </div>

                  <div className="md:col-span-1">
                    <div className="border border-gray-200 bg-zinc-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bodoni-moda font-bold text-gray-900 mb-3">
                        Termín potvrzení
                      </h3>
                      <p className="text-gray-700 leading-relaxed font-bodoni-moda">
                        Prosíme o potvrzení vaší účasti do{' '}
                        <span className="font-bold text-gray-900 font-bodoni-moda">
                          konce března.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contacts */}
        <section id="kontakty" className="py-16 bg-zinc-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bodoni-moda font-bold text-gray-900 mb-8">
                Kontakty
              </h2>

              <div className="mb-8">
                <p className="text-lg font-bodoni-moda font-bold text-gray-900 mb-2">
                  Potřebujete pomoct?
                </p>
                <p className="text-gray-700 leading-relaxed font-bodoni-moda">
                  Pokud máte jakékoli dotazy ohledně svatby nebo vyplnění
                  formuláře, neváhejte nás kontaktovat.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="border border-gray-200 bg-white p-4 rounded-xl">
                  <h3 className="text-lg font-bodoni-moda font-bold text-gray-900 mb-3">
                    Ženich
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-gray-900 font-bodoni-moda">
                        +420 731 288 826
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-900 font-bodoni-moda">
                        jmares.mail@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 bg-white p-4 rounded-xl">
                  <h3 className="text-lg font-bodoni-moda font-bold text-gray-900 mb-3">
                    Nevěsta
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-gray-900 font-bodoni-moda">
                        +420 604 335 462
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-900 font-bodoni-moda">
                        tereza.zav@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 bg-white p-4 rounded-xl">
                  <h3 className="text-lg font-bodoni-moda font-bold text-gray-900 mb-3">
                    Řidič
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-gray-900 font-bodoni-moda">
                        Bude doplněn
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-900 font-bodoni-moda">
                        K dispozici celý den
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
