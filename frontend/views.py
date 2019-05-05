from django.shortcuts import render
from django.contrib.auth.decorators import login_required

@login_required
def index(request, username=''):
    return render(request, 'frontend/index.html')

def store(request):
    return render(request, 'frontend/store.html')