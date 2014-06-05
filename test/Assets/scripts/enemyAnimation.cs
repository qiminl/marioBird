using UnityEngine;
using System.Collections;

public class enemyAnimation : MonoBehaviour {

	public Sprite[] sprites;
	public float framesPerSecond;
	private SpriteRenderer spriteRenderer;
	
	// Use this for initialization
	void Start () {
		spriteRenderer = renderer as SpriteRenderer;
		framesPerSecond = 3;
	}
	
	// Update is called once per frame
	void Update () {
		int index = (int)(Time.timeSinceLevelLoad * framesPerSecond);
		index = index % sprites.Length;
		spriteRenderer.sprite = sprites[ index ];
	}
}
