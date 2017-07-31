export default function(callback){

  function router(callback) {
    if( location.hash === '' || location.hash === '#' || location.hash === '#/' ){
      window.location.hash = '#/';
      callback(false);
    } else {
      var url = location.hash.slice(2) || '/';
      var values = url.split('/');

      callback(values);

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
    if( new_route.constructor === String ){
      window.location.hash = '#/' + new_route;
    } else {
      console.warn('new route is not a string');
    }
  };

}
