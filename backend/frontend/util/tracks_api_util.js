export const fetchTracks = () => (
  $.ajax({
    method: 'GET',
    url: 'api/tracks'
  })
);

export const fetchTrack = trackId => (
  $.ajax({
    method: 'GET',
    url: `api/tracks/${trackId}`
  })
);

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
