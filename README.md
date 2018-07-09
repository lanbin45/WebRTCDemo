# WebRTCDemo

## 说明
WebRTC Demo 程序，修改自[WebRTC Video Conferencing](https://github.com/muaz-khan/WebRTC-Experiment/tree/master/video-conferencing) and [Socket.io over Node.js](https://github.com/muaz-khan/WebRTC-Experiment/tree/master/socketio-over-nodejs);
其中：

* [WebRTC Video Conferencing](https://github.com/muaz-khan/WebRTC-Experiment/tree/master/video-conferencing) 添加了HTTPS支持，后端使用Express发布，修改部分样式；
* [Socket.io over Node.js](https://github.com/muaz-khan/WebRTC-Experiment/tree/master/socketio-over-nodejs) 用于做 [WebRTC Video Conferencing](https://github.com/muaz-khan/WebRTC-Experiment/tree/master/video-conferencing) 的Signaling Server

## 使用
1. `git clone https://github.com/lanbin45/WebRTCDemo.git`;
2. `cd WebRTCDemo`;
3. `npm i`;
4. 启动signaling server (https)
`cd node_modules\socketio-over-nodejs`
`node signaler-ssl.js`
5. cd到根目录下，启动 conference
`node index.js`
6. 在浏览器中以https的方式打开 `https://localhost:18081/`，在输入框中输入会议名字，然后开始会议；如果你已经安装了摄像头，那你可以在下方看到你摄像头中的流媒体内容；

## 会议功能使用

内部局域网测试时，将程序在本地启动，然后在命令行中使用`ipconfig`查看在自己局域网内ip，在浏览器中输入`https://192.168.0.X:18081/`,输入会议名，点击开始会议；
点击`分享会议`，或者直接复制窗口链接给你的小伙伴，在同一个局域网内的设备上访问改网址，打开后，稍等一会儿，会提示你`XXXX(刚刚创建的会议名)分享了一个会议给你，立即加入吧`，点击`加入`，一起愉快地视频LL吧

## License
引用了 [Muaz Khan](https://github.com/muaz-khan)大神的库，是MIT的License；我自己的部分请随意使用
