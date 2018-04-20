module.exports = (ctx) => ({
	plugins: {
		'autoprefixer': {
			flexbox: true
		},
		'css-mqpacker': {
			sort: function (a, b) {
				var mQueries = [
						'(min-width: 1024px)',
						'(max-width: 1023px)',
						'(min-width: 768px) and (max-width: 1023px)',
						'(max-width: 767px)',
						'(min-width: 481px) and (max-width: 767px)',
						'(max-width: 480px)'],
						ia = mQueries.indexOf(a),
						ib = mQueries.indexOf(b),
						max = Math.min(ia, ib);

				return (max === ia) ? -1 : 1;
			}
		},
		'postcss-preset-env':{
			stage:4
		},
		'cssnano': ctx.env === 'production' ? {} : false
	}
});
