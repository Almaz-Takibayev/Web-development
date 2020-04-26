from rest_framework import serializers
from django.contrib.auth.models import User
from kolesa.models import Advertisement, UserProfile

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email')

class UserProfileSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    user = UserSerializer()
    class Meta:
        model = UserProfile
        fields = ('id', 'phoneNumber', 'user')

    def create(self, validated_data):
        return Advertisement.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.phoneNumber = validated_data.get('phoneNumber', instance.phoneNumber)
        user_data = validated_data.pop('user', None)
        user = User.objects.get_or_create(**user_data)[0]
        instance.user = user
        instance.save()
        return instance

class UserProfileSerializerSignUp(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = UserProfile
        fields = ('id', 'phoneNumber', 'user')

    def create(self, validated_data):
        return Advertisement.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.phoneNumber = validated_data.get('phoneNumber', instance.phoneNumber)
        user_data = validated_data.pop('user', None)
        user = User.objects.get_or_create(**user_data)[0]
        instance.user = user
        instance.save()
        return instance

class AdvertisementSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    user_profile = UserProfileSerializer(read_only=True)
    class Meta:
        model = Advertisement
        fields = ('id', 'brand', 'model', 'country', 'status', 'body', 'typeOfEngine', 'transmission', 'steeringWheel', 'driveWheel', 'mileage', 'engineCapacity', 'yearOfManufacture', 'color', 'description', 'price', 'imageBase', 'image1', 'image2', 'user_profile')

    def create(self, validated_data):
        return Advertisement.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.description = validated_data.get('description', instance.description)
        instance.price = validated_data.get('price', instance.price)
        instance.date = validated_data.get('date', instance.date)
        instance.brand = validated_data.get('brand', instance.brand)
        instance.save()
        return instance