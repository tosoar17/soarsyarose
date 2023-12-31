console.log('Hello World!');
   function getCurrentTime() {
     var currentDate = new Date(); // 创建一个日期对象，表示当前时间

     var year = currentDate.getFullYear(); // 获取当前年份
     var month = currentDate.getMonth() + 1; // 获取当前月份（注意月份是从0开始的，所以要加1）
     var day = currentDate.getDate(); // 获取当前日期
     var hours = currentDate.getHours(); // 获取当前小时
     var minutes = currentDate.getMinutes(); // 获取当前分钟
     var seconds = currentDate.getSeconds(); // 获取当前秒数

     var currentTime = year + "-" + month + "-" + day + " " + hours + ":" + minutes + ":" + seconds;

     // 将时间显示在页面上
     var timeElement = document.getElementById("current-time");
     timeElement.innerText = currentTime;
   }

   // 每秒更新一次时间
   setInterval(getCurrentTime, 1000);
   function ok(){
       wc.alertDialog("People who matter");
   }
   
 
  
  