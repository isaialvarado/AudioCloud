from django.shortcuts import render, get_object_or_404, get_list_or_404

# Create your views here.

from django.http import HttpResponse, HttpResponseRedirect
from django.views.generic import ListView
from django.template import loader
from django.core.urlresolvers import reverse
from django.views import generic
from rest_framework.generics import GenericAPIView
# from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework.response import Response
from rest_framework import status, viewsets
from rest_framework.mixins import CreateModelMixin

from audio.serializers import TrackSerializer
from django.core import serializers
from .models import Track, TrackForm

import json
import codecs

from .models import Track

def tracks(request):
    tracks = Track.objects.all()
    data = serializers.serialize("json", tracks)
    return HttpResponse(data, content_type='application/json')

def track(request, track_id):
    tracks = Track.objects.filter(pk=track_id)
    data = serializers.serialize("json", tracks)
    return HttpResponse(data, content_type='application/json')

def search(request, keywords):
    tracks = Track.objects.filter(title__iregex=r"\y{0}\y".format(str(keywords)))
    data = serializers.serialize("json", tracks)
    return HttpResponse(data, content_type='application/json')

def create(request):
    if request.method == 'POST':
        track = TrackForm(request.POST)
        if track.is_valid():
            new_track = track.save()
            data = serializers.serialize("json", [new_track, ])
            return HttpResponse(data, content_type='application/json')
        else:
            return HttpResponse(["Unknown Error. Please try again later."], content_type='application/json')
    else:
        return HttpResponse({}, content_type='application/json')
