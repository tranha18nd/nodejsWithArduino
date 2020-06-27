var five = require("johnny-five"); //Gọi thư viện Johnny-five
 
var board = new five.Board(); //Tạo board Arduino từ thư viện
 
board.on("ready", function() { //Arduino đã sẵn sàng làm việc rồi(đây là một sự kiện, nó sẽ diễn ra khi board Arduino đã sẵn sàng cho việc lập trình)
 
    var led13 = new five.Led(13); //Khai báo led ở chân số 13
 	var led12 = new five.Led(12);
 	led13.blink(500);
    led12.blink(500); // Led nhấp nháy theo chu kỳ sáng tắt 0.5s
 
});