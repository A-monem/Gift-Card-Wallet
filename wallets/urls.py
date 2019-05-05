from django.urls import path
from . import views
urlpatterns = [
    path('api/user/', views.CardCreate.as_view()),
    path('api/<int:pk>/update/', views.CardUpdate.as_view())
]