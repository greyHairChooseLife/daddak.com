module.exports = {
  homeHtml:function(){
    return `
    <html lang="en" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title></title>
        <link rel="stylesheet" type="text/css" href="/css/homeCss.css">
      </head>
      <body>

        <span id="word1">
          블랙 리스트
        </span>
        <span id="word2">
          기록소
        </span>
        <span id="word3">
          다딱이 전용
        </span>

        <span id="word4">
          -수문장인가?<br>
          -대리ㅋ인가?<br>
          -어뷰징인가?<br>
          -정치인인가?
        </span>
        <span id="arrow1">

        </span>

        <span id="item2">
         <img src="/rankedEmblems/Emblem_Diamond.png">
        </span>

        <span id="item3">
        </span>

        <form id="search" action="/searched" method="post">
          <input type="text" name="summonerName" placeholder="다중검색 가능, 복붙하세요.">
          <input type="submit" value="enter">
        </form>
        <span class="searchLabel">→ 우리팀 검색</span>
        <span class="searchTip">〉게임 전</span>

        <form id="reportCertify" action="/reportAfterCertify" method="post">
          <input type="text" name="certifiedUser" placeholder="내 아이디 + 5자리 코드번호">
          <input type="submit" value="인증">
        </form>
        <span class="reportCertifyLabel">→ 리폿하기</span>
        <span class="reportCertifyLabel2">＊<span id="howToTrigger" style="font-size:23; color:#f00; text-decoration: underline;">티어인증</span>부터 해. 다딱이만 리폿 할 수 있어.</span>
        <span class="howToCertified">1. 인증받을 아이디로 LoL 접속<br>2. '다딱인증맨' 친추하고 대기<br>3. 48시간 이내 귓말로 5자리 코드 받기(인증완료)</span>
        <span class="reportCertifyTip">〉게임 후</span>



      </body>
    </html>

    `
  },
  successCertifyHtml:function(certifiedUserName, sumNumber1, winLose1, lane1, role1, sumName1, champName1, sumNumber2, winLose2, lane2, role2, sumName2, champName2, sumNumber3, winLose3, lane3, role3, sumName3, champName3, sumNumber4, winLose4, lane4, role4, sumName4, champName4, sumNumber5, winLose5, lane5, role5, sumName5, champName5, sumNumber6, winLose6, lane6, role6, sumName6, champName6, sumNumber7, winLose7, lane7, role7, sumName7, champName7, sumNumber8, winLose8, lane8, role8, sumName8, champName8, sumNumber9, winLose9, lane9, role9, sumName9, champName9, sumNumber10, winLose10, lane10, role10, sumName10, champName10, date, time, gameId, gameYear, gameMonth){
    return `
    <html lang="en" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title></title>
        <link rel="stylesheet" type="text/css" href="/css/successCertifyCss.css">
      </head>
      <body>

        <a href="/" id="arrow"></a>
        <a href="/" id="arrowLabel">뒤로</a>



        <div id="gameDateTimeLabel">게임<br>시작</div>
        <div id="gameDateTime">${date}<br>${time}</div>


        <div id="section1"></div>
        <div id="section2"></div>
        <div id="section3"></div>

        <div id="do1">1.누가</div>
        <div id="do2">2.뭐를</div>
        <div id="do3">3.눌러</div>

        <div id="winTeam">승 리</div>
        <div id="loseTeam">패 배</div>
        <div id="winSection"></div>
        <div id="loseSection"></div>


        <div id="sum${sumNumber1}", class="${sumNumber1}, ${winLose1}">
          <div class="${lane1}, ${role1}">
            <span>${sumName1}</span>
          </div>
        </div>
        <img id="sum1ChampIcon" src='http://ddragon.leagueoflegends.com/cdn/10.12.1/img/champion/${champName1}.png'>
        <div id="sum${sumNumber2}", class="${sumNumber2}, ${winLose2}">
          <div class="${lane2}, ${role2}">
            <span>${sumName2}</span>
          </div>
        </div>
        <img id="sum2ChampIcon" src='http://ddragon.leagueoflegends.com/cdn/10.12.1/img/champion/${champName2}.png'>
        <div id="sum${sumNumber3}", class="${sumNumber3}, ${winLose3}">
          <div class="${lane3}, ${role3}">
            <span>${sumName3}</span>
          </div>
        </div>
        <img id="sum3ChampIcon" src='http://ddragon.leagueoflegends.com/cdn/10.12.1/img/champion/${champName3}.png'>
        <div id="sum${sumNumber4}", class="${sumNumber4}, ${winLose4}">
          <div class="${lane4}, ${role4}">
            <span>${sumName4}</span>
          </div>
        </div>
        <img id="sum4ChampIcon" src='http://ddragon.leagueoflegends.com/cdn/10.12.1/img/champion/${champName4}.png'>
        <div id="sum${sumNumber5}", class="${sumNumber5}, ${winLose5}">
          <div class="${lane5}, ${role5}">
            <span>${sumName5}</span>
          </div>
        </div>
        <img id="sum5ChampIcon" src='http://ddragon.leagueoflegends.com/cdn/10.12.1/img/champion/${champName5}.png'>
        <div id="sum${sumNumber6}", class="${sumNumber6}, ${winLose6}">
          <div class="${lane6}, ${role6}">
            <span>${sumName6}</span>
          </div>
        </div>
        <img id="sum6ChampIcon" src='http://ddragon.leagueoflegends.com/cdn/10.12.1/img/champion/${champName6}.png'>
        <div id="sum${sumNumber7}", class="${sumNumber7}, ${winLose7}">
          <div class="${lane7}, ${role7}">
            <span>${sumName7}</span>
          </div>
        </div>
        <img id="sum7ChampIcon" src='http://ddragon.leagueoflegends.com/cdn/10.12.1/img/champion/${champName7}.png'>
        <div id="sum${sumNumber8}", class="${sumNumber8}, ${winLose8}">
          <div class="${lane8}, ${role8}">
            <span>${sumName8}</span>
          </div>
        </div>
        <img id="sum8ChampIcon" src='http://ddragon.leagueoflegends.com/cdn/10.12.1/img/champion/${champName8}.png'>
        <div id="sum${sumNumber9}", class="${sumNumber9}, ${winLose9}">
          <div class="${lane9}, ${role9}">
            <span>${sumName9}</span>
          </div>
        </div>
        <img id="sum9ChampIcon" src='http://ddragon.leagueoflegends.com/cdn/10.12.1/img/champion/${champName9}.png'>
        <div id="sum${sumNumber10}", class="${sumNumber10}, ${winLose10}">
          <div class="${lane10}, ${role10}">
            <span>${sumName10}</span>
          </div>
        </div>
        <img id="sum10ChampIcon" src='http://ddragon.leagueoflegends.com/cdn/10.12.1/img/champion/${champName10}.png'>

        <div id="select1">☜이놈</div>
        <div id="select2">☜이놈</div>
        <div id="select3">☜이놈</div>
        <div id="select4">☜이놈</div>
        <div id="select5">☜이놈</div>
        <div id="select6">☜이놈</div>
        <div id="select7">☜이놈</div>
        <div id="select8">☜이놈</div>
        <div id="select9">☜이놈</div>
        <div id="select10">☜이놈</div>


        <span id="checkboxLabel1"><span style="font-size:30px; line-height:35px;">예티</span><br>수문장</span>
        <span id="checkboxLabel2">대리ㅋ</span>
        <span id="checkboxLabel3">어뷰징</span>
        <span id="checkboxLabel4"><span style="font-size:30px;">똥싸고<br></span>정치<span style="font-size:30px;">or</span>탈주</span>


        <form id="form1" action="/reported" method="post" onsubmit="return checker()">
          <input type="hidden" name="gameId" value="${gameId}">
          <input type="hidden" name="reporterNickname" value="${certifiedUserName}">
          <input type="hidden" name="gameYear" value="${gameYear}">
          <input type="hidden" name="gameMonth" value="${gameMonth}">


          <input id="reportedNickname" type="hidden" name="reportedNickname">

          <input id="date" type="hidden" name="date">


          <input id="checkbox1" type="checkbox" name="doorGuard">

          <input id="checkbox2" type="checkbox" name="boosted">

          <input id="checkbox3" type="checkbox" name="abuse">

          <input id="checkbox4" type="checkbox" name="politics">

          <br>

          <input id="checkboxSubmit" type="submit" value="기록하기">
        </form>




        <script>

        document.getElementById("sum${sumNumber1}").addEventListener("click", report1);
        document.getElementById("sum${sumNumber2}").addEventListener("click", report2);
        document.getElementById("sum${sumNumber3}").addEventListener("click", report3);
        document.getElementById("sum${sumNumber4}").addEventListener("click", report4);
        document.getElementById("sum${sumNumber5}").addEventListener("click", report5);
        document.getElementById("sum${sumNumber6}").addEventListener("click", report6);
        document.getElementById("sum${sumNumber7}").addEventListener("click", report7);
        document.getElementById("sum${sumNumber8}").addEventListener("click", report8);
        document.getElementById("sum${sumNumber9}").addEventListener("click", report9);
        document.getElementById("sum${sumNumber10}").addEventListener("click", report10);


        function checker(){
          if(document.getElementById("reportedNickname").value === ''){
            alert("누구 리폿할지 골라야지");
            return false;
          }
          else{
            if(document.getElementById("checkbox1").checked === false){
              if(document.getElementById("checkbox2").checked === false){
                if(document.getElementById("checkbox3").checked === false){
                  if(document.getElementById("checkbox4").checked === false){
                    alert("최소한 하나는 골라야지");
                    return false;
                  }
                }
              }
            }
          }
        }


        function report1(){
          document.getElementById("reportedNickname").value="${sumName1}";
          document.getElementById("date").value="${date}";
          document.getElementById("select1").style.display='block';
          document.getElementById("select2").style.display='none';
          document.getElementById("select3").style.display='none';
          document.getElementById("select4").style.display='none';
          document.getElementById("select5").style.display='none';
          document.getElementById("select6").style.display='none';
          document.getElementById("select7").style.display='none';
          document.getElementById("select8").style.display='none';
          document.getElementById("select9").style.display='none';
          document.getElementById("select10").style.display='none';
          document.getElementById("sum${sumNumber1}").style.background='yellow';
          document.getElementById("sum${sumNumber2}").style.background='none';
          document.getElementById("sum${sumNumber3}").style.background='none';
          document.getElementById("sum${sumNumber4}").style.background='none';
          document.getElementById("sum${sumNumber5}").style.background='none';
          document.getElementById("sum${sumNumber6}").style.background='none';
          document.getElementById("sum${sumNumber7}").style.background='none';
          document.getElementById("sum${sumNumber8}").style.background='none';
          document.getElementById("sum${sumNumber9}").style.background='none';
          document.getElementById("sum${sumNumber10}").style.background='none';
        }
        function report2(){
          document.getElementById("reportedNickname").value="${sumName2}";
          document.getElementById("date").value="${date}";
          document.getElementById("select1").style.display='none';
          document.getElementById("select2").style.display='block';
          document.getElementById("select3").style.display='none';
          document.getElementById("select4").style.display='none';
          document.getElementById("select5").style.display='none';
          document.getElementById("select6").style.display='none';
          document.getElementById("select7").style.display='none';
          document.getElementById("select8").style.display='none';
          document.getElementById("select9").style.display='none';
          document.getElementById("select10").style.display='none';
          document.getElementById("sum${sumNumber1}").style.background='none';
          document.getElementById("sum${sumNumber2}").style.background='yellow';
          document.getElementById("sum${sumNumber3}").style.background='none';
          document.getElementById("sum${sumNumber4}").style.background='none';
          document.getElementById("sum${sumNumber5}").style.background='none';
          document.getElementById("sum${sumNumber6}").style.background='none';
          document.getElementById("sum${sumNumber7}").style.background='none';
          document.getElementById("sum${sumNumber8}").style.background='none';
          document.getElementById("sum${sumNumber9}").style.background='none';
          document.getElementById("sum${sumNumber10}").style.background='none';
        }
        function report3(){
          document.getElementById("reportedNickname").value="${sumName3}";
          document.getElementById("date").value="${date}";
          document.getElementById("select1").style.display='none';
          document.getElementById("select2").style.display='none';
          document.getElementById("select3").style.display='block';
          document.getElementById("select4").style.display='none';
          document.getElementById("select5").style.display='none';
          document.getElementById("select6").style.display='none';
          document.getElementById("select7").style.display='none';
          document.getElementById("select8").style.display='none';
          document.getElementById("select9").style.display='none';
          document.getElementById("select10").style.display='none';
          document.getElementById("sum${sumNumber1}").style.background='none';
          document.getElementById("sum${sumNumber2}").style.background='none';
          document.getElementById("sum${sumNumber3}").style.background='yellow';
          document.getElementById("sum${sumNumber4}").style.background='none';
          document.getElementById("sum${sumNumber5}").style.background='none';
          document.getElementById("sum${sumNumber6}").style.background='none';
          document.getElementById("sum${sumNumber7}").style.background='none';
          document.getElementById("sum${sumNumber8}").style.background='none';
          document.getElementById("sum${sumNumber9}").style.background='none';
          document.getElementById("sum${sumNumber10}").style.background='none';
        }
        function report4(){
          document.getElementById("reportedNickname").value="${sumName4}";
          document.getElementById("date").value="${date}";
          document.getElementById("select1").style.display='none';
          document.getElementById("select2").style.display='none';
          document.getElementById("select3").style.display='none';
          document.getElementById("select4").style.display='block';
          document.getElementById("select5").style.display='none';
          document.getElementById("select6").style.display='none';
          document.getElementById("select7").style.display='none';
          document.getElementById("select8").style.display='none';
          document.getElementById("select9").style.display='none';
          document.getElementById("select10").style.display='none';
          document.getElementById("sum${sumNumber1}").style.background='none';
          document.getElementById("sum${sumNumber2}").style.background='none';
          document.getElementById("sum${sumNumber3}").style.background='none';
          document.getElementById("sum${sumNumber4}").style.background='yellow';
          document.getElementById("sum${sumNumber5}").style.background='none';
          document.getElementById("sum${sumNumber6}").style.background='none';
          document.getElementById("sum${sumNumber7}").style.background='none';
          document.getElementById("sum${sumNumber8}").style.background='none';
          document.getElementById("sum${sumNumber9}").style.background='none';
          document.getElementById("sum${sumNumber10}").style.background='none';
        }
        function report5(){
          document.getElementById("reportedNickname").value="${sumName5}";
          document.getElementById("date").value="${date}";
          document.getElementById("select1").style.display='none';
          document.getElementById("select2").style.display='none';
          document.getElementById("select3").style.display='none';
          document.getElementById("select4").style.display='none';
          document.getElementById("select5").style.display='block';
          document.getElementById("select6").style.display='none';
          document.getElementById("select7").style.display='none';
          document.getElementById("select8").style.display='none';
          document.getElementById("select9").style.display='none';
          document.getElementById("select10").style.display='none';
          document.getElementById("sum${sumNumber1}").style.background='none';
          document.getElementById("sum${sumNumber2}").style.background='none';
          document.getElementById("sum${sumNumber3}").style.background='none';
          document.getElementById("sum${sumNumber4}").style.background='none';
          document.getElementById("sum${sumNumber5}").style.background='yellow';
          document.getElementById("sum${sumNumber6}").style.background='none';
          document.getElementById("sum${sumNumber7}").style.background='none';
          document.getElementById("sum${sumNumber8}").style.background='none';
          document.getElementById("sum${sumNumber9}").style.background='none';
          document.getElementById("sum${sumNumber10}").style.background='none';
        }
        function report6(){
          document.getElementById("reportedNickname").value="${sumName6}";
          document.getElementById("date").value="${date}";
          document.getElementById("select1").style.display='none';
          document.getElementById("select2").style.display='none';
          document.getElementById("select3").style.display='none';
          document.getElementById("select4").style.display='none';
          document.getElementById("select5").style.display='none';
          document.getElementById("select6").style.display='block';
          document.getElementById("select7").style.display='none';
          document.getElementById("select8").style.display='none';
          document.getElementById("select9").style.display='none';
          document.getElementById("select10").style.display='none';
          document.getElementById("sum${sumNumber1}").style.background='none';
          document.getElementById("sum${sumNumber2}").style.background='none';
          document.getElementById("sum${sumNumber3}").style.background='none';
          document.getElementById("sum${sumNumber4}").style.background='none';
          document.getElementById("sum${sumNumber5}").style.background='none';
          document.getElementById("sum${sumNumber6}").style.background='yellow';
          document.getElementById("sum${sumNumber7}").style.background='none';
          document.getElementById("sum${sumNumber8}").style.background='none';
          document.getElementById("sum${sumNumber9}").style.background='none';
          document.getElementById("sum${sumNumber10}").style.background='none';
        }
        function report7(){
          document.getElementById("reportedNickname").value="${sumName7}";
          document.getElementById("date").value="${date}";
          document.getElementById("select1").style.display='none';
          document.getElementById("select2").style.display='none';
          document.getElementById("select3").style.display='none';
          document.getElementById("select4").style.display='none';
          document.getElementById("select5").style.display='none';
          document.getElementById("select6").style.display='none';
          document.getElementById("select7").style.display='block';
          document.getElementById("select8").style.display='none';
          document.getElementById("select9").style.display='none';
          document.getElementById("select10").style.display='none';
          document.getElementById("sum${sumNumber1}").style.background='none';
          document.getElementById("sum${sumNumber2}").style.background='none';
          document.getElementById("sum${sumNumber3}").style.background='none';
          document.getElementById("sum${sumNumber4}").style.background='none';
          document.getElementById("sum${sumNumber5}").style.background='none';
          document.getElementById("sum${sumNumber6}").style.background='none';
          document.getElementById("sum${sumNumber7}").style.background='yellow';
          document.getElementById("sum${sumNumber8}").style.background='none';
          document.getElementById("sum${sumNumber9}").style.background='none';
          document.getElementById("sum${sumNumber10}").style.background='none';
        }
        function report8(){
          document.getElementById("reportedNickname").value="${sumName8}";
          document.getElementById("date").value="${date}";
          document.getElementById("select1").style.display='none';
          document.getElementById("select2").style.display='none';
          document.getElementById("select3").style.display='none';
          document.getElementById("select4").style.display='none';
          document.getElementById("select5").style.display='none';
          document.getElementById("select6").style.display='none';
          document.getElementById("select7").style.display='none';
          document.getElementById("select8").style.display='block';
          document.getElementById("select9").style.display='none';
          document.getElementById("select10").style.display='none';
          document.getElementById("sum${sumNumber1}").style.background='none';
          document.getElementById("sum${sumNumber2}").style.background='none';
          document.getElementById("sum${sumNumber3}").style.background='none';
          document.getElementById("sum${sumNumber4}").style.background='none';
          document.getElementById("sum${sumNumber5}").style.background='none';
          document.getElementById("sum${sumNumber6}").style.background='none';
          document.getElementById("sum${sumNumber7}").style.background='none';
          document.getElementById("sum${sumNumber8}").style.background='yellow';
          document.getElementById("sum${sumNumber9}").style.background='none';
          document.getElementById("sum${sumNumber10}").style.background='none';
        }
        function report9(){
          document.getElementById("reportedNickname").value="${sumName9}";
          document.getElementById("date").value="${date}";
          document.getElementById("select1").style.display='none';
          document.getElementById("select2").style.display='none';
          document.getElementById("select3").style.display='none';
          document.getElementById("select4").style.display='none';
          document.getElementById("select5").style.display='none';
          document.getElementById("select6").style.display='none';
          document.getElementById("select7").style.display='none';
          document.getElementById("select8").style.display='none';
          document.getElementById("select9").style.display='block';
          document.getElementById("select10").style.display='none';
          document.getElementById("sum${sumNumber1}").style.background='none';
          document.getElementById("sum${sumNumber2}").style.background='none';
          document.getElementById("sum${sumNumber3}").style.background='none';
          document.getElementById("sum${sumNumber4}").style.background='none';
          document.getElementById("sum${sumNumber5}").style.background='none';
          document.getElementById("sum${sumNumber6}").style.background='none';
          document.getElementById("sum${sumNumber7}").style.background='none';
          document.getElementById("sum${sumNumber8}").style.background='none';
          document.getElementById("sum${sumNumber9}").style.background='yellow';
          document.getElementById("sum${sumNumber10}").style.background='none';
        }
        function report10(){
          document.getElementById("reportedNickname").value="${sumName10}";
          document.getElementById("date").value="${date}";
          document.getElementById("select1").style.display='none';
          document.getElementById("select2").style.display='none';
          document.getElementById("select3").style.display='none';
          document.getElementById("select4").style.display='none';
          document.getElementById("select5").style.display='none';
          document.getElementById("select6").style.display='none';
          document.getElementById("select7").style.display='none';
          document.getElementById("select8").style.display='none';
          document.getElementById("select9").style.display='none';
          document.getElementById("select10").style.display='block';
          document.getElementById("sum${sumNumber1}").style.background='none';
          document.getElementById("sum${sumNumber2}").style.background='none';
          document.getElementById("sum${sumNumber3}").style.background='none';
          document.getElementById("sum${sumNumber4}").style.background='none';
          document.getElementById("sum${sumNumber5}").style.background='none';
          document.getElementById("sum${sumNumber6}").style.background='none';
          document.getElementById("sum${sumNumber7}").style.background='none';
          document.getElementById("sum${sumNumber8}").style.background='none';
          document.getElementById("sum${sumNumber9}").style.background='none';
          document.getElementById("sum${sumNumber10}").style.background='yellow';
        }

        </script>

      </body>
    </html>
  `;
  },



  failCertifyHtml:function(){
    return `
    <html lang="en" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title></title>
        <link rel="stylesheet" type="text/css" href="/css/failCertifyCss.css">
      </head>
      <body>

        <span id="word1">
          블랙 리스트
        </span>
        <span id="word2">
          기록소
        </span>
        <span id="word3">
          다딱이 전용
        </span>

        <span id="arrow1"></span>

        <span id="word4">
          -수문장인가?<br>
          -대리ㅋ인가?<br>
          -어뷰징인가?<br>
          -정치인인가?
        </span>


        <span id="item2">
         <img src="/rankedEmblems/Emblem_Diamond.png">
        </span>
        <span id="item3"></span>

        <form id="search" action="/searched" method="post">
          <input type="text" name="summonerName" placeholder="다중검색 가능, 복붙하세요.">
          <input type="submit" value="enter">
        </form>
        <span class="searchLabel">→ 우리팀 검색</span>
        <span class="searchTip">〉게임 전</span>

        <form id="reportCertify" action="/reportAfterCertify" method="post">
          <input type="text" name="certifiedUser" placeholder="내 아이디 + 5자리 코드번호">
          <input type="submit" value="인증">
        </form>
        <span class="reportCertifyLabel">→ 리폿하기</span>
        <span class="reportCertifyLabel2"><span id="howToTrigger">티어인증</span> 부터  해<br><span style="font-size:40px;">다딱이만 리폿 할 수 있어</span>
        </span>

        <span id="arrow2"></span>


        <span class="howToCertified">1. 인증받을 아이디로 LoL 접속<br>2. '다딱인증맨' 친추하고 대기<br>3. 48시간 이내 귓말로 5자리 코드 받기(인증완료)</span>
        <span class="reportCertifyTip">〉게임 후</span>

        <script>

          alert("인증 안된 사람인데??")

        </script>


      </body>
    </html>
    `;
  },




  reportedHtml:function(year, month, reportedSummonerName, doorGuard, boosted, abuse, politics){
    return `
    <html lang="en" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title></title>
        <link rel="stylesheet" type="text/css" href="/css/reportedCss.css">
      </head>
      <body>

        <a href="/" id="arrow"></a>
        <a href="/" id="arrowLabel">뒤로</a>

        <div id="message">기록완료!!</div>


        <div id="recordBox"></div>
        <div id="recordGreet">다이아 유저들의</div>
        <div id="recordForWhomWhen">'<span style="color:red;">${reportedSummonerName}</span>'님 <span style="color:red;">${year}</span>년 <span style="color:red;">${month}</span>월 리폿 기록 보기</div>




        <div id="index1"><span style="font-size:30px; line-height:35px;">예티</span><br>수문장</div>
        <div id="index2">대리ㅋ</div>
        <div id="index3">어뷰징</div>
        <div id="index4"><span style="font-size:30px;">똥싸고<br></span>정치<span style="font-size:30px;">or</span>탈주</div>

        <div id="index1Value">${doorGuard}표</div>
        <div id="index2Value">${boosted}표</div>
        <div id="index3Value">${abuse}표</div>
        <div id="index4Value">${politics}표</div>






      </body>
    </html>
    `;
  },

  searchedHtml:function(name1, tier1, rank1, doorGuard1, boosted1, abuse1, politics1, name2, tier2, rank2, doorGuard2, boosted2, abuse2, politics2, name3, tier3, rank3, doorGuard3, boosted3, abuse3, politics3, name4, tier4, rank4, doorGuard4, boosted4, abuse4, politics4, name5, tier5, rank5, doorGuard5, boosted5, abuse5, politics5){
    return `
    <!DOCTYPE html>
    <html lang="en" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title></title>
        <link rel="stylesheet" type="text/css" href="/css/searchedCss.css">

      </head>
      <body>

          <span id="seasonNumber">S10</span>
          <span id="seasonDate">2020／1／10~</span>

          <span id="index1"><span style="font-size:30px; line-height:35px;">예티</span><br>수문장</span>
          <span id="index2">대리ㅋ</span>
          <span id="index3">어뷰징</span>
          <span id="index4"><span style="font-size:30px;">똥싸고<br></span>정치<span style="font-size:30px;">or</span>탈주</span>


          <span id="section1"></span>
          <span id="section2"></span>

          <span id="sum1N">${name1} <br> ${tier1}  ${rank1}</span>
          <span id="sum1A">${doorGuard1}</span>
          <span id="sum1B">${boosted1}</span>
          <span id="sum1C">${abuse1}</span>
          <span id="sum1D">${politics1}</span>


          <span id="sum2N">${name2} <br> ${tier2}  ${rank2}</span>
          <span id="sum2A">${doorGuard2}</span>
          <span id="sum2B">${boosted2}</span>
          <span id="sum2C">${abuse2}</span>
          <span id="sum2D">${politics2}</span>


          <span id="sum3N">${name3} <br> ${tier3}  ${rank3}</span>
          <span id="sum3A">${doorGuard3}</span>
          <span id="sum3B">${boosted3}</span>
          <span id="sum3C">${abuse3}</span>
          <span id="sum3D">${politics3}</span>


          <span id="sum4N">${name4} <br> ${tier4}  ${rank4}</span>
          <span id="sum4A">${doorGuard4}</span>
          <span id="sum4B">${boosted4}</span>
          <span id="sum4C">${abuse4}</span>
          <span id="sum4D">${politics4}</span>


          <span id="sum5N">${name5} <br> ${tier5}  ${rank5}</span>
          <span id="sum5A">${doorGuard5}</span>
          <span id="sum5B">${boosted5}</span>
          <span id="sum5C">${abuse5}</span>
          <span id="sum5D">${politics5}</span>


          <a href="/" id="arrow"></a>
          <a href="/" id="arrowLabel">뒤로</a>


      </body>
    </html>
    `
  }
}
