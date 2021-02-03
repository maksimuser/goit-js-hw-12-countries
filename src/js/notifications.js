import PNotify from 'pnotify/dist/es/PNotify.js';
import PNotifyButtons from 'pnotify/dist/es/PNotifyButtons.js';
import PNotifyTheme from 'pnotify/dist/PNotifyBrightTheme.css';

// import PNotifyStyleMaterial from 'pnotify/dist/es/PNotifyStyleMaterial.js';

// import 'material-design-icons/iconfont/material-icons.css';

// // Set default styling.
// PNotify.defaults.styling = 'material';
// // This icon setting requires the Material Icons font. (See below.)
// PNotify.defaults.icons = 'material';

// PNotify.success({
//   title: 'Success!',
//   text: 'That thing that you were trying to do worked.',
// });
PNotify.error({
  text: 'Too many matches found. Please enter a more specific query!',
});
