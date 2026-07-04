import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Maruti Trans Car Shifting in Gujarat",
  description: "Find reliable and professional packers and movers in Car Shifting in Gujarat. Get free quotes for home shifting, office shifting, and cargo transport.",
};

export default function LocationRoutePage() {
  const LINKS = [
  {
    "path": "/abrama-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Abrama</strong>"
  },
  {
    "path": "/adalaj-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Adalaj</strong>"
  },
  {
    "path": "/agol-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Agol</strong>"
  },
  {
    "path": "/ahmedabad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ahmedabad</strong>"
  },
  {
    "path": "/ahwa-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ahwa</strong>"
  },
  {
    "path": "/akrund-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Akrund</strong>"
  },
  {
    "path": "/amod-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Amod</strong>"
  },
  {
    "path": "/amreli-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Amreli</strong>"
  },
  {
    "path": "/amroli-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Amroli</strong>"
  },
  {
    "path": "/anand-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Anand</strong>"
  },
  {
    "path": "/anjar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Anjar</strong>"
  },
  {
    "path": "/ankleshwar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ankleshwar</strong>"
  },
  {
    "path": "/babra-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Babra</strong>"
  },
  {
    "path": "/bagasara-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bagasara</strong>"
  },
  {
    "path": "/bagasra-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bagasra</strong>"
  },
  {
    "path": "/bakharla-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bakharla</strong>"
  },
  {
    "path": "/balagam-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Balagam</strong>"
  },
  {
    "path": "/balasinor-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Balasinor</strong>"
  },
  {
    "path": "/balisana-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Balisana</strong>"
  },
  {
    "path": "/bamanbore-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bamanbore</strong>"
  },
  {
    "path": "/banas-kantha-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Banas Kantha</strong>"
  },
  {
    "path": "/bandia-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bandia</strong>"
  },
  {
    "path": "/bantva-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bantva</strong>"
  },
  {
    "path": "/bardoli-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bardoli</strong>"
  },
  {
    "path": "/bedi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bedi</strong>"
  },
  {
    "path": "/bhachau-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhachau</strong>"
  },
  {
    "path": "/bhadran-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhadran</strong>"
  },
  {
    "path": "/bhandu-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhandu</strong>"
  },
  {
    "path": "/bhanvad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhanvad</strong>"
  },
  {
    "path": "/bharuch-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bharuch</strong>"
  },
  {
    "path": "/bhatha-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhatha</strong>"
  },
  {
    "path": "/bhavnagar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhavnagar</strong>"
  },
  {
    "path": "/bhayavadar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhayavadar</strong>"
  },
  {
    "path": "/bhildi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhildi</strong>"
  },
  {
    "path": "/bhojpur-dharampur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhojpur Dharampur</strong>"
  },
  {
    "path": "/bhuj-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhuj</strong>"
  },
  {
    "path": "/bilimora-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bilimora</strong>"
  },
  {
    "path": "/bilkha-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bilkha</strong>"
  },
  {
    "path": "/borsad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Borsad</strong>"
  },
  {
    "path": "/botad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Botad</strong>"
  },
  {
    "path": "/chaklasi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chaklasi</strong>"
  },
  {
    "path": "/chalala-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chalala</strong>"
  },
  {
    "path": "/chaloda-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chaloda</strong>"
  },
  {
    "path": "/champaner-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Champaner</strong>"
  },
  {
    "path": "/chanasma-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chanasma</strong>"
  },
  {
    "path": "/chhala-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chhala</strong>"
  },
  {
    "path": "/chhota-udepur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chhota Udepur</strong>"
  },
  {
    "path": "/chikhli-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chikhli</strong>"
  },
  {
    "path": "/chotila-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chotila</strong>"
  },
  {
    "path": "/chuda-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chuda</strong>"
  },
  {
    "path": "/dabhoda-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dabhoda</strong>"
  },
  {
    "path": "/dabhoi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dabhoi</strong>"
  },
  {
    "path": "/dahegam-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dahegam</strong>"
  },
  {
    "path": "/dahod-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dahod</strong>"
  },
  {
    "path": "/dakor-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dakor</strong>"
  },
  {
    "path": "/damnagar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Damnagar</strong>"
  },
  {
    "path": "/dandi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dandi</strong>"
  },
  {
    "path": "/dangs-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dangs</strong>"
  },
  {
    "path": "/danta-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Danta</strong>"
  },
  {
    "path": "/dayapar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dayapar</strong>"
  },
  {
    "path": "/delvada-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Delvada</strong>"
  },
  {
    "path": "/delwada-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Delwada</strong>"
  },
  {
    "path": "/detroj-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Detroj</strong>"
  },
  {
    "path": "/devbhumi-dwarka-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Devbhumi Dwarka</strong>"
  },
  {
    "path": "/devgadh-bariya-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Devgadh Bariya</strong>"
  },
  {
    "path": "/dhandhuka-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dhandhuka</strong>"
  },
  {
    "path": "/dhanera-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dhanera</strong>"
  },
  {
    "path": "/dhansura-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dhansura</strong>"
  },
  {
    "path": "/dharampur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dharampur</strong>"
  },
  {
    "path": "/dharasana-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dharasana</strong>"
  },
  {
    "path": "/dhari-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dhari</strong>"
  },
  {
    "path": "/dhasa-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dhasa</strong>"
  },
  {
    "path": "/dhola-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dhola</strong>"
  },
  {
    "path": "/dholera-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dholera</strong>"
  },
  {
    "path": "/dholka-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dholka</strong>"
  },
  {
    "path": "/dhoraji-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dhoraji</strong>"
  },
  {
    "path": "/dhrangadhra-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dhrangadhra</strong>"
  },
  {
    "path": "/dhrol-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dhrol</strong>"
  },
  {
    "path": "/dhuwaran-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dhuwaran</strong>"
  },
  {
    "path": "/disa-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Disa</strong>"
  },
  {
    "path": "/dohad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dohad</strong>"
  },
  {
    "path": "/dumkhal-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dumkhal</strong>"
  },
  {
    "path": "/dungarpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dungarpur</strong>"
  },
  {
    "path": "/dwarka-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dwarka</strong>"
  },
  {
    "path": "/gadhada-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gadhada</strong>"
  },
  {
    "path": "/gandevi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gandevi</strong>"
  },
  {
    "path": "/gandhidham-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gandhidham</strong>"
  },
  {
    "path": "/gandhinagar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gandhinagar</strong>"
  },
  {
    "path": "/gariadhar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gariadhar</strong>"
  },
  {
    "path": "/ghodasar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ghodasar</strong>"
  },
  {
    "path": "/ghogha-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ghogha</strong>"
  },
  {
    "path": "/girsomnath-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>GirSomnath</strong>"
  },
  {
    "path": "/godhra-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Godhra</strong>"
  },
  {
    "path": "/gondal-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gondal</strong>"
  },
  {
    "path": "/gorwa-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gorwa</strong>"
  },
  {
    "path": "/halenda-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Halenda</strong>"
  },
  {
    "path": "/halol-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Halol</strong>"
  },
  {
    "path": "/halvad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Halvad</strong>"
  },
  {
    "path": "/hansot-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Hansot</strong>"
  },
  {
    "path": "/harij-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Harij</strong>"
  },
  {
    "path": "/harsol-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Harsol</strong>"
  },
  {
    "path": "/hathuran-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Hathuran</strong>"
  },
  {
    "path": "/himmatnagar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Himmatnagar</strong>"
  },
  {
    "path": "/idar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Idar</strong>"
  },
  {
    "path": "/jakhau-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jakhau</strong>"
  },
  {
    "path": "/jalalpore-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jalalpore</strong>"
  },
  {
    "path": "/jalalpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jalalpur</strong>"
  },
  {
    "path": "/jalia-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jalia</strong>"
  },
  {
    "path": "/jambuda-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jambuda</strong>"
  },
  {
    "path": "/jambusar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jambusar</strong>"
  },
  {
    "path": "/jamnagar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jamnagar</strong>"
  },
  {
    "path": "/jarod-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jarod</strong>"
  },
  {
    "path": "/jasdan-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jasdan</strong>"
  },
  {
    "path": "/jetalpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jetalpur</strong>"
  },
  {
    "path": "/jetalsar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jetalsar</strong>"
  },
  {
    "path": "/jetpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jetpur</strong>"
  },
  {
    "path": "/jetpur-navagadh-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jetpur Navagadh</strong>"
  },
  {
    "path": "/jhalod-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jhalod</strong>"
  },
  {
    "path": "/jhulasan-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jhulasan</strong>"
  },
  {
    "path": "/jodhpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jodhpur</strong>"
  },
  {
    "path": "/jodhpur-ahmedabad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jodhpur Ahmedabad</strong>"
  },
  {
    "path": "/jodia-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jodia</strong>"
  },
  {
    "path": "/jodiya-bandar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jodiya Bandar</strong>"
  },
  {
    "path": "/junagadh-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Junagadh</strong>"
  },
  {
    "path": "/kachchh-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kachchh</strong>"
  },
  {
    "path": "/kachholi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kachholi</strong>"
  },
  {
    "path": "/kadi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kadi</strong>"
  },
  {
    "path": "/kadod-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kadod</strong>"
  },
  {
    "path": "/kalavad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kalavad</strong>"
  },
  {
    "path": "/kalol-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kalol</strong>"
  },
  {
    "path": "/kandla-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kandla</strong>"
  },
  {
    "path": "/kandla-port-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kandla port</strong>"
  },
  {
    "path": "/kanodar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kanodar</strong>"
  },
  {
    "path": "/kapadvanj-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kapadvanj</strong>"
  },
  {
    "path": "/karamsad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Karamsad</strong>"
  },
  {
    "path": "/kariana-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kariana</strong>"
  },
  {
    "path": "/karjan-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Karjan</strong>"
  },
  {
    "path": "/kathor-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kathor</strong>"
  },
  {
    "path": "/katpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Katpur</strong>"
  },
  {
    "path": "/kavant-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kavant</strong>"
  },
  {
    "path": "/kawant-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kawant</strong>"
  },
  {
    "path": "/kayavarohan-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kayavarohan</strong>"
  },
  {
    "path": "/kerwada-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kerwada</strong>"
  },
  {
    "path": "/keshod-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Keshod</strong>"
  },
  {
    "path": "/khambhalia-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Khambhalia</strong>"
  },
  {
    "path": "/khambhat-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Khambhat</strong>"
  },
  {
    "path": "/khavda-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Khavda</strong>"
  },
  {
    "path": "/kheda-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kheda</strong>"
  },
  {
    "path": "/khedbrahma-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Khedbrahma</strong>"
  },
  {
    "path": "/khedoi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Khedoi</strong>"
  },
  {
    "path": "/kherali-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kherali</strong>"
  },
  {
    "path": "/kheralu-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kheralu</strong>"
  },
  {
    "path": "/kodinar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kodinar</strong>"
  },
  {
    "path": "/kosamba-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kosamba</strong>"
  },
  {
    "path": "/kothara-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kothara</strong>"
  },
  {
    "path": "/kotharia-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kotharia</strong>"
  },
  {
    "path": "/kukarmunda-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kukarmunda</strong>"
  },
  {
    "path": "/kukma-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kukma</strong>"
  },
  {
    "path": "/kundla-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kundla</strong>"
  },
  {
    "path": "/kutch-district-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kutch district</strong>"
  },
  {
    "path": "/kutiyana-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kutiyana</strong>"
  },
  {
    "path": "/ladol-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ladol</strong>"
  },
  {
    "path": "/lakhpat-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Lakhpat</strong>"
  },
  {
    "path": "/lakhtar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Lakhtar</strong>"
  },
  {
    "path": "/lalpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Lalpur</strong>"
  },
  {
    "path": "/langhnaj-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Langhnaj</strong>"
  },
  {
    "path": "/lathi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Lathi</strong>"
  },
  {
    "path": "/limbdi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Limbdi</strong>"
  },
  {
    "path": "/limkheda-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Limkheda</strong>"
  },
  {
    "path": "/lunavada-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Lunavada</strong>"
  },
  {
    "path": "/madhavpur-ghed-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Madhavpur Ghed</strong>"
  },
  {
    "path": "/madhi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Madhi</strong>"
  },
  {
    "path": "/mahemdavad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mahemdavad</strong>"
  },
  {
    "path": "/mahisa-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mahisa</strong>"
  },
  {
    "path": "/mahudha-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mahudha</strong>"
  },
  {
    "path": "/mahuva-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mahuva</strong>"
  },
  {
    "path": "/malpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Malpur</strong>"
  },
  {
    "path": "/manavadar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Manavadar</strong>"
  },
  {
    "path": "/mandal-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mandal</strong>"
  },
  {
    "path": "/mandvi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mandvi</strong>"
  },
  {
    "path": "/mangrol-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mangrol</strong>"
  },
  {
    "path": "/mangrol-junagadh-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mangrol Junagadh</strong>"
  },
  {
    "path": "/mansa-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mansa</strong>"
  },
  {
    "path": "/meghraj-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Meghraj</strong>"
  },
  {
    "path": "/mehsana-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mehsana</strong>"
  },
  {
    "path": "/mendarda-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mendarda</strong>"
  },
  {
    "path": "/mithapur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mithapur</strong>"
  },
  {
    "path": "/modasa-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Modasa</strong>"
  },
  {
    "path": "/morbi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Morbi</strong>"
  },
  {
    "path": "/morva-hadaf-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Morva Hadaf</strong>"
  },
  {
    "path": "/morwa-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Morwa</strong>"
  },
  {
    "path": "/mundra-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mundra</strong>"
  },
  {
    "path": "/nadiad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nadiad</strong>"
  },
  {
    "path": "/nagwa-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nagwa</strong>"
  },
  {
    "path": "/naldhara-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Naldhara</strong>"
  },
  {
    "path": "/naliya-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Naliya</strong>"
  },
  {
    "path": "/nargol-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nargol</strong>"
  },
  {
    "path": "/narmada-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Narmada</strong>"
  },
  {
    "path": "/naroda-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Naroda</strong>"
  },
  {
    "path": "/navsari-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Navsari</strong>"
  },
  {
    "path": "/nikora-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nikora</strong>"
  },
  {
    "path": "/nizar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nizar</strong>"
  },
  {
    "path": "/odadar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Odadar</strong>"
  },
  {
    "path": "/okha-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Okha</strong>"
  },
  {
    "path": "/olpad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Olpad</strong>"
  },
  {
    "path": "/paddhari-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Paddhari</strong>"
  },
  {
    "path": "/padra-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Padra</strong>"
  },
  {
    "path": "/palanpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Palanpur</strong>"
  },
  {
    "path": "/palanswa-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Palanswa</strong>"
  },
  {
    "path": "/palitana-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Palitana</strong>"
  },
  {
    "path": "/paliyad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Paliyad</strong>"
  },
  {
    "path": "/paliyad-bhavnagar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Paliyad Bhavnagar</strong>"
  },
  {
    "path": "/palsana-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Palsana</strong>"
  },
  {
    "path": "/panch-mahals-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Panch Mahals</strong>"
  },
  {
    "path": "/panchmahal-district-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Panchmahal district</strong>"
  },
  {
    "path": "/pardi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pardi</strong>"
  },
  {
    "path": "/parnera-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Parnera</strong>"
  },
  {
    "path": "/patan-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Patan</strong>"
  },
  {
    "path": "/pavi-jetpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pavi Jetpur</strong>"
  },
  {
    "path": "/petlad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Petlad</strong>"
  },
  {
    "path": "/pipavav-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pipavav</strong>"
  },
  {
    "path": "/piplod-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Piplod</strong>"
  },
  {
    "path": "/porbandar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Porbandar</strong>"
  },
  {
    "path": "/prabhas-patan-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Prabhas Patan</strong>"
  },
  {
    "path": "/prantij-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Prantij</strong>"
  },
  {
    "path": "/radhanpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Radhanpur</strong>"
  },
  {
    "path": "/rajkot-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Rajkot</strong>"
  },
  {
    "path": "/rajpipla-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Rajpipla</strong>"
  },
  {
    "path": "/rajula-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Rajula</strong>"
  },
  {
    "path": "/ranavav-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ranavav</strong>"
  },
  {
    "path": "/ranpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ranpur</strong>"
  },
  {
    "path": "/rapar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Rapar</strong>"
  },
  {
    "path": "/reha-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Reha</strong>"
  },
  {
    "path": "/roha-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Roha</strong>"
  },
  {
    "path": "/sabar-kantha-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sabar Kantha</strong>"
  },
  {
    "path": "/sachin-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sachin</strong>"
  },
  {
    "path": "/salaya-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Salaya</strong>"
  },
  {
    "path": "/samakhiali-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Samakhiali</strong>"
  },
  {
    "path": "/sanand-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sanand</strong>"
  },
  {
    "path": "/sankheda-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sankheda</strong>"
  },
  {
    "path": "/sarbhon-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sarbhon</strong>"
  },
  {
    "path": "/sardoi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sardoi</strong>"
  },
  {
    "path": "/sarkhej-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sarkhej</strong>"
  },
  {
    "path": "/sathamba-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sathamba</strong>"
  },
  {
    "path": "/savarkundla-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Savarkundla</strong>"
  },
  {
    "path": "/savli-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Savli</strong>"
  },
  {
    "path": "/sayla-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sayla</strong>"
  },
  {
    "path": "/shahpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shahpur</strong>"
  },
  {
    "path": "/shivrajpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shivrajpur</strong>"
  },
  {
    "path": "/siddhpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Siddhpur</strong>"
  },
  {
    "path": "/sihor-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sihor</strong>"
  },
  {
    "path": "/sikka-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sikka</strong>"
  },
  {
    "path": "/sinor-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sinor</strong>"
  },
  {
    "path": "/sojitra-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sojitra</strong>"
  },
  {
    "path": "/songadh-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Songadh</strong>"
  },
  {
    "path": "/supedi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Supedi</strong>"
  },
  {
    "path": "/surat-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Surat</strong>"
  },
  {
    "path": "/surendranagar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Surendranagar</strong>"
  },
  {
    "path": "/sutrapada-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sutrapada</strong>"
  },
  {
    "path": "/talaja-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Talaja</strong>"
  },
  {
    "path": "/tankara-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Tankara</strong>"
  },
  {
    "path": "/tapi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Tapi</strong>"
  },
  {
    "path": "/than-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Than</strong>"
  },
  {
    "path": "/thangadh-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Thangadh</strong>"
  },
  {
    "path": "/tharad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Tharad</strong>"
  },
  {
    "path": "/thasra-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Thasra</strong>"
  },
  {
    "path": "/the-dangs-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>The Dangs</strong>"
  },
  {
    "path": "/umarpada-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Umarpada</strong>"
  },
  {
    "path": "/umrala-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Umrala</strong>"
  },
  {
    "path": "/umreth-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Umreth</strong>"
  },
  {
    "path": "/un-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Un</strong>"
  },
  {
    "path": "/una-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Una</strong>"
  },
  {
    "path": "/unjha-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Unjha</strong>"
  },
  {
    "path": "/upleta-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Upleta</strong>"
  },
  {
    "path": "/utran-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Utran</strong>"
  },
  {
    "path": "/vadgam-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vadgam</strong>"
  },
  {
    "path": "/vadnagar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vadnagar</strong>"
  },
  {
    "path": "/vadodara-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vadodara</strong>"
  },
  {
    "path": "/vaghodia-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vaghodia</strong>"
  },
  {
    "path": "/vaghodia-ina-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vaghodia INA</strong>"
  },
  {
    "path": "/vallabh-vidyanagar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vallabh Vidyanagar</strong>"
  },
  {
    "path": "/vallabhipur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vallabhipur</strong>"
  },
  {
    "path": "/valsad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Valsad</strong>"
  },
  {
    "path": "/vanala-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vanala</strong>"
  },
  {
    "path": "/vansda-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vansda</strong>"
  },
  {
    "path": "/vanthli-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vanthli</strong>"
  },
  {
    "path": "/vapi-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vapi</strong>"
  },
  {
    "path": "/vartej-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vartej</strong>"
  },
  {
    "path": "/vasa-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vasa</strong>"
  },
  {
    "path": "/vasavad-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vasavad</strong>"
  },
  {
    "path": "/vaso-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vaso</strong>"
  },
  {
    "path": "/vataman-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vataman</strong>"
  },
  {
    "path": "/vejalpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vejalpur</strong>"
  },
  {
    "path": "/veraval-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Veraval</strong>"
  },
  {
    "path": "/vijapur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vijapur</strong>"
  },
  {
    "path": "/vinchhiya-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vinchhiya</strong>"
  },
  {
    "path": "/vinchia-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vinchia</strong>"
  },
  {
    "path": "/viramgam-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Viramgam</strong>"
  },
  {
    "path": "/virpur-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Virpur</strong>"
  },
  {
    "path": "/visavadar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Visavadar</strong>"
  },
  {
    "path": "/visnagar-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Visnagar</strong>"
  },
  {
    "path": "/vyara-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vyara</strong>"
  },
  {
    "path": "/wadhai-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Wadhai</strong>"
  },
  {
    "path": "/wadhwan-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Wadhwan</strong>"
  },
  {
    "path": "/waghai-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Waghai</strong>"
  },
  {
    "path": "/wankaner-packers-movers-gujarat",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Wankaner</strong>"
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
            <h1>Car Shifting in Gujarat</h1>
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
