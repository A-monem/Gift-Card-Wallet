from django.urls import path
from . import views
urlpatterns = [
    path('api/wallets/', views.CardListCreate.as_view())
]