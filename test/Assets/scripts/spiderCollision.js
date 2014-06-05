#pragma strict

function OnTriggerEnter2D(coll: Collider2D) {
		if(coll.name == "bird"){
			coll.transform.position = Vector2(-10, 5);
			coll.rigidbody2D.velocity = Vector2(0,0);
			Scoring.birdLives --;
		}
}