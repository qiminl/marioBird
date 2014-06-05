#pragma strict


public var eaten: int;
function Start () {
	eaten = 0;
//	rigidbody.position = Vector2(1024 * Random.Range(-1, 1), 512 * Random.Range(-1, 1));
	rigidbody2D.velocity = Vector2(Random.Range(-2, 2), Random.Range(-2, 2));

}

function Update () {
	edgeDetection();
}

function edgeDetection(){
	if(transform.position.x < -13 && rigidbody2D.velocity.x < 0){ 
			rigidbody2D.velocity.x *= -1;
	}
	
	else if(transform.position.x > 13 && rigidbody2D.velocity.x > 0){
		rigidbody2D.velocity.x *= -1;
	}
	
	if(transform.position.y < -8.5 && rigidbody2D.velocity.y < 0){
	 	rigidbody2D.velocity.y *= -1;
	}
	else if(transform.position.y > 8.5 && rigidbody2D.velocity.y > 0){
		rigidbody2D.velocity.y *= -1;
	}
}

function onCollisionEnter2D(other:Collider2D){

	Debug.Log("Entered");
	if(other.name == "bird"){
		Destroy(this);
	}
}