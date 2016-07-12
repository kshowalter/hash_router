# Hash Router

A simple hash router.

## Usage

### Setup

Add dependency:

    "dependencies": {
      "hash_router": "https://github.com/kshowalter/hash_router"
    }

Import hash_router:

    var Router = require('hash_router')

    or

    import Router from 'hash_router';

Initialize:

    var router = Router(callback)

If the address is

    http://localhost/#/requestedpage
    http://localhost/#/section/requestedpage

The call back will receive "requestedpage" or "section/requestedpage"

Example callback:

    var router = Router(function(hash_location){
      action.setPage(hash_location);
    })

### Set hash

"Router" returns a function that will set the hash.

    router('test42'); //  http://localhost/#/test42

You may find it easier to set in manually.

    window.location.hash = '#/' + location

...or use a HTML link.
