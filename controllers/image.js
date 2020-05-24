const genThumbnail = require('simple-thumbnail');

exports.generateImageThumbnail = (req,res) => {
	const {imageUrl} = req.body;

	if(!imageUrl) {
		return res.status(400).json({
			error : "Invalid url"
		});
	}

	genThumbnail(imageUrl, '../path.png', '50x50')
	.then(dta => {
		return res.json({
			data
		});
	})
	.catch(err => {
		console.log(err);
		return res.json('Error');
	})
} 