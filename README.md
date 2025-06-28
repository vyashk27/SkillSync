# SkillSync 🔍🚀

**AI-powered Resume Analyzer & Skill Gap Recommender**  
Built with Django, React, and NLP (spaCy)

---

## 🎯 What is SkillSync?

SkillSync is a smart tool that analyzes your resume and shows you which skills you’re missing for your desired job. It extracts skills using Natural Language Processing (NLP) and compares them to job-specific requirements — **no login, no friction**.

---

## 🧠 Why It Matters

> “Most job portals give you job listings. This gives you **skill gaps** — fast.”

- 🧾 Paste your resume
- 🎯 Choose your target job title (e.g., *Data Scientist*)
- 📊 Instantly see your **matched vs. missing skills**
- No login required — **just paste and go**

---

## 🚀 Features

- 📄 **Resume Skill Extractor (NLP)** — Uses `spaCy` to extract hard skills from text
- 🧠 **Smart Skill Recommender** — Matches user skills to job requirements (CSV-powered)
- 🔁 **End-to-End Workflow** — Resume → NLP → Skill Gap → JSON/API
- 🔐 **JWT Auth System** *(optional)* — Future-ready authentication, but not forced
- ⚛️ **React Frontend** — Clean, fast UI for users to test resume-to-job fit
- 🔌 **REST APIs** — Modular, well-documented endpoints built with Django REST Framework

---

## 🧰 Tech Stack

| Layer       | Tech Used |
|-------------|-----------|
| **Frontend** | ReactJS, TailwindCSS, Axios |
| **Backend**  | Django, Django REST Framework |
| **NLP Engine** | spaCy (`en_core_web_sm`) |
| **Auth**     | JWT (`djangorestframework-simplejwt`) |
| **Database** | MySQL (or SQLite fallback) |
| **ML Logic** | CSV-based matching (can be upgraded to embeddings)

---

## 🗂 Project Structure
skillsync/
├── core/ # Django settings & root project
├── users/ # Custom user model, registration, JWT
├── ml_api/ # API views for recommendation and NLP
├── skillmatcher/ # recommender.py, extractor.py, jobs.csv
├── frontend/ # React app (optional deployable)
├── manage.py
├── requirements.txt
├── README.md
└── .gitignore


---

## 📬 API Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/ml/extract-skills/` | POST | Extract skills from raw resume text |
| `/api/ml/recommend/` | POST | Recommend missing skills (job title + user skills) |
| `/api/ml/resume-to-recommend/` | POST | Full pipeline: resume text + job title → matched & missing skills |
| `/api/users/register/` | POST | (Optional) Register user |
| `/api/users/login/` | POST | (Optional) JWT login |

### 🧪 Sample Request (resume-to-recommend)

```json
{
  "resume_text": "Skilled in Python, SQL, Excel. Worked with Tableau and ML models.",
  "job_title": "Data Scientist"
}

✅ Sample Response
{
  "extracted_skills": ["python", "sql", "excel", "tableau", "machine learning"],
  "recommendation": {
    "job_title": "Data Scientist",
    "missing_skills": ["numpy", "scikit-learn", "deep learning"],
    "matched_skills": ["python", "sql", "machine learning"]
  }
}

⚙️ Setup Instructions

🔧 Backend Setup

# Clone the project
git clone https://github.com/vyashk27/skillsync.git
cd skillsync

# Setup virtual environment
python -m venv venv
venv\Scripts\activate  # or source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Apply migrations
python manage.py migrate

# Run server
python manage.py runserver



⚛️ Frontend Setup (optional)

cd frontend
npm install
npm run dev

Make sure backend is running at http://127.0.0.1:8000/


🔐 Auth System (Optional)
Although not required to use the API, the project includes full JWT-based login/register functionality. Useful if you want to:

- Track multiple resume uploads

- Save user history

- Personalize learning plans

Currently: All ML endpoints are public by design.

🎯 Future Roadmap
 - Upload and parse .pdf / .docx resumes

 - Admin dashboard with skill trends

 - GPT-based smart learning plan generation

 - Save & track user history (if login used)


 👤 About the Author
Yashvardhan
🎓 B.Tech CSE (Machine Learning Major)
📊 Aspiring Data Scientist & Full Stack Developer
🔗 LinkedIn - https://www.linkedin.com/in/vyashk27/

📝 License
MIT — Free to use, modify, or fork with credit.

“This project helped me sharpen Django, REST APIs, NLP with spaCy, and frontend integration with React — and it’s production-ready too.” — Yashvardhan