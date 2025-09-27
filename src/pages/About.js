function About() {
  return (
    <div style={{ backgroundColor: '#121212', color: '#e0e0e0', minHeight: '100vh', padding: '60px 20px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        
        <h1 style={{ color: '#14b8a6', fontSize: '3rem', borderBottom: '2px solid #4c51bf', paddingBottom: '10px', marginBottom: '40px' }}>
          About Chem Aware
        </h1>

        {/* Card 1: Mission and Context (Darker Card: #28283d, Indigo Accent) */}
        <div style={{ backgroundColor: '#28283d', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.4)', marginBottom: '30px', textAlign: 'left', borderLeft: '5px solid #4c51bf' }}>
          <h2 style={{ color: '#14b8a6', fontSize: '2rem', marginTop: '0', marginBottom: '15px' }}>Mission and Context</h2>
          <p style={{ color: '#a0a0a0', lineHeight: '1.7', fontSize: '1.1rem' }}>
            This application, **"Chem Aware,"** was developed as a **Comprehensive Examination Project (CEP)** for **Savitribai Phule Pune University (SPPU)**.
          </p>
          <p style={{ color: '#a0a0a0', lineHeight: '1.7', fontSize: '1.1rem' }}>
            Our core mission is to **demystify the ingredients** in everyday household and personal care products. We aim to empower consumers to make healthier, informed choices by providing clear, accessible information on potentially harmful substances.
          </p>
        </div>

        {/* Card 2: Features Section (Deepest Dark Card: #1e1e2c, Teal Accent) */}
        <div style={{ backgroundColor: '#1e1e2c', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.4)', marginBottom: '30px', textAlign: 'left', borderLeft: '5px solid #14b8a6' }}>
          <h2 style={{ color: '#14b8a6', fontSize: '2rem', marginTop: '0', marginBottom: '15px' }}>Key Modules</h2>
          <ul style={{ color: '#a0a0a0', lineHeight: '1.8', listStyleType: 'disc', paddingLeft: '20px', fontSize: '1.1rem' }}>
            <li><strong>Live Search Simulation:</strong> Demonstrates asynchronous API integration for instant product and chemical lookup.</li>
            <li><strong>Explore Categories:</strong> Structured data display to quickly analyze common chemical risks by product category.</li>
            <li><strong>Awareness Survey & Quiz:</strong> Interactive tools designed to test and reinforce user knowledge.</li>
            <li><strong>Knowledge Base:</strong> Provides detailed articles and scientific context on major chemical threats like Parabens and Phthalates.</li>
          </ul>
        </div>

        {/* Card 3: Technology Section (Darker Card: #28283d, Indigo Accent) */}
        <div style={{ backgroundColor: '#28283d', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.4)', marginBottom: '30px', textAlign: 'left', borderLeft: '5px solid #4c51bf' }}>
          <h2 style={{ color: '#14b8a6', fontSize: '2rem', marginTop: '0', marginBottom: '15px' }}>Technology Stack</h2>
          <p style={{ color: '#a0a0a0', lineHeight: '1.7', fontSize: '1.1rem' }}>
            This modern single-page application is built using the following front-end technologies:
          </p>
          <ul style={{ color: '#a0a0a0', lineHeight: '1.8', listStyleType: 'square', paddingLeft: '20px', fontSize: '1.1rem' }}>
            <li><strong>Core Framework:</strong> React v19.1.1 (utilizing Hooks for state management).</li>
            <li><strong>Routing:</strong> React Router DOM (v7.7.1) for smooth client-side navigation.</li>
            <li><strong>Styling:</strong> CSS Modules for component-scoped, dark modern aesthetic.</li>
            <li><strong>Interactivity:</strong> Implemented asynchronous operations for search functionality simulation.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default About;