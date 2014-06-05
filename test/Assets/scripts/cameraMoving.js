#pragma strict

function Start () {

}

function Update () {
	var player: GameObject = GameObject.Find("bird");
	if(player){
		transform.position.x = player.transform.position.x;
		transform.position.y = player.transform.position.y;
		if(transform.position.x < -6){
			transform.position.x = -6;
		}
		else if(transform.position.x > 6){
			transform.position.x = 6;
		}
		if(transform.position.y < -4.5){
			transform.position.y = -4.5;
		}
		else if(transform.position.y > 4.5){
			transform.position.y = 4.5;
		}
		
	}
}