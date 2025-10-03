import React, { useState } from 'react';
import styles from './Explore.module.css';
import Modal from '../components/Modal';
import allProducts from '../data/full_products_50.json';

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

// Define the chemicals data and sort it alphabetically by name
const chemicals = [
    { name: "Sodium Lauryl Sulfate (SLS)", info: "A widely used surfactant and foaming agent found in many personal care products.", detailedInfo: "Sodium Lauryl Sulfate (SLS) is a surfactant used in many cleaning and hygiene products for its ability to create a lather. However, it can be a skin, eye, and respiratory irritant, and can strip the skin and hair of their natural oils, leading to dryness and irritation. Some studies have also linked it to canker sores in the mouth.", image: sodiumLaurylSulfateImg },
    { name: "Sodium Fluoride", info: "An inorganic chemical compound that is a common ingredient in toothpaste and mouthwash to prevent cavities.", detailedInfo: "Sodium Fluoride is added to water supplies and dental products to prevent tooth decay. While beneficial in small, controlled amounts, ingestion of large amounts can be toxic and may lead to dental fluorosis, a condition that causes discoloration of the teeth.", image: sodiumFluorideImg },
    { name: "Stannous Fluoride", info: "An anti-bacterial and anti-cavity agent used in toothpaste for sensitivity relief.", detailedInfo: "Stannous Fluoride is used in some dental care products for its antimicrobial properties, helping to fight plaque and gingivitis. It can sometimes cause staining on teeth if not properly formulated, though modern formulations have largely mitigated this issue.", image: stannousFluorideImg },
    { name: "Sodium Tripolyphosphate", info: "A preservative and sequestrant used in food and as a water softener in detergents.", detailedInfo: "Sodium Tripolyphosphate is a chemical that has a wide range of applications, from preserving food to softening water. In toothpaste, it helps to remove and prevent stains. In large quantities, it can be a skin irritant.", image: sodiumTripolyphosphateImg },
    { name: "Sodium Cocoyl Isethionate", info: "A mild surfactant derived from coconut oil, used as a gentle cleanser in personal care products.", detailedInfo: "Derived from coconut oil, Sodium Cocoyl Isethionate is a gentle surfactant that is often used in 'sulfate-free' products. While it is milder than many other surfactants, it can still cause irritation in individuals with very sensitive skin.", image: sodiumCocoylIsethionateImg },
    { name: "Cocamidopropyl Betaine", info: "A synthetic surfactant derived from coconut oil, used as a foam booster in shampoos and soaps.", detailedInfo: "Cocamidopropyl Betaine is a synthetic surfactant that is used to increase the foaming action of cleaning products. It has been associated with an increase in allergic reactions and contact dermatitis.", image: cocamidopropylBetaineImg },
    { name: "Zinc Pyrithione (ZPT)", info: "An antibacterial and antifungal agent commonly used in anti-dandruff shampoos.", detailedInfo: "Zinc Pyrithione is an active ingredient in many anti-dandruff shampoos, used for its antifungal and antibacterial properties to combat the yeast that can cause dandruff. It can cause skin irritation in some individuals.", image: zincPyrithioneImg },
    { name: "Sodium Laureth Sulfate (SLES)", info: "A surfactant and foaming agent that is milder than SLS but can still be drying and irritating for some individuals.", detailedInfo: "Sodium Laureth Sulfate (SLES) is a surfactant that is similar to SLS but is considered to be slightly less irritating. It is used in a wide variety of personal care and cleaning products for its foaming properties. However, it can still be drying and irritating for some individuals.", image: sodiumLaurethSulfateImg },
    { name: "Dimethicone", info: "A silicone-based polymer used to provide slip and shine in hair care products.", detailedInfo: "Dimethicone is a type of silicone that is used in many hair care products to provide a smooth, shiny appearance. It can build up on the hair over time, weighing it down and preventing moisture from penetrating the hair shaft. This can lead to dryness and breakage over time.", image: dimethiconeImg },
    { name: "Paraffinum Liquidum (Mineral Oil)", info: "A byproduct of petroleum distillation, used as an occlusive agent in moisturizers to lock in moisture.", detailedInfo: "Mineral oil is a clear, odorless oil derived from petroleum that is widely used in cosmetics and personal care products. It works by creating a barrier on the skin that prevents moisture from escaping. However, it can also clog pores and may not be the best choice for those with acne-prone skin.", image: mineralOilImg },
    { name: "Alcohol Denat.", info: "Denatured alcohol is used as a solvent and to help products dry quickly.", detailedInfo: "Denatured alcohol is ethanol that has been mixed with other ingredients to make it unfit for human consumption. It is used in a variety of cosmetic products for its ability to act as a solvent and help products dry quickly. However, it can be very drying and irritating to the skin, especially for those with sensitive or dry skin.", image: alcoholDenatImg },
    { name: "Sodium Alkylbenzene Sulfonate (LAS)", info: "A common anionic surfactant in laundry detergents.", detailedInfo: "Sodium Alkylbenzene Sulfonate (LAS) is a powerful cleaning agent that is commonly used in laundry detergents. It is effective at removing dirt and stains, but it can be harsh on the skin and is known to be toxic to aquatic life.", image: sodiumAlkylbenzeneSulfonateImg },
    { name: "Optical Brighteners", info: "Chemicals that absorb ultraviolet light and re-emit it as blue light, making fabrics appear whiter.", detailedInfo: "Optical brighteners are synthetic chemicals that are added to laundry detergents to make fabrics appear whiter and brighter. They work by absorbing ultraviolet light and re-emitting it in the blue region of the spectrum. However, they are not easily biodegradable and can cause skin irritation in some individuals.", image: opticalBrightenerImg },
    { name: "Alcohol Ethoxylate (AE)", info: "A non-ionic surfactant effective at removing grease.", detailedInfo: "Alcohol Ethoxylate (AE) is a type of non-ionic surfactant that is effective at removing grease and oils. It is commonly used in laundry detergents and household cleaners. However, it can cause skin irritation with prolonged contact.", image: alcoholEthoxylateImg },
    { name: "Alkyl Ether Sulfates (AES)", info: "A class of surfactants used for their cleaning and foaming properties.", detailedInfo: "Alkyl Ether Sulfates (AES) are a class of surfactants that are used in a variety of cleaning and personal care products for their ability to create foam and remove dirt and oils. However, they can be irritating to the skin and eyes, especially with prolonged contact.", image: alkylEtherSulfatesImg },
    { name: "Hydrochloric Acid", info: "A strong corrosive acid used in some toilet bowl cleaners.", detailedInfo: "Hydrochloric acid is a highly corrosive, strong mineral acid that is used in some heavy-duty toilet bowl cleaners. It is extremely hazardous and can cause severe burns to the skin and eyes, and its fumes can cause respiratory damage.", image: hydrochloricAcidImg },
    { name: "Alkyl Trimethyl Ammonium Chloride", info: "A type of quaternary ammonium compound (quat) used as a disinfectant.", detailedInfo: "Alkyl Trimethyl Ammonium Chloride is a type of quaternary ammonium compound, or 'quat,' that is used as a disinfectant and biocide. It is a skin and eye irritant and should be handled with care.", image: alkylTrimethylAmmoniumChlorideImg },
    { name: "Benzalkonium Chloride", info: "Another quaternary ammonium compound used as a biocide and disinfectant.", detailedInfo: "Benzalkonium Chloride is another type of 'quat' that is used as a disinfectant and preservative in a variety of products. It is a known skin and eye irritant and is toxic to aquatic life.", image: benzalkoniumChlorideImg },
    { name: "Phosphoric Acid", info: "An acid used to add tartness to soft drinks.", detailedInfo: "Phosphoric acid is a weak mineral acid that is used to add a tangy, acidic flavor to many soft drinks. Frequent consumption of beverages containing phosphoric acid can lead to the erosion of tooth enamel.", image: phosphoricAcidImg },
    { name: "Caramel Color", info: "A food coloring made by heating carbohydrates.", detailedInfo: "Caramel color is one of the oldest and most widely used food colorings. Some types of caramel color contain a byproduct called 4-methylimidazole (4-MEI), which has been the subject of health concerns due to its potential carcinogenicity.", image: caramelColorImg },
    { name: "High Fructose Corn Syrup", info: "A sweetener made from corn starch.", detailedInfo: "High Fructose Corn Syrup (HFCS) is a sweetener derived from corn starch that is commonly used in processed foods and beverages. High intake of HFCS is linked to a variety of health problems, including obesity, type 2 diabetes, and metabolic syndrome.", image: highFructoseCornSyrupImg },
    { name: "Aspartame", info: "An artificial, non-saccharide sweetener used as a sugar substitute in some foods and beverages.", detailedInfo: "Aspartame is an artificial sweetener that is about 200 times sweeter than sugar. It is used in a wide variety of low-calorie and sugar-free products. The health effects of aspartame are a subject of ongoing debate and controversy.", image: aspartameImg },
    { name: "Monosodium Glutamate (MSG)", info: "A flavor enhancer commonly added to savory foods.", detailedInfo: "Monosodium Glutamate (MSG) is the sodium salt of glutamic acid, one of the most abundant naturally occurring non-essential amino acids. It is used as a flavor enhancer in a variety of savory foods. While generally recognized as safe by regulatory agencies, some people report sensitivity to it, experiencing symptoms like headaches and nausea.", image: monosodiumGlutamateImg },
    { name: "Tertiary Butylhydroquinone (TBHQ)", info: "A synthetic antioxidant used as a preservative for unsaturated vegetable oils and many edible animal fats.", detailedInfo: "Tertiary Butylhydroquinone (TBHQ) is a synthetic antioxidant that is used as a preservative to prevent oils and fats from becoming rancid. Its safety at high doses is a subject of controversy, with some studies suggesting it may have negative health effects.", image: tbhqImg },
    { name: "Palm Oil", info: "An edible vegetable oil derived from the mesocarp of the fruit of the oil palms.", detailedInfo: "Palm oil is an edible vegetable oil that is high in saturated fat. Its production has been a major driver of deforestation in Indonesia and Malaysia, leading to the loss of habitat for endangered species like the orangutan.", image: palmOilImg },
    { name: "Caffeine", info: "A central nervous system stimulant.", detailedInfo: "Caffeine is a natural stimulant most commonly found in tea, coffee, and cacao plants. It works by stimulating the brain and central nervous system, helping you stay alert and preventing the onset of tiredness. In moderation, it can improve focus and athletic performance, but excessive consumption can lead to negative health effects like anxiety, insomnia, and heart palpitations.", image: caffeineImg },
    { name: "Taurine", info: "An amino acid that is a required building block of protein.", detailedInfo: "Taurine is an amino sulfonic acid, but it is often referred to as an amino acid, a chemical that is a required building block of protein. It is generally considered safe, but its effects when combined with high amounts of caffeine in energy drinks are not fully understood.", image: taurineImg },
    { name: "Ascorbic Acid (Vitamin C)", info: "A water-soluble vitamin and antioxidant.", detailedInfo: "Ascorbic acid, also known as Vitamin C, is a water-soluble vitamin and antioxidant that is essential for the growth, development, and repair of all body tissues. It's involved in many body functions, including formation of collagen, absorption of iron, the proper functioning of the immune system, wound healing, and the maintenance of cartilage, bones, and teeth.", image: ascorbicAcidImg },
    { name: "Fructose", info: "A simple ketonic monosaccharide found in many plants.", detailedInfo: "Fructose is a type of sugar known as a monosaccharide. Overconsumption, especially in the form of high-fructose corn syrup, can contribute to health problems like insulin resistance, obesity, and fatty liver disease.", image: fructoseImg },
    { name: "Fragrance", info: "A complex mixture of scent chemicals.", detailedInfo: "The term 'fragrance' on a product label can refer to a complex mixture of dozens of chemicals. Manufacturers are not required to list the individual ingredients, which can include allergens, sensitizers, and potential endocrine disruptors.", image: fragranceImg },
    { name: "Sodium Polyacrylate", info: "A superabsorbent polymer used in diapers and other absorbent products.", detailedInfo: "Sodium polyacrylate is a polymer that can absorb a large amount of water. It is used in diapers, sanitary napkins, and other absorbent products. It is considered safe for external use, but it can be harmful if ingested.", image: sodiumPolyacrylateImg },
    { name: "Petrolatum", info: "A semi-solid mixture of hydrocarbons, also known as petroleum jelly.", detailedInfo: "Petrolatum, or petroleum jelly, is a semi-solid mixture of hydrocarbons that is used as a topical ointment for its healing properties. It is also used in many cosmetics and personal care products as a moisture barrier. While it can be effective at locking in moisture, it can also be comedogenic (pore-clogging) for some individuals.", image: petrolatumImg },
    { name: "BHA (Butylated Hydroxyanisole)", info: "A synthetic antioxidant used as a preservative in food and pet food.", detailedInfo: "Butylated hydroxyanisole (BHA) is a synthetic antioxidant that is used to prevent fats in foods from going rancid. It is also used as a preservative in some pet foods. BHA is listed as a possible human carcinogen by the International Agency for Research on Cancer.", image: bhaImg },
    { name: "Meat and Bone Meal", info: "A product of the rendering industry, used as a protein source in pet food.", detailedInfo: "Meat and bone meal is a product of the rendering industry. It is produced by rendering the parts of animals that are not consumed by humans. Its nutritional quality can be variable, and it has been a subject of controversy in the pet food industry.", image: meatAndBoneMealImg },
    { name: "BPA (Bisphenol A)", info: "An industrial chemical used to make certain plastics and resins.", detailedInfo: "Bisphenol A (BPA) is a chemical that is used to make certain plastics and epoxy resins. It is a known endocrine disruptor and has been linked to a variety of health problems, including reproductive issues, heart disease, and an increased risk of certain types of cancer.", image: bpaImg },
    { name: "Parabens", info: "A class of preservatives used in cosmetics and pharmaceuticals.", detailedInfo: "Parabens are a class of widely used preservatives in cosmetic and pharmaceutical products. They are potential endocrine disruptors due to their ability to mimic estrogen, and have been found in breast cancer tumors.", image: parabensImg },
    { name: "Phthalates", info: "A group of chemicals used to make plastics more flexible and harder to break.", detailedInfo: "Phthalates are a group of chemicals used to make plastics more flexible and harder to break. They are also used as solvents in a variety of products. Phthalates are known endocrine disruptors and have been linked to a range of health issues.", image: phthalatesImg },
    { name: "Formaldehyde", info: "A naturally occurring organic compound.", detailedInfo: "Formaldehyde is a colorless, strong-smelling gas that is used in a variety of industrial applications. It is a known human carcinogen and a respiratory irritant.", image: formaldehydeImg },
    { name: "Quaternary Ammonium Compounds (Quats)", info: "A group of chemicals used as disinfectants.", detailedInfo: "Quaternary Ammonium Compounds (Quats) are a group of chemicals that are used as disinfectants and preservatives in a variety of products. They have been linked to asthma and dermatitis.", image: alkylTrimethylAmmoniumChlorideImg },
    { name: "Triethanolamine (TEA)", info: "A viscous organic compound that is both a tertiary amine and a triol.", detailedInfo: "Triethanolamine (TEA) is used as a pH balancer in a variety of cosmetic products. It can react with other chemicals to form carcinogenic nitrosamines.", image: triethanolamineImg },
    { name: "BHT (Butylated Hydroxytoluene)", info: "A synthetic antioxidant used to prevent oils in food and cosmetics from becoming rancid.", detailedInfo: "Butylated hydroxytoluene (BHT) is a synthetic antioxidant that is used to prevent fats in foods and cosmetics from becoming rancid. It is a potential endocrine disruptor.", image: bhtImg },
    { name: "Annatto", info: "A natural food coloring derived from the seeds of the achiote tree.", detailedInfo: "Annatto is a natural food coloring that is derived from the seeds of the achiote tree. It can cause allergic reactions in sensitive individuals.", image: annattoImg },
    { name: "Volatile Organic Compounds (VOCs)", info: "Organic chemicals that have a high vapor pressure at ordinary room temperature.", detailedInfo: "Volatile Organic Compounds (VOCs) are a large group of chemicals that are found in many products we use to build and maintain our homes. They are emitted as gases and can contribute to poor indoor air quality.", image: vocsImg },
    { name: "Surfactants", info: "Substances that lower the surface tension between two liquids, between a gas and a liquid, or between a liquid and a solid.", detailedInfo: "Surfactants are compounds that lower the surface tension between two liquids, between a gas and a liquid, or between a liquid and a solid. Highly concentrated surfactants can be toxic if ingested and can cause skin and eye irritation.", image: surfactantsImg },
    { name: "Dyes", info: "Substances used to color products. Some dyes can be skin sensitizers and cause allergic reactions.", detailedInfo: "Dyes are used to add color to a wide variety of products. Some dyes can be skin sensitizers and cause allergic reactions, and some have been linked to more serious health problems.", image: dyesImg },
    { name: "Triclosan", info: "An antibacterial and antifungal agent.", detailedInfo: "Triclosan is an antibacterial and antifungal agent that has been used in a variety of consumer products. It has been linked to endocrine disruption and the development of antibiotic-resistant bacteria.", image: triclosanImg },
    { name: "Added Sugars", info: "Sugars and syrups that are added to foods or beverages when they are processed or prepared.", detailedInfo: "Added sugars are sugars and syrups that are added to foods or beverages when they are processed or prepared. High consumption of added sugars is linked to a variety of health problems, including obesity, type 2 diabetes, and heart disease.", image: addedSugarsImg },
    { name: "Sodium Chloride", info: "Commonly known as salt.", detailedInfo: "Sodium chloride, commonly known as salt, is an essential nutrient. However, most people consume far more than the recommended amount, which can lead to high blood pressure and an increased risk of heart disease and stroke.", image: sodiumChlorideImg }
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
  const [selectedChemical, setSelectedChemical] = useState(null);

  const openModal = (chemical) => {
    setSelectedChemical(chemical);
  };

  const closeModal = () => {
    setSelectedChemical(null);
  };

  const getProductsForChemical = (chemicalName) => {
    if (!chemicalName) return [];
    const productsContainingChemical = allProducts.filter(product =>
      product.chemicals.some(chem => chem.name === chemicalName)
    );
    return productsContainingChemical.map(p => p.name);
  };

  const filteredChemicals = chemicals.filter(chemical =>
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
            <div key={index} className={styles.card} onClick={() => openModal(chemical)}>
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
      {selectedChemical && (
        <Modal
          chemical={selectedChemical}
          products={getProductsForChemical(selectedChemical.name)}
          onClose={closeModal}
        />
      )}
    </main>
  );
}

export default Explore;