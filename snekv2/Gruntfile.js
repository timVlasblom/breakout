module.exports = function(grunt) {

grunt.initConfig({
	concat: {
		dist:{
			src:['scripts/vars.js','scripts/script.js', 'scripts/food.js', 'scripts/snake/main.js', 'scripts/snake/ai.js','scripts/score.js'],
			dest: 'build/script.js',
		},
	},
	watch:{
		js: {
			files: ['scripts/**/*.js', 'scripts/**/**/*.js'],
			tasks: ['concat'],
		},
	},
});
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.registerTask('default', ['concat', 'watch']);

};
