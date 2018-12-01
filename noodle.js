function clickbtn(){
	var box = document.getElementById('tbmain');
	var str = box.value;
	addChat("你：" + str);
	handleChat(str);
	box.value = "";
}

function addChat(str){
	var li = document.createElement('li');
	li.innerHTML = '<p>' + str + '</p>';
	document.getElementById('chat').appendChild(li);
}

function noodle(str){
	addChat("Noodles：" + str);
}

function hasKeyWord(str,keys){
	for(let i = 0;i<keys.length;i++){
		if(str.indexOf(keys[i])>-1){
			return true;
		}
	}
	return false;
}

function getRandInt(max){
	return Math.floor(Math.random()*(max+1));
}

var hasNoodleCome = false;
var chatCount = 0;
var onLastTalk = false;
var questionType = 'none';

function askQuestion(){
	onLastTalk = true;
	let i = getRandInt(10);
	if(i < 5){
		noodle('好多分？');
		questionType = 'score';
	}
	if(i == 6){
		noodle('拿不拿得到一等奖？');
		questionType = '1=';
	}
	if(i > 8){
		noodle('你啥名字?');
		questionType = 'name';
	}
	if(i == 7 || i==8){
		noodle('今天考试没得?');
		questionType = 'test';
	}
}

function handleChat(str){
	chatCount++;
	if(hasKeyWord(str,['noodle','面','熊'])){
		if(!hasNoodleCome){
			addChat('前门传来敲门声。输入"开门"来开门。');
		}else{
			noodle('哪个在喊我！');
		}
	}
	
	if(hasKeyWord(str,['开门'])){
		hasNoodleCome = true;
		addChat('noodle进入了机房。');
	}
	
	if(onLastTalk && str != ''){
		noodle('啥子呢?');
		if(Math.random() > 0.2)
			onLastTalk = false;
		return;
	}
	
	if(hasNoodleCome && !onLastTalk){
		let i = getRandInt(15);
		if(i < 5){
			askQuestion();
		}
		if(i == 6){
			noodle('你们能拿一等奖，三分靠老师，一分考家长，剩下六分都靠我的管理。');
		}
		if(i == 7){
			noodle('都坐到机房前头来。');
		}
		if(i == 8){
			noodle('都坐到这一排。');
		}
		if(i == 9){
			noodle('我的话你们都不听了嗦!');
		}
		if(i == 10){
			noodle('喻老师，他们今天考试了吗');
		}
		if(i == 11){
			noodle('我才去了衡水中学回来，他们机房才这么大，一个人位置才这么点，你看看你们自己。');
		}
		if(i == 12){
			noodle('竞赛生就要有个竞赛生的样子。');
		}
		if(i == 13){
			noodle('欧元好多分？');
		}
		if(i == 14){
			noodle('卢加洲好多分？');
		}
	}	
	
	if(questionType == 'score' && str!=''){
		noodle('才这么点？拿不拿得到一等奖哦。');
	}
	
}

function randSpeak(){
	handleChat('');
	setTimeout(randSpeak,Math.random()*7000);
}

randSpeak();