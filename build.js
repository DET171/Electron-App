const electronInstaller = require('electron-winstaller');

async function build() {
	try {
		await electronInstaller.createWindowsInstaller({
			appDirectory: './out/Pages-win32-x64',
			// outputDirectory: './bin/installer/installer64',
			authors: 'Admiral Canaris',
			loadingGif: 'loader.gif',
		});
		console.log('It worked!');
	}
	catch (e) {
		console.log(`No dice: ${e.message}`);
	}
}

build();
