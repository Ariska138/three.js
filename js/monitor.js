
var container, stats;

start();


function start(){
    // performance monitor
container = document.createElement( 'div' );
console.log(container);
document.body.appendChild( container );
stats = new Stats();
stats.showPanel( 1 );
    container.appendChild( stats.dom );
}


