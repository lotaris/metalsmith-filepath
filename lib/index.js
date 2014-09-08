module.exports = function(opts) {

	opts = opts || {};
	opts.absolute = opts.absolute !== false;

	return function (files, metalsmith, done) {
		for (var filepath in files) {
			if (files.hasOwnProperty(filepath)) {
				var link = (opts.absolute ? '/' : '') + filepath.replace(/\\/g, '/');
				if (opts.permalinks) {
					link = link.replace(/\/[^\/]+$/, '');
				}
				files[filepath].link = link;
			}
		}
		done();
	};
};
