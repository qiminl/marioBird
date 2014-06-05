#pragma strict


function Start () {

}

function Update () {
	
//	rigidbody2D.velocity = Vector2(0, 0);
	if(Input.GetKey ("up")){
		Debug.Log("up!!!");
	//	rigidbody2D.velocity  = Vector2(0, 5);
		rigidbody2D.AddForce(Vector2.up * 5);
		
	}
	if(Input.GetKey("down")){
	
	//	rigidbody2D.velocity = Vector2(0, -5);
			rigidbody2D.AddForce(Vector2.up * -5);

	}
	if(Input.GetKey("left")){
	
	//	rigidbody2D.velocity = Vector2(-5, 0);
			transform.rotation.y = 180;
			rigidbody2D.AddForce(Vector2.right * -5);

	}
	if(Input.GetKey ("right")){
	
	//	rigidbody2D.velocity = Vector2(5, 0);
				transform.rotation.y = 0;

			rigidbody2D.AddForce(Vector2.right * 5);

	}
	edgeDetection();

}


function edgeDetection(){
	if(transform.position.x < -13){ 
			transform.position.x = -13;
	}
	
	else if(transform.position.x > 13){
		transform.position.x = 13;
	}
	
	if(transform.position.y < -8.5){
	 	transform.position.y = -8.5;
	}
	else if(transform.position.y > 8.5){
		transform.position.y = 8.5;
	}
}

function onTriggerEnter2D (other: Collider2D){

		Debug.Log("Found it!");
}