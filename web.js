var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var http = require('http');
var https = require('https');
var fs = require('fs');
var url = require('url');
var qs = require('querystring');
var template = require('./lib/template.js');
var path = require('path');
//db다루는
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter1 = new FileSync('/home/hosting_users/vhxmwhkd1/apps/vhxmwhkd1_lmain/DB/reportedPlayersS10.json')
const adapter2 = new FileSync('/home/hosting_users/vhxmwhkd1/apps/vhxmwhkd1_lmain/DB/certifiedUsers.json')
const adapter3 = new FileSync('/home/hosting_users/vhxmwhkd1/apps/vhxmwhkd1_lmain/DB/championsList.json')

const db1 = low(adapter1)
const db2 = low(adapter2)
const db3 = low(adapter3)

db1.defaults({S10: []})
  .write()

db2.defaults({ certifiedUsers: [{id:1, name:"중위중위중위중00001"}, {id:2, name:"hide on bush00002"}]})
  .write()

db3.defaults({championsList: [{id : 266, name : "Aatrox", }, {id : 103, name : "Ahri", }, {id : 84, name : "Akali", }, {id : 12, name : "Alistar", }, {id : 32, name : "Amumu", }, {id : 34, name : "Anivia", }, {id : 1, name : "Annie", }, {id : 523, name : "Aphelios", }, {id : 22, name : "Ashe", }, {id : 136, name : "AurelionSol", }, {id : 268, name : "Azir", }, {id : 432, name : "Bard", }, {id : 53, name : "Blitzcrank", }, {id : 63, name : "Brand", }, {id : 201, name : "Braum", }, {id : 51, name : "Caitlyn", }, {id : 164, name : "Camille", }, {id : 69, name : "Cassiopeia", }, {id : 31, name : "Chogath", }, {id : 42, name : "Corki", }, {id : 122, name : "Darius", }, {id : 131, name : "Diana", }, {id : 119, name : "Draven", }, {id : 36, name : "DrMundo", }, {id : 245, name : "Ekko", }, {id : 60, name : "Elise", }, {id : 28, name : "Evelynn", }, {id : 81, name : "Ezreal", }, {id : 9, name : "Fiddlesticks", }, {id : 114, name : "Fiora", }, {id : 105, name : "Fizz", }, {id : 3, name : "Galio", }, {id : 41, name : "Gangplank", }, {id : 86, name : "Garen", }, {id : 150, name : "Gnar", }, {id : 79, name : "Gragas", }, {id : 104, name : "Graves", }, {id : 120, name : "Hecarim", }, {id : 74, name : "Heimerdinger", }, {id : 420, name : "Illaoi", }, {id : 39, name : "Irelia", }, {id : 427, name : "Ivern", }, {id : 40, name : "Janna", }, {id : 59, name : "JarvanIV", }, {id : 24, name : "Jax", }, {id : 126, name : "Jayce", }, {id : 202, name : "Jhin", }, {id : 222, name : "Jinx", }, {id : 145, name : "Kaisa", }, {id : 429, name : "Kalista", }, {id : 43, name : "Karma", }, {id : 30, name : "Karthus", }, {id : 38, name : "Kassadin", }, {id : 55, name : "Katarina", }, {id : 10, name : "Kayle", }, {id : 141, name : "Kayn", }, {id : 85, name : "Kennen", }, {id : 121, name : "Khazix", }, {id : 203, name : "Kindred", }, {id : 240, name : "Kled", }, {id : 96, name : "KogMaw", }, {id : 7, name : "Leblanc", }, {id : 64, name : "LeeSin", }, {id : 89, name : "Leona", }, {id : 127, name : "Lissandra", }, {id : 236, name : "Lucian", }, {id : 117, name : "Lulu", }, {id : 99, name : "Lux", }, {id : 54, name : "Malphite", }, {id : 90, name : "Malzahar", }, {id : 57, name : "Maokai", }, {id : 11, name : "MasterYi", }, {id : 21, name : "MissFortune", }, {id : 62, name : "MonkeyKing", }, {id : 82, name : "Mordekaiser", }, {id : 25, name : "Morgana", }, {id : 267, name : "Nami", }, {id : 75, name : "Nasus", }, {id : 111, name : "Nautilus", }, {id : 518, name : "Neeko", }, {id : 76, name : "Nidalee", }, {id : 56, name : "Nocturne", }, {id : 20, name : "Nunu", }, {id : 2, name : "Olaf", }, {id : 61, name : "Orianna", }, {id : 516, name : "Ornn", }, {id : 80, name : "Pantheon", }, {id : 78, name : "Poppy", }, {id : 555, name : "Pyke", }, {id : 246, name : "Qiyana", }, {id : 133, name : "Quinn", }, {id : 497, name : "Rakan", }, {id : 33, name : "Rammus", }, {id : 421, name : "RekSai", }, {id : 58, name : "Renekton", }, {id : 107, name : "Rengar", }, {id : 92, name : "Riven", }, {id : 68, name : "Rumble", }, {id : 13, name : "Ryze", }, {id : 113, name : "Sejuani", }, {id : 235, name : "Senna", }, {id : 875, name : "Sett", }, {id : 35, name : "Shaco", }, {id : 98, name : "Shen", }, {id : 102, name : "Shyvana", }, {id : 27, name : "Singed", }, {id : 14, name : "Sion", }, {id : 15, name : "Sivir", }, {id : 72, name : "Skarner", }, {id : 37, name : "Sona", }, {id : 16, name : "Soraka", }, {id : 50, name : "Swain", }, {id : 517, name : "Sylas", }, {id : 134, name : "Syndra", }, {id : 223, name : "TahmKench", }, {id : 163, name : "Taliyah", }, {id : 91, name : "Talon", }, {id : 44, name : "Taric", }, {id : 17, name : "Teemo", }, {id : 412, name : "Thresh", }, {id : 18, name : "Tristana", }, {id : 48, name : "Trundle", }, {id : 23, name : "Tryndamere", }, {id : 4, name : "TwistedFate", }, {id : 29, name : "Twitch", }, {id : 77, name : "Udyr", }, {id : 6, name : "Urgot", }, {id : 110, name : "Varus", }, {id : 67, name : "Vayne", }, {id : 45, name : "Veigar", }, {id : 161, name : "Velkoz", }, {id : 254, name : "Vi", }, {id : 112, name : "Viktor", }, {id : 8, name : "Vladimir", }, {id : 106, name : "Volibear", }, {id : 19, name : "Warwick", }, {id : 498, name : "Xayah", }, {id : 101, name : "Xerath", }, {id : 5, name : "XinZhao", }, {id : 157, name : "Yasuo", }, {id : 83, name : "Yorick", }, {id : 350, name : "Yuumi", }, {id : 154, name : "Zac", }, {id : 238, name : "Zed", }, {id : 115, name : "Ziggs", }, {id : 26, name : "Zilean", }, {id : 142, name : "Zoe", }, {id : 143, name : "Zyra", }]})
  .write()



var key = "RGAPI-5352b304-539c-4608-97d4-34f5d5ebee1a";
//개발용 24시간짜리 임시 api키

app.use(bodyParser.urlencoded({extended: false }));
app.use(express.static(__dirname+'/lib'));
app.use(express.static(__dirname+'/img'));

//다음 줄과 같이 정적 데이터를(여기서는 html 파일) 그대로 routing 해 주는 방법도 있다.
// app.get('/', function(request, response){
//   response.sendFile(path.join(__dirname+'/lib/homePage/homeHtml.html'));
// });


app.get('/', function(request, response){
  var html = template.homeHtml();
  response.send(html);
});


app.post('/reportAfterCertify', function(request, response) {
  var post = request.body;
  var certifiedUser = post.certifiedUser;
  var certifiedUserName = certifiedUser.substring(0, certifiedUser.length - 5);
  var X = db2.get('certifiedUsers').find({
    name: certifiedUser
  }).value()
  if (X === undefined) {

    var html = template.failCertifyHtml();
    response.send(html);
  } else {
    var certifiedUserName = encodeURI(certifiedUserName);
    var url = `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${certifiedUserName}?api_key=${key}`;
    https.get(url, res => {
      res.setEncoding("utf8");
      var body = "";
      res.on("data", data => {
        body += data;
      });
      res.on("end", () => {
        var accountId = JSON.parse(body).accountId;
        var certifiedUserName = JSON.parse(body).name;
        var url = `https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?api_key=${key}`;
        https.get(url, res => {
          res.setEncoding("utf8");
          var body = "";
          res.on("data", data => {
            body += data;
          });
          res.on("end", () => {
            var gameId = JSON.parse(body).matches[0].gameId;

            var url = `https://kr.api.riotgames.com/lol/match/v4/matches/${gameId}?api_key=${key}`;

            https.get(url, res => {
              res.setEncoding("utf8");
              var body = "";
              res.on("data", data => {
                body += data;
              });
              res.on("end", () => {
                var date = JSON.parse(body).gameCreation
                var date = new Date(date);

                var gamedate = date.toLocaleDateString();
                var gametime = date.toLocaleTimeString();
                var gameYear = date.getFullYear();
                var gameMonth = 1 + date.getMonth(); //Jan is 0.

                var participantIdentities = JSON.parse(body).participantIdentities;
                //게임 내 번호
                var participantsId1 = participantIdentities[0].participantId;
                var participantsId2 = participantIdentities[1].participantId;
                var participantsId3 = participantIdentities[2].participantId;
                var participantsId4 = participantIdentities[3].participantId;
                var participantsId5 = participantIdentities[4].participantId;
                var participantsId6 = participantIdentities[5].participantId;
                var participantsId7 = participantIdentities[6].participantId;
                var participantsId8 = participantIdentities[7].participantId;
                var participantsId9 = participantIdentities[8].participantId;
                var participantsId10 = participantIdentities[9].participantId;
                //참여 소환사 이름
                var participantsId1SummonerName = participantIdentities[0].player.summonerName;
                var participantsId2SummonerName = participantIdentities[1].player.summonerName;
                var participantsId3SummonerName = participantIdentities[2].player.summonerName;
                var participantsId4SummonerName = participantIdentities[3].player.summonerName;
                var participantsId5SummonerName = participantIdentities[4].player.summonerName;
                var participantsId6SummonerName = participantIdentities[5].player.summonerName;
                var participantsId7SummonerName = participantIdentities[6].player.summonerName;
                var participantsId8SummonerName = participantIdentities[7].player.summonerName;
                var participantsId9SummonerName = participantIdentities[8].player.summonerName;
                var participantsId10SummonerName = participantIdentities[9].player.summonerName;

                var participants = JSON.parse(body).participants;

                //승패 여부
                var participantsId1Win = participants[0].stats.win;
                var participantsId2Win = participants[1].stats.win;
                var participantsId3Win = participants[2].stats.win;
                var participantsId4Win = participants[3].stats.win;
                var participantsId5Win = participants[4].stats.win;
                var participantsId6Win = participants[5].stats.win;
                var participantsId7Win = participants[6].stats.win;
                var participantsId8Win = participants[7].stats.win;
                var participantsId9Win = participants[8].stats.win;
                var participantsId10Win = participants[9].stats.win;
                //선택한 챔피언 고유번호
                var participantsId1ChampionId = participants[0].championId;
                var participantsId2ChampionId = participants[1].championId;
                var participantsId3ChampionId = participants[2].championId;
                var participantsId4ChampionId = participants[3].championId;
                var participantsId5ChampionId = participants[4].championId;
                var participantsId6ChampionId = participants[5].championId;
                var participantsId7ChampionId = participants[6].championId;
                var participantsId8ChampionId = participants[7].championId;
                var participantsId9ChampionId = participants[8].championId;
                var participantsId10ChampionId = participants[9].championId;
                //db에 저장된 챔피언별 이름/고유번호 자료에서 각 유저별 챔피언 고유번호로 구분하여 유저별 챔피언 이름 획득
                var participantsId1ChampionTag = db3.get('championsList').filter({"id": participantsId1ChampionId}).value();
                var participantsId2ChampionTag = db3.get('championsList').filter({"id": participantsId2ChampionId}).value();
                var participantsId3ChampionTag = db3.get('championsList').filter({"id": participantsId3ChampionId}).value();
                var participantsId4ChampionTag = db3.get('championsList').filter({"id": participantsId4ChampionId}).value();
                var participantsId5ChampionTag = db3.get('championsList').filter({"id": participantsId5ChampionId}).value();
                var participantsId6ChampionTag = db3.get('championsList').filter({"id": participantsId6ChampionId}).value();
                var participantsId7ChampionTag = db3.get('championsList').filter({"id": participantsId7ChampionId}).value();
                var participantsId8ChampionTag = db3.get('championsList').filter({"id": participantsId8ChampionId}).value();
                var participantsId9ChampionTag = db3.get('championsList').filter({"id": participantsId9ChampionId}).value();
                var participantsId10ChampionTag = db3.get('championsList').filter({"id": participantsId10ChampionId}).value();

                var participantsId1ChampionName = participantsId1ChampionTag[0].name
                var participantsId2ChampionName = participantsId2ChampionTag[0].name
                var participantsId3ChampionName = participantsId3ChampionTag[0].name
                var participantsId4ChampionName = participantsId4ChampionTag[0].name
                var participantsId5ChampionName = participantsId5ChampionTag[0].name
                var participantsId6ChampionName = participantsId6ChampionTag[0].name
                var participantsId7ChampionName = participantsId7ChampionTag[0].name
                var participantsId8ChampionName = participantsId8ChampionTag[0].name
                var participantsId9ChampionName = participantsId9ChampionTag[0].name
                var participantsId10ChampionName = participantsId10ChampionTag[0].name



                //선택한 라인
                var participantsId1Lane = participants[0].timeline.lane;
                var participantsId2Lane = participants[1].timeline.lane;
                var participantsId3Lane = participants[2].timeline.lane;
                var participantsId4Lane = participants[3].timeline.lane;
                var participantsId5Lane = participants[4].timeline.lane;
                var participantsId6Lane = participants[5].timeline.lane;
                var participantsId7Lane = participants[6].timeline.lane;
                var participantsId8Lane = participants[7].timeline.lane;
                var participantsId9Lane = participants[8].timeline.lane;
                var participantsId10Lane = participants[9].timeline.lane;
                //선택한 역할(원딜 또는 서폿)
                var participantsId1BottomRole = participants[0].timeline.role;
                var participantsId2BottomRole = participants[1].timeline.role;
                var participantsId3BottomRole = participants[2].timeline.role;
                var participantsId4BottomRole = participants[3].timeline.role;
                var participantsId5BottomRole = participants[4].timeline.role;
                var participantsId6BottomRole = participants[5].timeline.role;
                var participantsId7BottomRole = participants[6].timeline.role;
                var participantsId8BottomRole = participants[7].timeline.role;
                var participantsId9BottomRole = participants[8].timeline.role;
                var participantsId10BottomRole = participants[9].timeline.role;

                var html = template.successCertifyHtml(certifiedUserName, participantsId1, participantsId1Win, participantsId1Lane, participantsId1BottomRole, participantsId1SummonerName, participantsId1ChampionName, participantsId2, participantsId2Win, participantsId2Lane, participantsId2BottomRole, participantsId2SummonerName, participantsId2ChampionName, participantsId3, participantsId3Win, participantsId3Lane, participantsId3BottomRole, participantsId3SummonerName, participantsId3ChampionName, participantsId4, participantsId4Win, participantsId4Lane, participantsId4BottomRole, participantsId4SummonerName, participantsId4ChampionName, participantsId5, participantsId5Win, participantsId5Lane, participantsId5BottomRole, participantsId5SummonerName, participantsId5ChampionName, participantsId6, participantsId6Win, participantsId6Lane, participantsId6BottomRole, participantsId6SummonerName, participantsId6ChampionName, participantsId7, participantsId7Win, participantsId7Lane, participantsId7BottomRole, participantsId7SummonerName, participantsId7ChampionName, participantsId8, participantsId8Win, participantsId8Lane, participantsId8BottomRole, participantsId8SummonerName, participantsId8ChampionName, participantsId9, participantsId9Win, participantsId9Lane, participantsId9BottomRole, participantsId9SummonerName, participantsId9ChampionName, participantsId10, participantsId10Win, participantsId10Lane, participantsId10BottomRole, participantsId10SummonerName, participantsId10ChampionName, gamedate, gametime, gameId, gameYear, gameMonth);

                response.send(html);
              });
            });
          });
        });
      });
    });
  };
});


app.post('/reported', function(request, response) {
  var post = request.body;
  var gameId = post.gameId;
  var reporterNickname = post.reporterNickname;
  var reportedNickname = post.reportedNickname;
  var date = post.date;
  var year = parseInt(post.gameYear);
  var month = parseInt(post.gameMonth);
  //라이엇 api에서 보내주는 정보이기에 정확히 비교하려면 데이터 형식을 통일시켜주는 작업이 필요했다. 이를 위헤 parseInt()를 활용함.
  var doorGuard = post.doorGuard;
  var boosted = post.boosted;
  var abuse = post.abuse;
  var politics = post.politics;



  db1.get('S10').push({
      "gameId": gameId,
      "date": date,
      "year": year,
      "month": month,
      "reportedNickname": reportedNickname,
      "reporterNickname": reporterNickname,
      "doorGuard": doorGuard,
      "boosted": boosted,
      "abuse": abuse,
      "politics": politics
    })
    .write();

  var today = new Date();
  var todayMonth = 1 + today.getMonth(); //Jan is 0 :)
  var todayYear = today.getFullYear();
  //db에 넣어준 날짜 데이터는 외부api에서 쏴준 데이터였고 내가 여기서 비교하려고 불러온 것은 직접 함수로 날짜를 구한 것이었다. 그러나 비교하는 기능을 구현할 때 두 값이 모두 사람눈으로는 똑같아 보였고 또한 '날짜 데이터'였음에도 막상 비교하려니 서로다른 형식의 데이터 인 것으로 판명 되었다. 외부 소스의 데이터는 내가 모르는 어떤 사정에 의해 내 생각과 다른 형식일 수 있는 것이다. 앞으로도 이런 점을 주의해야겠다.
  var doorGuard = db1.get('S10').filter({
    "year": todayYear,
    "month": todayMonth,
    "reportedNickname": reportedNickname,
    "doorGuard": "on"
  }).value();
  var boosted = db1.get('S10').filter({
    "year": todayYear,
    "month": todayMonth,
    "reportedNickname": reportedNickname,
    "boosted": "on"
  }).value();
  var abuse = db1.get('S10').filter({
    "year": todayYear,
    "month": todayMonth,
    "reportedNickname": reportedNickname,
    "abuse": "on"
  }).value();
  var politics = db1.get('S10').filter({
    "year": todayYear,
    "month": todayMonth,
    "reportedNickname": reportedNickname,
    "politics": "on"
  }).value();

  var html = template.reportedHtml(todayYear, todayMonth, reportedNickname, doorGuard.length, boosted.length, abuse.length, politics.length);

  response.send(html);
});


app.post('/searched', function(request, response) {
  var post = request.body.summonerName;
  var post = `${post} `;
  var sumNameArr = post.split("님이 로비에 참가하셨습니다. ");

  var summonerName1 = sumNameArr[0];
  var summonerName2 = sumNameArr[1];
  var summonerName3 = sumNameArr[2];
  var summonerName4 = sumNameArr[3];
  var summonerName5 = sumNameArr[4];

  var summonerName1 = encodeURI(summonerName1, 'UTF-8');
  var summonerName2 = encodeURI(summonerName2, 'UTF-8');
  var summonerName3 = encodeURI(summonerName3, 'UTF-8');
  var summonerName4 = encodeURI(summonerName4, 'UTF-8');
  var summonerName5 = encodeURI(summonerName5, 'UTF-8');

  var SummonerArr = function(summonerName) {
    return new Promise(resolve => {
      if (summonerName === "undefined") {
        resolve(['', '', '', '', '', '', '', ''])
      } else {
        var url = `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${key}`;

        https.get(url, res => {
          res.setEncoding("utf8");
          var body = "";
          res.on("data", data => {
            body += data;
          });
          res.on("end", () => {
            var encryptedSummonerId = JSON.parse(body).id;
            var summonerName = JSON.parse(body).name
            var url = `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedSummonerId}?api_key=${key}`;

            https.get(url, res => {
              res.setEncoding("utf8");
              var body = "";
              res.on("data", data => {
                body += data;
              });
              res.on("end", () => {
                var XX = JSON.parse(body);

                if (XX[0] === undefined) {
                  var name = summonerName;
                  var rank = '';
                  var tier = '';
                  var doorGuard = '';
                  var boosted = '';
                  var abuse = '배치 중';
                  var politics = '';


                  resolve([name, tier, rank, doorGuard, boosted, abuse, politics])

                } else if (XX[0].queueType === "RANKED_SOLO_5x5") {
                  var rankRoma = XX[0].rank;
                  var rankAra = function(rankRoma) {
                    if (rankRoma === 'I') {
                      return '1';
                    } else if (rankRoma === 'II') {
                      return '2';
                    } else if (rankRoma === 'III') {
                      return '3';
                    } else if (rankRoma === 'IV') {
                      return '4';
                    } else {
                      return '5';
                    }
                  };
                  var rank = rankAra(rankRoma);
                  var tier = XX[0].tier;
                  var name = XX[0].summonerName;

                  var doorGuard = db1.get('S10').filter({
                    "reportedNickname": name,
                    "doorGuard": "on"
                  }).value();
                  var boosted = db1.get('S10').filter({
                    "reportedNickname": name,
                    "boosted": "on"
                  }).value();
                  var abuse = db1.get('S10').filter({
                    "reportedNickname": name,
                    "abuse": "on"
                  }).value();
                  var politics = db1.get('S10').filter({
                    "reportedNickname": name,
                    "politics": "on"
                  }).value();


                  resolve([name, tier, rank, doorGuard.length, boosted.length, abuse.length, politics.length])

                } else {

                  var rankRoma = XX[1].rank;
                  var rankAra = function(rankRoma) {
                    if (rankRoma === 'I') {
                      return '1';
                    } else if (rankRoma === 'II') {
                      return '2';
                    } else if (rankRoma === 'III') {
                      return '3';
                    } else if (rankRoma === 'IV') {
                      return '4';
                    } else {
                      return '5';
                    }
                  };
                  var rank = rankAra(rankRoma);
                  var tier = XX[1].tier;
                  var name = XX[1].summonerName;

                  var doorGuard = db1.get('S10').filter({
                    "reportedNickname": name,
                    "doorGuard": "on"
                  }).value();
                  var boosted = db1.get('S10').filter({
                    "reportedNickname": name,
                    "boosted": "on"
                  }).value();
                  var abuse = db1.get('S10').filter({
                    "reportedNickname": name,
                    "abuse": "on"
                  }).value();
                  var politics = db1.get('S10').filter({
                    "reportedNickname": name,
                    "politics": "on"
                  }).value();


                  resolve([name, tier, rank, doorGuard.length, boosted.length, abuse.length, politics.length])
                }
              });
            });
          });
        });
      };
    })
  }

  SummonerArr(summonerName1)
    .then(function(result) {
      Sum1Arr = result;

      SummonerArr(summonerName2)
        .then(function(result) {
          Sum2Arr = result;

          SummonerArr(summonerName3)
            .then(function(result) {
              Sum3Arr = result;

              SummonerArr(summonerName4)
                .then(function(result) {
                  Sum4Arr = result;

                  SummonerArr(summonerName5)
                    .then(function(result) {
                      Sum5Arr = result;

                      var html = template.searchedHtml(Sum1Arr[0], Sum1Arr[1], Sum1Arr[2], Sum1Arr[3], Sum1Arr[4], Sum1Arr[5], Sum1Arr[6], Sum2Arr[0], Sum2Arr[1], Sum2Arr[2], Sum2Arr[3], Sum2Arr[4], Sum2Arr[5], Sum2Arr[6], Sum3Arr[0], Sum3Arr[1], Sum3Arr[2], Sum3Arr[3], Sum3Arr[4], Sum3Arr[5], Sum3Arr[6], Sum4Arr[0], Sum4Arr[1], Sum4Arr[2], Sum4Arr[3], Sum4Arr[4], Sum4Arr[5], Sum4Arr[6], Sum5Arr[0], Sum5Arr[1], Sum5Arr[2], Sum5Arr[3], Sum5Arr[4], Sum5Arr[5], Sum5Arr[6]);

                      response.writeHead(200);
                      response.end(html);
                    })
                })
            })
        })
    })
});



app.listen(8001);
