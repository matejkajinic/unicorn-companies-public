const CompanyCard = ({ company }) => (
  <div className="company-card">
    <h2>{company.Company}</h2>
    <p><strong>Valuation (billions):</strong> {company['Valuation ($B)']}</p>
    <p><strong>Industry:</strong> {company.Industry}</p>
    <p><strong>Country:</strong> {company.Country}</p>
    <style jsx>{`
      .company-card {
        padding: 20px;
        margin: 10px;
        border-radius: 20px;
        background-color: #333;
        color: white;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      }
      h2 {
        margin: 0;
        margin-bottom: 10px;
      }
    `}</style>
  </div>
);

export default CompanyCard;
