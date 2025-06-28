import pandas as pd

# Load job dataset
df = pd.read_csv('skillmatcher/jobs.csv')

def recommend_skills(user_skills, job_title):
    user_skills = set([skill.lower() for skill in user_skills])

    job = df[df['job_title'].str.lower() == job_title.lower()]
    if job.empty:
        return {"error": "Job title not found"}

    required_skills = set(job.iloc[0]['required_skills'].split(';'))
    required_skills = set([skill.lower() for skill in required_skills])

    missing_skills = required_skills - user_skills
    return {
        "job_title": job_title,
        "missing_skills": list(missing_skills),
        "matched_skills": list(required_skills & user_skills),
    }
