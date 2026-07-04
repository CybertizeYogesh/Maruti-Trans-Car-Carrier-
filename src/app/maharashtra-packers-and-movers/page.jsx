import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Maruti Trans Car Shifting in Maharashtra",
  description: "Find reliable and professional packers and movers in Car Shifting in Maharashtra. Get free quotes for home shifting, office shifting, and cargo transport.",
};

export default function LocationRoutePage() {
  const LINKS = [
  {
    "path": "/achalpur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Achalpur</strong>"
  },
  {
    "path": "/adawad-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Adawad</strong>"
  },
  {
    "path": "/agar-panchaitan-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Agar Panchaitan</strong>"
  },
  {
    "path": "/aheri-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Aheri</strong>"
  },
  {
    "path": "/ahiri-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ahiri</strong>"
  },
  {
    "path": "/ahmadnagar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ahmadnagar</strong>"
  },
  {
    "path": "/ahmadpur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ahmadpur</strong>"
  },
  {
    "path": "/ahmednagar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ahmednagar</strong>"
  },
  {
    "path": "/airoli-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Airoli</strong>"
  },
  {
    "path": "/ajra-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ajra</strong>"
  },
  {
    "path": "/akalkot-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Akalkot</strong>"
  },
  {
    "path": "/akkalkot-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Akkalkot</strong>"
  },
  {
    "path": "/akluj-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Akluj</strong>"
  },
  {
    "path": "/akola-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Akola</strong>"
  },
  {
    "path": "/akolner-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Akolner</strong>"
  },
  {
    "path": "/akot-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Akot</strong>"
  },
  {
    "path": "/akrani-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Akrani</strong>"
  },
  {
    "path": "/alandi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Alandi</strong>"
  },
  {
    "path": "/ale-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ale</strong>"
  },
  {
    "path": "/alibag-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Alibag</strong>"
  },
  {
    "path": "/alkuti-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Alkuti</strong>"
  },
  {
    "path": "/allapalli-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Allapalli</strong>"
  },
  {
    "path": "/amalner-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Amalner</strong>"
  },
  {
    "path": "/amarnath-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Amarnath</strong>"
  },
  {
    "path": "/ambad-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ambad</strong>"
  },
  {
    "path": "/ambajogai-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ambajogai</strong>"
  },
  {
    "path": "/ambarnath-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ambarnath</strong>"
  },
  {
    "path": "/ambegaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ambegaon</strong>"
  },
  {
    "path": "/amgaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Amgaon</strong>"
  },
  {
    "path": "/amravati-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Amravati</strong>"
  },
  {
    "path": "/amravati-division-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Amravati Division</strong>"
  },
  {
    "path": "/andura-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Andura</strong>"
  },
  {
    "path": "/anjangaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Anjangaon</strong>"
  },
  {
    "path": "/anjarle-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Anjarle</strong>"
  },
  {
    "path": "/anshing-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Anshing</strong>"
  },
  {
    "path": "/arag-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Arag</strong>"
  },
  {
    "path": "/arangaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Arangaon</strong>"
  },
  {
    "path": "/ardhapur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ardhapur</strong>"
  },
  {
    "path": "/argaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Argaon</strong>"
  },
  {
    "path": "/artist-village-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Artist Village</strong>"
  },
  {
    "path": "/arvi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Arvi</strong>"
  },
  {
    "path": "/ashta-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ashta</strong>"
  },
  {
    "path": "/ashti-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ashti</strong>"
  },
  {
    "path": "/asoda-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Asoda</strong>"
  },
  {
    "path": "/assaye-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Assaye</strong>"
  },
  {
    "path": "/astagaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Astagaon</strong>"
  },
  {
    "path": "/aundh-satara-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Aundh Satara</strong>"
  },
  {
    "path": "/aurangabad-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Aurangabad</strong>"
  },
  {
    "path": "/ausa-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ausa</strong>"
  },
  {
    "path": "/badnapur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Badnapur</strong>"
  },
  {
    "path": "/badnera-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Badnera</strong>"
  },
  {
    "path": "/bagewadi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bagewadi</strong>"
  },
  {
    "path": "/balapur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Balapur</strong>"
  },
  {
    "path": "/balapur-akola-district-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Balapur Akola district</strong>"
  },
  {
    "path": "/ballalpur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ballalpur</strong>"
  },
  {
    "path": "/ballard-estate-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ballard Estate</strong>"
  },
  {
    "path": "/ballarpur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ballarpur</strong>"
  },
  {
    "path": "/banda-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Banda</strong>"
  },
  {
    "path": "/baner-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Baner</strong>"
  },
  {
    "path": "/bankot-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bankot</strong>"
  },
  {
    "path": "/barsi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Barsi</strong>"
  },
  {
    "path": "/basmat-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Basmat</strong>"
  },
  {
    "path": "/basmath-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Basmath</strong>"
  },
  {
    "path": "/bavdhan-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bavdhan</strong>"
  },
  {
    "path": "/bawanbir-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bawanbir</strong>"
  },
  {
    "path": "/beed-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Beed</strong>"
  },
  {
    "path": "/bhadgaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhadgaon</strong>"
  },
  {
    "path": "/bhandara-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhandara</strong>"
  },
  {
    "path": "/bhandardara-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhandardara</strong>"
  },
  {
    "path": "/bhigvan-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhigvan</strong>"
  },
  {
    "path": "/bhiwandi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhiwandi</strong>"
  },
  {
    "path": "/bhiwapur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhiwapur</strong>"
  },
  {
    "path": "/bhokar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhokar</strong>"
  },
  {
    "path": "/bhokardan-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhokardan</strong>"
  },
  {
    "path": "/bhoom-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhoom</strong>"
  },
  {
    "path": "/bhor-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhor</strong>"
  },
  {
    "path": "/bhudgaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhudgaon</strong>"
  },
  {
    "path": "/bhugaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhugaon</strong>"
  },
  {
    "path": "/bhum-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhum</strong>"
  },
  {
    "path": "/bhusaval-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhusaval</strong>"
  },
  {
    "path": "/bhusawal-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhusawal</strong>"
  },
  {
    "path": "/bid-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bid</strong>"
  },
  {
    "path": "/bijur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bijur</strong>"
  },
  {
    "path": "/bilashi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bilashi</strong>"
  },
  {
    "path": "/biloli-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Biloli</strong>"
  },
  {
    "path": "/boisar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Boisar</strong>"
  },
  {
    "path": "/borgaon-manju-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Borgaon Manju</strong>"
  },
  {
    "path": "/borivali-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Borivali</strong>"
  },
  {
    "path": "/brahmapuri-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Brahmapuri</strong>"
  },
  {
    "path": "/buldana-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Buldana</strong>"
  },
  {
    "path": "/buldhana-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Buldhana</strong>"
  },
  {
    "path": "/chakan-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chakan</strong>"
  },
  {
    "path": "/chakur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chakur</strong>"
  },
  {
    "path": "/chalisgaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chalisgaon</strong>"
  },
  {
    "path": "/chanda-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chanda</strong>"
  },
  {
    "path": "/chandgad-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chandgad</strong>"
  },
  {
    "path": "/chandor-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chandor</strong>"
  },
  {
    "path": "/chandrapur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chandrapur</strong>"
  },
  {
    "path": "/chandur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chandur</strong>"
  },
  {
    "path": "/chandur-bazar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chandur Bazar</strong>"
  },
  {
    "path": "/chausala-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chausala</strong>"
  },
  {
    "path": "/chicholi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chicholi</strong>"
  },
  {
    "path": "/chichondi-patil-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chichondi Patil</strong>"
  },
  {
    "path": "/chikhli-buldhana-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chikhli Buldhana</strong>"
  },
  {
    "path": "/chikhli-jalna-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chikhli Jalna</strong>"
  },
  {
    "path": "/chimur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chimur</strong>"
  },
  {
    "path": "/chinchani-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chinchani</strong>"
  },
  {
    "path": "/chiplun-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chiplun</strong>"
  },
  {
    "path": "/chopda-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chopda</strong>"
  },
  {
    "path": "/dabhol-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dabhol</strong>"
  },
  {
    "path": "/daddi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Daddi</strong>"
  },
  {
    "path": "/dahanu-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dahanu</strong>"
  },
  {
    "path": "/dahivel-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dahivel</strong>"
  },
  {
    "path": "/dapoli-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dapoli</strong>"
  },
  {
    "path": "/darwha-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Darwha</strong>"
  },
  {
    "path": "/daryapur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Daryapur</strong>"
  },
  {
    "path": "/dattapur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dattapur</strong>"
  },
  {
    "path": "/daulatabad-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Daulatabad</strong>"
  },
  {
    "path": "/daund-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Daund</strong>"
  },
  {
    "path": "/deccan-gymkhana-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Deccan Gymkhana</strong>"
  },
  {
    "path": "/deglur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Deglur</strong>"
  },
  {
    "path": "/dehu-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dehu</strong>"
  },
  {
    "path": "/deolali-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Deolali</strong>"
  },
  {
    "path": "/deolapar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Deolapar</strong>"
  },
  {
    "path": "/deoli-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Deoli</strong>"
  },
  {
    "path": "/deoni-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Deoni</strong>"
  },
  {
    "path": "/deulgaon-raja-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Deulgaon Raja</strong>"
  },
  {
    "path": "/devrukh-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Devrukh</strong>"
  },
  {
    "path": "/dharangaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dharangaon</strong>"
  },
  {
    "path": "/dharavi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dharavi</strong>"
  },
  {
    "path": "/dharmabad-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dharmabad</strong>"
  },
  {
    "path": "/dharur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dharur</strong>"
  },
  {
    "path": "/dhawalpuri-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dhawalpuri</strong>"
  },
  {
    "path": "/dhule-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dhule</strong>"
  },
  {
    "path": "/dhulia-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dhulia</strong>"
  },
  {
    "path": "/dighori-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dighori</strong>"
  },
  {
    "path": "/diglur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Diglur</strong>"
  },
  {
    "path": "/digras-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Digras</strong>"
  },
  {
    "path": "/dindori-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dindori</strong>"
  },
  {
    "path": "/diveagar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Diveagar</strong>"
  },
  {
    "path": "/dombivli-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dombivli</strong>"
  },
  {
    "path": "/dondaicha-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dondaicha</strong>"
  },
  {
    "path": "/dongri-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dongri</strong>"
  },
  {
    "path": "/dudhani-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dudhani</strong>"
  },
  {
    "path": "/durgapur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Durgapur</strong>"
  },
  {
    "path": "/durgapur,-chandrapur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Durgapur, Chandrapur</strong>"
  },
  {
    "path": "/erandol-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Erandol</strong>"
  },
  {
    "path": "/faizpur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Faizpur</strong>"
  },
  {
    "path": "/fort-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Fort</strong>"
  },
  {
    "path": "/gadchiroli-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gadchiroli</strong>"
  },
  {
    "path": "/gadhinglaj-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gadhinglaj</strong>"
  },
  {
    "path": "/gangakher-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gangakher</strong>"
  },
  {
    "path": "/gangapur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gangapur</strong>"
  },
  {
    "path": "/ganpatipule-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ganpatipule</strong>"
  },
  {
    "path": "/gevrai-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gevrai</strong>"
  },
  {
    "path": "/ghargaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ghargaon</strong>"
  },
  {
    "path": "/ghatanji-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ghatanji</strong>"
  },
  {
    "path": "/ghoti-budrukh-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ghoti Budrukh</strong>"
  },
  {
    "path": "/ghugus-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ghugus</strong>"
  },
  {
    "path": "/girgaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Girgaon</strong>"
  },
  {
    "path": "/gondia-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gondia</strong>"
  },
  {
    "path": "/gondiya-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gondiya</strong>"
  },
  {
    "path": "/guhagar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Guhagar</strong>"
  },
  {
    "path": "/hadgaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Hadgaon</strong>"
  },
  {
    "path": "/halkarni-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Halkarni</strong>"
  },
  {
    "path": "/harangul-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Harangul</strong>"
  },
  {
    "path": "/harnai-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Harnai</strong>"
  },
  {
    "path": "/helwak-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Helwak</strong>"
  },
  {
    "path": "/hinganghat-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Hinganghat</strong>"
  },
  {
    "path": "/hingoli-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Hingoli</strong>"
  },
  {
    "path": "/hirapur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Hirapur</strong>"
  },
  {
    "path": "/hirapur-hamesha-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Hirapur Hamesha</strong>"
  },
  {
    "path": "/hotgi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Hotgi</strong>"
  },
  {
    "path": "/ichalkaranji-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ichalkaranji</strong>"
  },
  {
    "path": "/igatpuri-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Igatpuri</strong>"
  },
  {
    "path": "/indapur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Indapur</strong>"
  },
  {
    "path": "/jaisingpur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jaisingpur</strong>"
  },
  {
    "path": "/jaitapur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jaitapur</strong>"
  },
  {
    "path": "/jakhangaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jakhangaon</strong>"
  },
  {
    "path": "/jalgaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jalgaon</strong>"
  },
  {
    "path": "/jalgaon-jamod-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jalgaon Jamod</strong>"
  },
  {
    "path": "/jalkot-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jalkot</strong>"
  },
  {
    "path": "/jalna-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jalna</strong>"
  },
  {
    "path": "/jamkhed-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jamkhed</strong>"
  },
  {
    "path": "/jamod-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jamod</strong>"
  },
  {
    "path": "/janephal-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Janephal</strong>"
  },
  {
    "path": "/jaoli-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jaoli</strong>"
  },
  {
    "path": "/jat-sangli-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jat Sangli</strong>"
  },
  {
    "path": "/jategaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jategaon</strong>"
  },
  {
    "path": "/jawhar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jawhar</strong>"
  },
  {
    "path": "/jaysingpur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jaysingpur</strong>"
  },
  {
    "path": "/jejuri-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jejuri</strong>"
  },
  {
    "path": "/jintur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jintur</strong>"
  },
  {
    "path": "/junnar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Junnar</strong>"
  },
  {
    "path": "/kachurwahi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kachurwahi</strong>"
  },
  {
    "path": "/kadegaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kadegaon</strong>"
  },
  {
    "path": "/kadus-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kadus</strong>"
  },
  {
    "path": "/kagal-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kagal</strong>"
  },
  {
    "path": "/kaij-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kaij</strong>"
  },
  {
    "path": "/kalamb-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kalamb</strong>"
  },
  {
    "path": "/kalamb-osmanabad-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kalamb Osmanabad</strong>"
  },
  {
    "path": "/kalamboli-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kalamboli</strong>"
  },
  {
    "path": "/kalamnuri-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kalamnuri</strong>"
  },
  {
    "path": "/kalas-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kalas</strong>"
  },
  {
    "path": "/kali-dk-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kali DK</strong>"
  },
  {
    "path": "/kalmeshwar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kalmeshwar</strong>"
  },
  {
    "path": "/kalundri-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kalundri</strong>"
  },
  {
    "path": "/kalyan-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kalyan</strong>"
  },
  {
    "path": "/kamargaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kamargaon</strong>"
  },
  {
    "path": "/kamatgi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kamatgi</strong>"
  },
  {
    "path": "/kamptee-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kamptee</strong>"
  },
  {
    "path": "/kamthi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kamthi</strong>"
  },
  {
    "path": "/kandri-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kandri</strong>"
  },
  {
    "path": "/kankauli-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kankauli</strong>"
  },
  {
    "path": "/kankavli-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kankavli</strong>"
  },
  {
    "path": "/kannad-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kannad</strong>"
  },
  {
    "path": "/karad-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Karad</strong>"
  },
  {
    "path": "/karajagi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Karajagi</strong>"
  },
  {
    "path": "/karanja-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Karanja</strong>"
  },
  {
    "path": "/karanja-lad-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Karanja Lad</strong>"
  },
  {
    "path": "/karkamb-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Karkamb</strong>"
  },
  {
    "path": "/karmala-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Karmala</strong>"
  },
  {
    "path": "/kasara-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kasara</strong>"
  },
  {
    "path": "/kasoda-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kasoda</strong>"
  },
  {
    "path": "/kati-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kati</strong>"
  },
  {
    "path": "/katol-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Katol</strong>"
  },
  {
    "path": "/katral-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Katral</strong>"
  },
  {
    "path": "/khadki-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Khadki</strong>"
  },
  {
    "path": "/khalapur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Khalapur</strong>"
  },
  {
    "path": "/khallar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Khallar</strong>"
  },
  {
    "path": "/khamgaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Khamgaon</strong>"
  },
  {
    "path": "/khanapur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Khanapur</strong>"
  },
  {
    "path": "/khandala-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Khandala</strong>"
  },
  {
    "path": "/khangaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Khangaon</strong>"
  },
  {
    "path": "/khapa-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Khapa</strong>"
  },
  {
    "path": "/kharakvasla-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kharakvasla</strong>"
  },
  {
    "path": "/kharda-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kharda</strong>"
  },
  {
    "path": "/kharghar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kharghar</strong>"
  },
  {
    "path": "/kharsundi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kharsundi</strong>"
  },
  {
    "path": "/khed-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Khed</strong>"
  },
  {
    "path": "/khede-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Khede</strong>"
  },
  {
    "path": "/khetia-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Khetia</strong>"
  },
  {
    "path": "/khoni-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Khoni</strong>"
  },
  {
    "path": "/khopoli-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Khopoli</strong>"
  },
  {
    "path": "/khuldabad-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Khuldabad</strong>"
  },
  {
    "path": "/kinwat-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kinwat</strong>"
  },
  {
    "path": "/kodoli-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kodoli</strong>"
  },
  {
    "path": "/kolhapur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kolhapur</strong>"
  },
  {
    "path": "/kondalwadi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kondalwadi</strong>"
  },
  {
    "path": "/kondhali-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kondhali</strong>"
  },
  {
    "path": "/kopar-khairane-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kopar Khairane</strong>"
  },
  {
    "path": "/kopargaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kopargaon</strong>"
  },
  {
    "path": "/kopela-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kopela</strong>"
  },
  {
    "path": "/koradi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Koradi</strong>"
  },
  {
    "path": "/koregaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Koregaon</strong>"
  },
  {
    "path": "/koynanagar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Koynanagar</strong>"
  },
  {
    "path": "/kudal-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kudal</strong>"
  },
  {
    "path": "/kuhi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kuhi</strong>"
  },
  {
    "path": "/kurandvad-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kurandvad</strong>"
  },
  {
    "path": "/kurankhed-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kurankhed</strong>"
  },
  {
    "path": "/kurduvadi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kurduvadi</strong>"
  },
  {
    "path": "/kusumba-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kusumba</strong>"
  },
  {
    "path": "/lakhandur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Lakhandur</strong>"
  },
  {
    "path": "/lanja-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Lanja</strong>"
  },
  {
    "path": "/lasalgaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Lasalgaon</strong>"
  },
  {
    "path": "/latur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Latur</strong>"
  },
  {
    "path": "/lavasa-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Lavasa</strong>"
  },
  {
    "path": "/lohogaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Lohogaon</strong>"
  },
  {
    "path": "/lonar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Lonar</strong>"
  },
  {
    "path": "/lonavla-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Lonavla</strong>"
  },
  {
    "path": "/mahabaleshwar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mahabaleshwar</strong>"
  },
  {
    "path": "/mahad-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mahad</strong>"
  },
  {
    "path": "/mahape-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mahape</strong>"
  },
  {
    "path": "/maindargi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Maindargi</strong>"
  },
  {
    "path": "/majalgaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Majalgaon</strong>"
  },
  {
    "path": "/makhjan-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Makhjan</strong>"
  },
  {
    "path": "/malegaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Malegaon</strong>"
  },
  {
    "path": "/malkapur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Malkapur</strong>"
  },
  {
    "path": "/malvan-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Malvan</strong>"
  },
  {
    "path": "/manchar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Manchar</strong>"
  },
  {
    "path": "/mandangad-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mandangad</strong>"
  },
  {
    "path": "/mandhal-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mandhal</strong>"
  },
  {
    "path": "/mandwa-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mandwa</strong>"
  },
  {
    "path": "/mangaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mangaon</strong>"
  },
  {
    "path": "/mangrul-pir-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mangrul Pir</strong>"
  },
  {
    "path": "/manjlegaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Manjlegaon</strong>"
  },
  {
    "path": "/mankeshwar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mankeshwar</strong>"
  },
  {
    "path": "/mankhurd-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mankhurd</strong>"
  },
  {
    "path": "/manmad-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Manmad</strong>"
  },
  {
    "path": "/manor-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Manor</strong>"
  },
  {
    "path": "/mansar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mansar</strong>"
  },
  {
    "path": "/manwat-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Manwat</strong>"
  },
  {
    "path": "/manwath-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Manwath</strong>"
  },
  {
    "path": "/maregaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Maregaon</strong>"
  },
  {
    "path": "/mastiholi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mastiholi</strong>"
  },
  {
    "path": "/masur,-india-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Masur, India</strong>"
  },
  {
    "path": "/matheran-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Matheran</strong>"
  },
  {
    "path": "/mehekar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mehekar</strong>"
  },
  {
    "path": "/mehergaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mehergaon</strong>"
  },
  {
    "path": "/mehkar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mehkar</strong>"
  },
  {
    "path": "/mhasla-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mhasla</strong>"
  },
  {
    "path": "/mhasvad-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mhasvad</strong>"
  },
  {
    "path": "/miraj-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Miraj</strong>"
  },
  {
    "path": "/mohadi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mohadi</strong>"
  },
  {
    "path": "/mohol-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mohol</strong>"
  },
  {
    "path": "/mohpa-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mohpa</strong>"
  },
  {
    "path": "/mokhada-taluka-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mokhada taluka</strong>"
  },
  {
    "path": "/mora-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mora</strong>"
  },
  {
    "path": "/moram-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Moram</strong>"
  },
  {
    "path": "/morsi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Morsi</strong>"
  },
  {
    "path": "/mowad-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mowad</strong>"
  },
  {
    "path": "/mudkhed-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mudkhed</strong>"
  },
  {
    "path": "/mukher-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mukher</strong>"
  },
  {
    "path": "/mul-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mul</strong>"
  },
  {
    "path": "/mulher-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mulher</strong>"
  },
  {
    "path": "/mumbai-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mumbai</strong>"
  },
  {
    "path": "/mumbai-suburban-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mumbai Suburban</strong>"
  },
  {
    "path": "/murbad-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Murbad</strong>"
  },
  {
    "path": "/murgud-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Murgud</strong>"
  },
  {
    "path": "/murtajapur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Murtajapur</strong>"
  },
  {
    "path": "/murud-raigad-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Murud Raigad</strong>"
  },
  {
    "path": "/murud-ratnagiri-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Murud Ratnagiri</strong>"
  },
  {
    "path": "/murum-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Murum</strong>"
  },
  {
    "path": "/nadgaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nadgaon</strong>"
  },
  {
    "path": "/nagapur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nagapur</strong>"
  },
  {
    "path": "/nagothana-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nagothana</strong>"
  },
  {
    "path": "/nagpur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nagpur</strong>"
  },
  {
    "path": "/nagpur-division-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nagpur Division</strong>"
  },
  {
    "path": "/nala-sopara-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nala Sopara</strong>"
  },
  {
    "path": "/naldurg-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Naldurg</strong>"
  },
  {
    "path": "/nalegaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nalegaon</strong>"
  },
  {
    "path": "/nampur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nampur</strong>"
  },
  {
    "path": "/nanded-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nanded</strong>"
  },
  {
    "path": "/nandgaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nandgaon</strong>"
  },
  {
    "path": "/nandnee-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nandnee</strong>"
  },
  {
    "path": "/nandura-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nandura</strong>"
  },
  {
    "path": "/nandura-buzurg-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nandura Buzurg</strong>"
  },
  {
    "path": "/nandurbar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nandurbar</strong>"
  },
  {
    "path": "/narayangaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Narayangaon</strong>"
  },
  {
    "path": "/nardana-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nardana</strong>"
  },
  {
    "path": "/narkhed-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Narkhed</strong>"
  },
  {
    "path": "/nashik-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nashik</strong>"
  },
  {
    "path": "/nashik-division-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nashik Division</strong>"
  },
  {
    "path": "/navapur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Navapur</strong>"
  },
  {
    "path": "/navi-mumbai-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Navi Mumbai</strong>"
  },
  {
    "path": "/neral-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Neral</strong>"
  },
  {
    "path": "/nerur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nerur</strong>"
  },
  {
    "path": "/nevasa-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nevasa</strong>"
  },
  {
    "path": "/nighoj-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nighoj</strong>"
  },
  {
    "path": "/nilanga-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nilanga</strong>"
  },
  {
    "path": "/nipani-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nipani</strong>"
  },
  {
    "path": "/niphad-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Niphad</strong>"
  },
  {
    "path": "/nira-narsingpur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nira Narsingpur</strong>"
  },
  {
    "path": "/osmanabad-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Osmanabad</strong>"
  },
  {
    "path": "/ozar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ozar</strong>"
  },
  {
    "path": "/pabal-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pabal</strong>"
  },
  {
    "path": "/pachora-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pachora</strong>"
  },
  {
    "path": "/pahur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pahur</strong>"
  },
  {
    "path": "/paithan-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Paithan</strong>"
  },
  {
    "path": "/palghar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Palghar</strong>"
  },
  {
    "path": "/pali,-raigad-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pali, Raigad</strong>"
  },
  {
    "path": "/palso-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Palso</strong>"
  },
  {
    "path": "/panchgani-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Panchgani</strong>"
  },
  {
    "path": "/pandharpur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pandharpur</strong>"
  },
  {
    "path": "/pandhurli-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pandhurli</strong>"
  },
  {
    "path": "/panhala-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Panhala</strong>"
  },
  {
    "path": "/panvel-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Panvel</strong>"
  },
  {
    "path": "/parbhani-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Parbhani</strong>"
  },
  {
    "path": "/parli-vaijnath-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Parli Vaijnath</strong>"
  },
  {
    "path": "/parner-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Parner</strong>"
  },
  {
    "path": "/parola-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Parola</strong>"
  },
  {
    "path": "/parseoni-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Parseoni</strong>"
  },
  {
    "path": "/partur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Partur</strong>"
  },
  {
    "path": "/patan-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Patan</strong>"
  },
  {
    "path": "/pathardi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pathardi</strong>"
  },
  {
    "path": "/pathri-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pathri</strong>"
  },
  {
    "path": "/patur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Patur</strong>"
  },
  {
    "path": "/paturda-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Paturda</strong>"
  },
  {
    "path": "/paud-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Paud</strong>"
  },
  {
    "path": "/pauni-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pauni</strong>"
  },
  {
    "path": "/pawni-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pawni</strong>"
  },
  {
    "path": "/pedgaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pedgaon</strong>"
  },
  {
    "path": "/peint-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Peint</strong>"
  },
  {
    "path": "/pen-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pen</strong>"
  },
  {
    "path": "/phaltan-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Phaltan</strong>"
  },
  {
    "path": "/phulambri-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Phulambri</strong>"
  },
  {
    "path": "/piliv-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Piliv</strong>"
  },
  {
    "path": "/pimpalgaon-baswant-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pimpalgaon Baswant</strong>"
  },
  {
    "path": "/pimpalgaon-raja-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pimpalgaon Raja</strong>"
  },
  {
    "path": "/pimpri-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pimpri</strong>"
  },
  {
    "path": "/pimpri-chinchwad-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pimpri-Chinchwad</strong>"
  },
  {
    "path": "/pipri-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pipri</strong>"
  },
  {
    "path": "/prakasha-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Prakasha</strong>"
  },
  {
    "path": "/pulgaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pulgaon</strong>"
  },
  {
    "path": "/pune-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pune</strong>"
  },
  {
    "path": "/puntamba-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Puntamba</strong>"
  },
  {
    "path": "/pural-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pural</strong>"
  },
  {
    "path": "/purna-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Purna</strong>"
  },
  {
    "path": "/pusad-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pusad</strong>"
  },
  {
    "path": "/radhanagari-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Radhanagari</strong>"
  },
  {
    "path": "/rahata-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Rahata</strong>"
  },
  {
    "path": "/rahimatpur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Rahimatpur</strong>"
  },
  {
    "path": "/rahuri-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Rahuri</strong>"
  },
  {
    "path": "/raigarh-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Raigarh</strong>"
  },
  {
    "path": "/raireshwar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Raireshwar</strong>"
  },
  {
    "path": "/rajapur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Rajapur</strong>"
  },
  {
    "path": "/rajgurunagar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Rajgurunagar</strong>"
  },
  {
    "path": "/rajur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Rajur</strong>"
  },
  {
    "path": "/rajura-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Rajura</strong>"
  },
  {
    "path": "/ralegaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ralegaon</strong>"
  },
  {
    "path": "/ramewadi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ramewadi</strong>"
  },
  {
    "path": "/ramtek-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ramtek</strong>"
  },
  {
    "path": "/ratnagiri-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ratnagiri</strong>"
  },
  {
    "path": "/raver-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Raver</strong>"
  },
  {
    "path": "/renapur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Renapur</strong>"
  },
  {
    "path": "/renavi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Renavi</strong>"
  },
  {
    "path": "/revadanda-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Revadanda</strong>"
  },
  {
    "path": "/revdanda-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Revdanda</strong>"
  },
  {
    "path": "/risod-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Risod</strong>"
  },
  {
    "path": "/roha-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Roha</strong>"
  },
  {
    "path": "/sailu-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sailu</strong>"
  },
  {
    "path": "/sakol-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sakol</strong>"
  },
  {
    "path": "/sakoli-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sakoli</strong>"
  },
  {
    "path": "/sakri-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sakri</strong>"
  },
  {
    "path": "/samudrapur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Samudrapur</strong>"
  },
  {
    "path": "/sangameshwar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sangameshwar</strong>"
  },
  {
    "path": "/sangamner-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sangamner</strong>"
  },
  {
    "path": "/sangli-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sangli</strong>"
  },
  {
    "path": "/sangola-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sangola</strong>"
  },
  {
    "path": "/sangole-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sangole</strong>"
  },
  {
    "path": "/sangrampur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sangrampur</strong>"
  },
  {
    "path": "/saoli-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Saoli</strong>"
  },
  {
    "path": "/saoner-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Saoner</strong>"
  },
  {
    "path": "/sarangkheda-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sarangkheda</strong>"
  },
  {
    "path": "/sasvad-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sasvad</strong>"
  },
  {
    "path": "/saswad-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Saswad</strong>"
  },
  {
    "path": "/satana-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Satana</strong>"
  },
  {
    "path": "/satara-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Satara</strong>"
  },
  {
    "path": "/satara-division-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Satara Division</strong>"
  },
  {
    "path": "/satpati-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Satpati</strong>"
  },
  {
    "path": "/savantvadi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Savantvadi</strong>"
  },
  {
    "path": "/savda-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Savda</strong>"
  },
  {
    "path": "/savlaj-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Savlaj</strong>"
  },
  {
    "path": "/sawantvadi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sawantvadi</strong>"
  },
  {
    "path": "/selu-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Selu</strong>"
  },
  {
    "path": "/sevagram-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sevagram</strong>"
  },
  {
    "path": "/sewri-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sewri</strong>"
  },
  {
    "path": "/shahada-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shahada</strong>"
  },
  {
    "path": "/shahapur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shahapur</strong>"
  },
  {
    "path": "/shedbal-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shedbal</strong>"
  },
  {
    "path": "/shegaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shegaon</strong>"
  },
  {
    "path": "/shevgaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shevgaon</strong>"
  },
  {
    "path": "/shikrapur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shikrapur</strong>"
  },
  {
    "path": "/shiraguppi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shiraguppi</strong>"
  },
  {
    "path": "/shirala-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shirala</strong>"
  },
  {
    "path": "/shirdi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shirdi</strong>"
  },
  {
    "path": "/shirgaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shirgaon</strong>"
  },
  {
    "path": "/shirol-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shirol</strong>"
  },
  {
    "path": "/shirpur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shirpur</strong>"
  },
  {
    "path": "/shirud-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shirud</strong>"
  },
  {
    "path": "/shirwal-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shirwal</strong>"
  },
  {
    "path": "/shivaji-nagar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shivaji Nagar</strong>"
  },
  {
    "path": "/shrigonda-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shrigonda</strong>"
  },
  {
    "path": "/sillod-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sillod</strong>"
  },
  {
    "path": "/sindewahi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sindewahi</strong>"
  },
  {
    "path": "/sindhudurg-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sindhudurg</strong>"
  },
  {
    "path": "/sindi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sindi</strong>"
  },
  {
    "path": "/sindkheda-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sindkheda</strong>"
  },
  {
    "path": "/sinnar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sinnar</strong>"
  },
  {
    "path": "/sironcha-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sironcha</strong>"
  },
  {
    "path": "/sirur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sirur</strong>"
  },
  {
    "path": "/sivala-east-godavari-district-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sivala East Godavari district</strong>"
  },
  {
    "path": "/solapur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Solapur</strong>"
  },
  {
    "path": "/sonala-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sonala</strong>"
  },
  {
    "path": "/sonegaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sonegaon</strong>"
  },
  {
    "path": "/songir-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Songir</strong>"
  },
  {
    "path": "/sonvad-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sonvad</strong>"
  },
  {
    "path": "/soygaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Soygaon</strong>"
  },
  {
    "path": "/srivardhan-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Srivardhan</strong>"
  },
  {
    "path": "/surgana-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Surgana</strong>"
  },
  {
    "path": "/taklibhan-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Taklibhan</strong>"
  },
  {
    "path": "/talbid-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Talbid</strong>"
  },
  {
    "path": "/talegaon-dabhade-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Talegaon Dabhade</strong>"
  },
  {
    "path": "/talegaon-dhamdhere-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Talegaon Dhamdhere</strong>"
  },
  {
    "path": "/taloda-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Taloda</strong>"
  },
  {
    "path": "/talode-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Talode</strong>"
  },
  {
    "path": "/tarapur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Tarapur</strong>"
  },
  {
    "path": "/tasgaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Tasgaon</strong>"
  },
  {
    "path": "/telhara-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Telhara</strong>"
  },
  {
    "path": "/thalner-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Thalner</strong>"
  },
  {
    "path": "/thane-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Thane</strong>"
  },
  {
    "path": "/trimbak-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Trimbak</strong>"
  },
  {
    "path": "/trombay-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Trombay</strong>"
  },
  {
    "path": "/tuljapur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Tuljapur</strong>"
  },
  {
    "path": "/tumsar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Tumsar</strong>"
  },
  {
    "path": "/udgir-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Udgir</strong>"
  },
  {
    "path": "/umarga-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Umarga</strong>"
  },
  {
    "path": "/umarkhed-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Umarkhed</strong>"
  },
  {
    "path": "/umred-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Umred</strong>"
  },
  {
    "path": "/uran-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Uran</strong>"
  },
  {
    "path": "/uruli-kanchan-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Uruli Kanchan</strong>"
  },
  {
    "path": "/vada-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vada</strong>"
  },
  {
    "path": "/vadgaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vadgaon</strong>"
  },
  {
    "path": "/vadner-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vadner</strong>"
  },
  {
    "path": "/vaijapur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vaijapur</strong>"
  },
  {
    "path": "/vairag-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vairag</strong>"
  },
  {
    "path": "/valsang-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Valsang</strong>"
  },
  {
    "path": "/vangaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vangaon</strong>"
  },
  {
    "path": "/varangaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Varangaon</strong>"
  },
  {
    "path": "/vashi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vashi</strong>"
  },
  {
    "path": "/vasind-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vasind</strong>"
  },
  {
    "path": "/vatul-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vatul</strong>"
  },
  {
    "path": "/velas-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Velas</strong>"
  },
  {
    "path": "/velneshwar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Velneshwar</strong>"
  },
  {
    "path": "/vengurla-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vengurla</strong>"
  },
  {
    "path": "/vijaydurg-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vijaydurg</strong>"
  },
  {
    "path": "/vinchur-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vinchur</strong>"
  },
  {
    "path": "/virar-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Virar</strong>"
  },
  {
    "path": "/vita-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vita</strong>"
  },
  {
    "path": "/vite-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vite</strong>"
  },
  {
    "path": "/wadgaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Wadgaon</strong>"
  },
  {
    "path": "/wadner-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Wadner</strong>"
  },
  {
    "path": "/wadwani-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Wadwani</strong>"
  },
  {
    "path": "/wagholi-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Wagholi</strong>"
  },
  {
    "path": "/wai-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Wai</strong>"
  },
  {
    "path": "/wakad-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Wakad</strong>"
  },
  {
    "path": "/walgaon-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Walgaon</strong>"
  },
  {
    "path": "/walki-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Walki</strong>"
  },
  {
    "path": "/wani-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Wani</strong>"
  },
  {
    "path": "/wardha-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Wardha</strong>"
  },
  {
    "path": "/warora-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Warora</strong>"
  },
  {
    "path": "/warud-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Warud</strong>"
  },
  {
    "path": "/washim-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Washim</strong>"
  },
  {
    "path": "/yaval-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Yaval</strong>"
  },
  {
    "path": "/yavatmal-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Yavatmal</strong>"
  },
  {
    "path": "/yeola-packers-movers-maharashtra",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Yeola</strong>"
  }
];

  return (
    <>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content">
            <nav className="page-breadcrumb">
              <Link href="/">
                <i className="bi bi-house-door"></i> Home
              </Link>
              <span>/</span>
              <Link href="/location">Locations We Serve</Link>
              <span>/</span>
              <span>Maharashtra</span>
            </nav>
            <h1>Car Shifting in Maharashtra</h1>
            <p>Choose your city for reliable and professional moving services</p>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 justify-content-center">
            {LINKS.map((link, idx) => (
              <div key={idx} className="col">
                <Link href={link.path} className="state-city-box text-decoration-none d-block">
                  <i className={link.icon || "bi bi-truck state-city-icon"}></i>
                  <span className="state-city-text" dangerouslySetInnerHTML={{ __html: link.html }}></span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
