const { ipcHandler } = require('../main/preload');

// Assuming you want to assign ipcHandler to the window object:
window.ipc = ipcHandler;
