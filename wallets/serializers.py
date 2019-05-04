from rest_framework import serializers
from wallets.models import Card
from django.contrib.auth.models import User

# Card Serializer
class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = '__all__'

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')