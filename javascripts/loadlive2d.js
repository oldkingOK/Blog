OML2D.loadOml2d({
    dockedPosition: "right",
    menus: {
        disable: false
    },
    tips: (_, currentIndex) => {
        return {
            copyTips: {
                message: ['阿尼亚喜欢这个~']
            },
            welcomeTips: {
                message: {
                    afternoon: "奥力给给，奥力给给",
                    daybreak: "奥力给给，奥力给给",
                    dusk: "奥力给给，奥力给给",
                    lateNight: "奥力给给，奥力给给",
                    morning: "奥力给给，奥力给给",
                    night: "奥力给给，奥力给给",
                    noon: "奥力给给，奥力给给",
                    weeHours: "奥力给给，奥力给给",
                }
            },
            idleTips: {
                message: ["阿尼亚喜欢吃花生", "哇酷哇酷！", "阿尼亚哈哈一拿酷得撒比洗", "奥力给给，奥力给给", "斯邦邦"]
            },
            style: {
                top: '-30px',
                'min-height': '60px',
            }
        };
    },
    models: [
        {
            path: '/assets/ANIYA-walk/ANIYA.model3.json',
            position: [10, 0],
            scale: 0.05,
            stageStyle: {
                height: 380
            },
        }
    ]
});