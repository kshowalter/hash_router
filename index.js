export default function(callback){

  function hash_check(callback) {
    if( location.hash === '' || location.hash === '#' || location.hash === '#/' ){
      //window.location.hash = '#/';
      callback(false);
    } else {
      //console.log('location.hash',location.hash);
      var url = location.hash.slice(2) || '/';
      //console.log('url',url);
      var values = url.split('/');

      callback(values);

    }
  }

  // Listen on hash change:
  window.addEventListener('hashchange', function(){
    hash_check(callback);
  });
  // Listen on page load:
  //window.addEventListener('load', function(){
  //  hash_check(callback);
  //});

  return function(new_route){
    if( new_route && new_route.constructor === String ){
      window.location.hash = '#/' + new_route;
      //hash_check(callback);
    } else {
      hash_check(callback);
      //console.warn('new route is not a string');
    }
  };

}
