from django.urls import path
from api.views.views_fbv import company_vacancies
from api.views.view_cbv import CompanyListAPIView, CompanyDetailAPIView, VacancyListAPIView, VacancyDetailAPIView
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('companies/', CompanyListAPIView.as_view()),
    path('companies/<int:id>/', CompanyDetailAPIView.as_view()),
    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:id>/', VacancyDetailAPIView.as_view()),
    path('companies/<int:id>/vacancies/', company_vacancies)
]