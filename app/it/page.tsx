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
    Cardiologia & Imaging Cardiaco
  </p>
</div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#startseite" className="hover:text-sky-700 transition-colors">
              Home
            </a>
            <a href="#bildgebung" className="hover:text-sky-700 transition-colors">
              Imaging Cardiaco
            </a>
            <a href="#kardiologie" className="hover:text-sky-700 transition-colors">
              Cardiologia
            </a>
            <a href="#werdegang" className="hover:text-sky-700 transition-colors">
              Chi sono
            </a>
            <a href="#standorte" className="hover:text-sky-700 transition-colors">
              Consultazioni
            </a>
            <a href="#kontakt" className="hover:text-sky-700 transition-colors">
              Contatto
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
      Home
    </a>

    <a href="#bildgebung" onClick={() => setMenuOpen(false)}>
      Imaging Cardiaco
    </a>

    <a href="#kardiologie" onClick={() => setMenuOpen(false)}>
      Cardiologia
    </a>

    <a href="#werdegang" onClick={() => setMenuOpen(false)}>
      Chi sono
    </a>

    <a href="#kontakt" onClick={() => setMenuOpen(false)}>
      Contatto
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
            Specialista in cardiologia e medicina interna FMH
          </p>

          <div className="space-y-6 text-base md:text-lg leading-7 md:leading-8 text-neutral-700">
            <p>
              Il Dr. med. Giancarlo Spano è specialista FMH in cardiologia, con una particolare competenza nell’ambito della moderna diagnostica cardiaca per immagini.
            </p>

            <p>
               La sua attività clinica comprende la presa in carico completa dei pazienti affetti da patologie cardiovascolari, nonché l’esecuzione e l’interpretazione di esami avanzati di tomografia computerizzata cardiaca (TAC cardiaca) e di risonanza magnetica cardiaca (RM cardiaca).
            </p>

            <p>
              La combinazione tra cardiologia clinica moderna e diagnostica per immagini ad alta precisione costituisce il fondamento del suo approccio medico, consentendo diagnosi accurate e percorsi terapeutici personalizzati.
            </p>
          </div>
        </div>
      </section>
{/* Sprachkenntnisse */}
<section id="sprachen" className="scroll-mt-40 py-16 md:py-20 bg-white">
  <div className="max-w-5xl mx-auto px-6">
    <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-10 text-center">
      Lingue parlate
    </h3>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="border border-neutral-200 rounded-2xl p-6">
        <p className="text-lg text-slate-700 leading-relaxed">
          Italiano
        </p>
      </div>

      <div className="border border-neutral-200 rounded-2xl p-6">
        <p className="text-lg text-slate-700 leading-relaxed">
          Tedesco
        </p>
      </div>

      <div className="border border-neutral-200 rounded-2xl p-6">
        <p className="text-lg text-slate-700 leading-relaxed">
          Francese
        </p>
      </div>

      <div className="border border-neutral-200 rounded-2xl p-6">
        <p className="text-lg text-slate-700 leading-relaxed">
          Inglese 
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
              Diagnostica cardiaca per immagini
            </h3>

            <p className="text-base md:text-lg leading-7 md:leading-8 text-neutral-700">
               La moderna diagnostica cardiaca per immagini consente una valutazione precisa e non invasiva di numerose patologie cardiovascolari.
            </p>

            <p className="text-base md:text-lg leading-7 md:leading-8 text-neutral-700 mt-6">
               Gli esami vengono eseguiti personalmente dal Dr. med. Giancarlo Spano presso l’Ospedale di Thun e l’Hôpital neuchâtelois di Neuchâtel, in stretta collaborazione con i rispettivi servizi di radiologia.
            </p>

            <p className="text-base md:text-lg leading-7 md:leading-8 text-neutral-700 mt-6">
             
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20">
            <div className="bg-white p-6 md:p-6 md:p-10 rounded-3xl shadow-sm border border-neutral-100">
              <h4 className="text-2xl md:text-3xl font-serif text-sky-700 mb-6 md:mb-8">
                TC cardiaca
              </h4>

              <p className="text-neutral-700 leading-8 mb-6">
                La tomografia computerizzata cardiaca (TC cardiaca) consente una visualizzazione altamente precisa delle arterie coronarie.
              </p>

              <ul className="space-y-3 text-neutral-700 leading-7 list-disc pl-5">
                <li>Esclusione di stenosi coronariche significative</li>
                <li>Valutazione delle calcificazioni coronariche</li>
                <li>Valutazione non invasiva del dolore toracico</li>
                <li>Alta precisione diagnostica</li>
              </ul>
            </div>

            <div className="bg-white p-6 md:p-6 md:p-10 rounded-3xl shadow-sm border border-neutral-100">
              <h4 className="text-2xl md:text-3xl font-serif text-sky-700 mb-6 md:mb-8">
                RM cardiaca
              </h4>

              <p className="text-neutral-700 leading-8 mb-6">
                 La risonanza magnetica cardiaca (RM cardiaca) consente un’analisi dettagliata della funzione cardiaca e del muscolo cardiaco.
              </p>

              <ul className="space-y-3 text-neutral-700 leading-7 list-disc pl-5">
                <li>Cardiomiopatie</li>
                <li>Miocardite</li>
                <li>Insufficienza cardiaca</li>
                <li>Assenza di esposizione alle radiazioni ionizzanti</li>
                <li>Analisi funzionale accurata</li>
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
              Cardiologia a Thun
            </h3>

            <p className="text-base md:text-lg leading-7 md:leading-8 text-neutral-700">
               Presso lo studio Kardiologie Aarezentrum di Thun, il Dr.med Giancarlo Spano offre un'ampia gamma di servizi di cardiologia moderna, che comprendono la diagnosi, la prevenzione e il follow-up delle malattie cardiovascolari.

            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              'Consultazione cardiologiche specialistiche',
              'Check-up cardiovascolare e prevenzione',
              'Controlli periodici delle patologie cardiache',
              'Follow-up dopo interventi cardiochirurgici o procedure interventistiche',
              'Valutazioni cardiologiche preoperatorie',
              'Ecocardiografia con Doppler e analisi dello strain, 3D',
              'Ecocardiografia transesofagea',
              'ECG a riposo e sotto sforzo',
              'Valutazione delle aritmie cardiache',
              'Monitoraggio della pressione arteriosa nelle 24 ore',
              'Controllo di pacemaker e defibrillatori impiantabili (ICD)',
              'Ambulatorio e consulenza per l’insufficienza cardiaca',
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
         Percorso professionale
      </h3>

      <p className="text-lg text-slate-600 leading-relaxed">
        Attività clinica e specializzazione nell’ambito della cardiologia generale e della diagnostica cardiaca per immagini.
      </p>
    </div>

    <div className="space-y-8">

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">seit 2026</p>
        <p className="text-slate-800 leading-relaxed">
          Cardiologo nello studio Kardiologie Aarezentrum in Thun, svizzera
        </p>
      </div>

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">seit 2024</p>
        <p className="text-slate-800 leading-relaxed">
          Medico dirigente di cardiologia, responsabile della diagnostica cardiaca per immagini,
    Spital STS AG Thun, Svizzera
        </p>
      </div>

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">seit 2024</p>
        <p className="text-slate-800 leading-relaxed">
          Medico dirigente di cardiologia, Ospedale Cantonale di Neuchâtel, Svizzera
        </p>
      </div>

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">2023 – 2026</p>
        <p className="text-slate-800 leading-relaxed">
          Medico capoclinica, Clinica universitaria di cardiologia,
    Inselspital Berna, Svizzera
        </p>
      </div>

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">2021 – 2023</p>
        <p className="text-slate-800 leading-relaxed">
          Medico capoclinica di cardiologia, responsabile della diagnostica cardiaca per immagini,
    Spital STS AG Thun, Svizzera
        </p>
      </div>

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">2020 – 2023</p>
        <p className="text-slate-800 leading-relaxed">
          Vice medico capoclinica, Clinica universitaria di cardiologia,
    Inselspital Berna, Svizzera
        </p>
      </div>

      <div className="pt-6">
        <h4 className="text-2xl font-serif text-slate-900 mb-6">
          Medico assistente
        </h4>
      </div>

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">2017 – 2020</p>
        <p className="text-slate-800 leading-relaxed">
          Clinica universitaria di cardiologia,
    Inselspital Berna, Svizzera
        </p>
      </div>

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">2015 – 2017</p>
        <p className="text-slate-800 leading-relaxed">
          Medicina interna generale,
    Ospedale universitario CHUV Losanna, Svizzera
        </p>
      </div>

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">2013 – 2015</p>
        <p className="text-slate-800 leading-relaxed">
          Medicina interna generale,
    Ensemble Hospitalier de la Côte, Morges, Svizzera
        </p>
      </div>

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">2013</p>
        <p className="text-slate-800 leading-relaxed">
          Medicina interna generale,
    Ospedale Cantonale del Giura, Delémont, Svizzera
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
        Formazione e specializzazione
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
          Dottore in medicina, Facoltà di Medicina,
    Università di Berna, Svizzera
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 border-b border-neutral-200 pb-6">
        <span className="text-red-700 font-semibold md:min-w-[90px]">
          2023
        </span>
        <p className="text-slate-700">
          Medicina interna generale,
    titolo federale di medico specialista (FMH), Svizzera
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 border-b border-neutral-200 pb-6">
        <span className="text-red-700 font-semibold md:min-w-[90px]">
          2021
        </span>
        <p className="text-slate-700">
          Cardiologia,
    titolo federale di medico specialista (FMH), Svizzera
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 border-b border-neutral-200 pb-6">
        <span className="text-red-700 font-semibold md:min-w-[90px]">
          2012
        </span>
        <p className="text-slate-700">
          Diploma federale in medicina umana, Svizzera
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 border-b border-neutral-200 pb-6">
        <span className="text-red-700 font-semibold md:min-w-[90px]">
          2011
        </span>
        <p className="text-slate-700">
          Master presso l’Università di Losanna,
    Facoltà di Medicina, Svizzera
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <span className="text-red-700 font-semibold md:min-w-[90px]">
          2009
        </span>
        <p className="text-slate-700">
          Bachelor presso l’Università di Losanna,
    Facoltà di Medicina, Svizzera
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
      Affiliazioni
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
            Consultazioni
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            <div className="bg-white p-6 md:p-10 rounded-3xl border border-neutral-100 shadow-sm">
              <h4 className="text-xl md:text-2xl font-serif text-slate-900 mb-4">Thun</h4>
              <p className="text-neutral-700 leading-7">
                Kardiologie Aarezentrum
              </p>
            </div>

            <div className="bg-white p-6 md:p-10 rounded-3xl border border-neutral-100 shadow-sm">
              <h4 className="text-xl md:text-2xl font-serif text-slate-900 mb-4">Ospedale Thun</h4>
              <p className="text-neutral-700 leading-7">
                Tomografia computerizzata e risonanza magnetica cardiaca
              </p>
            </div>

            <div className="bg-white p-6 md:p-10 rounded-3xl border border-neutral-100 shadow-sm">
              <h4 className="text-xl md:text-2xl font-serif text-slate-900 mb-4">Neuchâtel-RHNe</h4>
              <p className="text-neutral-700 leading-7">
                Tomografia computerizzata e risonanza magnetica cardiaca
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="scroll-mt-32 py-16 md:py-24"> 
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-5xl font-serif text-slate-900 mb-10">
            Contatto
          </h3>

          <p className="text-base md:text-lg leading-7 md:leading-8 text-neutral-700 mb-10">
            Per fissare un appuntamento o ricevere ulteriori informazioni, non esitate a contattarci.
          </p>
<p className="text-lg text-neutral-800 mb-10">
  Telefono: +41 33 223 04 48
</p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            <a
              href="mailto:giancarlo.spano@hin.ch"
              className="px-6 md:px-8 py-4 bg-sky-700 text-white rounded-full hover:bg-sky-800 transition-all"
            >
              Inviare E-Mail
            </a>

            <a
              href="https://www.kardiologie-aarezentrum.ch"
              target="_blank"
              className="px-6 md:px-8 py-4 border border-sky-700 text-sky-700 rounded-full hover:bg-sky-700 hover:text-white transition-all"
            >
              Visita il Kardiologie Aarezentrum
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-500">
          <p>© 2026 Dr. med. Giancarlo Spano</p>

          <div className="flex gap-6">
            <a href="#">Note legali</a>
            <a href="#">Protezione dei dati</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
