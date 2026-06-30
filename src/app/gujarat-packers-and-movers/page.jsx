import React from "react";
import Link from "next/link";

export const metadata = {
  title: "SRS Packers And Movers in Gujarat",
  description: "Find reliable and professional packers and movers in Packers & Movers in Gujarat. Get free quotes for home shifting, office shifting, and cargo transport.",
};

export default function LocationRoutePage() {
  const LINKS = [
  {
    "path": "/abrama-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Abrama</strong>"
  },
  {
    "path": "/adalaj-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Adalaj</strong>"
  },
  {
    "path": "/agol-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Agol</strong>"
  },
  {
    "path": "/ahmedabad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Ahmedabad</strong>"
  },
  {
    "path": "/ahwa-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Ahwa</strong>"
  },
  {
    "path": "/akrund-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Akrund</strong>"
  },
  {
    "path": "/amod-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Amod</strong>"
  },
  {
    "path": "/amreli-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Amreli</strong>"
  },
  {
    "path": "/amroli-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Amroli</strong>"
  },
  {
    "path": "/anand-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Anand</strong>"
  },
  {
    "path": "/anjar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Anjar</strong>"
  },
  {
    "path": "/ankleshwar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Ankleshwar</strong>"
  },
  {
    "path": "/babra-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Babra</strong>"
  },
  {
    "path": "/bagasara-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bagasara</strong>"
  },
  {
    "path": "/bagasra-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bagasra</strong>"
  },
  {
    "path": "/bakharla-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bakharla</strong>"
  },
  {
    "path": "/balagam-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Balagam</strong>"
  },
  {
    "path": "/balasinor-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Balasinor</strong>"
  },
  {
    "path": "/balisana-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Balisana</strong>"
  },
  {
    "path": "/bamanbore-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bamanbore</strong>"
  },
  {
    "path": "/banas-kantha-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Banas Kantha</strong>"
  },
  {
    "path": "/bandia-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bandia</strong>"
  },
  {
    "path": "/bantva-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bantva</strong>"
  },
  {
    "path": "/bardoli-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bardoli</strong>"
  },
  {
    "path": "/bedi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bedi</strong>"
  },
  {
    "path": "/bhachau-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bhachau</strong>"
  },
  {
    "path": "/bhadran-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bhadran</strong>"
  },
  {
    "path": "/bhandu-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bhandu</strong>"
  },
  {
    "path": "/bhanvad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bhanvad</strong>"
  },
  {
    "path": "/bharuch-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bharuch</strong>"
  },
  {
    "path": "/bhatha-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bhatha</strong>"
  },
  {
    "path": "/bhavnagar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bhavnagar</strong>"
  },
  {
    "path": "/bhayavadar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bhayavadar</strong>"
  },
  {
    "path": "/bhildi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bhildi</strong>"
  },
  {
    "path": "/bhojpur-dharampur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bhojpur Dharampur</strong>"
  },
  {
    "path": "/bhuj-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bhuj</strong>"
  },
  {
    "path": "/bilimora-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bilimora</strong>"
  },
  {
    "path": "/bilkha-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bilkha</strong>"
  },
  {
    "path": "/borsad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Borsad</strong>"
  },
  {
    "path": "/botad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Botad</strong>"
  },
  {
    "path": "/chaklasi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Chaklasi</strong>"
  },
  {
    "path": "/chalala-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Chalala</strong>"
  },
  {
    "path": "/chaloda-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Chaloda</strong>"
  },
  {
    "path": "/champaner-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Champaner</strong>"
  },
  {
    "path": "/chanasma-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Chanasma</strong>"
  },
  {
    "path": "/chhala-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Chhala</strong>"
  },
  {
    "path": "/chhota-udepur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Chhota Udepur</strong>"
  },
  {
    "path": "/chikhli-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Chikhli</strong>"
  },
  {
    "path": "/chotila-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Chotila</strong>"
  },
  {
    "path": "/chuda-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Chuda</strong>"
  },
  {
    "path": "/dabhoda-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dabhoda</strong>"
  },
  {
    "path": "/dabhoi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dabhoi</strong>"
  },
  {
    "path": "/dahegam-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dahegam</strong>"
  },
  {
    "path": "/dahod-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dahod</strong>"
  },
  {
    "path": "/dakor-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dakor</strong>"
  },
  {
    "path": "/damnagar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Damnagar</strong>"
  },
  {
    "path": "/dandi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dandi</strong>"
  },
  {
    "path": "/dangs-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dangs</strong>"
  },
  {
    "path": "/danta-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Danta</strong>"
  },
  {
    "path": "/dayapar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dayapar</strong>"
  },
  {
    "path": "/delvada-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Delvada</strong>"
  },
  {
    "path": "/delwada-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Delwada</strong>"
  },
  {
    "path": "/detroj-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Detroj</strong>"
  },
  {
    "path": "/devbhumi-dwarka-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Devbhumi Dwarka</strong>"
  },
  {
    "path": "/devgadh-bariya-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Devgadh Bariya</strong>"
  },
  {
    "path": "/dhandhuka-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dhandhuka</strong>"
  },
  {
    "path": "/dhanera-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dhanera</strong>"
  },
  {
    "path": "/dhansura-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dhansura</strong>"
  },
  {
    "path": "/dharampur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dharampur</strong>"
  },
  {
    "path": "/dharasana-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dharasana</strong>"
  },
  {
    "path": "/dhari-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dhari</strong>"
  },
  {
    "path": "/dhasa-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dhasa</strong>"
  },
  {
    "path": "/dhola-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dhola</strong>"
  },
  {
    "path": "/dholera-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dholera</strong>"
  },
  {
    "path": "/dholka-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dholka</strong>"
  },
  {
    "path": "/dhoraji-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dhoraji</strong>"
  },
  {
    "path": "/dhrangadhra-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dhrangadhra</strong>"
  },
  {
    "path": "/dhrol-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dhrol</strong>"
  },
  {
    "path": "/dhuwaran-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dhuwaran</strong>"
  },
  {
    "path": "/disa-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Disa</strong>"
  },
  {
    "path": "/dohad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dohad</strong>"
  },
  {
    "path": "/dumkhal-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dumkhal</strong>"
  },
  {
    "path": "/dungarpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dungarpur</strong>"
  },
  {
    "path": "/dwarka-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dwarka</strong>"
  },
  {
    "path": "/gadhada-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Gadhada</strong>"
  },
  {
    "path": "/gandevi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Gandevi</strong>"
  },
  {
    "path": "/gandhidham-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Gandhidham</strong>"
  },
  {
    "path": "/gandhinagar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Gandhinagar</strong>"
  },
  {
    "path": "/gariadhar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Gariadhar</strong>"
  },
  {
    "path": "/ghodasar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Ghodasar</strong>"
  },
  {
    "path": "/ghogha-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Ghogha</strong>"
  },
  {
    "path": "/girsomnath-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>GirSomnath</strong>"
  },
  {
    "path": "/godhra-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Godhra</strong>"
  },
  {
    "path": "/gondal-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Gondal</strong>"
  },
  {
    "path": "/gorwa-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Gorwa</strong>"
  },
  {
    "path": "/halenda-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Halenda</strong>"
  },
  {
    "path": "/halol-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Halol</strong>"
  },
  {
    "path": "/halvad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Halvad</strong>"
  },
  {
    "path": "/hansot-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Hansot</strong>"
  },
  {
    "path": "/harij-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Harij</strong>"
  },
  {
    "path": "/harsol-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Harsol</strong>"
  },
  {
    "path": "/hathuran-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Hathuran</strong>"
  },
  {
    "path": "/himmatnagar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Himmatnagar</strong>"
  },
  {
    "path": "/idar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Idar</strong>"
  },
  {
    "path": "/jakhau-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Jakhau</strong>"
  },
  {
    "path": "/jalalpore-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Jalalpore</strong>"
  },
  {
    "path": "/jalalpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Jalalpur</strong>"
  },
  {
    "path": "/jalia-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Jalia</strong>"
  },
  {
    "path": "/jambuda-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Jambuda</strong>"
  },
  {
    "path": "/jambusar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Jambusar</strong>"
  },
  {
    "path": "/jamnagar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Jamnagar</strong>"
  },
  {
    "path": "/jarod-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Jarod</strong>"
  },
  {
    "path": "/jasdan-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Jasdan</strong>"
  },
  {
    "path": "/jetalpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Jetalpur</strong>"
  },
  {
    "path": "/jetalsar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Jetalsar</strong>"
  },
  {
    "path": "/jetpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Jetpur</strong>"
  },
  {
    "path": "/jetpur-navagadh-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Jetpur Navagadh</strong>"
  },
  {
    "path": "/jhalod-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Jhalod</strong>"
  },
  {
    "path": "/jhulasan-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Jhulasan</strong>"
  },
  {
    "path": "/jodhpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Jodhpur</strong>"
  },
  {
    "path": "/jodhpur-ahmedabad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Jodhpur Ahmedabad</strong>"
  },
  {
    "path": "/jodia-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Jodia</strong>"
  },
  {
    "path": "/jodiya-bandar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Jodiya Bandar</strong>"
  },
  {
    "path": "/junagadh-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Junagadh</strong>"
  },
  {
    "path": "/kachchh-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kachchh</strong>"
  },
  {
    "path": "/kachholi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kachholi</strong>"
  },
  {
    "path": "/kadi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kadi</strong>"
  },
  {
    "path": "/kadod-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kadod</strong>"
  },
  {
    "path": "/kalavad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kalavad</strong>"
  },
  {
    "path": "/kalol-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kalol</strong>"
  },
  {
    "path": "/kandla-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kandla</strong>"
  },
  {
    "path": "/kandla-port-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kandla port</strong>"
  },
  {
    "path": "/kanodar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kanodar</strong>"
  },
  {
    "path": "/kapadvanj-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kapadvanj</strong>"
  },
  {
    "path": "/karamsad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Karamsad</strong>"
  },
  {
    "path": "/kariana-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kariana</strong>"
  },
  {
    "path": "/karjan-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Karjan</strong>"
  },
  {
    "path": "/kathor-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kathor</strong>"
  },
  {
    "path": "/katpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Katpur</strong>"
  },
  {
    "path": "/kavant-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kavant</strong>"
  },
  {
    "path": "/kawant-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kawant</strong>"
  },
  {
    "path": "/kayavarohan-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kayavarohan</strong>"
  },
  {
    "path": "/kerwada-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kerwada</strong>"
  },
  {
    "path": "/keshod-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Keshod</strong>"
  },
  {
    "path": "/khambhalia-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Khambhalia</strong>"
  },
  {
    "path": "/khambhat-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Khambhat</strong>"
  },
  {
    "path": "/khavda-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Khavda</strong>"
  },
  {
    "path": "/kheda-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kheda</strong>"
  },
  {
    "path": "/khedbrahma-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Khedbrahma</strong>"
  },
  {
    "path": "/khedoi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Khedoi</strong>"
  },
  {
    "path": "/kherali-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kherali</strong>"
  },
  {
    "path": "/kheralu-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kheralu</strong>"
  },
  {
    "path": "/kodinar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kodinar</strong>"
  },
  {
    "path": "/kosamba-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kosamba</strong>"
  },
  {
    "path": "/kothara-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kothara</strong>"
  },
  {
    "path": "/kotharia-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kotharia</strong>"
  },
  {
    "path": "/kukarmunda-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kukarmunda</strong>"
  },
  {
    "path": "/kukma-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kukma</strong>"
  },
  {
    "path": "/kundla-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kundla</strong>"
  },
  {
    "path": "/kutch-district-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kutch district</strong>"
  },
  {
    "path": "/kutiyana-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kutiyana</strong>"
  },
  {
    "path": "/ladol-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Ladol</strong>"
  },
  {
    "path": "/lakhpat-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Lakhpat</strong>"
  },
  {
    "path": "/lakhtar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Lakhtar</strong>"
  },
  {
    "path": "/lalpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Lalpur</strong>"
  },
  {
    "path": "/langhnaj-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Langhnaj</strong>"
  },
  {
    "path": "/lathi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Lathi</strong>"
  },
  {
    "path": "/limbdi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Limbdi</strong>"
  },
  {
    "path": "/limkheda-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Limkheda</strong>"
  },
  {
    "path": "/lunavada-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Lunavada</strong>"
  },
  {
    "path": "/madhavpur-ghed-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Madhavpur Ghed</strong>"
  },
  {
    "path": "/madhi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Madhi</strong>"
  },
  {
    "path": "/mahemdavad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Mahemdavad</strong>"
  },
  {
    "path": "/mahisa-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Mahisa</strong>"
  },
  {
    "path": "/mahudha-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Mahudha</strong>"
  },
  {
    "path": "/mahuva-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Mahuva</strong>"
  },
  {
    "path": "/malpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Malpur</strong>"
  },
  {
    "path": "/manavadar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Manavadar</strong>"
  },
  {
    "path": "/mandal-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Mandal</strong>"
  },
  {
    "path": "/mandvi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Mandvi</strong>"
  },
  {
    "path": "/mangrol-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Mangrol</strong>"
  },
  {
    "path": "/mangrol-junagadh-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Mangrol Junagadh</strong>"
  },
  {
    "path": "/mansa-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Mansa</strong>"
  },
  {
    "path": "/meghraj-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Meghraj</strong>"
  },
  {
    "path": "/mehsana-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Mehsana</strong>"
  },
  {
    "path": "/mendarda-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Mendarda</strong>"
  },
  {
    "path": "/mithapur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Mithapur</strong>"
  },
  {
    "path": "/modasa-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Modasa</strong>"
  },
  {
    "path": "/morbi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Morbi</strong>"
  },
  {
    "path": "/morva-hadaf-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Morva Hadaf</strong>"
  },
  {
    "path": "/morwa-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Morwa</strong>"
  },
  {
    "path": "/mundra-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Mundra</strong>"
  },
  {
    "path": "/nadiad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Nadiad</strong>"
  },
  {
    "path": "/nagwa-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Nagwa</strong>"
  },
  {
    "path": "/naldhara-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Naldhara</strong>"
  },
  {
    "path": "/naliya-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Naliya</strong>"
  },
  {
    "path": "/nargol-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Nargol</strong>"
  },
  {
    "path": "/narmada-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Narmada</strong>"
  },
  {
    "path": "/naroda-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Naroda</strong>"
  },
  {
    "path": "/navsari-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Navsari</strong>"
  },
  {
    "path": "/nikora-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Nikora</strong>"
  },
  {
    "path": "/nizar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Nizar</strong>"
  },
  {
    "path": "/odadar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Odadar</strong>"
  },
  {
    "path": "/okha-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Okha</strong>"
  },
  {
    "path": "/olpad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Olpad</strong>"
  },
  {
    "path": "/paddhari-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Paddhari</strong>"
  },
  {
    "path": "/padra-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Padra</strong>"
  },
  {
    "path": "/palanpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Palanpur</strong>"
  },
  {
    "path": "/palanswa-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Palanswa</strong>"
  },
  {
    "path": "/palitana-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Palitana</strong>"
  },
  {
    "path": "/paliyad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Paliyad</strong>"
  },
  {
    "path": "/paliyad-bhavnagar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Paliyad Bhavnagar</strong>"
  },
  {
    "path": "/palsana-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Palsana</strong>"
  },
  {
    "path": "/panch-mahals-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Panch Mahals</strong>"
  },
  {
    "path": "/panchmahal-district-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Panchmahal district</strong>"
  },
  {
    "path": "/pardi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Pardi</strong>"
  },
  {
    "path": "/parnera-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Parnera</strong>"
  },
  {
    "path": "/patan-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Patan</strong>"
  },
  {
    "path": "/pavi-jetpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Pavi Jetpur</strong>"
  },
  {
    "path": "/petlad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Petlad</strong>"
  },
  {
    "path": "/pipavav-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Pipavav</strong>"
  },
  {
    "path": "/piplod-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Piplod</strong>"
  },
  {
    "path": "/porbandar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Porbandar</strong>"
  },
  {
    "path": "/prabhas-patan-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Prabhas Patan</strong>"
  },
  {
    "path": "/prantij-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Prantij</strong>"
  },
  {
    "path": "/radhanpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Radhanpur</strong>"
  },
  {
    "path": "/rajkot-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Rajkot</strong>"
  },
  {
    "path": "/rajpipla-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Rajpipla</strong>"
  },
  {
    "path": "/rajula-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Rajula</strong>"
  },
  {
    "path": "/ranavav-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Ranavav</strong>"
  },
  {
    "path": "/ranpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Ranpur</strong>"
  },
  {
    "path": "/rapar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Rapar</strong>"
  },
  {
    "path": "/reha-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Reha</strong>"
  },
  {
    "path": "/roha-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Roha</strong>"
  },
  {
    "path": "/sabar-kantha-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sabar Kantha</strong>"
  },
  {
    "path": "/sachin-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sachin</strong>"
  },
  {
    "path": "/salaya-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Salaya</strong>"
  },
  {
    "path": "/samakhiali-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Samakhiali</strong>"
  },
  {
    "path": "/sanand-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sanand</strong>"
  },
  {
    "path": "/sankheda-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sankheda</strong>"
  },
  {
    "path": "/sarbhon-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sarbhon</strong>"
  },
  {
    "path": "/sardoi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sardoi</strong>"
  },
  {
    "path": "/sarkhej-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sarkhej</strong>"
  },
  {
    "path": "/sathamba-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sathamba</strong>"
  },
  {
    "path": "/savarkundla-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Savarkundla</strong>"
  },
  {
    "path": "/savli-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Savli</strong>"
  },
  {
    "path": "/sayla-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sayla</strong>"
  },
  {
    "path": "/shahpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Shahpur</strong>"
  },
  {
    "path": "/shivrajpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Shivrajpur</strong>"
  },
  {
    "path": "/siddhpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Siddhpur</strong>"
  },
  {
    "path": "/sihor-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sihor</strong>"
  },
  {
    "path": "/sikka-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sikka</strong>"
  },
  {
    "path": "/sinor-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sinor</strong>"
  },
  {
    "path": "/sojitra-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sojitra</strong>"
  },
  {
    "path": "/songadh-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Songadh</strong>"
  },
  {
    "path": "/supedi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Supedi</strong>"
  },
  {
    "path": "/surat-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Surat</strong>"
  },
  {
    "path": "/surendranagar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Surendranagar</strong>"
  },
  {
    "path": "/sutrapada-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sutrapada</strong>"
  },
  {
    "path": "/talaja-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Talaja</strong>"
  },
  {
    "path": "/tankara-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Tankara</strong>"
  },
  {
    "path": "/tapi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Tapi</strong>"
  },
  {
    "path": "/than-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Than</strong>"
  },
  {
    "path": "/thangadh-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Thangadh</strong>"
  },
  {
    "path": "/tharad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Tharad</strong>"
  },
  {
    "path": "/thasra-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Thasra</strong>"
  },
  {
    "path": "/the-dangs-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>The Dangs</strong>"
  },
  {
    "path": "/umarpada-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Umarpada</strong>"
  },
  {
    "path": "/umrala-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Umrala</strong>"
  },
  {
    "path": "/umreth-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Umreth</strong>"
  },
  {
    "path": "/un-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Un</strong>"
  },
  {
    "path": "/una-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Una</strong>"
  },
  {
    "path": "/unjha-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Unjha</strong>"
  },
  {
    "path": "/upleta-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Upleta</strong>"
  },
  {
    "path": "/utran-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Utran</strong>"
  },
  {
    "path": "/vadgam-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Vadgam</strong>"
  },
  {
    "path": "/vadnagar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Vadnagar</strong>"
  },
  {
    "path": "/vadodara-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Vadodara</strong>"
  },
  {
    "path": "/vaghodia-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Vaghodia</strong>"
  },
  {
    "path": "/vaghodia-ina-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Vaghodia INA</strong>"
  },
  {
    "path": "/vallabh-vidyanagar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Vallabh Vidyanagar</strong>"
  },
  {
    "path": "/vallabhipur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Vallabhipur</strong>"
  },
  {
    "path": "/valsad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Valsad</strong>"
  },
  {
    "path": "/vanala-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Vanala</strong>"
  },
  {
    "path": "/vansda-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Vansda</strong>"
  },
  {
    "path": "/vanthli-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Vanthli</strong>"
  },
  {
    "path": "/vapi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Vapi</strong>"
  },
  {
    "path": "/vartej-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Vartej</strong>"
  },
  {
    "path": "/vasa-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Vasa</strong>"
  },
  {
    "path": "/vasavad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Vasavad</strong>"
  },
  {
    "path": "/vaso-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Vaso</strong>"
  },
  {
    "path": "/vataman-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Vataman</strong>"
  },
  {
    "path": "/vejalpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Vejalpur</strong>"
  },
  {
    "path": "/veraval-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Veraval</strong>"
  },
  {
    "path": "/vijapur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Vijapur</strong>"
  },
  {
    "path": "/vinchhiya-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Vinchhiya</strong>"
  },
  {
    "path": "/vinchia-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Vinchia</strong>"
  },
  {
    "path": "/viramgam-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Viramgam</strong>"
  },
  {
    "path": "/virpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Virpur</strong>"
  },
  {
    "path": "/visavadar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Visavadar</strong>"
  },
  {
    "path": "/visnagar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Visnagar</strong>"
  },
  {
    "path": "/vyara-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Vyara</strong>"
  },
  {
    "path": "/wadhai-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Wadhai</strong>"
  },
  {
    "path": "/wadhwan-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Wadhwan</strong>"
  },
  {
    "path": "/waghai-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Waghai</strong>"
  },
  {
    "path": "/wankaner-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Wankaner</strong>"
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
              <span>Gujarat</span>
            </nav>
            <h1>Packers & Movers in Gujarat</h1>
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
