// window.onload = function () { 

	var grid = ["", "", "", "", "", "", "", "", ""];
	// var grid = ["x", "x", "x", "", "", "", "", "", ""];
	var currentPlayer = "x";

	var winConditions = ["012", "345", "678", "036", "147", "258", "048", "246"];

	function gameHandler (currentPlayer, gridPositionSelected) {
		// update player move on board.
		grid[gridPositionSelected] = currentPlayer;
		// check win codition
		if(checkForWin()){
			alert("x gon give it to u")
		}
		else {
			// currentPlayer = switchPlayer(currentPlayer);
			switchPlayer(currentPlayer);
		}
	}

	// function switchPlayer (currentPlayer) {
	// 	return currentPlayer === "x" ? "o" : "x";
	// }

	function switchPlayer (currentPlayer) {
		currentPlayer === "x" ? "o" : "x";
	}

	function checkForWin (currentGrid) {
		// Create current player position array
		var currentPlayerPosition = "";
		// var wonGame;

		currentGrid.forEach(function(gridEntry, index){
			if (gridEntry === currentPlayer) {
				currentPlayerPosition += index;
			}
		});

		return winConditions.some(function(winEntry){
			if(currentPlayerPosition.includes(winEntry[0]) && currentPlayerPosition.includes(winEntry[1]) && currentPlayerPosition.includes(winEntry[2])) {
				return true;
			}
			return false;
		});
	}

	// function checkForWin (grid) {
	// 	// body...
	// }

// };