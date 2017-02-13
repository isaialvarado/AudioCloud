# AudioCloud

[AudioCloud] (https://audiocloud.herokuapp.com/)

AudioCloud is a Single page Web Application for playing music. It allows user to use the demo login account to browse through the tracks. The user can search for tracks based on track title.
The user can upload their favorite track along with the album cover image.

## Team Members

- [Joel Isai Alvarado](https://github.com/isaialvarado)
- [Ujwala Aaduru](https://github.com/aaduru)
- [Zidian Lyu](https://github.com/zidianlyu/)

## App Details and TimeLine
The application was designed and built in 1 week. The backend of the Application is built on Django and Django RestFramework, with Postgres database. The front of the application is built using React and Redux.

The application uses Cloudinary services for images and audio files.

* [Design Details][designdetails]

[designdetails]: ./docs/README.md

## Features & Implementation
### Index page

Index page is the root page with a navigator bar and list of all the tracks from the database.

The user can view all the tracks on the page. The user has to login to play the tracks, search for the tracks and create new tracks.

The navigator bar has a link to Demo login account which allows the user to login.

We have created Django views in the backend which will fetch all the tracks from the database, based on the AJAX request from the front end.

```py

def tracks(request):
    tracks = Track.objects.all()
    data = serializers.serialize("json", tracks)
    return HttpResponse(data, content_type='application/json')

```

Track.objects.all() will fetch all the tracks from the database. Django serializers help the data to be converted to JSON format. The converted data is then sent as a HttpResponse to the front end.

![image of homepage](https://github.com/zidianlyu/AudioCloud/blob/master/docs/wireframes/_homepage.png)

### Track Show Page

It is the detail view of a single track. Here the user can play the song.

This detailed data is retrieved from the database based on the track id, which passed as a AJAX request to the backend. The Django view processes the track id and retrieves the data. The data is converted to JSON format and sent as a HttpResponse to the front end.

```py

def track(request, track_id):
    tracks = Track.objects.filter(pk=track_id)
    data = serializers.serialize("json", tracks)
    return HttpResponse(data, content_type='application/json')
```
![image of showpage](https://github.com/zidianlyu/AudioCloud/blob/master/docs/wireframes/_showpage.png)

### Track Create page

Once the user has logged In, the user can see the create Track link available in the navigator bar.

Here the user can upload audio track, album cover image, and details of the track. The uploading of the audio file and the image files are done with the help of Cloudinary services. The links to the data is stored in the database.

Before a POST request is made to create a track, the CSRF token is passed with the AJAX request by settings a custom X-CSRFToken header. You can see the code for this below.

```js
export const createTrack = track => {
  const getCookie = name => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  };

  const csrftoken = getCookie('csrftoken');

  const csrfSafeMethod = method => (
    /^(GET|HEAD|OPTIONS|TRACE)$/.test(method)
  );

  $.ajaxSetup({
      beforeSend: function(xhr, settings) {
          if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
              xhr.setRequestHeader("X-CSRFToken", csrftoken);
          }
      }
  });

  return (
    $.ajax({
      method: 'POST',
      url: 'api/tracks/create',
      data: track
    })
  );
};
```

Django view checks if the request from the front end is POST and then saves the data if it is valid. Returns the JSON response to the front end.
```py

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

```

![image of track create page](https://github.com/zidianlyu/AudioCloud/blob/master/docs/wireframes/_track_create_page.png)

### Search Filter

The User can search for the tracks based on the title of the tracks, once logged in.


The AJAX request sends the search query to the backend. The Django view queries the database based on the title being matched by a case-insensitive regular expression with word boundaries (using "\y") and string interpolation via the string class's format method.

```py
def search(request, keywords):
    tracks = Track.objects.filter(title__iregex=r"\y{0}\y".format(str(keywords)))
    data = serializers.serialize("json", tracks)
    return HttpResponse(data, content_type='application/json')

```

## Future Implementations of the Application

### User Authentication

- Create Login / Signup / Logout options for the user in the navigation bar
- Edit , delete options for tracks in the show page.
