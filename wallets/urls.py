from django.urls import path
from . import views
urlpatterns = [
    path('api/users/', views.UserListCreate.as_view()),
    path('api/wallets/', views.CardListCreate.as_view()),
    path('api/user/', views.CardCreate.as_view()),
    path('api/<int:pk>/update/', views.CardUpdate.as_view())
]

# path('api/users/', views.UserListCreate.as_view()),
#     path('api/wallets/', views.CardListCreate.as_view()),