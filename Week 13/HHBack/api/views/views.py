from django.http import JsonResponse
from django.shortcuts import render

from api.models import Company, Vacancy

def company_list(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json, safe=False)

def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(company.to_json())

def company_vacancies(request, company_id):
    try:
        vacancies = Vacancy.objects.filter(company__id=company_id)
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(vacancies_json, safe=False)

def vacancy_list(request):
    vacancies = Vacancy.objects.all();
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancy_detail(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(vacancy.to_json())

def vacancy_top_ten(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)