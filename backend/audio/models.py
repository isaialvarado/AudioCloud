from __future__ import unicode_literals

from django.db import models
from django.forms import ModelForm

# Create your models here.
from django.contrib.auth.models import User
from useraccounts import models as account_models

class Track(models.Model):
    title = models.CharField(max_length=255,null=False)
    description = models.TextField(max_length=500,null=False)
    track_url = models.CharField(max_length=500,null=False)
    image_url = models.CharField(max_length=500,null=False)
    artist = models.CharField(max_length=255,null=False)
    user_id = models.ForeignKey(account_models.User,on_delete=models.CASCADE,null=False)

    class Meta:
        ordering = ["title"]

    def __str__(self):
        return self.title

class TrackForm(ModelForm):
    class Meta:
        model = Track
        fields = ['title', 'description', 'track_url', 'image_url', 'artist', 'user_id']
