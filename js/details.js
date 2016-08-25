var Detail = {
	skills: ["C", "Java", "Linux", "Python", "OS", "Shellscript", "Spring", "Tomcat", "low programming", "System security", "Reverse engineering", "Web security", "GDB", "Ollydbg", "Linux security", "Linux server", "Apache", "PHP", "node.js", "AngularJS", "Firebase", "MySQL", "Oracle", "Javascript", "jQuery"],
	system: {
		level: 50,
		projects: [
			{
				title: 'Pintos Project', 
				pic: '', 
				description: '<p>Pintos Project는 운영체제에 구현이 안되어 있거나 부족한 부분을 직접 구현하는 프로젝트 입니다.</p>' +
							'<p>제가 구현한 부분은 아래와 같습니다.</p>' +
							'<ol>' +
								'<li>busy waiting 방식의 sleep함수를 thread를 block시키는 방식으로 전환' +
								'<li>Round-Robin방식의 스케줄러를 우선순위 기반 multi-level queue 스케줄러로 전환' +
								'<li>80x86 calling convention구현' +
							'</ol>' +
							'<p><a href="https://www.dropbox.com/sh/5zex04d4dsbt0s4/AABrkU0rDWCD_N1motizK_6oa?dl=0" target="_blank">#link</a></p>'
			},  
			{
				title: 'Mini shell', 
				pic: '', 
				description: '<p>3학년 수업이었던 시스템 프로그래밍 수업의 텀 프로젝트였습니다.</p>' +
							'<p>기본적인 기능은 모두 있는 쉘을 구현하는걸로 아래와 같은 기능을 포함하고 있었습니다.</p>' +
							'<ul>' +
								'<li>멀티 파이프</li>' +
								'<li>리다이렉션</li>' +
								'<li>백그라운드 실행</li>' +
								'<li>상대경로 및 절대경로 구분</li>' +
								'<li>home directory(~)</li>' +
								'<li>history</li>' +
							'</ul>' +
							'<p>Github: <a href="https://github.com/kost0806/kostsh" target="_blank">#link</a></p>'
			}, 
			{
				title: '각종 쉘 스크립트 제작', 
				pic: '', 
				description: '<p>리눅스를 사용하는데 필요했던 쉘스크립트들입니다.</p>' +
							'<ul>' +
								'<li>Pintos 실행을 쉽게 해주는 쉘스크립트: <a href="https://www.evernote.com/shard/s313/sh/03e083d8-edf9-416f-b3ad-90dc2e798741/e35026d9d8adcccee60625b6e1cc791f" target="_blank">#link</a></li>' +
								'<li>python 스크립트 실행 데몬: <a href="https://www.evernote.com/shard/s313/sh/bb8c308e-33ba-4f02-b1df-6d266fa0a101/b14f2e83c522a8d8819235086b3df6c9" target="_blank">#link</a></li>' +
								'<li>Telnet 및 SSH 접속을 쉽게 해주는 쉘스크립트: <a href="https://www.evernote.com/shard/s313/sh/a5ca61d2-e415-4308-9926-0a1547d77bf7/2a2b7a37275d1533b4bd2213e260298b" target="_blank">#link</a></li>' +
								'<li>임시파일을 지워주는 python 스크립트 실행 데몬: <a href="https://www.evernote.com/shard/s313/sh/15ab7d05-b4b2-4392-940b-2db673c5a5f9/67683a6d727c9ec174a63b1011189196" target="_blank">#link</a></li>' +
								'<li>외 다수</li>' +
							'</ul>'
			},
			{
				title: '웹 서버 및 프록시 서버 개발',
				pic: '',
				description: '<p>네트워크 프로그래밍 강의 텀 프로젝트로 웹서버와 프록시 서버를 개발하였습니다.</p>' +
							'<p>개발 언어: C</p>' +
							'<p>웹 서버 > 프록시 서버 순으로 개발하였습니다.</p>' +
							'<ul>' +
							'<li>웹 서버: <a href="https://github.com/kost0806/network_proj" target="_blank">#link</a></li>' +
							'<li>프록시 서버: <a href="https://github.com/kost0806/proxy" target="_blank">#link</a></li>' +
							'</ul>'
			}
		],
		description: ""
	},
	security: {
		level: 30,
		projects: [
			{
				title: '학회 내부 및 외부 해킹대회 문제 출제', 
				pic: '', 
				description: '<p>정보보호 학회 HYCube에서 주관하는 대내외 해킹대회에서 시스템 해킹 및 리버싱, 암호학 등의 문제 다수를 출제하였습니다.</p>' +
							'<p>주로 시스템 해킹 및 리버싱 문제를 출제하였습니다.</p>'
			}, 
			{
				title: 'FTZ 진행 및 LoB 진행(일부)', 
				pic: '', 
				description: '<p>Hacker school의 Free Training Zone(FTZ)를 모두 풀어보고 Lord of Bof(LoB) 일부(절반정도)를 풀어보았습니다.</p>' +
							'<p>따라서 기초적인 시스템 해킹 지식을 갖추었습니다.</p>' +
							'<p>리눅스에서 BoF 실습을 하였기 때문에 GDB 또한 사용할 수 있습니다.</p>' +
							'<p>FTZ 풀이: <a href="https://www.evernote.com/pub/kimmin0806/ftz" target="_blank">#link</a></p>'
			}
		],
		description: ""
	},
	web: {
		level: 70,
		projects: [
			{
				title: '과제 체점 웹게임 제작', 
				pic: '', 
				description: '<p>3학년 과목이었던 웹 어플리케이션 개발이라는 과목에서 진행했던 프로젝트로 직접 과제 체점 조교가 되어서 과제를 체점한다는 컨셉의 웹 게임 제작 프로젝트였습니다.</p>' +
							'<p>Apache PHP와 MySQL을 이용하여 제작을 하였고 사용한 라이브러리로는 jQuery, jQueryUI, Syntaxhilighter이 있습니다.</p>'
			},
			{
				title: 'Apache &amp; Tomcat Server 운영', 
				pic: '', 
				description: '<p>Apache 운영은 2학년때부터 항상 운영을 해왔습니다. 개인 공부를 위해 가상 서버 호스팅을 이용하여 개인 Ubuntu 서버를 운용하며 Apache를 항시 운영을 하였습니다.</p>' +
							'<p>4학년때부터는 가상 서버 호스팅에서 AWS의 EC2로 이전하였습니다.</p>' +
							'<p>Tomcat은 캡스톤 디자인에서 게임서버로 사용하기 위해 운영하였습니다.</p>' +
							'<p>WAS인 Tomcat을 게임 서버로 사용했던 이유로는 크게 두가지였습니다.</p>' +
							'<ol>' +
							'<li>체스게임을 하기위한 서버로 서버와 클라이언트간의 통신이 많지 않아 WAS로도 충분히 가능</li>' +
							'<li>개발 기간의 단축</li>' +
							'</ol>' +
							'<p>Tomcat에서는 Spring Framework를 이용하여 운용하였습니다.</p>'
			},
			{
				title: '북마크 서비스 제작', 
				pic: '', 
				description: '<p>AngularJS와 Firebase를 이용하여 제작한 북마크 페이지입니다.</p>' +
							'<p>AngularJS를 이용하여 싱글 페이지 웹 어플리케이션으로 제작하였습니다.</p>' +
							'<p>또한 Firebase를 DB로 이용하였습니다.</p>' +
							'<p>그 외 jQuery와 Bootstrap을 이용하였습니다.</p>' +
							'<p><a href="https://github.com/kost0806/kost_bookmark" target="_blank">#link</a></p>'
			},
			{
				title: '웹 어플리케이션 개발 강의 실습',
				pic: '',
				description: '<p>웹 어플리케이션 개발 실습때 했던 실습들입니다.</p>' +
							'<p>HTML5, CSS3, PHP, MySQL, Javascript, Prototype, Scriptaculos 등을 하였습ㄴ디ㅏ.</p>' +
							'<p><a href="https://github.com/kost0806/webLab" target="_blank">#link</a></p>'
			},
			{
				title: '포트폴리오 페이지 제작', 
				pic: '', 
				description: '<p>현재 사이트 제작에는 주로 jQuery를 사용하여 제작을 하였습니다. 스타일에는 Bootstrap또한 일부 사용하였습니다.</p>' +
							'<p>jQuery를 사용한 이유로는 단순한 문법적 익숙함과 각종 편의성에 의해 사용하였고 핵심 기능들은 모두 직접 구현하였습니다.</p>' +
							'<p>페이지 마지막의 &dqout;연락하기&dqout;부분은 Node.js 서버에 ajax 요청을 하여 메일 전송 시도를 하며</p>' +
							'<p>Node.js에서는 Express를 Framework로 사용하고 nodemailer를 통해서 메일을 보냅니다.</p>' +
							'<p><a href="https://github.com/kost0806/portfolio" target="_blank">#link</a></p>'
			},
			{
				title: 'AR 음성인식 체스 게임/서버파트',
				pic: '',
				description: '<p>캡스톤 디자인 으로 진행한 프로젝트로 AR과 음성인식을 접목한 체스게임입니다.</p>' +
							'<p>주로 서버를 담당하였스며, 서버 전체 관리 및 Tomcat 관리 서버프로그램 Core 담당을 했습니다.</p>' +
							'<p>Tomcat위에서 Spring을 돌렸으며, WAS를 게임서버로 선택했던 이유는 개발시간 단축, 서버와 클라이언트간의 통신이 많지 않음이었습니다. </p>' +
							'<p><a href="https://github.com/Master-Piece/Chess-AR-Online-Server" target="_blank">#link</a></p>'
			}
		],
		description: ""
	},
	android: {
		level: 50,
		projects: [
			{
				title: '메시지 예약 전송 어플리케이션 제작', 
				pic: '', 
				description: '<p>휴대폰 요금제의 무료 문자를 이용한 문자 예약 발송 어플리케이션입니다.</p>' +
							'<p>안드로이드-웹 연동 어플리케이션으로 제가 맡은 파트는 안드로이드 일부 및 서버였습니다.</p>' +
							'<p>안드로이드에서는 Google+ 로그인쪽을 맡았고, 서버에서는 서버 설정부터 시작하여 모든 부분을 담당하였습니다.</p>' +
							'<p>지정된 시간에 스크립트를 실행하게끔 하는 Python 스크립트 및 데몬, Apache 설정, PHP설정, MySQL설정 등 전반적인 서버사이드 작업을 담당하였습니다.</p>'
			}, 
			{
				title: '음성인식 관련 어플용 음성인식 샘플 수집용 어플리케이션 제작', 
				pic: '', 
				description: '<p>캡스톤 디자인때 제가 속한 팀의 주제였던 음성인식 + AR중 음성인식을 위한 어플이었습니다.</p>' +
							'<p>저희가 사용하였던 음성인식 방법은 구글 음성인식 API를 사용하여 음성인식 결과를 자연어 범위에서 받았습니다.</p>' +
							'<p>하지만 체스게임을 하는데에는 음성인식의 키워드 풀이 많이 필요하지 않았습니다.</p>' +
							'<p>A1을 발음하면 비슷하게 오는 단어는 모두 음성인식의 풀에 넣어두고 그 단어들이 오면 A1을 최종 결과로 내놓는 방식을 체택하였습니다.</p>' +
							'<p>따라서 음성인식 풀을 모을 필요가 있었고 이 어플리케이션은 그것을 위한 어플리케이션이었습니다.</p>' +
							'<p>구글 음성인식 API를 사용하여 음성인식을 하고 그 결과를 서버에 전송하는 방식이었습니다.</p>' +
							'<img src="image/proj/cp_splash.jpg" alt="splash" width="150">' +
							'<img src="image/proj/cp_name.jpg" alt="name" width="150">' +
							'<img src="image/proj/cp_main.jpg" alt="main" width="150">' +
							'<img src="image/proj/cp_result.jpg" alt="result" width="150">'
			}, 
			{
				title: 'GCM 이용 어플리케이션 제작', 
				pic: '', 
				description: '<p>GCM을 이용한 클라이언트 및 서버사이드 개발 경험이 있습니다.</p>' +
							'<p>메시지 예약 전송 어플리케이션에서도 GCM 서버 개발을 하였고, 캡스톤 디자인에서도 GCM 서버 개발, 개인적으로 사용하기 위해 개발한 어플리케이션에서도 GCM을 사용하여 GCM 서버 및 클라이언트 모두 개발하였습니다.</p>'
			}
		],
		description: ""
	},
	etc: {
		level: 50,
		projects: [
			{
				title: 'Java-Oracle DB 연동 프로그램 제작', 
				pic: '', 
				description: '<p>자바와 Oracle DB를 연동하여 POS 소프트웨어를 제작해 보았습니다.</p>'
			}
		],
		description: ""
	}
}

var Career_detail = {
	2013: '<ul>'+
			'<li>한양대학교 ERICA 컴퓨터 공학과 입학 (2013.3 ~)'+
			'<li>한양대학교 ERICA 컴퓨터 공학과 정보보호 학회 HYCube (2013.3 ~)'+
		'</ul>',
	2014: '<ul>'+
			'<li>정보보호 학회 HYCube 부회장 (2014.2 ~ 2015.2)'+
			'<li>학회 내부 해킹대회 문제 출제 및 운영 (2014.5)'+
		'</ul>',
	2015: '<ul>' +
			'<li>한양대학교 ERICA 소프트웨어 전문가 육성 프로그램 SMaSH(Software Maven School at Hanyang University ERICA 선발 (2015.2)' +
			'<li>동계 현장실습(인턴): 소프토피아 - 안드로이드 문자 자동 전송 어플리케이션 (2015.1 ~ 2015.3)' +
			'<li>하계 현장실습(인턴): 청우펀스테이션 - 엑티브디자인 및 관련 IT기술 자문 (2015.7 ~ 2015.9)' +
			'<li>학회 내부 해킹대회 문제 출제 및 운영 (2015.5)' + 
			'<li>학회 주관 공학대학 해킹대회 출제 및 운영 (2015.9)' +
			'<li>한양대학교 ERICA캠퍼스 프로그래밍 콘테스트 3위 (2015.5)' +
		'</ul>',
	2016: '<ul>' +
			'<li>동계 현장실습(인턴): 스포티누스 - Spring Framework사용 및 XE 커스터마이징 (2016.1 ~ 2016.3)' +
			'<li>동계 창업캠프: AWS 및 Full stack project(HTML,CSS,Bootstrap + Angular.js + Android) 참가 (2016.1)' +
			'<li>공대 캡스톤 디자인 경진대회 진출 (2016.6)' +
			'<li>정보처리기사 취득 (2016.7)' +
		'</ul>'
}