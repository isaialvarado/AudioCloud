from rest_framework import serializers
from audio.models import Track

class TrackSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(
        read_only=True,
        slug_field='email'
    )

    class Meta:
        model = Track
        fields = ('id', 'title', 'description', 'track_url', 'image_url', 'artist', 'user_id')

    def create(self, validated_data):
        track = Track.objects.create(**validated_data)
        track.save()
        return track
