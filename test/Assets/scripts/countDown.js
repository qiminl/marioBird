#pragma strict

var myTimer : float = 5.0;
 	public var sprites: Sprite[];
	public var framesPerSecond: float;
	private var spriteRenderer: SpriteRenderer;
	
function Start () {
		spriteRenderer = renderer as SpriteRenderer;
		framesPerSecond = 1;
}


function Update () {
	 if(myTimer > 0){
	  myTimer -= Time.deltaTime;
	 }
	 if(myTimer <= 0){
	  Application.LoadLevel("lal");
	 }
	 var index: int = (Time.timeSinceLevelLoad * framesPerSecond);
		index = index % sprites.Length;
		spriteRenderer.sprite = sprites[ index ];
}
