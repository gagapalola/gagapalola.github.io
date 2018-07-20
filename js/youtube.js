function onYouTubeIframeAPIReady() {
    var player;
    player = new YT.Player('muteYouTubeVideoPlayer', {
        videoId: 'zFXofy5Ur5U', // YouTube 影片ID
        playerVars: {

            autoplay: 0, // 在讀取時自動播放影片
            controls: 0, // 在播放器顯示暫停／播放按鈕
            showinfo: 0, // 隱藏影片標題
            modestbranding: 0, // 隱藏YouTube Logo
            loop: 1, // 讓影片循環播放
            fs: 0, // 隱藏全螢幕按鈕
            cc_load_policty: 0, // 隱藏字幕
            iv_load_policy: 3, // 隱藏影片註解
            autohide: 0, // 當播放影片時隱藏影片控制列
            wmode: "opaque" //讓YOUTUBE不要擋住東西
        },
        events: {
            onReady: function (e) {
                e.target.setVolume(30) //設定音量
            },

            onStateChange: function (e) {
                if (e.data === YT.PlayerState.ENDED) {
                    player.playVideo(); //影片LOOP無效時，靠這個才能重播
                }
            }
        }
    });
}
// Written by @labnol