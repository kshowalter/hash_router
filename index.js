module.exports = function(cb){

  if( location.hash === '' || location.hash === '#' ){
    location.hash = '/';
  }

  function router(cb) {
    var request = location.hash.slice(2) || '';

    cb(request);

  }

  // Listen on hash change:
  window.addEventListener('hashchange', function(){
    router(cb);
  });
  // Listen on page load:
  window.addEventListener('load', function(){
    router(cb);
  });

  return function(location){
    if( location instanceof String ){
      window.location.hash = '#/' + location;
    } else {
      console.warn('location not a string');
    }
  };
};
