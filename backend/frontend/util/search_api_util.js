export const fetchSearchResults = searchData => (
  $.ajax({
    method: 'GET',
    url: `api/tracks/search/${searchData}`
  })
);
