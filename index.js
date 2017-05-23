export default function(callback){

  function router(callback) {
    if( location.hash === '' || location.hash === '#' || location.hash === '#/' ){
      callback(false);
    } else {
      var url = location.hash.slice(2) || '/';
      var values = url.split('/');

      callback(values[0]);

    }
  }

  // Listen on hash change:
  window.addEventListener('hashchange', function(){
    router(callback);
  });
  // Listen on page load:
  window.addEventListener('load', function(){
    router(callback);
  });

  return function(new_route){
    if( new_route instanceof String ){
      window.location.hash = '#/' + new_route;
    } else {
      console.warn('new route not a string');
    }
  };

}
