using UnityEngine;
using System.Collections;

public class birdCollision : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
	void onTriggerEnter2D (Collider2D other){
		
		Debug.Log("Found it!");
	}
}
