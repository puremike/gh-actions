const core = require('@actions/core');

async function run() {
	try {
		const prTitle = core.getInput('pr-title');
		if (prTitle.startsWith('feat')) {
			core.info('PR is a feature. Ha ha!');
		} else {
			core.setFailed('PR is not a feature');
		}
	} catch (e) {
		core.setFailed(e.message);
	}
}

run();
