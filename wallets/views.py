from django.shortcuts import render
from wallets.models import Card
from django.contrib.auth.models import User
from wallets.serializers import CardSerializer 
from wallets.serializers import UserSerializer
from rest_framework import generics

# a class based view for handling POST and GET requests
class CardListCreate(generics.ListCreateAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

#to be edited
class CardCreate(generics.ListCreateAPIView):
    serializer_class = CardSerializer

    def get_queryset(self, userID):
        return Card.objects.filter(user=self.request.user.id)

class UserListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
