from rest_framework import serializers
from wallets.models import Card

# Card Serializer
class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = '__all__'