export default function(action){

  function router(action) {
    if( location.hash === '' || location.hash === '#' || location.hash === '#/' ){
      action(false);
    } else {
      var url = location.hash.slice(2) || '/';
      var values = url.split('/');

      action(values[0]);

    }
  }

  // Listen on hash change:
  window.addEventListener('hashchange', function(){
    router(action);
  });
  // Listen on page load:
  window.addEventListener('load', function(){
    router(action);
  });

  return function(new_route){
    if( new_route instanceof String ){
      window.location.hash = '#/' + new_route;
    } else {
      console.warn('new route not a string');
    }
  };

}
