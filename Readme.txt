El juego esta implementado en nodeJs y apex.

Para ejecutar con nodeJs: 

Descargar node, abrir la consola en la carpeta y poner el comando:

Node main.js

1. La primera entrada es para definir el número de jugadores.
2. La segunda y tecera entrada es para definir las dimensiones 1 y 2 del tablero.

Para ejecutar con apex:

1. Crear una clase apex por cada archivo con el nombre correspondiente.
2. en la clase game, en la función init() se puede definir las dimensiones y cantidad de jugadores.
3. para ejecutar abrir ventana de ejecución del apex developer y ejecutar las siguientes lineas:

    game tablero = new game();
    tablero.init(numeroDeJugadores, dimensión1, dimensión2);

3. hay 4 pruebas distintas:
    -createPlayersClassTest prueba que los jugadores se creen correctamente (cantidad de jugadores, posición inicial 0 y que ninguno halla ganado antes de iniciar)
    -NotPassTheGoalClassTest prueba que los jugadores no se pasen de la meta, devolviendose la cantidad de movimientos restantes.
    -WinClassTest prueba que el jugador que llegue a la casilla final gane
    -SnakeAndStairsClassTest prueba que todas las casillas con serpientes o escaleras funcionen correctamente
