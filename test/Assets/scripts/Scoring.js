#pragma strict

static var score: int;
static var birdLives: int;
var myTimer:float = 10;

function Start()
{
	score = 0;
	birdLives = 3;
}

function OnGUI()
{
	GUI.Box(Rect(10,10, 90,40), "Score:  " + score);
	GUI.Box(Rect(Screen.width-120,10, 120,40), " birds Lives: " + birdLives);
	
	var player : GameObject = GameObject.Find("bird");
	
	 if (birdLives == 0)	 
      {
        GUI.Button (Rect (Screen.width/2 - 200,Screen.height/2 - 50,400, 50),"Game Over");
        var bird: GameObject = GameObject.Find("bird");
        if(bird){
        	Destroy(bird);
        }
        if(myTimer > 0){
        	myTimer -= Time.deltaTime;
        }
        else{
       	 Application.LoadLevel("begin");
		}    
      }
}

