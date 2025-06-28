// src/components/SkillForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import RecommendationResult from './RecommendationResult';

const SkillForm = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [skills, setSkills] = useState('');
  const [result, setResult] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowResults(false);
    try {
      const skillList = skills.split(',').map(skill => skill.trim());
      const res = await axios.post('http://127.0.0.1:8000/api/ml/recommend/', {
        job_title: jobTitle,
        skills: skillList
      });
      setResult(res.data);
      setTimeout(() => setShowResults(true), 100); // allow DOM to update before animating
    } catch (err) {
      console.error(err);
      setResult({ error: 'Failed to fetch recommendations' });
      setShowResults(true);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="form-wrapper">
        <div className="form-group">
          <label className="label">Job Title</label>
          <select
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
            className="input-box"
          >
            <option value="">--Select--</option>
            <option>Data Analyst</option>
            <option>Data Scientist</option>
            <option>Web Developer</option>
            <option>Backend Developer</option>
          </select>
        </div>
        <div className="form-group">
          <label className="label">Skills (comma-separated)</label>
          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Python, SQL, Excel"
            required
            className="input-box"
          />
        </div>
        <button
          type="submit"
          className="recommend-button"
        >
          🔍 Get Recommendations
        </button>
      </form>

      {result && showResults && (
        <div className="fade-in">
          <RecommendationResult data={result} />
        </div>
      )}
    </div>
  );
};

export default SkillForm;
