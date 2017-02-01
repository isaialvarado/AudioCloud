from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from django.views.generic import ListView
from django.template import loader
from django.shortcuts import render

from .models import Track

def root(request):
    return HttpResponse("Hello, world")

def index(request):
    latest = Track.objects.order_by('title')[:5]
    # template = loader.get_template('audio/index.html')
    context = {'latest': latest}
    return render(request, 'audio/index.html', context)
    # return HttpResponse(template.render(context, request))

def detail(request, id):
    return HttpResponse("You're looking at tracks %s." % id)

def results(request, id):
    response = "You're looking at the results of tracks %s."
    return HttpResponse(response % id)

# class TrackList(ListView):
#     model = Track
