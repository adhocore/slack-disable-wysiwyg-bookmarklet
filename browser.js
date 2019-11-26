javascript:
['', '_ios', '_webapp'].map(w => delete slackDebug.activeTeam.redux.getState().experiments['wysiwyg_composer' + w]);
setTimeout(_ => document.querySelector('[type=paperclip]').click(), 9)
