class rope{
	constructor(body1,body2, offsetX)
	{
		var con={
			bodyA:body1,
			bodyB:body2
		}

		this.rope=Constraint.create(con)
		World.add(world,this.rope)

		this.offsetX = offsetX
	
	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;
		strokeWeight(1.5);
		line(pointB.x,pointB.y,pointA.x,pointA.y)
	}

}
