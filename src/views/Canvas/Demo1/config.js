export const config = {
	lib_name: 'index',
	canvas: 'myCanvas',
	loading: {
		bg: require('@/assets/demo1/images/loading.png'),
		progress: require('@/assets/demo1/images/progress.png'),
	},
	width: 1920,
	height: 1080,
	autoRefresh: true
};

export const audioGroup = [//音频播放数组,第一页播放选择框第几个音频，声音按图片从左到右由上到下顺序命名
	[0,1,2,3,4,5,6,7],
	[0,1,2,3]
];

export const ansGroup = [   //答案数组，一个数组对应一页答案，拖拽图片至上方第几个框
	[0, 3, 1, 3, 0, 3, 2, 2],   //第1页
	[3, 1, 0, 2],   //第2页
];
