
var container, stats;

init();
start();

function init() {
    stats = new Stats();
    container.appendChild( stats.dom );
}

function start(){
    // performance monitor
container = document.createElement( 'div' );
document.body.appendChild( container );
alert('test');
}




