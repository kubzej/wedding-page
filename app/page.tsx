'use client';

import type React from 'react';
import Image from 'next/image';
import { MapPin, Clock, Car, Mail, Phone, Users, Shirt } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
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
    <div className="min-h-screen bg-gradient-to-br from-[#faf7f2] via-white to-[#f4e6d9]">
      {/* Fixed Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <div className="text-2xl font-script tracking-wide text-[#d4af37]">
              T & J
            </div>
            <ul className="hidden md:flex space-x-8">
              <li>
                <a
                  href="#uvod"
                  className="text-base font-medium tracking-wide hover:text-[#d4af37] transition-colors text-[#5d4e37]"
                >
                  Úvod
                </a>
              </li>
              <li>
                <a
                  href="#misto"
                  className="text-base font-medium tracking-wide hover:text-[#d4af37] transition-colors text-[#5d4e37]"
                >
                  Místo
                </a>
              </li>
              <li>
                <a
                  href="#program"
                  className="text-base font-medium tracking-wide hover:text-[#d4af37] transition-colors text-[#5d4e37]"
                >
                  Program
                </a>
              </li>
              <li>
                <a
                  href="#doprava"
                  className="text-base font-medium tracking-wide hover:text-[#d4af37] transition-colors text-[#5d4e37]"
                >
                  Doprava a ubytování
                </a>
              </li>
              <li>
                <a
                  href="#dress-code"
                  className="text-base font-medium tracking-wide hover:text-[#d4af37] transition-colors text-[#5d4e37]"
                >
                  Dress code
                </a>
              </li>
              <li>
                <a
                  href="#rsvp"
                  className="text-base font-medium tracking-wide hover:text-[#d4af37] transition-colors text-[#5d4e37]"
                >
                  RSVP
                </a>
              </li>
              <li>
                <a
                  href="#kontakty"
                  className="text-base font-medium tracking-wide hover:text-[#d4af37] transition-colors text-[#5d4e37]"
                >
                  Kontakty
                </a>
              </li>
            </ul>
            <Button
              variant="outline"
              size="sm"
              className="md:hidden border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              Menu
            </Button>
          </nav>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-white/20 absolute left-0 right-0 top-16 shadow-lg">
              <ul className="flex flex-col py-4">
                <li>
                  <a
                    href="#uvod"
                    className="block px-4 py-3 text-base font-medium tracking-wide hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors text-[#5d4e37]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Úvod
                  </a>
                </li>
                <li>
                  <a
                    href="#misto"
                    className="block px-4 py-3 text-base font-medium tracking-wide hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors text-[#5d4e37]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Místo
                  </a>
                </li>
                <li>
                  <a
                    href="#program"
                    className="block px-4 py-3 text-base font-medium tracking-wide hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors text-[#5d4e37]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Program
                  </a>
                </li>
                <li>
                  <a
                    href="#doprava"
                    className="block px-4 py-3 text-base font-medium tracking-wide hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors text-[#5d4e37]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Doprava
                  </a>
                </li>
                <li>
                  <a
                    href="#dress-code"
                    className="block px-4 py-3 text-base font-medium tracking-wide hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors text-[#5d4e37]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dress code
                  </a>
                </li>
                <li>
                  <a
                    href="#rsvp"
                    className="block px-4 py-3 text-base font-medium tracking-wide hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors text-[#5d4e37]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    RSVP
                  </a>
                </li>
                <li>
                  <a
                    href="#kontakty"
                    className="block px-4 py-3 text-base font-medium tracking-wide hover:text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors text-[#5d4e37]"
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
        <section className="relative h-[100vh] flex items-center justify-center bg-[url('/main.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/50"></div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-6xl md:text-8xl font-script font-light mb-6 tracking-wide drop-shadow-lg">
              Tereza & Jakub
            </h1>

            <div className="flex items-center justify-center mb-8">
              <div className="h-px w-16 bg-white/40"></div>
              <p className="text-2xl md:text-3xl font-script text-white/95 mx-6 tracking-wide">
                30. května 2026
              </p>
              <div className="h-px w-16 bg-white/40"></div>
            </div>

            <div className="flex flex-col items-center justify-center space-y-4 mb-12">
              <div className="flex items-center justify-center space-x-4">
                <MapPin className="h-5 w-5" />
                <span className="text-xl font-script font-light tracking-wide">
                  Smrčiny
                </span>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <Clock className="h-5 w-5" />
                <span className="text-xl font-script font-light tracking-wide">
                  11:00
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section
          id="uvod"
          className="py-24 bg-gradient-to-b from-[#faf7f2] to-[#f4e6d9]"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center mb-12">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
                <div className="flex flex-col items-center mx-6">
                  <h2 className="text-4xl font-serif font-medium tracking-wide text-[#5d4e37] mb-2">
                    Náš příběh
                  </h2>
                </div>
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
              </div>

              <div className="prose prose-lg mx-auto text-[#5d4e37]">
                <p className="text-xl mb-8 font-light leading-relaxed text-[#5d4e37]/90">
                  Milí přátelé a rodino, s radostí Vás zveme na náš svatební
                  den. Po letech společného života jsme se rozhodli zpečetit náš
                  vztah manželským slibem.
                </p>
                <p className="text-xl font-light leading-relaxed text-[#5d4e37]/90">
                  Budeme rádi, když tento výjimečný den oslavíte společně s
                  námi. Níže najdete všechny potřebné informace.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Venue */}
        <section id="misto" className="py-24 bg-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-32 opacity-5">
            <div className="w-full h-full bg-gradient-to-r from-[#d4af37]/20 via-transparent to-[#d4af37]/20"></div>
          </div>
          <div className="absolute bottom-0 right-0 w-full h-32 opacity-5">
            <div className="w-full h-full bg-gradient-to-l from-[#d4af37]/20 via-transparent to-[#d4af37]/20"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center justify-center mb-12">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
              <div className="flex flex-col items-center mx-6">
                <h2 className="text-4xl font-serif font-medium tracking-wide text-[#5d4e37] mb-2">
                  Místo konání
                </h2>
              </div>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden border-none shadow-lg bg-white/80 backdrop-blur-sm">
                <div className="h-96 relative">
                  <Image
                    src="/smrciny.png?height=800&width=1200"
                    alt="Místo svatby"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-light mb-2 tracking-wide">
                      Smrčiny
                    </h3>
                    <p className="font-light opacity-90">
                      Obřad i hostina na jednom kouzelném místě
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-[#d4af37] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-[#5d4e37]">Adresa</p>
                        <p className="text-sm text-[#5d4e37]/70">
                          Želiv 91, 394 44 Želiv
                        </p>
                      </div>
                    </div>
                    <Button
                      asChild
                      className="bg-[#d4af37] hover:bg-[#c9a332] text-white shadow-md"
                    >
                      <a
                        href="https://www.google.com/maps/place/Smr%C4%8Diny+svatební+místo/@49.541958,15.2185712,17z/data=!3m1!4b1!4m6!3m5!1s0x470cf14049d12ab5:0xb2e4b09a4d8d8ca4!8m2!3d49.541958!4d15.2211461!16s%2Fg%2F11h0lcl5b2?entry=ttu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <MapPin className="h-4 w-4" />
                        Otevřít v Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Program */}
        <section
          id="program"
          className="py-24 bg-gradient-to-b from-[#f4e6d9] to-[#faf7f2]"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-12">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
              <div className="flex flex-col items-center mx-6">
                <h2 className="text-4xl font-serif font-medium tracking-wide text-[#5d4e37] mb-2">
                  Program dne
                </h2>
              </div>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="border-none shadow-lg bg-white/90 backdrop-blur-sm overflow-hidden">
                <div className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-[#d4af37] flex items-center justify-center">
                          <Clock className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 pt-1.5">
                        <div className="flex items-baseline gap-3">
                          <span className="text-base text-[#d4af37] font-medium min-w-[100px]">
                            10:00–11:00
                          </span>
                          <p className="text-base text-[#5d4e37]">
                            Příjezd, uvítání hostů
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-[#d4af37] flex items-center justify-center">
                          <Clock className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 pt-1.5">
                        <div className="flex items-baseline gap-3">
                          <span className="text-base text-[#d4af37] font-medium min-w-[100px]">
                            11:00–11:30
                          </span>
                          <p className="text-base text-[#5d4e37]">
                            Svatební obřad
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-[#d4af37] flex items-center justify-center">
                          <Clock className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 pt-1.5">
                        <div className="flex items-baseline gap-3">
                          <span className="text-base text-[#d4af37] font-medium min-w-[100px]">
                            11:30–13:00
                          </span>
                          <p className="text-base text-[#5d4e37]">
                            Gratulace & společné fotografování
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-[#d4af37] flex items-center justify-center">
                          <Clock className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 pt-1.5">
                        <div className="flex items-baseline gap-3">
                          <span className="text-base text-[#d4af37] font-medium min-w-[100px]">
                            13:00–14:00
                          </span>
                          <p className="text-base text-[#5d4e37]">Oběd</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-[#d4af37] flex items-center justify-center">
                          <Clock className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 pt-1.5">
                        <div className="flex items-baseline gap-3">
                          <span className="text-base text-[#d4af37] font-medium min-w-[100px]">
                            14:00–17:00
                          </span>
                          <p className="text-base text-[#5d4e37]">
                            Dort, káva a zábava
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-[#d4af37] flex items-center justify-center">
                          <Clock className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 pt-1.5">
                        <div className="flex items-baseline gap-3">
                          <span className="text-base text-[#d4af37] font-medium min-w-[100px]">
                            17:00–18:30
                          </span>
                          <p className="text-base text-[#5d4e37]">
                            Lehké občerstvení, raut
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-[#d4af37] flex items-center justify-center">
                          <Clock className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 pt-1.5">
                        <div className="flex items-baseline gap-3">
                          <span className="text-base text-[#d4af37] font-medium min-w-[100px]">
                            18:30–19:00
                          </span>
                          <p className="text-base text-[#5d4e37]">
                            První tanec a zahájení večera
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-[#d4af37] flex items-center justify-center">
                          <Clock className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 pt-1.5">
                        <div className="flex items-baseline gap-3">
                          <span className="text-base text-[#d4af37] font-medium min-w-[100px]">
                            19:00+
                          </span>
                          <p className="text-base text-[#5d4e37]">
                            Večerní zábava
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Travel */}
        <section id="doprava" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-12">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
              <div className="flex flex-col items-center mx-6">
                <h2 className="text-4xl font-serif font-medium tracking-wide text-[#5d4e37] mb-2">
                  Doprava a ubytování
                </h2>
              </div>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-8 border-none shadow-lg bg-gradient-to-br from-[#faf7f2] to-[#f4e6d9] h-full">
                <div className="flex items-center mb-6">
                  <Car className="h-6 w-6 text-[#d4af37] mr-3" />
                  <h3 className="text-xl font-serif font-light tracking-wide text-[#5d4e37]">
                    Doprava
                  </h3>
                </div>
                <p className="mb-4 text-[#5d4e37]/70">
                  Smrčiny jsou lehce dostupné autem. Parkování je možné na
                  místě.
                </p>
                <p className="mb-4 text-[#5d4e37]/70">
                  Prosíme o příjezd v dostatečném předstihu, aby obřad mohl
                  proběhnout bez zpoždění.
                </p>
              </Card>

              <Card className="p-8 border-none shadow-lg bg-gradient-to-br from-[#f4e6d9] to-[#faf7f2] h-full">
                <div className="flex items-center mb-6">
                  <Users className="h-6 w-6 text-[#d4af37] mr-3" />
                  <h3 className="text-xl font-serif font-light tracking-wide text-[#5d4e37]">
                    Předsvatební setkání
                  </h3>
                </div>
                <p className="mb-4 text-[#5d4e37]/70">
                  Zveme vás na neformální opékání buřtů a večerní setkání den
                  před svatbou – 29. 5. od 18:00 v areálu Smrčin. Akce je určena
                  pro hosty, kteří přijedou dříve, a bude skvělou příležitostí
                  se seznámit a užít si společný čas před svatebním dnem.
                </p>
                <p className="text-[#5d4e37]/70">
                  Prosíme, potvrďte svou účast v RSVP, abychom s Vámi mohli
                  počítat.
                </p>
              </Card>
            </div>

            <div className="mt-8 max-w-4xl mx-auto">
              <Card className="p-8 border-none shadow-lg bg-gradient-to-br from-[#f4e6d9] via-[#faf7f2] to-[#f4e6d9]">
                <div className="flex items-center mb-6">
                  <MapPin className="h-6 w-6 text-[#d4af37] mr-3" />
                  <h3 className="text-xl font-serif font-light tracking-wide text-[#5d4e37]">
                    Ubytování
                  </h3>
                </div>
                <p className="mb-6 text-[#5d4e37]/90">
                  Máme k dispozici ubytování přímo na Smrčinách, kde se svatba
                  koná. Budeme rádi, pokud nám dáte vědět, zda byste tuto
                  možnost využili.
                </p>

                <p className="mb-6 text-[#5d4e37]/90">
                  Ubytování na Smrčinách bychom chtěli spíše dopřát těm, kteří k
                  nám pojedou z větší dálky a nebudou moci cestovat zpět domů po
                  svatbě. Pro ostatní z okolí bude zajištěn odvoz.
                </p>

                <p className="mb-6 text-[#5d4e37]/90">
                  Upozorňujeme, že většina pokojů je minimálně pro 3–4 osoby, a
                  pokud by někdo nechtěl sdílet pokoj s někým dalším, můžeme
                  doporučit ubytování v Želivě.
                </p>

                <div className="mt-6 p-4 bg-[#d4af37]/10 rounded-lg border-l-4 border-[#d4af37]">
                  <p className="text-[#5d4e37]/80 text-sm">
                    <strong>Jak nám dát vědět:</strong> Své preference ohledně
                    ubytování uveďte prosím v RSVP formuláři nebo nám napište
                    přímo. Rádi vám pomůžeme s organizací!
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Dress Code */}
        <section
          id="dress-code"
          className="py-24 bg-gradient-to-b from-[#faf7f2] to-[#f4e6d9] relative overflow-hidden"
        >
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center justify-center mb-12">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
              <div className="flex flex-col items-center mx-6">
                <h2 className="text-4xl font-serif font-medium tracking-wide text-[#5d4e37] mb-2">
                  Dress Code
                </h2>
              </div>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden border-none shadow-lg bg-white/90 backdrop-blur-sm">
                <div className="md:grid md:grid-cols-2">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <Shirt className="h-6 w-6 text-[#d4af37] mr-3 flex-shrink-0" />
                      <h3 className="text-xl font-serif font-medium tracking-wide text-[#5d4e37]">
                        Formální elegance
                      </h3>
                    </div>

                    <p className="mb-8 text-[#5d4e37]/80 leading-relaxed">
                      Prosíme Vás o formální oblečení odpovídající slavnostní
                      příležitosti. Pánové oblek, dámy šaty nebo kostýmek.
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-serif font-medium mb-3 text-[#5d4e37]">
                          Barvy
                        </h4>
                        <p className="text-[#5d4e37]/80 leading-relaxed">
                          Preferujeme pastelové barvy, které budou ladit s
                          celkovou atmosférou svatby.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-serif font-medium mb-3 text-[#5d4e37]">
                          Prosíme vyhnout se
                        </h4>
                        <div className="bg-white/50 p-4 rounded-lg">
                          <ul className="space-y-2 text-sm text-[#5d4e37]/70">
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-[#d4af37] rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                              <span>
                                Čistě bílé oblečení (vyhrazeno pro nevěstu)
                              </span>
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-[#d4af37] rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                              <span>Příliš výrazným a zářivým barvám</span>
                            </li>
                            <li className="flex items-start">
                              <span className="w-2 h-2 bg-[#d4af37] rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                              <span>Džínám a neformálnímu oblečení</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="relative bg-gradient-to-br from-[#f4e6d9] to-[#faf7f2]">
                    <div className="h-full flex items-center justify-center p-8">
                      <div className="text-center">
                        <div className="mx-auto mb-6 bg-white/30 backdrop-blur-sm rounded-2xl p-3 shadow-lg w-72">
                          <Image
                            src="/dress-code.png"
                            alt="Dress code illustration"
                            width={288}
                            height={288}
                            className="w-full h-auto object-contain rounded-lg"
                          />
                        </div>
                        <h4 className="text-lg font-script text-[#d4af37]">
                          Elegant & Timeless
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Seating Chart */}
        {/* <section id="zasedaci-poradek" className="py-24 bg-[#edede9]">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-12">
              <div className="h-px w-12 bg-[#d4af37]"></div>
              <h2 className="text-3xl font-medium mx-4 tracking-wide text-[#986b50]">
                Zasedací pořádek
              </h2>
              <div className="h-px w-12 bg-[#d4af37]"></div>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="p-8 border-none shadow-lg bg-white/90 backdrop-blur-sm">
                <SeatingChart />
              </Card>
            </div>
          </div>
        </section> */}

        {/* RSVP */}
        <section id="rsvp" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-12">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
              <div className="flex flex-col items-center mx-6">
                <h2 className="text-4xl font-serif font-medium tracking-wide text-[#5d4e37] mb-2">
                  RSVP
                </h2>
              </div>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
            </div>

            <div className="max-w-2xl mx-auto">
              {isSubmitted ? (
                <Card
                  ref={thankYouCardRef}
                  className="border-none shadow-lg bg-gradient-to-br from-[#d4af37]/20 to-[#f4e6d9]"
                >
                  <div className="p-8 text-center">
                    <h2 className="text-2xl font-serif font-bold mb-4 text-[#5d4e37]">
                      Děkujeme!
                    </h2>
                    <p className="text-[#5d4e37]/80">
                      Vaše RSVP bylo úspěšně odesláno. Těšíme se na vás!
                    </p>
                  </div>
                </Card>
              ) : (
                <Card className="border-none shadow-lg bg-gradient-to-br from-[#faf7f2] to-[#f4e6d9]">
                  <div className="p-8">
                    <p className="mb-8 text-center font-light text-[#5d4e37]">
                      Prosíme o potvrzení vaší účasti do 1. března 2026.
                    </p>
                    <RsvpForm onSubmit={() => setIsSubmitted(true)} />
                  </div>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Contacts */}
        <section
          id="kontakty"
          className="py-24 bg-gradient-to-b from-[#f4e6d9] to-[#faf7f2]"
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-12">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
              <div className="flex flex-col items-center mx-6">
                <h2 className="text-4xl font-serif font-medium tracking-wide text-[#5d4e37] mb-2">
                  Kontakty
                </h2>
              </div>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="p-6 border-none shadow-lg bg-white/90 backdrop-blur-sm">
                <div className="text-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-[#edede9] mx-auto flex items-center justify-center">
                    <span className="text-2xl font-light text-[#d5bdaf]">
                      J
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-serif font-light mb-4 text-center tracking-wide">
                  Ženich
                </h3>
                <div className="flex items-center mb-3 justify-center">
                  <Phone className="h-5 w-5 text-[#d5bdaf] mr-3" />
                  <p className="text-[#5d4e37]/70">+420 731 288 826</p>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="h-5 w-5 text-[#d5bdaf] mr-3" />
                  <p className="text-[#5d4e37]/70">jmares.mail@gmail.com</p>
                </div>
              </Card>

              <Card className="p-6 border-none shadow-lg bg-white/90 backdrop-blur-sm">
                <div className="text-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-[#edede9] mx-auto flex items-center justify-center">
                    <span className="text-2xl font-light text-[#d5bdaf]">
                      T
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-serif font-light mb-4 text-center tracking-wide">
                  Nevěsta
                </h3>
                <div className="flex items-center mb-3 justify-center">
                  <Phone className="h-5 w-5 text-[#d5bdaf] mr-3" />
                  <p className="text-[#5d4e37]/70">+420 604 335 462</p>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="h-5 w-5 text-[#d5bdaf] mr-3" />
                  <p className="text-[#5d4e37]/70">tereza.zav@gmail.com</p>
                </div>
              </Card>

              <Card className="p-6 border-none shadow-lg bg-white/90 backdrop-blur-sm">
                <div className="text-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-[#edede9] mx-auto flex items-center justify-center">
                    <Car className="h-8 w-8 text-[#d5bdaf]" />
                  </div>
                </div>
                <h3 className="text-xl font-serif font-light mb-4 text-center tracking-wide">
                  Řidič
                </h3>
                <div className="flex items-center mb-3 justify-center">
                  <Phone className="h-5 w-5 text-[#d5bdaf] mr-3" />
                  <p className="text-[#5d4e37]/70">+420 456 789 123</p>
                </div>
                <div className="flex items-center justify-center">
                  <Clock className="h-5 w-5 text-[#d5bdaf] mr-3" />
                  <p className="text-[#5d4e37]/70">K dispozici celý den</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {/* <section id="faq" className="py-24 bg-[#edede9]">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center mb-12">
              <div className="h-px w-12 bg-[#d4af37]"></div>
              <h2 className="text-3xl font-medium mx-4 tracking-wide text-[#986b50]">
                Často kladené otázky
              </h2>
              <div className="h-px w-12 bg-[#d4af37]"></div>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="p-8 border-none shadow-lg bg-white/90 backdrop-blur-sm">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem
                    value="item-1"
                    className="border-b border-[#d5bdaf]/20"
                  >
                    <AccordionTrigger className="text-lg font-light tracking-wide hover:text-[#d5bdaf]">
                      Mohu přivést s sebou děti?
                    </AccordionTrigger>
                    <AccordionContent className="text-[#5d4e37]/70">
                      Ano, děti jsou na naší svatbě vítány. Bude pro ně
                      připraven dětský koutek.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-2"
                    className="border-b border-[#d5bdaf]/20"
                  >
                    <AccordionTrigger className="text-lg font-light tracking-wide hover:text-[#d5bdaf]">
                      Bude k dispozici vegetariánské jídlo?
                    </AccordionTrigger>
                    <AccordionContent className="text-[#5d4e37]/70">
                      Ano, vegetariánská varianta menu bude k dispozici.
                      Prosíme, uveďte své stravovací preference v RSVP
                      formuláři.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-3"
                    className="border-b border-[#d5bdaf]/20"
                  >
                    <AccordionTrigger className="text-lg font-light tracking-wide hover:text-[#d5bdaf]">
                      Jak je to s dary?
                    </AccordionTrigger>
                    <AccordionContent className="text-[#5d4e37]/70">
                      Vaše přítomnost je pro nás tím nejkrásnějším darem. Pokud
                      byste nás přesto chtěli obdarovat, nejvíce oceníme
                      příspěvek na naši svatební cestu.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg font-light tracking-wide hover:text-[#d5bdaf]">
                      Bude svatba venku nebo uvnitř?
                    </AccordionTrigger>
                    <AccordionContent className="text-[#5d4e37]/70">
                      Obřad se bude venku v zahradě Smrčin. V případě špatného
                      počasí máme i náhradní variantu. Zbytek programe bude v
                      uzavřené místnosti ale za pěkného počasí je k dispozici
                      celý rozlehlý areál.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </Card>
            </div>
          </div>
        </section> */}

        {/* Scroll to top button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-[#d4af37] hover:bg-[#b8941f] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-40"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </main>
    </div>
  );
}
