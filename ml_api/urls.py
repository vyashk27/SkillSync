from django.urls import path
from .views import SkillRecommendationView, ResumeSkillExtractView, ResumeToRecommendationView

urlpatterns = [
    path('recommend/', SkillRecommendationView.as_view(), name='recommend'),
    path('extract-skills/', ResumeSkillExtractView.as_view(), name='extract-skills'),
    path('resume-to-recommend/', ResumeToRecommendationView.as_view(), name='resume-to-recommend'),
]
