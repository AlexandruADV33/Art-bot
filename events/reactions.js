module.exports = message => {
	if (message.content.toLowerCase() === 'fruits') {
		message.react('đ')
			.then(() => message.react('đ'))
			.then(() => message.react('đ'))
			.catch(() => console.error('One of the emojis failed to react.'));
	}
	else if (message.content.toLowerCase() === 'noob') {
		message.react('đ')
			.catch(() => console.error('One of the emojis failed to react.'));
	}
	else if (message.content.toLowerCase() === '69') {
		message.react('đŗ')
			.then(() => message.react('âšī¸'))
			.then(() => message.react('đ¨'))
			.then(() => message.react('đĒ'))
			.catch(() => console.error('One of the emojis failed to react.'));
	}

};
module.exports.help = {
	event: 'message'
};