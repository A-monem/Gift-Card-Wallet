from django.shortcuts import render
from wallets.models import Card
from django.contrib.auth.models import User
from wallets.serializers import CardSerializer 
from wallets.serializers import UserSerializer
from rest_framework import generics
from django.contrib.auth.decorators import login_required



# a class based view for handling GET requests to retieve a single user's cards
class CardCreate(generics.ListCreateAPIView):
    serializer_class = CardSerializer

    def get_queryset(self):
        return Card.objects.filter(user=self.request.user.id)

class CardUpdate(generics.UpdateAPIView):
    serializer_class = CardSerializer
    queryset = Card.objects.all()

