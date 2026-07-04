import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Maruti Trans Car Shifting in Andhra pradesh",
  description: "Find reliable and professional packers and movers in Car Shifting in Andhra pradesh. Get free quotes for home shifting, office shifting, and cargo transport.",
};

export default function LocationRoutePage() {
  const LINKS = [
  {
    "path": "/addanki-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Addanki</strong>"
  },
  {
    "path": "/adoni-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Adoni</strong>"
  },
  {
    "path": "/akasahebpet-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Akasahebpet</strong>"
  },
  {
    "path": "/akividu-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Akividu</strong>"
  },
  {
    "path": "/akkarampalle-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Akkarampalle</strong>"
  },
  {
    "path": "/amalapuram-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Amalapuram</strong>"
  },
  {
    "path": "/amudalavalasa-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Amudalavalasa</strong>"
  },
  {
    "path": "/anakapalle-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Anakapalle</strong>"
  },
  {
    "path": "/anantapur-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Anantapur</strong>"
  },
  {
    "path": "/atmakur-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Atmakur</strong>"
  },
  {
    "path": "/attili-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Attili</strong>"
  },
  {
    "path": "/avanigadda-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Avanigadda</strong>"
  },
  {
    "path": "/badvel-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Badvel</strong>"
  },
  {
    "path": "/banganapalle-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Banganapalle</strong>"
  },
  {
    "path": "/bapatla-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bapatla</strong>"
  },
  {
    "path": "/betamcherla-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Betamcherla</strong>"
  },
  {
    "path": "/bhattiprolu-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhattiprolu</strong>"
  },
  {
    "path": "/bhimavaram-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhimavaram</strong>"
  },
  {
    "path": "/bhimunipatnam-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bhimunipatnam</strong>"
  },
  {
    "path": "/bobbili-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bobbili</strong>"
  },
  {
    "path": "/challapalle-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Challapalle</strong>"
  },
  {
    "path": "/chemmumiahpet-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chemmumiahpet</strong>"
  },
  {
    "path": "/chilakaluripet-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chilakaluripet</strong>"
  },
  {
    "path": "/chilakalurupet-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chilakalurupet</strong>"
  },
  {
    "path": "/chinnachowk-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chinnachowk</strong>"
  },
  {
    "path": "/chipurupalle-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chipurupalle</strong>"
  },
  {
    "path": "/chirala-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chirala</strong>"
  },
  {
    "path": "/chittoor-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chittoor</strong>"
  },
  {
    "path": "/chodavaram-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chodavaram</strong>"
  },
  {
    "path": "/cuddapah-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Cuddapah</strong>"
  },
  {
    "path": "/cumbum-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Cumbum</strong>"
  },
  {
    "path": "/darsi-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Darsi</strong>"
  },
  {
    "path": "/dharmavaram-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dharmavaram</strong>"
  },
  {
    "path": "/dhone-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dhone</strong>"
  },
  {
    "path": "/diguvametta-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Diguvametta</strong>"
  },
  {
    "path": "/east-godavari-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>East Godavari</strong>"
  },
  {
    "path": "/elamanchili-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Elamanchili</strong>"
  },
  {
    "path": "/ellore-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ellore</strong>"
  },
  {
    "path": "/emmiganur-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Emmiganur</strong>"
  },
  {
    "path": "/erraguntla-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Erraguntla</strong>"
  },
  {
    "path": "/etikoppaka-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Etikoppaka</strong>"
  },
  {
    "path": "/gajuwaka-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gajuwaka</strong>"
  },
  {
    "path": "/ganguvada-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ganguvada</strong>"
  },
  {
    "path": "/gannavaram-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gannavaram</strong>"
  },
  {
    "path": "/giddalur-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Giddalur</strong>"
  },
  {
    "path": "/gokavaram-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gokavaram</strong>"
  },
  {
    "path": "/gorantla-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gorantla</strong>"
  },
  {
    "path": "/gudivada-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gudivada</strong>"
  },
  {
    "path": "/gudlavalleru-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gudlavalleru</strong>"
  },
  {
    "path": "/gudur-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gudur</strong>"
  },
  {
    "path": "/guntakal-junction-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Guntakal Junction</strong>"
  },
  {
    "path": "/guntur-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Guntur</strong>"
  },
  {
    "path": "/hindupur-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Hindupur</strong>"
  },
  {
    "path": "/ichchapuram-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ichchapuram</strong>"
  },
  {
    "path": "/jaggayyapeta-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jaggayyapeta</strong>"
  },
  {
    "path": "/jammalamadugu-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jammalamadugu</strong>"
  },
  {
    "path": "/kadiri-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kadiri</strong>"
  },
  {
    "path": "/kaikalur-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kaikalur</strong>"
  },
  {
    "path": "/kakinada-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kakinada</strong>"
  },
  {
    "path": "/kalyandurg-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kalyandurg</strong>"
  },
  {
    "path": "/kamalapuram-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kamalapuram</strong>"
  },
  {
    "path": "/kandukur-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kandukur</strong>"
  },
  {
    "path": "/kanigiri-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kanigiri</strong>"
  },
  {
    "path": "/kankipadu-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kankipadu</strong>"
  },
  {
    "path": "/kanuru-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kanuru</strong>"
  },
  {
    "path": "/kavali-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kavali</strong>"
  },
  {
    "path": "/kolanukonda-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kolanukonda</strong>"
  },
  {
    "path": "/kondapalle-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kondapalle</strong>"
  },
  {
    "path": "/korukollu-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Korukollu</strong>"
  },
  {
    "path": "/kosigi-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kosigi</strong>"
  },
  {
    "path": "/kovvur-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kovvur</strong>"
  },
  {
    "path": "/krishna-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Krishna</strong>"
  },
  {
    "path": "/kuppam-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kuppam</strong>"
  },
  {
    "path": "/kurnool-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kurnool</strong>"
  },
  {
    "path": "/macherla-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Macherla</strong>"
  },
  {
    "path": "/machilipatnam-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Machilipatnam</strong>"
  },
  {
    "path": "/madanapalle-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Madanapalle</strong>"
  },
  {
    "path": "/madugula-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Madugula</strong>"
  },
  {
    "path": "/mandapeta-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mandapeta</strong>"
  },
  {
    "path": "/mandasa-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mandasa</strong>"
  },
  {
    "path": "/mangalagiri-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mangalagiri</strong>"
  },
  {
    "path": "/markapur-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Markapur</strong>"
  },
  {
    "path": "/nagari-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nagari</strong>"
  },
  {
    "path": "/nagireddipalli-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nagireddipalli</strong>"
  },
  {
    "path": "/nandigama-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nandigama</strong>"
  },
  {
    "path": "/nandikotkur-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nandikotkur</strong>"
  },
  {
    "path": "/nandyal-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nandyal</strong>"
  },
  {
    "path": "/narasannapeta-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Narasannapeta</strong>"
  },
  {
    "path": "/narasapur-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Narasapur</strong>"
  },
  {
    "path": "/narasaraopet-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Narasaraopet</strong>"
  },
  {
    "path": "/narasingapuram-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Narasingapuram</strong>"
  },
  {
    "path": "/narayanavanam-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Narayanavanam</strong>"
  },
  {
    "path": "/narsipatnam-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Narsipatnam</strong>"
  },
  {
    "path": "/nayudupet-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nayudupet</strong>"
  },
  {
    "path": "/nellore-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nellore</strong>"
  },
  {
    "path": "/nidadavole-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nidadavole</strong>"
  },
  {
    "path": "/nuzvid-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nuzvid</strong>"
  },
  {
    "path": "/ongole-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ongole</strong>"
  },
  {
    "path": "/pakala-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pakala</strong>"
  },
  {
    "path": "/palakollu-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Palakollu</strong>"
  },
  {
    "path": "/palasa-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Palasa</strong>"
  },
  {
    "path": "/palkonda-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Palkonda</strong>"
  },
  {
    "path": "/pallevada-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pallevada</strong>"
  },
  {
    "path": "/palmaner-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Palmaner</strong>"
  },
  {
    "path": "/parlakimidi-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Parlakimidi</strong>"
  },
  {
    "path": "/parvatipuram-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Parvatipuram</strong>"
  },
  {
    "path": "/pavuluru-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pavuluru</strong>"
  },
  {
    "path": "/pedana-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pedana</strong>"
  },
  {
    "path": "/peddapuram-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Peddapuram</strong>"
  },
  {
    "path": "/penugonda-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Penugonda</strong>"
  },
  {
    "path": "/penukonda-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Penukonda</strong>"
  },
  {
    "path": "/phirangipuram-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Phirangipuram</strong>"
  },
  {
    "path": "/pippara-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pippara</strong>"
  },
  {
    "path": "/pithapuram-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pithapuram</strong>"
  },
  {
    "path": "/polavaram-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Polavaram</strong>"
  },
  {
    "path": "/ponnur-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ponnur</strong>"
  },
  {
    "path": "/ponnuru-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ponnuru</strong>"
  },
  {
    "path": "/prakasam-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Prakasam</strong>"
  },
  {
    "path": "/proddatur-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Proddatur</strong>"
  },
  {
    "path": "/pulivendla-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pulivendla</strong>"
  },
  {
    "path": "/punganuru-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Punganuru</strong>"
  },
  {
    "path": "/puttaparthi-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Puttaparthi</strong>"
  },
  {
    "path": "/puttur-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Puttur</strong>"
  },
  {
    "path": "/rajahmundry-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Rajahmundry</strong>"
  },
  {
    "path": "/ramachandrapuram-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ramachandrapuram</strong>"
  },
  {
    "path": "/ramanayyapeta-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ramanayyapeta</strong>"
  },
  {
    "path": "/ramapuram-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ramapuram</strong>"
  },
  {
    "path": "/rampachodavaram-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Rampachodavaram</strong>"
  },
  {
    "path": "/rayachoti-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Rayachoti</strong>"
  },
  {
    "path": "/rayadrug-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Rayadrug</strong>"
  },
  {
    "path": "/razam-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Razam</strong>"
  },
  {
    "path": "/razampeta-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Razampeta</strong>"
  },
  {
    "path": "/razole-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Razole</strong>"
  },
  {
    "path": "/renigunta-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Renigunta</strong>"
  },
  {
    "path": "/repalle-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Repalle</strong>"
  },
  {
    "path": "/salur-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Salur</strong>"
  },
  {
    "path": "/samalkot-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Samalkot</strong>"
  },
  {
    "path": "/sattenapalle-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sattenapalle</strong>"
  },
  {
    "path": "/singarayakonda-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Singarayakonda</strong>"
  },
  {
    "path": "/sompeta-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sompeta</strong>"
  },
  {
    "path": "/srikakulam-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Srikakulam</strong>"
  },
  {
    "path": "/srisailain-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Srisailain</strong>"
  },
  {
    "path": "/suluru-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Suluru</strong>"
  },
  {
    "path": "/tadepalle-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Tadepalle</strong>"
  },
  {
    "path": "/tadepallegudem-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Tadepallegudem</strong>"
  },
  {
    "path": "/tadpatri-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Tadpatri</strong>"
  },
  {
    "path": "/tanuku-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Tanuku</strong>"
  },
  {
    "path": "/tekkali-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Tekkali</strong>"
  },
  {
    "path": "/tirumala-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Tirumala</strong>"
  },
  {
    "path": "/tirupati-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Tirupati</strong>"
  },
  {
    "path": "/tuni-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Tuni</strong>"
  },
  {
    "path": "/uravakonda-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Uravakonda</strong>"
  },
  {
    "path": "/vadlapudi-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vadlapudi</strong>"
  },
  {
    "path": "/venkatagiri-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Venkatagiri</strong>"
  },
  {
    "path": "/vepagunta-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vepagunta</strong>"
  },
  {
    "path": "/vetapalem-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vetapalem</strong>"
  },
  {
    "path": "/vijayawada-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vijayawada</strong>"
  },
  {
    "path": "/vinukonda-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vinukonda</strong>"
  },
  {
    "path": "/visakhapatnam-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Visakhapatnam</strong>"
  },
  {
    "path": "/vizianagaram-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vizianagaram</strong>"
  },
  {
    "path": "/vizianagaram-district-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vizianagaram District</strong>"
  },
  {
    "path": "/vuyyuru-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vuyyuru</strong>"
  },
  {
    "path": "/west-godavari-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>West Godavari</strong>"
  },
  {
    "path": "/yanam-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Yanam</strong>"
  },
  {
    "path": "/yanamalakuduru-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Yanamalakuduru</strong>"
  },
  {
    "path": "/yarada-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Yarada</strong>"
  },
  {
    "path": "/pedda-nakkalapalem-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>pedda nakkalapalem</strong>"
  },
  {
    "path": "/vadlamuru-packers-movers-andhra-pradesh",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>vadlamuru</strong>"
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
              <span>Andhra Pradesh</span>
            </nav>
            <h1>Car Shifting in Andhra pradesh</h1>
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
