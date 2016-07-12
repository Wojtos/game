app.controller('GameController',['$scope','$cookies',function($scope,$cookies){
	$scope.text = null;
	$scope.GameStat = [[[0],[0],[0],[0]],[[0],[0],[0],[0]],[[0],[0],[0],[0]],[[0],[0],[0],[0]]];
	// = [[0,0,0,0]
	$scope.GameStat[Math.floor((Math.random() * 4))][Math.floor((Math.random() * 4))][0] = 2;
	//$scope.temp = [0,0,true];
	$scope.score = 0;
	$scope.used = false;
	$scope.tempTab =[];
	$scope.rand = 0;
	$scope.myClass="red";
	$scope.what = "white";

	$scope.bestScore = $cookies['bestScore'];

	if(!$scope.bestScore)
	{
		$scope.bestScore = 0;
	}

	$scope.changeColor = function(color) {
		switch(color) {
			case 0:
				return "white";
				break;
			case 2:
				return "cream";
				break;
			case 4:
				return "red";
				break;
			case 8:
				return "orange";
				break;
			case 16:
				return "redOrange";
				break;
			case 32:
				return "yellowGreen ";
				break;
			case 64:
				return "green";
				break;
			case 128:
				return "sky";
				break;
			case 256:
				return "blue";
				break;
			case 512:
				return "violet";
				break;
			case 1024:
				return "brown";
				break;
			default:
				return "black";
		}
	}
	$scope.touched = function() {
		var j = 0
	if($scope.text)
	{

		switch($scope.text) {
			case "w":
					for (j = 0; j < 4; j++) {
					$scope.temp=[0,0,true];
					for (var i = 0; i < 4; i++) {
						if($scope.GameStat[i][j][0])
						{
							if($scope.temp[1] == $scope.GameStat[i][j][0] && $scope.temp[2])
							{
								$scope.GameStat[$scope.temp[0]-1][j][0] = 2 * $scope.GameStat[i][j][0];
								$scope.score += $scope.GameStat[$scope.temp[0]-1][j][0];
								$scope.temp[1] = $scope.GameStat[$scope.temp[0]-1][j][0];
								$scope.temp[2] = false;
								$scope.GameStat[i][j][0] = 0;
								$scope.used = true;


							}
							else {
								$scope.GameStat[$scope.temp[0]][j][0] = $scope.GameStat[i][j][0];
								$scope.temp[1] = $scope.GameStat[$scope.temp[0]][j][0];
								if($scope.temp[0]!=i)
								{
									$scope.GameStat[i][j][0]=0;
									$scope.used = true;
								}
								$scope.temp[0]++;
								$scope.temp[2] = true;
							}
					}


				};
				$scope.temp=[0,0,true];
				$scope.text = null;
				};
				break;
			case "s":
					for (j = 3; j >= 0; j--) {
					$scope.temp=[3,0,true];
					for (var i = 3; i >= 0; i--) {
						if($scope.GameStat[i][j][0])
						{
							if($scope.temp[1] == $scope.GameStat[i][j][0] && $scope.temp[2])
							{
								$scope.GameStat[$scope.temp[0]+1][j][0] = 2 * $scope.GameStat[i][j][0];
								$scope.score += $scope.GameStat[$scope.temp[0]+1][j][0];
								$scope.temp[1] = $scope.GameStat[$scope.temp[0]+1][j][0];
								$scope.temp[2] = false;
								$scope.GameStat[i][j][0] = 0;
								$scope.used = true;


							}
							else {
								//console.log(Math.floor((Math.random() * 10) + 1));
								$scope.GameStat[$scope.temp[0]][j][0] = $scope.GameStat[i][j][0];
								$scope.temp[1] = $scope.GameStat[$scope.temp[0]][j][0];
								if($scope.temp[0]!=i)
								{
									$scope.GameStat[i][j][0]=0;
									$scope.used = true;
								}
								$scope.temp[0]--;
								$scope.temp[2] = true;
							}
					}


				};
				$scope.temp=[3,0,true];
				$scope.text = null;
				};
				break;
			case "a":
				for (var i = 0; i < 4; i++) {
					$scope.temp=[0,0,true];
					for (j = 0; j < 4; j++) {
						if($scope.GameStat[i][j][0])
						{
							if($scope.temp[1] == $scope.GameStat[i][j][0] && $scope.temp[2])
							{
								$scope.GameStat[i][$scope.temp[0]-1][0] = 2 * $scope.GameStat[i][j][0];
								$scope.score += $scope.GameStat[i][$scope.temp[0]-1][0];
								$scope.temp[1] = $scope.GameStat[i][$scope.temp[0]-1][0];
								$scope.temp[2] = false;
								$scope.GameStat[i][j][0] = 0;
								$scope.used = true;


							}
							else {
								$scope.GameStat[i][$scope.temp[0]][0] = $scope.GameStat[i][j][0];
								$scope.temp[1] = $scope.GameStat[i][$scope.temp[0]][0];
								if($scope.temp[0]!=j)
								{
									$scope.GameStat[i][j][0]=0;
									$scope.used = true;
								}
								$scope.temp[0]++;
								$scope.temp[2] = true;
							}
					}


				};
				$scope.temp=[0,0,true];
				$scope.text = null;
				};
				break;
			case "d":
				for (var i = 3; i >= 0; i--) {
					$scope.temp=[3,0,true];
					for (j = 3; j >=0; j--) {
						if($scope.GameStat[i][j][0])
						{
							if($scope.temp[1] == $scope.GameStat[i][j][0] && $scope.temp[2])
							{
								$scope.GameStat[i][$scope.temp[0]+1][0] = 2 * $scope.GameStat[i][j][0];
								$scope.score += $scope.GameStat[i][$scope.temp[0]+1][0];
								$scope.temp[1] = $scope.GameStat[i][$scope.temp[0]+1][0];
								$scope.temp[2] = false;
								$scope.GameStat[i][j][0] = 0;
								$scope.used = true;


							}
							else {
								$scope.GameStat[i][$scope.temp[0]][0] = $scope.GameStat[i][j][0];
								$scope.temp[1] = $scope.GameStat[i][$scope.temp[0]][0];
								if($scope.temp[0]!=j)
								{
									$scope.GameStat[i][j][0]=0;
									$scope.used = true;
								}
								$scope.temp[0]--;
								$scope.temp[2] = true;
							}
					}


				};
				$scope.temp=[3,0,true];
				$scope.text = null;
				};				
				break;


		};
		$scope.text = null;

	};
	if($scope.used)
	{
		$scope.tempTab =[];
		for (var i = 0; i < 4; i++) {
			for (var j = 0; j < 4; j++) {
				if(!$scope.GameStat[i][j][0])
				{
					$scope.tempTab[$scope.tempTab.length] = [i,j]
				}
				else
				{
					$scope.GameStat[i][j][1] = $scope.changeColor($scope.GameStat[i][j][0]);
					//console.log($scope.GameStat[i][j][1]);
				}
			}
		}
	}
	$scope.rand = Math.floor((Math.random() * $scope.tempTab.length));
	if($scope.rand && $scope.used)
	{
	$scope.GameStat[$scope.tempTab[$scope.rand][0]][$scope.tempTab[$scope.rand][1]][0] = 2;
	$scope.GameStat[$scope.tempTab[$scope.rand][0]][$scope.tempTab[$scope.rand][1]][1] = "added";
	console.log($scope.tempTab[$scope.rand][0],$scope.tempTab[$scope.rand][1],$scope.score);
	$scope.rand = 0 ;
	}
	$scope.used = false;

	if($scope.score > $scope.bestScore)
	{
		$cookies["bestScore"] = $scope.score;
	}
	
};
}]);