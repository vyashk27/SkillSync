import spacy

# Load English NLP model
nlp = spacy.load("en_core_web_sm")

# Define a basic set of known skills (can be expanded later)
KNOWN_SKILLS = {
    'python', 'sql', 'excel', 'power bi', 'machine learning', 'deep learning',
    'pandas', 'numpy', 'scikit-learn', 'django', 'html', 'css', 'javascript',
    'react', 'node.js', 'tableau', 'aws', 'azure', 'pytorch'
}

def extract_skills_from_text(text):
    doc = nlp(text.lower())
    found_skills = set()

    for token in doc:
        if token.text in KNOWN_SKILLS:
            found_skills.add(token.text)

    return list(found_skills)
