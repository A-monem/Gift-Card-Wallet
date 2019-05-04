from django.urls import path
from . import views
urlpatterns = [
    path('api/users/', views.UserListCreate.as_view()),
    path('api/wallets/', views.CardListCreate.as_view()),
    path('api/wallets/<int:userID>/', views.CardCreate.as_view()) #to be edited
]