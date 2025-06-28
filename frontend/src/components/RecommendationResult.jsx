import React from 'react';

const RecommendationResult = ({ data }) => {
  if (data.error) {
    return <p style={{ color: 'red' }}>{data.error}</p>;
  }

  // Capitalize each word in the skill
  const formatSkill = (skill) => {
    return skill
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <div className="results-container">
      <h3>✅ Matched Skills</h3>
      <ul>
        {data.matched_skills.map((skill, index) => (
          <li key={index}>{formatSkill(skill)}</li>
        ))}
      </ul>

      <h3>⚠️ Missing Skills</h3>
      <ul>
        {data.missing_skills.map((skill, index) => (
          <li key={index}>{formatSkill(skill)}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationResult;
