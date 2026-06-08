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
    Cardiologie & imagerie cardiaque 
  </p>
</div>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#startseite" className="hover:text-sky-700 transition-colors">
              Accueil
            </a>
            <a href="#bildgebung" className="hover:text-sky-700 transition-colors">
              Imagerie cardiaque
            </a>
            <a href="#kardiologie" className="hover:text-sky-700 transition-colors">
              Cardiologie
            </a>
            <a href="#werdegang" className="hover:text-sky-700 transition-colors">
              À propos
            </a>
            <a href="#standorte" className="hover:text-sky-700 transition-colors">
              Consultations
            </a>
            <a href="#kontakt" className="hover:text-sky-700 transition-colors">
              Contact
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
      Accueil
    </a>

    <a href="#bildgebung" onClick={() => setMenuOpen(false)}>
      Imagerie cardiaque
    </a>

    <a href="#kardiologie" onClick={() => setMenuOpen(false)}>
      Cardiologie
    </a>

    <a href="#werdegang" onClick={() => setMenuOpen(false)}>
      À propos
    </a>

    <a href="#kontakt" onClick={() => setMenuOpen(false)}>
      Contact
    </a>

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
            Spécialiste FMH en cardiologie et médecine interne générale
          </p>

          <div className="space-y-6 text-base md:text-lg leading-7 md:leading-8 text-neutral-700">
            <p>
              Le Dr. med. Giancarlo Spano est spécialiste FMH en cardiologie, avec une expertise particulière en imagerie cardiaque moderne.
            </p>

            <p>
              Son activité clinique comprend la prise en charge globale des patients atteints de maladies cardiovasculaires ainsi que la réalisation et l’interprétation d’examens avancés de tomodensitométrie cardiaque (CT) et d’imagerie par résonance magnétique cardiaque (IRM).
            </p>

            <p>
              La combinaison d’une cardiologie clinique moderne et d’une imagerie de haute précision constitue le fondement de son approche médicale, permettant un diagnostic précis et une prise en charge personnalisée.
            </p>
          </div>
        </div>
      </section>
{/* Sprachkenntnisse */}
<section id="sprachen" className="scroll-mt-40 py-16 md:py-20 bg-white">
  <div className="max-w-5xl mx-auto px-6">
    <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-10 text-center">
      Langues parlées
    </h3>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="border border-neutral-200 rounded-2xl p-6">
        <p className="text-lg text-slate-700 leading-relaxed">
          Français 
        </p>
      </div>

      <div className="border border-neutral-200 rounded-2xl p-6">
        <p className="text-lg text-slate-700 leading-relaxed">
          Allemand  
        </p>
      </div>

      <div className="border border-neutral-200 rounded-2xl p-6">
        <p className="text-lg text-slate-700 leading-relaxed">
          Italien 
        </p>
      </div>

      <div className="border border-neutral-200 rounded-2xl p-6">
        <p className="text-lg text-slate-700 leading-relaxed">
          Anglais 
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
              Imagerie cardiaques 
            </h3>

            <p className="text-base md:text-lg leading-7 md:leading-8 text-neutral-700">
               L’imagerie cardiaque moderne permet une évaluation précise, fiable et non invasive d’un large éventail de maladies cardiovasculaires.
            </p>

            <p className="text-base md:text-lg leading-7 md:leading-8 text-neutral-700 mt-6">
              Les examens sont réalisés personnellement par le Dr Giancarlo Spano à l'hôpital de Thoune ainsi qu'à l'Hôpital cantonal de Neuchâtel, en étroite collaboration avec les services de radiologie respectifs.
            </p>

            <p className="text-base md:text-lg leading-7 md:leading-8 text-neutral-700 mt-6">
             
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20">
            <div className="bg-white p-6 md:p-6 md:p-10 rounded-3xl shadow-sm border border-neutral-100">
              <h4 className="text-2xl md:text-3xl font-serif text-sky-700 mb-6 md:mb-8">
                CT cardiaque
              </h4>

              <p className="text-neutral-700 leading-8 mb-6">
                  La tomodensitométrie cardiaque (CT cardiaque) permet une analyse hautement précise et non invasive des artères coronaires.
              </p>

              <ul className="space-y-3 text-neutral-700 leading-7 list-disc pl-5">
                <li>Exclusion de rétrécissements coronariens significatifs</li>
                <li>Évaluation des calcifications coronariennes</li>
                <li>Bilan non invasif des douleurs thoraciques</li>
                <li>Grande précision diagnostique</li>
              </ul>
            </div>

            <div className="bg-white p-6 md:p-6 md:p-10 rounded-3xl shadow-sm border border-neutral-100">
              <h4 className="text-2xl md:text-3xl font-serif text-sky-700 mb-6 md:mb-8">
                IRM cardiaque
              </h4>

              <p className="text-neutral-700 leading-8 mb-6">
                  L’imagerie par résonance magnétique cardiaque (IRM cardiaque) permet une analyse détaillée de la fonction cardiaque et du muscle cardiaque.
              </p>

              <ul className="space-y-3 text-neutral-700 leading-7 list-disc pl-5">
                <li>Cardiomyopathies</li>
                <li>Myocardites</li>
                <li>Insuffisance cardiaque</li>
                <li>Absence d’exposition aux rayonnements ionisants</li>
                <li>Analyse fonctionnelle précise</li>
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
                Cardiologie à Thoune
            </h3>

            <p className="text-base md:text-lg leading-7 md:leading-8 text-neutral-700">
              Au sein du cabinet Kardiologie Aarezentrum à Thoune, le Dr méd. Giancarlo Spano propose une large gamme de prestations en cardiologie moderne, incluant le diagnostic, le suivi et la prise en charge des maladies cardiovasculaires.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              'Consultations cardiologiques spécialisées',
              'Check-up et prévention',
              'Suivi des maladies cardiaques',
              'Contrôles post-opératoires',
              'Évaluation pré-opératoire',
              'Échocardiographie avec Doppler et Strain',
              'Échocardiographie transœsophagienne',
              'ECG de repos et d’effort',
              'Bilan des troubles du rythme cardiaque',
              'Mesure ambulatoire de la pression artérielle sur 24 heures',
              'Contrôle des stimulateurs cardiaques et des défibrillateurs implantables (ICD)',
              'Consultation et prise en charge de l’insuffisance cardiaque',
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
        Parcours professionnel
      </h3>

      <p className="text-lg text-slate-600 leading-relaxed">
        Activité clinique et spécialisation dans le domaine de la cardiologie générale et de l'imagerie cardiaque avancée
      </p>
    </div>

    <div className="space-y-8">

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">seit 2026</p>
        <p className="text-slate-800 leading-relaxed">
          Cardiologue indépendant dans le cabinet Kardiologie Aarezentrum, Thoune
        </p>
      </div>

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">seit 2024</p>
        <p className="text-slate-800 leading-relaxed">
          Médecin chef adjoint en cardiologie, Spécialité Imagerie cardiaque,
          Spital STS AG Thun, Suisse
        </p>
      </div>

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">seit 2024</p>
        <p className="text-slate-800 leading-relaxed">
          Médecin chef adjoint en cardiologie, Spécialité Imagerie cardiaque, Hopital cantonal de neuchâtel RHNe, Suisse
        </p>
      </div>

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">2023 – 2026</p>
        <p className="text-slate-800 leading-relaxed">
          Chef de clinique en cardiologie, hopital universitaire,
          Inselspital Bern, Suisse
        </p>
      </div>

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">2021 – 2023</p>
        <p className="text-slate-800 leading-relaxed">
          Chef de clinique en cardiologie, Spécialité Imagerie cardiaque,
          Spital STS AG Thun, Suisse
        </p>
      </div>

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">2020 – 2023</p>
        <p className="text-slate-800 leading-relaxed">
          Chef de clinique adjoint en cardiologie, hopital universitaire,
          Inselspital Bern, Suisse
        </p>
      </div>

      <div className="pt-6">
        <h4 className="text-2xl font-serif text-slate-900 mb-6">
          Médecin assistant
        </h4>
      </div>

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">2017 – 2020</p>
        <p className="text-slate-800 leading-relaxed">
         Hopital universitaire, 
          Inselspital Bern, Suisse
        </p>
      </div>

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">2015 – 2017</p>
        <p className="text-slate-800 leading-relaxed">
          Médecine interne,
          hopital universitaire, CHUV Lausanne, Suisse
        </p>
      </div>

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">2013 – 2015</p>
        <p className="text-slate-800 leading-relaxed">
          Médecine interne,
          Ensemble hospitalier de la Côte, Morges, Suisse
        </p>
      </div>

      <div className="border-l-2 border-red-700 pl-6">
        <p className="text-red-700 font-semibold">2013</p>
        <p className="text-slate-800 leading-relaxed">
          Médecine interne,
          Hopital cantonal du Jura, Delémont, Suisse
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
        Études et formations
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
          Doctorat en médecine humaine, faculté de médecine,
          université de Bern, Suisse
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 border-b border-neutral-200 pb-6">
        <span className="text-red-700 font-semibold md:min-w-[90px]">
          2023
        </span>
        <p className="text-slate-700">
          Spécialiste en Médecine interne (FMH), Suisse
    
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 border-b border-neutral-200 pb-6">
        <span className="text-red-700 font-semibold md:min-w-[90px]">
          2021
        </span>
        <p className="text-slate-700">
          Spécialiste en cardiologie (FMH), Suisse
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 border-b border-neutral-200 pb-6">
        <span className="text-red-700 font-semibold md:min-w-[90px]">
          2012
        </span>
        <p className="text-slate-700">
          Diplôme de Médecine humaine, université de Lausanne, Suisse
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 border-b border-neutral-200 pb-6">
        <span className="text-red-700 font-semibold md:min-w-[90px]">
          2011
        </span>
        <p className="text-slate-700">
          Master en médecine humaine, université de Lausanne,
          Suisse
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <span className="text-red-700 font-semibold md:min-w-[90px]">
          2009
        </span>
        <p className="text-slate-700">
          Bachelor en médecine humaine, université de Lausanne,
          Suisse
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
      Afiliations
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
            Consultations
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
            <div className="bg-white p-6 md:p-10 rounded-3xl border border-neutral-100 shadow-sm">
              <h4 className="text-xl md:text-2xl font-serif text-slate-900 mb-4">Thoune</h4>
              <p className="text-neutral-700 leading-7">
                Kardiologie Aarezentrum
              </p>
            </div>

            <div className="bg-white p-6 md:p-10 rounded-3xl border border-neutral-100 shadow-sm">
              <h4 className="text-xl md:text-2xl font-serif text-slate-900 mb-4">Hopital de Thoune</h4>
              <p className="text-neutral-700 leading-7">
                Imagerise cardiaque avancée CT et IRM
              </p>
            </div>

            <div className="bg-white p-6 md:p-10 rounded-3xl border border-neutral-100 shadow-sm">
              <h4 className="text-xl md:text-2xl font-serif text-slate-900 mb-4">Neuchâtel-RHNe</h4>
              <p className="text-neutral-700 leading-7">
                Imagerise cardiaque avancée CT et IRM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="scroll-mt-32 py-16 md:py-24"> 
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-5xl font-serif text-slate-900 mb-10">
            Contact
          </h3>

          <p className="text-base md:text-lg leading-7 md:leading-8 text-neutral-700 mb-10">
            N'hésitez pas à nous contacter pour prendre rendez-vous ou obtenir de plus amples informations.
          </p>
<p className="text-lg text-neutral-800 mb-10">
  Telephone: +41 33 223 04 48
</p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            <a
              href="mailto:giancarlo.spano@hin.ch"
              className="px-6 md:px-8 py-4 bg-sky-700 text-white rounded-full hover:bg-sky-800 transition-all"
            >
              Envoyer un e-mail
            </a>

            <a
              href="https://www.kardiologie-aarezentrum.ch"
              target="_blank"
              className="px-6 md:px-8 py-4 border border-sky-700 text-sky-700 rounded-full hover:bg-sky-700 hover:text-white transition-all"
            >
              Visiter Kardiologie Aarezentrum
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-500">
          <p>© 2026 Dr. med. Giancarlo Spano</p>

          <div className="flex gap-6">
            <a href="#">Mentions légales</a>
            <a href="#">Protection des données</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
