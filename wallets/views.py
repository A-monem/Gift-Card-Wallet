from django.shortcuts import render
from wallets.models import Card
from wallets.serializers import CardSerializer
from rest_framework import generics

# a class based view for handling POST and GET requests
class CardListCreate(generics.ListCreateAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializer
