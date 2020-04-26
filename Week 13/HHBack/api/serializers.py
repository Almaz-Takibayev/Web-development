from rest_framework import serializers
from api.models import Company,Vacancy

class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only = True)
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()

    def create(self, validated_data):
        company = Company()
        company.name = validated_data.get('name')
        company.description = validated_data.get('description')
        company.city = validated_data.get('city')
        company.address = validated_data.get('address')
        company.save()
        return company

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name')
        instance.description = validated_data.get('description')
        instance.city = validated_data.get('city')
        instance.address = validated_data.get('address')
        instance.save()
        return instance

class CompanyModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('id','name', 'description', 'city', 'address')

class VacancySerializer(serializers.ModelSerializer):
    company_id = serializers.IntegerField(write_only=True)

    class Meta:
        model = Vacancy
        fields = ('id', 'name', 'description', 'salary', 'company_id')


class CompanyWithVacanciesSerializer(serializers.ModelSerializer):
    vacancies = VacancySerializer(many=True, read_only=True)

    class Meta:
        model = Company
        fields = ('id', 'name', 'vacancies')
