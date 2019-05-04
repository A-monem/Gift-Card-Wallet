from django.shortcuts import render

def index(request, username=''):
    return render(request, 'frontend/index.html')
