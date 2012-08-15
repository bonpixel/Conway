/* Author:
 Bryan Nichols
*/




(function(canvasr, $, undefined){

	var myCanvas = document.getElementById('canvas'),
		ctx = myCanvas.getContext("2d"),
		i = 0,
		j = 0,
		xpos = 0,
		ypos = 0,
		cellSize = 10,
		on,
		off,
		numCells,
		aliveCells;

	on = "rgba(0, 0, 0, 0.5)";
	off = "rgb(255,255,255)";

	console.dir(myCanvas);
	Math.seedrandom('any string you like');


	canvasr.init = function(){
		// for (i = 0; i < myCanvas.height; ++i){
		// 	ypos = i*cellSize;

		// 	for (j = 0; j < myCanvas.width; ++j){
		// 		xpos = j*cellSize;

		// 		if( j%2 + i%2 === 1 ){
		// 			ctx.fillStyle = off;
		// 			ctx.fillRect (xpos, ypos, cellSize, cellSize);
		// 		}else{
		// 			ctx.fillStyle = on;
		// 			ctx.fillRect (xpos, ypos, cellSize, cellSize);
		// 		}
		// 	}
		// }


		// aliveCells = getCells();
		// drawCanvas( aliveCells );

		var columns = myCanvas.width/cellSize;
		var rows = myCanvas.height/cellSize;
		masterArray = [];
		i = 0;
		j = 0;

		while(i < columns) {
			masterArray[i] = [];
			while(j < rows) {
				masterArray[i][j] = {
					xcoord:0,
					ycoord:0,
					alive:0
				};
				++j;
			}
			j = 0;
			++i;
		}

		console.dir(masterArray);
			// cellArr[i].xcoord = (Math.floor((Math.random()*columns)+1)) * cellSize;
			// cellArr[i].ycoord = (Math.floor((Math.random()*rows)+1)) * cellSize;




	};

	canvasr.runLife = function(){
		ctx.clearRect(0,0,myCanvas.width,myCanvas.height);
		aliveCells = getCells();
		drawCanvas( aliveCells );
	};

	function drawCanvas(cellsToDraw){
		for(i = 0; i < cellsToDraw.length; ++i){
			ctx.fillStyle = on;
			ctx.fillRect (cellsToDraw[i].xcoord, cellsToDraw[i].ycoord, cellSize, cellSize);
		}
	}

	function getCells(){
		var cellArr = [];
		var columns = myCanvas.width/cellSize;
		var rows = myCanvas.height/cellSize;
		var rolled = [[]];

		for ( i = 0; i < 50; ++i){
			cellArr[i] = {};
			col = (Math.floor((Math.random()*columns)+1));
			row = (Math.floor((Math.random()*rows)+1));

			console.dir(masterArray);

			while(masterArray[row][col]){
				col = (Math.floor((Math.random()*columns)+1));
				row = (Math.floor((Math.random()*rows)+1));
			}

			cellArr[i].xcoord = col * cellSize;
			cellArr[i].ycoord = row * cellSize;
			masterArray[col][row] = true;
			
		}
		return cellArr;
	}

	function checkNear(cellPosition){

		/*

		Any live cell with fewer than two live neighbours dies, as if caused by under-population.
		Any live cell with two or three live neighbours lives on to the next generation.
		Any live cell with more than three live neighbours dies, as if by overcrowding.
		Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

		*/

		positionsToCheck = [];

		//top left
		positionsToCheck[0] = {
			xcoord: cellPosition.xcoord - cellSize,
			ycoord: cellPosition.ycoord - cellSize
		};

		//top middle
		positionsToCheck[1] = {
			xcoord: cellPosition.xcoord - 0,
			ycoord: cellPosition.ycoord - cellSize
		};

		//top right
		positionsToCheck[2] = {
			xcoord: cellPosition.xcoord + cellSize,
			ycoord: cellPosition.ycoord - cellSize
		};

		//middle left
		positionsToCheck[3] = {
			xcoord: cellPosition.xcoord - cellSize,
			ycoord: cellPosition.ycoord - 0
		};

		//middle right
		positionsToCheck[4] = {
			xcoord: cellPosition.xcoord + cellSize,
			ycoord: cellPosition.ycoord - 0
		};

		//bottom left
		positionsToCheck[5] = {
			xcoord: cellPosition.xcoord - cellSize,
			ycoord: cellPosition.ycoord + cellSize
		};

		//bottom middle
		positionsToCheck[6] = {
			xcoord: cellPosition.xcoord - 0,
			ycoord: cellPosition.ycoord + cellSize
		};

		//bottom right
		positionsToCheck[7] = {
			xcoord: cellPosition.xcoord + cellSize,
			ycoord: cellPosition.ycoord + cellSize
		};

		

		if (cellposition){

		}else if(cellposition){

		}else if(cellposition){

		}else if(cellposition){}



		return status;

	}

	function killCell(){

	}

	function brithCell(){

	}


})(canvasr = document.canvasr || {}, jQuery);

$(function(){

	// create a canvas
	canvasr.init();

	// Start life cycle
	setInterval(function(){
		canvasr.runLife();
	}, 1000);

	// allow the user to draw on canvas


});



