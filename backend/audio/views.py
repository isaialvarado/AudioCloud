from django.shortcuts import render, get_object_or_404, get_list_or_404

# Create your views here.

from django.http import HttpResponse, HttpResponseRedirect
from django.views.generic import ListView
from django.template import loader
from django.core.urlresolvers import reverse
from django.views import generic
from rest_framework.generics import GenericAPIView
from rest_framework_jwt.authentication import JSONWebTokenAuthentication
from rest_framework.response import Response
from rest_framework import status, viewsets
from rest_framework.mixins import CreateModelMixin

from audio.serializers import TrackSerializer
from .models import Track

import json
import codecs

from .models import Track

def index(request):
    print("Pass Index")
    return render(request, 'index.html')

class TrackDataView(GenericAPIView, CreateModelMixin):
    print("TrackDataView")
    authentication_classes = (JSONWebTokenAuthentication,)
    serializer_class = TrackSerializer
    queryset = Track.objects.values_list('title', 'image_url')



    def get(self, request):
        print("TrackDataView get")
        queryset = self.get_queryset()
        serializer = TrackSerializer(queryset, many=True)
        return Response({"track": serializer.data}, content_type="JSON")




class TrackView(GenericAPIView, CreateModelMixin):
    print("TrackView")
    authentication_classes = (JSONWebTokenAuthentication,)
    lookup_url_kwarg = "track_id"

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def create(self, request, *args, **kwargs):
        print("TrackDataView create")
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response({"track": serializer.data}, status=status.HTTP_201_CREATED, headers=headers)

    def get(self, request, track_id):
        track_id = self.kwargs.get(self, lookup_url_kwarg)
        tracks = Track.objects.filter(track_id=track_id)
        track_serializer = TrackSerializer(tracks, many=True)
        return Response({
            "curr_track": track_serializer.data,
            "track": track_serializer.data},
            content_type="JSON"
        )

    def post(self, request):
        print("TrackDataView post")
        data = request.data
        response = self.create(request)
        return response

# class CreateTrack(GenericAPIView, CreateModelMixin):
#     print("CreateTrack")
#     authentication_classes = (JSONWebTokenAuthentication,)
#     lookup_url_kwarg = "track_id"
#
#     def post(self, request, track_id):
#         track_id = self.kwargs.get(self.lookup_url_kwarg)
#         track = Track.objects.filter(id=track_id)
#
#         body = request.body
#         data = json.loads(body.decode("utf-8"))
#
#         title = data["title"]
#         image_url = data["image_url"]
#
#         track = {
#             'title': title,
#             'image_url': image_url
#         }
#
#         #pass back
#         track_serializer = TrackSerializer(data=track)
#
#         if track_serializer.is_valid():
#             track_serializer.save()
#             return Response({"track": track_serializer.data}, content_type="JSON")
#
#         return Response(track_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # def root(request):
    #     return HttpResponse("Hello, kids")
    #
    # def index(request):
    #     latest = Track.objects.order_by('title')[:5]
    #     # template = loader.get_template('audio/index.html')
    #     context = {'latest': latest}
    #     return render(request, 'audio/index.html', context)
    #     # return HttpResponse(template.render(context, request))
    #
    # def detail(request, id):
    #     return HttpResponse("You're looking at tracks %s." % id)
    #
    # def results(request, id):
    #     response = "You're looking at the results of tracks %s."
    #     return HttpResponse(response % id)

# class TrackList(ListView):
#     model = Track
