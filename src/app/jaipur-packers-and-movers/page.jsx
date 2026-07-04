import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Maruti Trans Car Shifting in Jaipur",
  description: "Find reliable and professional packers and movers in Car Shifting in Jaipur. Get free quotes for home shifting, office shifting, and cargo transport.",
};

export default function LocationRoutePage() {
  const LINKS = [
  {
    "path": "/achrol-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Achrol</strong>"
  },
  {
    "path": "/adarsh-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Adarsh Nagar</strong>"
  },
  {
    "path": "/adinath-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Adinath Nagar</strong>"
  },
  {
    "path": "/agra-road-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Agra Road</strong>"
  },
  {
    "path": "/airforce-station-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Airforce Station</strong>"
  },
  {
    "path": "/airport-road-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Airport Road</strong>"
  },
  {
    "path": "/ajeetgarh-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ajeetgarh</strong>"
  },
  {
    "path": "/ajmer-road-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ajmer Road</strong>"
  },
  {
    "path": "/akhil-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Akhil Nagar</strong>"
  },
  {
    "path": "/ambabari-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ambabari</strong>"
  },
  {
    "path": "/amer-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Amer</strong>"
  },
  {
    "path": "/amrit-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Amrit Nagar</strong>"
  },
  {
    "path": "/anand-lok-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Anand Lok</strong>"
  },
  {
    "path": "/apex-circle-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Apex Circle</strong>"
  },
  {
    "path": "/arjun-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Arjun Nagar</strong>"
  },
  {
    "path": "/army-area-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Army Area</strong>"
  },
  {
    "path": "/asalpur-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Asalpur</strong>"
  },
  {
    "path": "/ashok-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ashok Nagar</strong>"
  },
  {
    "path": "/ashok-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ashok Nagar</strong>"
  },
  {
    "path": "/azad-colony-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Azad Colony</strong>"
  },
  {
    "path": "/azad-colony-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Azad Colony</strong>"
  },
  {
    "path": "/bagru-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bagru</strong>"
  },
  {
    "path": "/bajaj-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bajaj Nagar</strong>"
  },
  {
    "path": "/balaji-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Balaji Nagar</strong>"
  },
  {
    "path": "/bani-park-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bani Park</strong>"
  },
  {
    "path": "/banshipuri-jagatpura-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Banshipuri Jagatpura</strong>"
  },
  {
    "path": "/bapu-bazar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bapu Bazar</strong>"
  },
  {
    "path": "/bapu-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bapu Nagar</strong>"
  },
  {
    "path": "/bharkrota-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Bharkrota</strong>"
  },
  {
    "path": "/budhsinghpura-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Budhsinghpura</strong>"
  },
  {
    "path": "/c-scheme-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>C-Scheme</strong>"
  },
  {
    "path": "/crpf-campus-lalwas-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>CRPF Campus Lalwas</strong>"
  },
  {
    "path": "/chainpura-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chainpura</strong>"
  },
  {
    "path": "/chaura-rasta-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chaura Rasta</strong>"
  },
  {
    "path": "/chitrakoot-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chitrakoot</strong>"
  },
  {
    "path": "/chomu-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Chomu</strong>"
  },
  {
    "path": "/civil-lines-jaipur-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Civil Lines Jaipur</strong>"
  },
  {
    "path": "/dher-ke-balaji-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dher Ke Balaji</strong>"
  },
  {
    "path": "/dholai-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dholai</strong>"
  },
  {
    "path": "/diggi-road-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Diggi Road</strong>"
  },
  {
    "path": "/dudu-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Dudu</strong>"
  },
  {
    "path": "/durga-vihar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Durga Vihar</strong>"
  },
  {
    "path": "/durga-vihar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Durga Vihar</strong>"
  },
  {
    "path": "/durgapura-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Durgapura</strong>"
  },
  {
    "path": "/durgapura-colony-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Durgapura Colony</strong>"
  },
  {
    "path": "/ekta-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ekta Nagar</strong>"
  },
  {
    "path": "/galta-gate-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Galta Gate</strong>"
  },
  {
    "path": "/gandhi-path-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gandhi Path</strong>"
  },
  {
    "path": "/ganesh-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ganesh Nagar</strong>"
  },
  {
    "path": "/gangapura-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gangapura</strong>"
  },
  {
    "path": "/gem-vihar-colony-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gem Vihar Colony</strong>"
  },
  {
    "path": "/gokulpura-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gokulpura</strong>"
  },
  {
    "path": "/goner-road-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Goner Road</strong>"
  },
  {
    "path": "/gopalbari-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gopalbari</strong>"
  },
  {
    "path": "/gopalbari-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gopalbari</strong>"
  },
  {
    "path": "/gopalpura-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gopalpura</strong>"
  },
  {
    "path": "/gopalpura-bypass-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Gopalpura Bypass</strong>"
  },
  {
    "path": "/govindpura-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Govindpura</strong>"
  },
  {
    "path": "/green-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Green Nagar</strong>"
  },
  {
    "path": "/haldighati-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Haldighati</strong>"
  },
  {
    "path": "/hans-vihar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Hans Vihar</strong>"
  },
  {
    "path": "/hanuman-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Hanuman Nagar</strong>"
  },
  {
    "path": "/harmada-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Harmada</strong>"
  },
  {
    "path": "/hathoj-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Hathoj</strong>"
  },
  {
    "path": "/hawa-mahal-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Hawa Mahal</strong>"
  },
  {
    "path": "/heerapura-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Heerapura</strong>"
  },
  {
    "path": "/hindon-city-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Hindon City</strong>"
  },
  {
    "path": "/iskon-road-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Iskon Road</strong>"
  },
  {
    "path": "/jln-marg-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>JLN Marg</strong>"
  },
  {
    "path": "/jagatpura-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jagatpura</strong>"
  },
  {
    "path": "/jahalan-doongri-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jahalan Doongri</strong>"
  },
  {
    "path": "/jawahar-circle-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jawahar Circle</strong>"
  },
  {
    "path": "/jawahar-colony-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jawahar Colony</strong>"
  },
  {
    "path": "/jawahar-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jawahar Nagar</strong>"
  },
  {
    "path": "/jhotwara-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jhotwara</strong>"
  },
  {
    "path": "/jobner-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jobner</strong>"
  },
  {
    "path": "/johari-bazar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Johari Bazar</strong>"
  },
  {
    "path": "/jyoti-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Jyoti Nagar</strong>"
  },
  {
    "path": "/kalwar-road-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kalwar Road</strong>"
  },
  {
    "path": "/kankha-ki-dhani-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kankha Ki Dhani</strong>"
  },
  {
    "path": "/kanti-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kanti Nagar</strong>"
  },
  {
    "path": "/khatipura-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Khatipura</strong>"
  },
  {
    "path": "/khatri-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Khatri Nagar</strong>"
  },
  {
    "path": "/kishanpole-bazar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kishanpole Bazar</strong>"
  },
  {
    "path": "/kishargarh-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kishargarh</strong>"
  },
  {
    "path": "/kotputli-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kotputli</strong>"
  },
  {
    "path": "/kukas-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Kukas</strong>"
  },
  {
    "path": "/lal-kothi-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Lal Kothi</strong>"
  },
  {
    "path": "/lalarpura-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Lalarpura</strong>"
  },
  {
    "path": "/mi-road-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>MI Road</strong>"
  },
  {
    "path": "/madhyam-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Madhyam Nagar</strong>"
  },
  {
    "path": "/mahapura-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mahapura</strong>"
  },
  {
    "path": "/mahaveer-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mahaveer Nagar</strong>"
  },
  {
    "path": "/mahesh-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mahesh Nagar</strong>"
  },
  {
    "path": "/mahindra-sez-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mahindra SEZ</strong>"
  },
  {
    "path": "/mahindra-world-city-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mahindra World City</strong>"
  },
  {
    "path": "/mal-pura-road-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mal Pura Road</strong>"
  },
  {
    "path": "/malpura-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Malpura</strong>"
  },
  {
    "path": "/malviya-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Malviya Nagar</strong>"
  },
  {
    "path": "/mansarovar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mansarovar</strong>"
  },
  {
    "path": "/mansarover-extension-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mansarover Extension</strong>"
  },
  {
    "path": "/marudhar-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Marudhar Nagar</strong>"
  },
  {
    "path": "/maruti-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Maruti Nagar</strong>"
  },
  {
    "path": "/mata-colony-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Mata Colony</strong>"
  },
  {
    "path": "/moti-dungri-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Moti Dungri</strong>"
  },
  {
    "path": "/murlipura-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Murlipura</strong>"
  },
  {
    "path": "/nandapuri-colony-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Nandapuri Colony</strong>"
  },
  {
    "path": "/narayan-singh-circle-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Narayan Singh Circle</strong>"
  },
  {
    "path": "/narayan-vihar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Narayan Vihar</strong>"
  },
  {
    "path": "/new-sanganer-road-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>New Sanganer Road</strong>"
  },
  {
    "path": "/niwaru-road-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Niwaru Road</strong>"
  },
  {
    "path": "/office-campus-colony-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Office Campus Colony</strong>"
  },
  {
    "path": "/padampura-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Padampura</strong>"
  },
  {
    "path": "/panchsheel-colony-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Panchsheel Colony</strong>"
  },
  {
    "path": "/panchyawala-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Panchyawala</strong>"
  },
  {
    "path": "/parsvnath-narayan-city-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Parsvnath Narayan City</strong>"
  },
  {
    "path": "/patrakar-colony-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Patrakar Colony</strong>"
  },
  {
    "path": "/phulera-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Phulera</strong>"
  },
  {
    "path": "/pratap-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Pratap Nagar</strong>"
  },
  {
    "path": "/prem-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Prem Nagar</strong>"
  },
  {
    "path": "/prithviraj-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Prithviraj Nagar</strong>"
  },
  {
    "path": "/riico-industrial-area-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>RIICO Industrial Area</strong>"
  },
  {
    "path": "/raj-bhavan-road-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Raj Bhavan Road</strong>"
  },
  {
    "path": "/raja-park-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Raja Park</strong>"
  },
  {
    "path": "/ram-bagh-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ram Bagh</strong>"
  },
  {
    "path": "/ram-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ram Nagar</strong>"
  },
  {
    "path": "/ramdaea-colony-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ramdaea Colony</strong>"
  },
  {
    "path": "/ramganj-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Ramganj</strong>"
  },
  {
    "path": "/rampura-road-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Rampura Road</strong>"
  },
  {
    "path": "/riddhi-siddhi-circle-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Riddhi Siddhi Circle</strong>"
  },
  {
    "path": "/riddhi-siddhi-circle-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Riddhi Siddhi Circle</strong>"
  },
  {
    "path": "/sfs-mansarovar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>SFS Mansarovar</strong>"
  },
  {
    "path": "/sachivalaya-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sachivalaya Nagar</strong>"
  },
  {
    "path": "/sahdev-marg-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sahdev Marg</strong>"
  },
  {
    "path": "/sanganer-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sanganer</strong>"
  },
  {
    "path": "/sardar-patel-marg-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sardar Patel Marg</strong>"
  },
  {
    "path": "/sethi-colony-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sethi Colony</strong>"
  },
  {
    "path": "/shahpura-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shahpura</strong>"
  },
  {
    "path": "/shankar-vihar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shankar Vihar</strong>"
  },
  {
    "path": "/shankar-vihar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shankar Vihar</strong>"
  },
  {
    "path": "/shanti-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shanti Nagar</strong>"
  },
  {
    "path": "/shastri-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shastri Nagar</strong>"
  },
  {
    "path": "/shipra-path-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shipra Path</strong>"
  },
  {
    "path": "/shiv-das-pura-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shiv Das Pura</strong>"
  },
  {
    "path": "/shivaji-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shivaji Nagar</strong>"
  },
  {
    "path": "/shivpuri-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shivpuri</strong>"
  },
  {
    "path": "/shivpuri-colony-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shivpuri Colony</strong>"
  },
  {
    "path": "/shri-ramnagar-colony-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shri Ramnagar Colony</strong>"
  },
  {
    "path": "/shyam-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shyam Nagar</strong>"
  },
  {
    "path": "/shyam-path-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Shyam Path</strong>"
  },
  {
    "path": "/siddhart-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Siddhart Nagar</strong>"
  },
  {
    "path": "/sikar-road-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sikar Road</strong>"
  },
  {
    "path": "/sindhi-camp-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sindhi Camp</strong>"
  },
  {
    "path": "/sindhi-colony-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sindhi Colony</strong>"
  },
  {
    "path": "/sindhi-colony-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sindhi Colony</strong>"
  },
  {
    "path": "/sirsi-road-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sirsi Road</strong>"
  },
  {
    "path": "/sitapura-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sitapura</strong>"
  },
  {
    "path": "/sodala-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sodala</strong>"
  },
  {
    "path": "/subhash-marg-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Subhash Marg</strong>"
  },
  {
    "path": "/sumer-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Sumer Nagar</strong>"
  },
  {
    "path": "/suraj-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Suraj Nagar</strong>"
  },
  {
    "path": "/tagore-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Tagore Nagar</strong>"
  },
  {
    "path": "/tara-chhaya-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Tara Chhaya Nagar</strong>"
  },
  {
    "path": "/tilak-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Tilak Nagar</strong>"
  },
  {
    "path": "/tonk-road-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Tonk Road</strong>"
  },
  {
    "path": "/transport-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Transport Nagar</strong>"
  },
  {
    "path": "/triveni-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Triveni Nagar</strong>"
  },
  {
    "path": "/udyog-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Udyog Nagar</strong>"
  },
  {
    "path": "/vaishali-extension-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vaishali Extension</strong>"
  },
  {
    "path": "/vaishali-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vaishali Nagar</strong>"
  },
  {
    "path": "/vatika-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vatika</strong>"
  },
  {
    "path": "/vidhyadhar-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vidhyadhar Nagar</strong>"
  },
  {
    "path": "/vidhyadhar-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vidhyadhar Nagar</strong>"
  },
  {
    "path": "/virat-nagar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Virat Nagar</strong>"
  },
  {
    "path": "/vishnu-vihar-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vishnu Vihar</strong>"
  },
  {
    "path": "/vishwakarma-industrial-area-packers-movers-jaipur",
    "icon": "bi bi-truck state-city-icon",
    "html": "Car Shifting in <strong>Vishwakarma Industrial Area</strong>"
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
              <span>Jaipur</span>
            </nav>
            <h1>Car Shifting in Jaipur</h1>
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
