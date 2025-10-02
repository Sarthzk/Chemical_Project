import React, { useState } from 'react';
import styles from './Explore.module.css';

// Import all images from the assets folder
import addedSugarsImg from '../assets/added-sugars.jpg';
import alcoholDenatImg from '../assets/alcohol-denat.png';
import alcoholEthoxylateImg from '../assets/alcohol-ethoxylate.png';
import alkylEtherSulfatesImg from '../assets/alkyl-ether-sulfates.png';
import alkylTrimethylAmmoniumChlorideImg from '../assets/alkyl-trimethyl-ammonium-chloride.png';
import annattoImg from '../assets/annatto.jpg';
import aspartameImg from '../assets/aspartame.png';
import ascorbicAcidImg from '../assets/ascorbic-acid.png';
import benzalkoniumChlorideImg from '../assets/benzalkonium-chloride.png';
import bhaImg from '../assets/bha.png';
import bhtImg from '../assets/bht.png';
import bpaImg from '../assets/bpa.png';
import caffeineImg from '../assets/caffeine.png';
import caramelColorImg from '../assets/caramel-color.jpg';
import cocamidopropylBetaineImg from '../assets/cocamidopropyl-betaine.png';
import dimethiconeImg from '../assets/dimethicone.png';
import dyesImg from '../assets/dyes.jpg';
import formaldehydeImg from '../assets/formaldehyde.png';
import fragranceImg from '../assets/fragrance.jpeg';
import fructoseImg from '../assets/fructose.png';
import highFructoseCornSyrupImg from '../assets/high-fructose-corn-syrup.jpg';
import hydrochloricAcidImg from '../assets/hydrochloric-acid.png';
import meatAndBoneMealImg from '../assets/meat-and-bone-meal.jpg';
import mineralOilImg from '../assets/mineral-oil.jpg';
import monosodiumGlutamateImg from '../assets/monosodium-glutamate.png';
import opticalBrightenerImg from '../assets/optical-brightener.png';
import palmOilImg from '../assets/palm-oil.jpg';
import parabensImg from '../assets/parabens.png';
import petrolatumImg from '../assets/petrolatum.jpg';
import phosphoricAcidImg from '../assets/phosphoric-acid.png';
import phthalatesImg from '../assets/phthalates.png';
import sodiumAlkylbenzeneSulfonateImg from '../assets/sodium-alkylbenzene-sulfonate.png';
import sodiumChlorideImg from '../assets/sodium-chloride.png';
import sodiumCocoylIsethionateImg from '../assets/sodium-cocoyl-isethionate.png';
import sodiumFluorideImg from '../assets/sodium-fluoride.png';
import sodiumLaurethSulfateImg from '../assets/sodium-laureth-sulfate.png';
import sodiumLaurylSulfateImg from '../assets/sodium-lauryl-sulfate.png';
import sodiumPolyacrylateImg from '../assets/sodium-polyacrylate.jpg';
import sodiumTripolyphosphateImg from '../assets/sodium-tripolyphosphate.png';
import stannousFluorideImg from '../assets/stannous-fluoride.png';
import surfactantsImg from '../assets/surfactants.png';
import taurineImg from '../assets/taurine.png';
import tbhqImg from '../assets/tbhq.png';
import triclosanImg from '../assets/triclosan.png';
import triethanolamineImg from '../assets/triethanolamine.png';
import vocsImg from '../assets/vocs.png';
import zincPyrithioneImg from '../assets/zinc-pyrithione.png';

// Define the products data and sort it alphabetically by name
const products = [
    { name: "Sodium Lauryl Sulfate (SLS)", info: "Foaming detergent; can irritate oral mucosa.", image: sodiumLaurylSulfateImg },
    { name: "Sodium Fluoride", info: "Anti-cavity agent; toxic if swallowed in large amounts.", image: sodiumFluorideImg },
    { name: "Stannous Fluoride", info: "Active for sensitivity relief; may stain if not stabilized.", image: stannousFluorideImg },
    { name: "Sodium Tripolyphosphate", info: "Helps lift/prevent surface stains.", image: sodiumTripolyphosphateImg },
    { name: "Sodium Cocoyl Isethionate", info: "Milder cleanser that can still irritate very sensitive skin.", image: sodiumCocoylIsethionateImg },
    { name: "Cocamidopropyl Betaine", info: "Cleansing/foam booster; known allergen for a small subset.", image: cocamidopropylBetaineImg },
    { name: "Zinc Pyrithione (ZPT)", info: "Anti-dandruff active; tackles Malassezia yeast.", image: zincPyrithioneImg },
    { name: "Sodium Laureth Sulfate (SLES)", info: "Detergent; can be drying/irritating in some users.", image: sodiumLaurethSulfateImg },
    { name: "Dimethicone", info: "Silicone for slip; can build up on hair without clarifying.", image: dimethiconeImg },
    { name: "Paraffinum Liquidum (Mineral Oil)", info: "Occlusive; can feel heavy or clog pores for some.", image: mineralOilImg },
    { name: "Alcohol Denat.", info: "Can be drying/irritating for sensitive skin.", image: alcoholDenatImg },
    { name: "Sodium Alkylbenzene Sulfonate (LAS)", info: "Anionic surfactant; harsh to skin & aquatic life.", image: sodiumAlkylbenzeneSulfonateImg },
    { name: "Optical Brighteners", info: "Whitening dyes; persistent in environment, can irritate skin.", image: opticalBrightenerImg },
    { name: "Alcohol Ethoxylate (AE)", info: "Non-ionic surfactant; effective on grease, may irritate skin.", image: alcoholEthoxylateImg },
    { name: "Alkyl Ether Sulfates (AES)", info: "Cleansers; can be irritating with prolonged contact.", image: alkylEtherSulfatesImg },
    { name: "Hydrochloric Acid", info: "Strong acid; corrosive to skin/eyes; fumes irritate airways.", image: hydrochloricAcidImg },
    { name: "Alkyl Trimethyl Ammonium Chloride", info: "Quat disinfectant; irritant, careful handling required.", image: alkylTrimethylAmmoniumChlorideImg },
    { name: "Benzalkonium Chloride", info: "Quat biocide; eye/skin irritant; toxic to aquatic life.", image: benzalkoniumChlorideImg },
    { name: "Phosphoric Acid", info: "Adds tartness; erosive to tooth enamel with frequent intake.", image: phosphoricAcidImg },
    { name: "Caramel Color", info: "Can contain 4-MEI as a by-product.", image: caramelColorImg },
    { name: "High Fructose Corn Syrup", info: "Linked to obesity & metabolic issues with high intake.", image: highFructoseCornSyrupImg },
    { name: "Aspartame", info: "Artificial sweetener; controversial and potentially harmful.", image: aspartameImg },
    { name: "Monosodium Glutamate (MSG)", info: "Flavor enhancer; can cause sensitivity in some.", image: monosodiumGlutamateImg },
    { name: "Tertiary Butylhydroquinone (TBHQ)", info: "Antioxidant preservative; controversial in high doses.", image: tbhqImg },
    { name: "Palm Oil", info: "High in saturated fat; environmental sustainability concerns.", image: palmOilImg },
    { name: "Caffeine", info: "Stimulant; excess can cause jitters, insomnia, heart strain.", image: caffeineImg },
    { name: "Taurine", info: "Amino acid; safe but linked to overstimulation with high caffeine.", image: taurineImg },
    { name: "Ascorbic Acid (Vitamin C)", info: "Added nutrient; safe, beneficial antioxidant.", image: ascorbicAcidImg },
    { name: "Fructose", info: "Can spike blood sugar; overconsumption may contribute to weight gain.", image: fructoseImg },
    { name: "Fragrance", info: "May contain allergens; can cause sensitivity.", image: fragranceImg },
    { name: "Sodium Polyacrylate", info: "Locks in moisture; safe in diaper core but harmful if ingested.", image: sodiumPolyacrylateImg },
    { name: "Petrolatum", info: "Moisture barrier; can clog pores for some.", image: petrolatumImg },
    { name: "BHA (Butylated Hydroxyanisole)", info: "Antioxidant preservative; possibly carcinogenic.", image: bhaImg },
    { name: "Meat and Bone Meal", info: "Low-quality protein source; nutritional value can vary.", image: meatAndBoneMealImg },
    { name: "BPA (Bisphenol A)", info: "Found in some plastics; potential endocrine disruptor.", image: bpaImg },
    { name: "Parabens", info: "Preservatives (e.g., Propylparaben); potential endocrine disruptor.", image: parabensImg },
    { name: "Phthalates", info: "Often used to make scent linger; endocrine disruptor.", image: phthalatesImg },
    { name: "Formaldehyde", info: "A respiratory irritant and known carcinogen.", image: formaldehydeImg },
    { name: "Quaternary Ammonium Compounds (Quats)", info: "Disinfectant; linked to asthma and dermatitis.", image: alkylTrimethylAmmoniumChlorideImg },
    { name: "Triethanolamine (TEA)", info: "pH balancer; can form nitrosamines (carcinogens).", image: triethanolamineImg },
    { name: "BHT (Butylated Hydroxytoluene)", info: "Antioxidant preservative; potential endocrine disruptor.", image: bhtImg },
    { name: "Annatto", info: "A natural coloring agent; can cause allergic reactions.", image: annattoImg },
    { name: "Volatile Organic Compounds (VOCs)", info: "Solvents that contribute to poor indoor air quality.", image: vocsImg },
    { name: "Surfactants", info: "Highly concentrated cleaners; toxic if ingested.", image: surfactantsImg },
    { name: "Dyes", info: "Added for aesthetic purposes; potential skin sensitizers.", image: dyesImg },
    { name: "Triclosan", info: "Antibacterial agent; linked to endocrine disruption.", image: triclosanImg },
    { name: "Added Sugars", info: "High concentration of sugar; contributes to obesity.", image: addedSugarsImg },
    { name: "Sodium Chloride", info: "Table salt, essential for life.", image: sodiumChlorideImg }
].sort((a, b) => a.name.localeCompare(b.name));

// Reusable Pagination component
const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  if (pageNumbers.length <= 1) return null;
  return (
    <nav className={styles.paginationNav}>
      <a onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)} href='#!' className={styles.pageLink}>
        <span className="material-symbols-outlined">chevron_left</span>
      </a>
      {pageNumbers.map(number => (
        <a key={number} onClick={() => paginate(number)} href='#!' className={`${styles.pageLink} ${currentPage === number ? styles.active : ''}`}>
          {number}
        </a>
      ))}
      <a onClick={() => paginate(currentPage < pageNumbers.length ? currentPage + 1 : pageNumbers.length)} href='#!' className={styles.pageLink}>
        <span className="material-symbols-outlined">chevron_right</span>
      </a>
    </nav>
  );
};


function Explore() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [chemicalsPerPage] = useState(8);

  const filteredChemicals = products.filter(chemical =>
    chemical.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const indexOfLastChemical = currentPage * chemicalsPerPage;
  const indexOfFirstChemical = indexOfLastChemical - chemicalsPerPage;
  const currentChemicals = filteredChemicals.slice(indexOfFirstChemical, indexOfLastChemical);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Explore Chemicals</h1>
          <div className={styles.searchContainer}>
            <span className="material-symbols-outlined">search</span>
            <input
              className={styles.searchInput}
              placeholder="Search for a chemical"
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>

        <div className={styles.grid}>
          {currentChemicals.map((chemical, index) => (
            <div key={index} className={styles.card}>
              <div
                className={styles.cardImage}
                style={{
                  backgroundImage: `url(${chemical.image})`
                }}
              ></div>
              <div>
                <h3 className={styles.cardTitle}>{chemical.name}</h3>
                <p className={styles.cardDescription}>{chemical.info}</p>
              </div>
            </div>
          ))}
        </div>
        
        {filteredChemicals.length > chemicalsPerPage && (
          <div className={styles.paginationContainer}>
            <Pagination
              itemsPerPage={chemicalsPerPage}
              totalItems={filteredChemicals.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        )}

        {filteredChemicals.length === 0 && searchQuery && (
          <p className={styles.noResults}>No chemicals found for "{searchQuery}".</p>
        )}
      </div>
    </main>
  );
}

export default Explore;