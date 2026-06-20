"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-neutral-800">
      {/* Navigation */}
      <header className="border-b border-neutral-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex-shrink-0">
  <h1 className="text-3xl font-serif text-slate-900 whitespace-nowrap">
    Dr. med. Giancarlo Spano
  </h1>
  <p className="text-sm tracking-[0.1em] uppercase text-sky-700 mt-1 whitespace-nowrap">
    Kardiologie & Kardiale Bildgebung
  </p>
</div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#startseite" className="hover:text-sky-700 transition-colors">
              Startseite
            </a>
            <a href="#bildgebung" className="hover:text-sky-700 transition-colors">
              Kardiale Bildgebung
            </a>
            <a href="#kardiologie" className="hover:text-sky-700 transition-colors">
              Kardiologie
            </a>
            <a href="#werdegang" className="hover:text-sky-700 transition-colors">
              Über mich
            </a>
            <a href="#standorte" className="hover:text-sky-700 transition-colors">
              Standorte
            </a>
            <a href="#kontakt" className="hover:text-sky-700 transition-colors">
              Kontakt
            </a>

           <div className="flex items-center gap-2 text-sm">
  <a href="/" className="hover:text-sky-700 transition-colors font-medium">
    DE
  </a>

  <span className="text-neutral-300">|</span>

  <a href="/fr" className="hover:text-sky-700 transition-colors">
    FR
  </a>

  <span className="text-neutral-300">|</span>

  <a href="/it" className="hover:text-sky-700 transition-colors">
    IT
  </a>
</div>

<a
  href="https://www.kardiologie-aarezentrum.ch"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-sky-700 text-sky-700 px-4 py-2 rounded-full hover:bg-sky-700 hover:text-white transition-all"
>
  Aarezentrum ↗
</a>
          </nav>
          <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden flex flex-col gap-1"
>
  <span className="w-6 h-[2px] bg-slate-900"></span>
  <span className="w-6 h-[2px] bg-slate-900"></span>
  <span className="w-6 h-[2px] bg-slate-900"></span>
</button>
        </div>
        {menuOpen && (
  <div className="md:hidden bg-white border-t border-neutral-200 px-6 py-6 flex flex-col gap-6 text-lg text-slate-800">

    <a href="#startseite" onClick={() => setMenuOpen(false)}>
      Startseite
    </a>

    <a href="#bildgebung" onClick={() => setMenuOpen(false)}>
      Kardiale Bildgebung
    </a>

    <a href="#kardiologie" onClick={() => setMenuOpen(false)}>
      Kardiologie
    </a>

    <a href="#werdegang" onClick={() => setMenuOpen(false)}>
      Über mich
    </a>

    <a href="#kontakt" onClick={() => setMenuOpen(false)}>
      Kontakt
    </a>
<div className="border-t border-neutral-200 pt-4 flex justify-center items-center gap-3 text-base">
  <a href="/" onClick={() => setMenuOpen(false)}>DE</a>
  <span className="text-neutral-300">|</span>
  <a href="/fr" onClick={() => setMenuOpen(false)}>FR</a>
  <span className="text-neutral-300">|</span>
  <a href="/it" onClick={() => setMenuOpen(false)}>IT</a>
</div>
  </div>
)}
      </header>

      {/* Intro Section */}
      <section 
  id="startseite"
  className="scroll-mt-32 max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center"
>
        <div>
          <img
            src="/giancarlo-spano.jpg"
            alt="Dr. med. Giancarlo Spano"
            className="w-full max-w-md mx-auto lg:max-w-full rounded-sm object-cover shadow-sm"
          />
        </div>

        <div>
          <h2 className="text-3xl md:text-5xl leading-tight font-serif text-slate-900 mb-6">
            Dr. med. Giancarlo Spano
          </h2>

          <p className="text-xl md:text-2xl text-sky-700 mb-8 md:mb-10">
            Facharzt für Kardiologie und Innere Medizin FMH
          </p>

          <div className="space-y-6 text-base md:text-lg leading-7 md:leading-8 text-neutral-700">
            <p>
              Dr. med. Giancarlo Spano ist Facharzt für Kardiologie mit besonderem Schwerpunkt auf moderner kardialer Bildgebung.
            </p>

            <p>
              Seine klinische Tätigkeit umfasst die umfassende Betreuung kardiologischer Patientinnen und Patienten sowie die Durchführung und Befundung fortschrittlicher kardialer CT- und MRT-Untersuchungen.
            </p>

            <p>
              Die Verbindung von klinischer Kardiologie und hochpräziser Bildgebung steht dabei im Zentrum seiner Tätigkeit.
            </p>
          </div>
        </div>
      </section>
{/* Sprachkenntnisse */}
<section id="sprachen" className="scroll-mt-40 py-16 md:py-20 bg-white">
  <div className="max-w-5xl mx-auto px-6">
    <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-10 text-center">
      Sprachkenntnisse
    </h3>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="border border-neutral-200 rounded-2xl p-6">
        <p className="text-lg text-slate-700 leading-relaxed">
          Deutsch 
        </p>
      </div>

      <div className="border border-neutral-200 rounded-2xl p-6">
        <p className="text-lg text-slate-700 leading-relaxed">
          Französisch 
        </p>
      </div>

      <div className="border border-neutral-200 rounded-2xl p-6">
        <p className="text-lg text-slate-700 leading-relaxed">
          Italienisch 
        </p>
      </div>

      <div className="border border-neutral-200 rounded-2xl p-6">
        <p className="text-lg text-slate-700 leading-relaxed">
          Englisch 
        </p>
      </div>
    </div>
  </div>
</section>
      {/* Kardiale Bildgebung */}
      <section 
  id="bildgebung"
  className="scroll-mt-10 bg-neutral-50 py-16 md:py-24 border-y border-neutral-200"
>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h3 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6 md:mb-8">
              Kardiale Bildgebung
            </h3>

            <p className="text-base md:text-lg leading-7 md:leading-8 text-neutral-700">
              Die moderne kardiale Bildgebung ermöglicht eine präzise und nicht invasive Beurteilung verschiedener Herz- und Kreislauferkrankungen.
            </p>

            <p className="text-base md:text-lg leading-7 md:leading-8 text-neutral-700 mt-6">
              Die Untersuchungen werden persönlich durch Dr. med. Giancarlo Spano durchgeführt am Spital Thun sowie am Hôpital neuchâtelois in Neuchâtel in enger Zusammenarbeit mit den jeweiligen radiologischen Instituten.
            </p>

            <p className="text-base md:text-lg leading-7 md:leading-8 text-neutral-700 mt-6">
             
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20">
            <div className="bg-white p-6 md:p-6 md:p-10 rounded-3xl shadow-sm border border-neutral-100">
              <h4 className="text-2xl md:text-3xl font-serif text-sky-700 mb-6 md:mb-8">
                Kardiale CT
              </h4>

              <p className="text-neutral-700 leading-8 mb-6">
                Die kardiale Computertomographie ermöglicht eine hochpräzise Darstellung der Herzkranzgefässe.
              </p>

              <ul className="space-y-3 text-neutral-700 leading-7 list-disc pl-5">
                <li>Ausschluss relevanter Koronarverengungen</li>
                <li>Beurteilung koronarer Kalkablagerungen</li>
                <li>Nicht invasive Abklärung von Brustschmerzen</li>
                <li>Hohe diagnostische Genauigkeit</li>
              </ul>
            </div>

            <div className="bg-white p-6 md:p-6 md:p-10 rounded-3xl shadow-sm border border-neutral-100">
              <h4 className="text-2xl md:text-3xl font-serif text-sky-700 mb-6 md:mb-8">
                Kardiale MRT
              </h4>

              <p className="text-neutral-700 leading-8 mb-6">
                Die kardiale Magnetresonanztomographie erlaubt eine detaillierte Analyse der Herzfunktion und des Herzmuskels.
              </p>

              <ul className="space-y-3 text-neutral-700 leading-7 list-disc pl-5">
                <li>Kardiomyopathien</li>
                <li>Myokarditis</li>
                <li>Herzinsuffizienz</li>
                <li>Keine Strahlenbelastung</li>
                <li>Präzise funktionelle Analyse</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Kardiologie */}
      <section id="kardiologie" className="scroll-mt-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h3 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6 md:mb-8">
              Kardiologie in Thun
            </h3>

            <p className="text-base md:text-lg leading-7 md:leading-8 text-neutral-700">
              Im Kardiologie Aarezentrum in Thun bietet Dr. med. Giancarlo Spano ein breites Spektrum moderner kardiologischer Diagnostik und Betreuung an.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              'Konsiliarische Beratungen',
              'Check-up und Prävention',
              'Verlaufskontrollen bei Herzerkrankungen',
              'Nachkontrollen nach Herzoperationen',
              'Präoperative kardiologische Abklärungen',
              'Echokardiographie inkl. Doppler und Strain',
              'Transösophageale Echokardiographie',
              'Ruhe- und Belastungs-EKG',
              'Abklärung von Herzrhythmusstörungen',
              '24-Stunden-Blutdruckmessung',
              'Kontrolle von Schrittmachern und ICD',
              'Herzinsuffizienz-Sprechstunde/Beratung',
            ].map((item) => (
              <div
                key={item}
                className="border border-neutral-200 rounded-3xl p-6 md:p-8 hover:border-sky-300 transition-all"
              >
                <p className="text-base md:text-lg leading-7 text-neutral-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* Beruflicher Werdegang */}
<section
  id="werdegang"
  className="scroll-mt-5 bg-neutral-50 py-16 md:py-24 border-y border-neutral-200"
>
  <div className="max-w-5xl mx-auto px-6">
    <div className="text-center mb-16">
      <h3 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6">
        Beruflicher Werdegang
      </h3>

      <p className="text-lg text-slate-600 leading-relaxed">
        Klinische Tätigkeit und Spezialisierung im Bereich der allgemeinen
        Kardiologie und kardialen Bildgebung.
      </p>
    </div>

    <div className="space-y-8">

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">seit 2026</p>
        <p className="text-slate-800 leading-relaxed">
          Herzspezialist in der Praxis Kardiologie Aarezentrum, Thun
        </p>
      </div>

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">seit 2024</p>
        <p className="text-slate-800 leading-relaxed">
          Leitender Arzt Kardiologie, Schwerpunkt Kardiale Bildgebung,
          Spital STS AG Thun, Schweiz
        </p>
      </div>

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">seit 2024</p>
        <p className="text-slate-800 leading-relaxed">
          Leitender Arzt Kardiologie, Kantonsspital Neuenburg, Schweiz
        </p>
      </div>

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">2023 – 2026</p>
        <p className="text-slate-800 leading-relaxed">
          Oberarzt, Universitätsklinik für Kardiologie,
          Inselspital Bern, Schweiz
        </p>
      </div>

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">2021 – 2023</p>
        <p className="text-slate-800 leading-relaxed">
          Oberarzt Kardiologie, Schwerpunkt Kardiale Bildgebung,
          Spital STS AG Thun, Schweiz
        </p>
      </div>

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">2020 – 2023</p>
        <p className="text-slate-800 leading-relaxed">
          Stv. Oberarzt, Universitätsklinik für Kardiologie,
          Inselspital Bern, Schweiz
        </p>
      </div>

      <div className="pt-6">
        <h4 className="text-2xl font-serif text-slate-900 mb-6">
          Assistenzarzt
        </h4>
      </div>

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">2017 – 2020</p>
        <p className="text-slate-800 leading-relaxed">
          Universitätsklinik für Kardiologie,
          Inselspital Bern, Schweiz
        </p>
      </div>

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">2015 – 2017</p>
        <p className="text-slate-800 leading-relaxed">
          Allgemeine Innere Medizin,
          Universitätsspital CHUV Lausanne, Schweiz
        </p>
      </div>

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">2013 – 2015</p>
        <p className="text-slate-800 leading-relaxed">
          Allgemeine Innere Medizin,
          Ensemble hospitalier de la Côte, Morges, Schweiz
        </p>
      </div>

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">2013</p>
        <p className="text-slate-800 leading-relaxed">
          Allgemeine Innere Medizin,
          Kantonspital Jura, Delémont, Schweiz
        </p>
      </div>
    </div>
  </div>
</section>

{/* Studium und Weiterbildung */}
<section
  id="weiterbildung"
  className="scroll-mt-32 py-16 md:py-24"
>
  <div className="max-w-5xl mx-auto px-6">

    <div className="text-center mb-16">
      <h3 className="text-3xl md:text-5xl font-serif text-slate-900 mb-6">
        Studium und Weiterbildung
      </h3>
    </div>

    <div className="space-y-6">

      <div className="flex flex-col md:flex-row gap-4 border-b border-neutral-200 pb-6">
        <span className="text-red-700 font-semibold md:min-w-[90px]">
          2024
        </span>
        <p className="text-slate-700">
          EACVI Certification Cardiac CT Level III, Europa
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 border-b border-neutral-200 pb-6">
        <span className="text-red-700 font-semibold md:min-w-[90px]">
          2024
        </span>
        <p className="text-slate-700">
          EACVI Certification Cardiac MRI Level III, Europa
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 border-b border-neutral-200 pb-6">
        <span className="text-red-700 font-semibold md:min-w-[90px]">
          2023
        </span>
        <p className="text-slate-700">
          Doktor der Medizin, Medizinische Fakultät,
          Universität Bern, Schweiz
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 border-b border-neutral-200 pb-6">
        <span className="text-red-700 font-semibold md:min-w-[90px]">
          2023
        </span>
        <p className="text-slate-700">
          Allgemeine Innere Medizin,
          eidgenössischer Facharzttitel (FMH), Schweiz
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 border-b border-neutral-200 pb-6">
        <span className="text-red-700 font-semibold md:min-w-[90px]">
          2021
        </span>
        <p className="text-slate-700">
          Kardiologie,
          eidgenössischer Facharzttitel (FMH), Schweiz
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 border-b border-neutral-200 pb-6">
        <span className="text-red-700 font-semibold md:min-w-[90px]">
          2012
        </span>
        <p className="text-slate-700">
          Eidgenössisches Diplom Humanmedizin, Schweiz
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 border-b border-neutral-200 pb-6">
        <span className="text-red-700 font-semibold md:min-w-[90px]">
          2011
        </span>
        <p className="text-slate-700">
          Master an der Universität Lausanne,
          Fachbereich Medizin, Schweiz
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <span className="text-red-700 font-semibold md:min-w-[90px]">
          2009
        </span>
        <p className="text-slate-700">
          Bachelor an der Universität Lausanne,
          Fachbereich Medizin, Schweiz
        </p>
      </div>

    </div>
  </div>
</section>

{/* Mitgliedschaften */}
<section
  id="mitgliedschaften"
  className="scroll-mt-32 bg-neutral-50 py-16 md:py-20 border-y border-neutral-200"
>
  <div className="max-w-4xl mx-auto px-6 text-center">

    <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-10">
      Mitgliedschaften
    </h3>

    <div className="space-y-4 text-lg text-slate-700">
      <p>Swiss Medical Association (FMH)</p>
      <p>Swiss Society of Cardiology (SGK)</p>
      <p>European Society of Cardiology (ESC)</p>
    </div>

  </div>
</section>
      {/* Standorte */}
      <section id="standorte" className="scroll-mt-18 bg-neutral-50 py-16 md:py-24 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-5xl font-serif text-center text-slate-900 mb-20">
            Standorte
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            <div className="bg-white p-6 md:p-10 rounded-3xl border border-neutral-100 shadow-sm">
              <h4 className="text-xl md:text-2xl font-serif text-slate-900 mb-4">Thun</h4>
              <p className="text-neutral-700 leading-7">
                Kardiologie Aarezentrum
              </p>
            </div>

            <div className="bg-white p-6 md:p-10 rounded-3xl border border-neutral-100 shadow-sm">
              <h4 className="text-xl md:text-2xl font-serif text-slate-900 mb-4">Spital Thun</h4>
              <p className="text-neutral-700 leading-7">
                Kardiale CT- und MRT-Bildgebung
              </p>
            </div>

            <div className="bg-white p-6 md:p-10 rounded-3xl border border-neutral-100 shadow-sm">
              <h4 className="text-xl md:text-2xl font-serif text-slate-900 mb-4">Neuchâtel-RHNe</h4>
              <p className="text-neutral-700 leading-7">
                Kardiale CT- und MRT-Bildgebung
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="scroll-mt-32 py-16 md:py-24"> 
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-5xl font-serif text-slate-900 mb-10">
            Kontakt
          </h3>

          <p className="text-base md:text-lg leading-7 md:leading-8 text-neutral-700 mb-10">
            Für Terminvereinbarungen oder weitere Informationen freuen wir uns über Ihre Kontaktaufnahme.
          </p>
<p className="text-lg text-neutral-800 mb-10">
  Telefon: +41 33 223 04 48
</p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            <a
              href="mailto:giancarlo.spano@hin.ch"
              className="px-6 md:px-8 py-4 bg-sky-700 text-white rounded-full hover:bg-sky-800 transition-all"
            >
              E-Mail senden
            </a>

            <a
              href="https://www.kardiologie-aarezentrum.ch"
              target="_blank"
              className="px-6 md:px-8 py-4 border border-sky-700 text-sky-700 rounded-full hover:bg-sky-700 hover:text-white transition-all"
            >
              Kardiologie Aarezentrum besuchen
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-500">
          <p>© 2026 Dr. med. Giancarlo Spano</p>

          <div className="flex gap-6">
            <a href="#">Impressum</a>
            <a href="#">Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
