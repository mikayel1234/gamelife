
var matrix=[];

for(var i=0;i<30;i++)
{
	matrix[i]=[];
	for(var j=0;j<60;j++)
	{
		if(j<=20)
		{
			matrix[i][j]=1
		}
		else if(j>20&&j<=40)
		{
			matrix[i][j]=3
		}
		else
		{
			matrix[i][j]=2
		}
	}
}
var zorq1=[];
var zorq2=[];
class Zorqer
{
	constructor(x,y)
	{
		this.x=x;
		
	
		this.y=y;
	}
	rand(min,max)
	{
		return Math.floor(Math.random()*(max-min+1)+min);
	}
	krvel(krvox,tshnami)
	{
		
		
			var randX=this.rand(-1,1);
		
		var randY=this.rand(-1,1);
		if(this.x+randX>=0&&this.x+randX<=matrix[0].length-1&&this.y+randY>=0&&this.y+randY<=matrix.length-1)
		{
			if(matrix[this.y+randY][this.x+randX]!=krvox)
			{
				
				matrix[this.y][this.x]=krvox;
				matrix[this.y+randY][this.x+randX]=krvox;
				this.x=this.x+randX;
				this.y=this.y+randY;
			}
			
		}
		
	}
}
function setup()
{
	
	createCanvas(matrix[0].length*20,matrix.length*20);
	background("#acacac");
	noStroke();
	

	
}
function a(index)
{
	if(index==1)
	{
		for(var i=0;i<zorq1.length;i++)
		{
			zorq1[i].krvel(1,2);
		}
	
	}
	else if(index==3)
	{
		for(var i=0;i<zorq3.length;i++)
		{
			zorq3[i].krvel(3,1);
		}
	}
	else
	{
		for(var i=0;i<zorq2.length;i++)
		{
			zorq2[i].krvel(2,0,1);
		}
	}
}
function draw() {
	zorq1=[];
	zorq2=[];
	zorq3=[];
	for(var y=0;y<matrix.length;y++)
	{
		for(var x=0;x<matrix[0].length;x++)
		{
			 if(matrix[y][x]==1)
			{
				
				zorq1.push(new Zorqer(x,y));
				fill("blue");
				rect(x*20,y*20,20,20);
			}
			else if(matrix[y][x]==2)
			{
				zorq2.push(new Zorqer(x,y));
				fill("yellow");
				rect(x*20,y*20,20,20);
			}
			else if(matrix[y][x]==3)
			{
				zorq3.push(new Zorqer(x,y));
				fill("black");
				rect(x*20,y*20,20,20);
			}
		}
	}
	for(var i=0;i<15;i++)
	    {
		a(Math.floor(Math.random()*(3-1+1)+1));
	}
	
}

