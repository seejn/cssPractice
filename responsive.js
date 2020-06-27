function dropDown()
{
	if (document.getElementById('menu').style.display = 'block') 
	{
		document.getElementById('menu1').style.display = 'block';
		document.getElementById('menu').style.display = 'none'
		document.getElementById('links').style.display = 'block';
	}
}
function dropUp()
{
	if (document.getElementById('menu1').style.display = 'block') 
	{
		document.getElementById('menu').style.display = 'block';
		document.getElementById('menu1').style.display = 'none'
		document.getElementById('links').style.display = 'none';
	}
}