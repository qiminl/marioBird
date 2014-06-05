using UnityEngine;
using System.Collections;

public class spiderMoving : MonoBehaviour {

	public float speed = 1;
	private Vector2 moveDirection;
	private GameObject player;
	public float turnSpeed = 5;
	// Use this for initialization
	void Start () {	
		player = GameObject.Find("bird");

	}
	
	// Update is called once per frame
	void Update () {
		Vector2 currentPosition = transform.position;
		if (player) {
			// if player is nearby, attract to player
			if(Mathf.Abs(player.transform.position.x- currentPosition.x) < 3 && 
			   Mathf.Abs(player.transform.position.y - currentPosition.y)< 3){
				Vector2 moveToward = player.transform.position;
				moveDirection = moveToward - currentPosition;
				moveDirection.Normalize();
				Vector2 target;
				target = moveDirection * speed + currentPosition;
				transform.position = Vector2.Lerp(currentPosition, target, Time.deltaTime);
				float targetAngle = Mathf.Atan2(moveDirection.y, moveDirection.x) * Mathf.Rad2Deg;
				transform.rotation = Quaternion.Slerp(transform.rotation, Quaternion.Euler(0, 0, targetAngle), turnSpeed * Time.deltaTime);
			}		
		}
	
	}

	 void edgeDetection(){
		Vector2 target = transform.position;
		Vector2 currentPosition = transform.position;
		if(transform.position.x < -13){ 
			target.x = -13;
		}
		
		else if(transform.position.x > 13){
			target.x = 13;
		}
		
		if(transform.position.y < -8.5){
			target.y = -8.5f;
		}
		else if(transform.position.y > 8.5){
			target.y = 8.5f;
		}
		transform.position = Vector2.Lerp(currentPosition, target, Time.deltaTime);
	}
	void onTriggerEnter2D(Collider2D other){
		Debug.Log("lalalalalal");
		if (other.name == "bird") {
			Destroy(other.gameObject);		
		}
	}
}
