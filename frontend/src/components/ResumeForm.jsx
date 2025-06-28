// src/components/ResumeForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import RecommendationResult from './RecommendationResult';

const ResumeForm = () => {
  const [resumeText, setResumeText] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnalyze = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/ml/resume-to-recommend/', {
        resume_text: resumeText,
        job_title: jobTitle
      });
      setResult(response.data.recommendation);
      setTimeout(() => setShowResults(true), 100);
    } catch (error) {
      console.error(error);
      setResult({ error: 'Failed to analyze resume' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="form-wrapper">
      <form onSubmit={handleAnalyze}>
        <div className="form-group">
          <label className="label">Job Title</label>
          <select
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
            className="input-box"
          >
            <option value="">--Select--</option>
            <option>Data Scientist</option>
            <option>Data Analyst</option>
            <option>Backend Developer</option>
            <option>Web Developer</option>
          </select>
        </div>

        <div className="form-group">
          <label className="label">Paste Resume Text</label>
          <textarea
            className="input-box"
            rows="6"
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            placeholder="Paste your resume text here..."
            required
          />
        </div>

        <button type="submit" className="recommend-button">
          {loading ? 'Analyzing...' : '🔍 Analyze Resume'}
        </button>
      </form>
      </div>

      {result && showResults && (
        <div className="fade-in">
          <RecommendationResult data={result} />
        </div>
      )}
    </>
  );
};

export default ResumeForm;
