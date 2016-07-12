<!DOCTYPE html>
<html>
<head>
	<title>2048</title>
	<style type="text/css">
		*{background-color: grey;}
		.box{width: 100px; height: 70px; border-radius: 10px;background-color: #FFD3CB; text-align: center;margin: 5px;font-size:28px;font-weight: bold; padding-top: 30px;float: left;  }
		.white{background-color: #fffdd0 }
		.cream{background-color: #FFD3CB;}
		.red{background-color: red;}
		.orange{background-color: #FF8000;}
		.redOrange{background-color: #D84E09;}
		.yellowGreen{background-color: #51C201;}
		.green{background-color: #1C8E0D;}
		.sky{background-color: #09C5F4;}
		.blue{background-color: #2862B9;}
		.violet{background-color: #7E44BC;}
		.brown{background-color: #943F07;}
		.brown{background-color: #000000;}
		.next{clear:both;}
		input{background-color: white; float:left;}
		.score{clear: both; font-size: 28px; }
		.score2{text-align: right; font-size: 28px; }
		.added{
			animation-name: dodanie;
			animation-duration: 1s;
			animation-iteration-count: 1;

			-webkit-animation-name: dodanie;
			-webkit-animation-duration: 1s;
			-webkit-animation-iteration-count: 1;
		}
			@keyframes dodanie
			{
				0% {width: 100px;height: 70px; padding-top: 30px}
				50% {width: 90px;height: 63px; padding-top: 27px}
				100% {width: 100px;height: 70px; padding-top: 30px}
			} 

			@-webkit-keyframes dodanie
			{
				0% {width: 100px;height: 70px; padding-top: 30px}
				50% {width: 90px;height: 63px; padding-top: 27px}
				100% {width: 100px;height: 70px; padding-top: 30px}
			}
			background-color: #FFD3CB;
		}
	</style>
	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.19/angular-cookies.js"></script>
</head>
<body ng-app="GameApp">
<div ng-controller="GameController">

	<div ng-repeat="one in GameStat track by $index" class="next">
	<div  ng-repeat="two in one track by $index">
		<p class="box"  ng-class="two[1]"  ng-if="two[0]">{{two[0]}}</p>
		<p class="box" ng-class="what" ng-if="!two[0]"></p>
	</div>
	</div>
	<div class="score">
		<br>Score: {{score}}  bestScore: {{bestScore}}
	</div>

	<form>
		<input type="text" ng-model="text" name="text" ng-change="touched()"/>
	</form>
</div>
<script src="GameApp.js"></script>
<script src="GameController.js"></script>
</body>
</html>