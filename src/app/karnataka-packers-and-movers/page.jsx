import React from "react";
import Link from "next/link";

export const metadata = {
  title: "SRS Packers And Movers in Karnataka",
  description: "Find reliable and professional packers and movers in Packers & Movers in Karnataka. Get free quotes for home shifting, office shifting, and cargo transport.",
};

export default function LocationRoutePage() {
  const LINKS = [
  {
    "path": "/afzalpur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Afzalpur</strong>"
  },
  {
    "path": "/ajjampur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Ajjampur</strong>"
  },
  {
    "path": "/aland-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Aland</strong>"
  },
  {
    "path": "/alnavar-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Alnavar</strong>"
  },
  {
    "path": "/alur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Alur</strong>"
  },
  {
    "path": "/anekal-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Anekal</strong>"
  },
  {
    "path": "/ankola-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Ankola</strong>"
  },
  {
    "path": "/annigeri-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Annigeri</strong>"
  },
  {
    "path": "/arkalgud-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Arkalgud</strong>"
  },
  {
    "path": "/arsikere-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Arsikere</strong>"
  },
  {
    "path": "/athni-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Athni</strong>"
  },
  {
    "path": "/aurad-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Aurad</strong>"
  },
  {
    "path": "/badami-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Badami</strong>"
  },
  {
    "path": "/bagalkot-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bagalkot</strong>"
  },
  {
    "path": "/bagepalli-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bagepalli</strong>"
  },
  {
    "path": "/bail-hongal-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bail-Hongal</strong>"
  },
  {
    "path": "/ballari-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Ballari</strong>"
  },
  {
    "path": "/banavar-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Banavar</strong>"
  },
  {
    "path": "/bangalore-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bangalore</strong>"
  },
  {
    "path": "/bangalore-rural-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bangalore Rural</strong>"
  },
  {
    "path": "/bangarapet-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bangarapet</strong>"
  },
  {
    "path": "/bannur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bannur</strong>"
  },
  {
    "path": "/bantval-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bantval</strong>"
  },
  {
    "path": "/basavakalyan-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Basavakalyan</strong>"
  },
  {
    "path": "/basavana-bagevadi-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Basavana Bagevadi</strong>"
  },
  {
    "path": "/belgaum-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Belgaum</strong>"
  },
  {
    "path": "/bellary-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bellary</strong>"
  },
  {
    "path": "/belluru-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Belluru</strong>"
  },
  {
    "path": "/beltangadi-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Beltangadi</strong>"
  },
  {
    "path": "/belur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Belur</strong>"
  },
  {
    "path": "/bengaluru-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bengaluru</strong>"
  },
  {
    "path": "/bhadravati-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bhadravati</strong>"
  },
  {
    "path": "/bhalki-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bhalki</strong>"
  },
  {
    "path": "/bhatkal-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bhatkal</strong>"
  },
  {
    "path": "/bidar-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bidar</strong>"
  },
  {
    "path": "/bijapur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bijapur</strong>"
  },
  {
    "path": "/bilgi-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Bilgi</strong>"
  },
  {
    "path": "/birur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Birur</strong>"
  },
  {
    "path": "/byadgi-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Byadgi</strong>"
  },
  {
    "path": "/byndoor-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Byndoor</strong>"
  },
  {
    "path": "/canacona-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Canacona</strong>"
  },
  {
    "path": "/challakere-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Challakere</strong>"
  },
  {
    "path": "/chamrajnagar-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Chamrajnagar</strong>"
  },
  {
    "path": "/channagiri-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Channagiri</strong>"
  },
  {
    "path": "/channapatna-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Channapatna</strong>"
  },
  {
    "path": "/channarayapatna-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Channarayapatna</strong>"
  },
  {
    "path": "/chik-ballapur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Chik Ballapur</strong>"
  },
  {
    "path": "/chikkaballapur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Chikkaballapur</strong>"
  },
  {
    "path": "/chikmagalur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Chikmagalur</strong>"
  },
  {
    "path": "/chiknayakanhalli-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Chiknayakanhalli</strong>"
  },
  {
    "path": "/chikodi-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Chikodi</strong>"
  },
  {
    "path": "/chincholi-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Chincholi</strong>"
  },
  {
    "path": "/chintamani-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Chintamani</strong>"
  },
  {
    "path": "/chitapur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Chitapur</strong>"
  },
  {
    "path": "/chitradurga-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Chitradurga</strong>"
  },
  {
    "path": "/closepet-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Closepet</strong>"
  },
  {
    "path": "/coondapoor-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Coondapoor</strong>"
  },
  {
    "path": "/dakshina-kannada-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dakshina Kannada</strong>"
  },
  {
    "path": "/dandeli-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dandeli</strong>"
  },
  {
    "path": "/davanagere-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Davanagere</strong>"
  },
  {
    "path": "/devanhalli-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Devanhalli</strong>"
  },
  {
    "path": "/dharwad-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dharwad</strong>"
  },
  {
    "path": "/dod-ballapur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Dod Ballapur</strong>"
  },
  {
    "path": "/french-rocks-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>French Rocks</strong>"
  },
  {
    "path": "/gadag-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Gadag</strong>"
  },
  {
    "path": "/gadag-betageri-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Gadag-Betageri</strong>"
  },
  {
    "path": "/gajendragarh-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Gajendragarh</strong>"
  },
  {
    "path": "/gangawati-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Gangawati</strong>"
  },
  {
    "path": "/gangolli-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Gangolli</strong>"
  },
  {
    "path": "/gokak-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Gokak</strong>"
  },
  {
    "path": "/gokarna-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Gokarna</strong>"
  },
  {
    "path": "/goribidnur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Goribidnur</strong>"
  },
  {
    "path": "/gorur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Gorur</strong>"
  },
  {
    "path": "/gubbi-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Gubbi</strong>"
  },
  {
    "path": "/gudibanda-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Gudibanda</strong>"
  },
  {
    "path": "/gulbarga-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Gulbarga</strong>"
  },
  {
    "path": "/guledagudda-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Guledagudda</strong>"
  },
  {
    "path": "/gundlupet-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Gundlupet</strong>"
  },
  {
    "path": "/gurmatkal-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Gurmatkal</strong>"
  },
  {
    "path": "/hadagalli-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Hadagalli</strong>"
  },
  {
    "path": "/haliyal-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Haliyal</strong>"
  },
  {
    "path": "/hampi-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Hampi</strong>"
  },
  {
    "path": "/hangal-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Hangal</strong>"
  },
  {
    "path": "/harihar-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Harihar</strong>"
  },
  {
    "path": "/harpanahalli-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Harpanahalli</strong>"
  },
  {
    "path": "/hassan-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Hassan</strong>"
  },
  {
    "path": "/haveri-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Haveri</strong>"
  },
  {
    "path": "/heggadadevankote-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Heggadadevankote</strong>"
  },
  {
    "path": "/hirekerur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Hirekerur</strong>"
  },
  {
    "path": "/hiriyur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Hiriyur</strong>"
  },
  {
    "path": "/holalkere-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Holalkere</strong>"
  },
  {
    "path": "/hole-narsipur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Hole Narsipur</strong>"
  },
  {
    "path": "/homnabad-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Homnabad</strong>"
  },
  {
    "path": "/honavar-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Honavar</strong>"
  },
  {
    "path": "/honnali-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Honnali</strong>"
  },
  {
    "path": "/hosanagara-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Hosanagara</strong>"
  },
  {
    "path": "/hosangadi-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Hosangadi</strong>"
  },
  {
    "path": "/hosdurga-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Hosdurga</strong>"
  },
  {
    "path": "/hoskote-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Hoskote</strong>"
  },
  {
    "path": "/hospet-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Hospet</strong>"
  },
  {
    "path": "/hubli-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Hubli</strong>"
  },
  {
    "path": "/hukeri-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Hukeri</strong>"
  },
  {
    "path": "/hungund-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Hungund</strong>"
  },
  {
    "path": "/hunsur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Hunsur</strong>"
  },
  {
    "path": "/ilkal-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Ilkal</strong>"
  },
  {
    "path": "/indi-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Indi</strong>"
  },
  {
    "path": "/jagalur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Jagalur</strong>"
  },
  {
    "path": "/jamkhandi-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Jamkhandi</strong>"
  },
  {
    "path": "/jevargi-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Jevargi</strong>"
  },
  {
    "path": "/kadur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kadur</strong>"
  },
  {
    "path": "/kalghatgi-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kalghatgi</strong>"
  },
  {
    "path": "/kampli-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kampli</strong>"
  },
  {
    "path": "/kankanhalli-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kankanhalli</strong>"
  },
  {
    "path": "/karkala-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Karkala</strong>"
  },
  {
    "path": "/karwar-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Karwar</strong>"
  },
  {
    "path": "/kavalur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kavalur</strong>"
  },
  {
    "path": "/kerur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kerur</strong>"
  },
  {
    "path": "/khanapur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Khanapur</strong>"
  },
  {
    "path": "/kodagu-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kodagu</strong>"
  },
  {
    "path": "/kodigenahalli-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kodigenahalli</strong>"
  },
  {
    "path": "/kodlipet-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kodlipet</strong>"
  },
  {
    "path": "/kolar-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kolar</strong>"
  },
  {
    "path": "/kollegal-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kollegal</strong>"
  },
  {
    "path": "/konanur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Konanur</strong>"
  },
  {
    "path": "/konnur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Konnur</strong>"
  },
  {
    "path": "/koppa-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Koppa</strong>"
  },
  {
    "path": "/koppal-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Koppal</strong>"
  },
  {
    "path": "/koratagere-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Koratagere</strong>"
  },
  {
    "path": "/kotturu-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kotturu</strong>"
  },
  {
    "path": "/krishnarajpet-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Krishnarajpet</strong>"
  },
  {
    "path": "/kudachi-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kudachi</strong>"
  },
  {
    "path": "/kudligi-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kudligi</strong>"
  },
  {
    "path": "/kumsi-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kumsi</strong>"
  },
  {
    "path": "/kumta-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kumta</strong>"
  },
  {
    "path": "/kundgol-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kundgol</strong>"
  },
  {
    "path": "/kunigal-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kunigal</strong>"
  },
  {
    "path": "/kurgunta-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kurgunta</strong>"
  },
  {
    "path": "/kushalnagar-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kushalnagar</strong>"
  },
  {
    "path": "/kushtagi-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Kushtagi</strong>"
  },
  {
    "path": "/lakshmeshwar-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Lakshmeshwar</strong>"
  },
  {
    "path": "/lingsugur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Lingsugur</strong>"
  },
  {
    "path": "/londa-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Londa</strong>"
  },
  {
    "path": "/maddagiri-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Maddagiri</strong>"
  },
  {
    "path": "/maddur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Maddur</strong>"
  },
  {
    "path": "/madikeri-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Madikeri</strong>"
  },
  {
    "path": "/magadi-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Magadi</strong>"
  },
  {
    "path": "/mahalingpur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Mahalingpur</strong>"
  },
  {
    "path": "/malavalli-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Malavalli</strong>"
  },
  {
    "path": "/malpe-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Malpe</strong>"
  },
  {
    "path": "/malur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Malur</strong>"
  },
  {
    "path": "/mandya-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Mandya</strong>"
  },
  {
    "path": "/mangalore-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Mangalore</strong>"
  },
  {
    "path": "/manipal-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Manipal</strong>"
  },
  {
    "path": "/manvi-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Manvi</strong>"
  },
  {
    "path": "/mayakonda-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Mayakonda</strong>"
  },
  {
    "path": "/melukote-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Melukote</strong>"
  },
  {
    "path": "/mudbidri-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Mudbidri</strong>"
  },
  {
    "path": "/muddebihal-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Muddebihal</strong>"
  },
  {
    "path": "/mudgal-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Mudgal</strong>"
  },
  {
    "path": "/mudgere-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Mudgere</strong>"
  },
  {
    "path": "/mudhol-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Mudhol</strong>"
  },
  {
    "path": "/mulbagal-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Mulbagal</strong>"
  },
  {
    "path": "/mulgund-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Mulgund</strong>"
  },
  {
    "path": "/mulki-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Mulki</strong>"
  },
  {
    "path": "/mundargi-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Mundargi</strong>"
  },
  {
    "path": "/mundgod-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Mundgod</strong>"
  },
  {
    "path": "/munirabad-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Munirabad</strong>"
  },
  {
    "path": "/murudeshwara-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Murudeshwara</strong>"
  },
  {
    "path": "/mysore-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Mysore</strong>"
  },
  {
    "path": "/nagamangala-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Nagamangala</strong>"
  },
  {
    "path": "/nanjangud-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Nanjangud</strong>"
  },
  {
    "path": "/narasimharajapura-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Narasimharajapura</strong>"
  },
  {
    "path": "/naregal-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Naregal</strong>"
  },
  {
    "path": "/nargund-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Nargund</strong>"
  },
  {
    "path": "/navalgund-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Navalgund</strong>"
  },
  {
    "path": "/nelamangala-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Nelamangala</strong>"
  },
  {
    "path": "/nyamti-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Nyamti</strong>"
  },
  {
    "path": "/pangala-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Pangala</strong>"
  },
  {
    "path": "/pavugada-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Pavugada</strong>"
  },
  {
    "path": "/piriyapatna-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Piriyapatna</strong>"
  },
  {
    "path": "/ponnampet-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Ponnampet</strong>"
  },
  {
    "path": "/puttur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Puttur</strong>"
  },
  {
    "path": "/rabkavi-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Rabkavi</strong>"
  },
  {
    "path": "/raichur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Raichur</strong>"
  },
  {
    "path": "/ramanagara-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Ramanagara</strong>"
  },
  {
    "path": "/ranibennur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Ranibennur</strong>"
  },
  {
    "path": "/raybag-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Raybag</strong>"
  },
  {
    "path": "/robertsonpet-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Robertsonpet</strong>"
  },
  {
    "path": "/ron-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Ron</strong>"
  },
  {
    "path": "/sadalgi-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sadalgi</strong>"
  },
  {
    "path": "/sagar-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sagar</strong>"
  },
  {
    "path": "/sakleshpur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sakleshpur</strong>"
  },
  {
    "path": "/sandur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sandur</strong>"
  },
  {
    "path": "/sanivarsante-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sanivarsante</strong>"
  },
  {
    "path": "/sankeshwar-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sankeshwar</strong>"
  },
  {
    "path": "/sargur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sargur</strong>"
  },
  {
    "path": "/saundatti-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Saundatti</strong>"
  },
  {
    "path": "/savanur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Savanur</strong>"
  },
  {
    "path": "/seram-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Seram</strong>"
  },
  {
    "path": "/shahabad-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Shahabad</strong>"
  },
  {
    "path": "/shahpur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Shahpur</strong>"
  },
  {
    "path": "/shiggaon-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Shiggaon</strong>"
  },
  {
    "path": "/shikarpur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Shikarpur</strong>"
  },
  {
    "path": "/shimoga-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Shimoga</strong>"
  },
  {
    "path": "/shirhatti-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Shirhatti</strong>"
  },
  {
    "path": "/shorapur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Shorapur</strong>"
  },
  {
    "path": "/shrirangapattana-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Shrirangapattana</strong>"
  },
  {
    "path": "/siddapur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Siddapur</strong>"
  },
  {
    "path": "/sidlaghatta-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sidlaghatta</strong>"
  },
  {
    "path": "/sindgi-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sindgi</strong>"
  },
  {
    "path": "/sindhnur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sindhnur</strong>"
  },
  {
    "path": "/sira-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sira</strong>"
  },
  {
    "path": "/sirsi-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sirsi</strong>"
  },
  {
    "path": "/siruguppa-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Siruguppa</strong>"
  },
  {
    "path": "/someshwar-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Someshwar</strong>"
  },
  {
    "path": "/somvarpet-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Somvarpet</strong>"
  },
  {
    "path": "/sorab-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sorab</strong>"
  },
  {
    "path": "/sravana-belgola-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sravana Belgola</strong>"
  },
  {
    "path": "/sringeri-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sringeri</strong>"
  },
  {
    "path": "/srinivaspur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Srinivaspur</strong>"
  },
  {
    "path": "/sulya-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Sulya</strong>"
  },
  {
    "path": "/suntikoppa-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Suntikoppa</strong>"
  },
  {
    "path": "/talikota-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Talikota</strong>"
  },
  {
    "path": "/tarikere-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Tarikere</strong>"
  },
  {
    "path": "/tekkalakote-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Tekkalakote</strong>"
  },
  {
    "path": "/terdal-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Terdal</strong>"
  },
  {
    "path": "/tiptur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Tiptur</strong>"
  },
  {
    "path": "/tirthahalli-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Tirthahalli</strong>"
  },
  {
    "path": "/tirumakudal-narsipur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Tirumakudal Narsipur</strong>"
  },
  {
    "path": "/tumkur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Tumkur</strong>"
  },
  {
    "path": "/turuvekere-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Turuvekere</strong>"
  },
  {
    "path": "/udupi-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Udupi</strong>"
  },
  {
    "path": "/ullal-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Ullal</strong>"
  },
  {
    "path": "/uttar-kannada-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Uttar Kannada</strong>"
  },
  {
    "path": "/vadigenhalli-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Vadigenhalli</strong>"
  },
  {
    "path": "/virarajendrapet-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Virarajendrapet</strong>"
  },
  {
    "path": "/wadi-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Wadi</strong>"
  },
  {
    "path": "/yadgir-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Yadgir</strong>"
  },
  {
    "path": "/yelahanka-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Yelahanka</strong>"
  },
  {
    "path": "/yelandur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Yelandur</strong>"
  },
  {
    "path": "/yelbarga-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Yelbarga</strong>"
  },
  {
    "path": "/yellapur-packers-movers-karnataka",
    "icon": "bi bi-truck state-city-icon",
    "html": "Packers and Movers in <strong>Yellapur</strong>"
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
              <span>Karnataka</span>
            </nav>
            <h1>Packers & Movers in Karnataka</h1>
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
