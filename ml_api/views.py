from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from skillmatcher.recommender import recommend_skills
from skillmatcher.extractor import extract_skills_from_text

class ResumeSkillExtractView(APIView):
    def post(self, request):
        resume_text = request.data.get('resume_text', '')
        if not resume_text:
            return Response({"error": "No resume text provided."}, status=400)

        skills = extract_skills_from_text(resume_text)
        return Response({"skills": skills})


class SkillRecommendationView(APIView):
    def post(self, request):
        user_skills = request.data.get('skills', [])
        job_title = request.data.get('job_title', '')

        if not user_skills or not job_title:
            return Response({"error": "Please provide 'skills' and 'job_title'"}, status=400)

        result = recommend_skills(user_skills, job_title)
        return Response(result)
    
class ResumeToRecommendationView(APIView):
    def post(self, request):
        resume_text = request.data.get('resume_text', '')
        job_title = request.data.get('job_title', '')

        if not resume_text or not job_title:
            return Response({"error": "Please provide both resume_text and job_title."}, status=400)

        # 1. Extract skills
        extracted_skills = extract_skills_from_text(resume_text)

        # 2. Recommend based on extracted skills
        result = recommend_skills(extracted_skills, job_title)

        return Response({
            "extracted_skills": extracted_skills,
            "recommendation": result
        })

