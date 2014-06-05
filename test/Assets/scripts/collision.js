#pragma strict
public var sp: Sprite;
function OnTriggerEnter2D(coll: Collider2D) {
		if(coll.name == "bird"){
			this.transform.position = Vector2(Random.Range(-13, 13), Random.Range(-8, 8));
			Scoring.score += 10; 
		}
}