import { useState } from 'react';
import CompanyCard from '../components/CompanyCard';

// Import the data
import data from '../data.json';

export default function Home() {
  const [sortedData, setSortedData] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle sorting
  const handleSort = (criteria) => {
    const sorted = [...sortedData].sort((a, b) => {
      if (criteria === 'valuation') {
        const valA = parseFloat(a['Valuation ($B)'].substring(1));
        const valB = parseFloat(b['Valuation ($B)'].substring(1));
        return valB - valA;
      }
      return a[criteria].localeCompare(b[criteria]);
    });
    setSortedData(sorted);
  };

  const filteredData = sortedData.filter(company =>
    company.Company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dark-mode">
      <title>Unicorn Companies</title>
      <h1 className="centered">Unicorn Companies</h1>
      <p className="centered">A curated list of privately-owned startup companies that have achieved a valuation of $1 billion or more, as of September 1, 2022.</p>
      <div className="search-container centered">
        <input
          className="search-input"
          type="text"
          placeholder="Search companies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="button-group centered">
        <button onClick={() => handleSort('Company')}>Sort by Company Name</button>
        <button onClick={() => handleSort('valuation')}>Sort by Valuation</button>
        <button onClick={() => handleSort('Industry')}>Sort by Industry</button>
        <button onClick={() => handleSort('Country')}>Sort by Country</button>
      </div>
      <div className="company-list">
        {filteredData.map((company, index) => (
          <CompanyCard key={index} company={company} />
        ))}
      </div>
      <style jsx global>{`
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        body, .dark-mode {
          background-color: #121212;
          color: #ffffff;
        }
        .search-input, .button-group button, .company-list .company-card {
          border-radius: 20px;
          margin: 10px;
          padding: 10px;
        }
        .centered {
          text-align: center;
        }
        .search-container {
          width: 50%;  // 50% width for the search bar container
          margin: 0 auto;
        }
        .search-input {
          background-color: white;  // White background for the search bar
          width: 100%;
          padding: 10px;
          margin: 20px auto;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .button-group {
          text-align: center;
          display: inline-block;
          margin: 0 auto;  
          display: inline-block;
        }
        .button-group button {
          background-color: #007bff;
          box-shadow: none;  
          color: white;
          cursor: pointer;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        .company-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
        }
        .company-list .company-card {
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          flex-basis: calc(25% - 20px);
        }
        @media (max-width: 1200px) {
          .company-list .company-card {
            flex-basis: calc(33.333% - 20px);
          }
        }
        @media (max-width: 900px) {
          .company-list .company-card {
            flex-basis: calc(50% - 20px);
          }
        }
        @media (max-width: 600px) {
          .company-list .company-card {
            flex-basis: calc(100% - 20px);
          }
        }
      `}</style>
    </div>
  );
}
