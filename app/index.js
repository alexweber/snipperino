'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');
// var menubar = require('menubar');
var client = require('electron-connect').client;

// Init menubar.
// var mb = menubar();

// Report crashes to the Electron project.
require('crash-reporter').start();

// Adds debug features like hotkeys for triggering dev tools and reload.
require('electron-debug')();

function createMainWindow() {
	var win = new BrowserWindow({
		width: 800,
		height: 600,
		resizable: true
	});

	win.loadUrl('file://' + __dirname + '/../index.html');
	win.on('closed', function () {
		// Deref the window; for multiple windows store them in an array.
		mainWindow = null;
	});

	client.create(win);

	return win;
}

// Prevent window being GC'd.
var mainWindow = undefined;

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate-with-no-open-windows', function () {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

// mb.on('ready', function ready () {
//
// });

app.on('ready', function () {
	mainWindow = createMainWindow();
});
