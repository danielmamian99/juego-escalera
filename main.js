const mapSS = {3:11, 6:17, 9:18, 10:12, 14:4, 19:8, 22:20, 24:16};
//casillas con escalera o serpiente
var preguntas = ['Numero de jugadores?','dimencion 1 del tablero?', 'dimencion 2 del tablero?'];
var respuestas = [];
function pregunta(i){
    process.stdout.write(preguntas[i]);
}
process.stdin.on('data', function(data){
    respuestas.push(data);
    if(respuestas.length < preguntas.length){
        pregunta(respuestas.length);
    }
    else{
        main();
        process.exit();
    }
});
pregunta(0);
//En las lineas anteriores se pregunta al usuario la cantidad de jugadores y dimenciones del tablero 
//una vez con los datos de entrada se ejecuta el hilo principal

const player = class{ 
    //la clase player contiene la posicion del jugador y si ya gano
    constructor(){
        this.position = 0;
        this.win = false;
    }
}

function startGame(numPlayers){
    //esta funcion es para crear la lista de jugadores
    let playersList = [];
    for (let i = 0; i< numPlayers; i++){
        let TempPlayer = new player();
        playersList.push(TempPlayer);
    } 
    return playersList;
}



function move(player, numMove, casillaFinal){
    //Esta funcion ejecuta el movimiento del jugador
    
    if((player.position + numMove)==casillaFinal){
        player.position = casillaFinal;
        player.win = true;
    }
    else if((player.position + numMove)>=casillaFinal){
        numMove = numMove - (casillaFinal-player.position);
        player.position = casillaFinal-numMove;

    }else{
        player.position = player.position + numMove;
    }
    if(mapSS[player.position] != undefined){
        player.position = mapSS[player.position];
    }
    
    return player
}

function main(){
    //hilo principal del programa desde el cual se ejecutan todas las funcionalidades
    var win = false;
    var turno = -1;
    const numPlayers = respuestas[0];
    const casillaFinal = respuestas[1]*respuestas[2];
    const players = startGame(numPlayers);
    while(!win){
        if(turno < numPlayers-1){
            turno = turno +1;
        }else{
            turno = 0
        }
        process.stdout.write(`turno del jugador ${turno+1} \n`);
        var dado = Math.floor(Math.random()*6)+1;
        process.stdout.write(`jugador ${turno+1} avanza ${dado} \n`);
        players[turno] = move(players[turno],dado,casillaFinal);
        process.stdout.write(`el jugador ${turno+1} termina en la casilla ${players[turno].position} \n`);
        win = players[turno].win;
    }
    process.stdout.write(`el jugador ${turno+1} ha ganado \n`);
}

