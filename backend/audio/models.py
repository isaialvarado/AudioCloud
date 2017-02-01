from __future__ import unicode_literals

from django.db import models


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

    # def __str__(self):
    #     return self.description

    # def __str__(self):
    #     return self.track_url

    def __str__(self):
        return self.image_url

    # def __str__(self):
    #     return self.artist
