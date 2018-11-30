
function clickbtn(){
	var box = document.getElementById('tbmain');
	var str = box.value;
	addChat("你：" + str);
	handleChat();
	box.value = "";
}

function addChat(str){
	var li = document.createElement('li');
	li.innerHTML = '<p>' + str + '</p>';
	document.getElementById('chat').appendChild(li);
}

function handleChat(str){
	addChat("Noodles：" + "啥子呢?");
}