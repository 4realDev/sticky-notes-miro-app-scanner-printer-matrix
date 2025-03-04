export const createMatrixCard = async (x: number, y: number) => {
	const matrixCardPadding = 30;
	const matrixCardWidth = 600;
	const matrixCardHeight = 430;
	const frame = await miro.board.createFrame({
		title: 'Card',
		style: {
			fillColor: '#ffffff',
		},
		x: x,
		y: y,
		width: matrixCardWidth,
		height: matrixCardHeight,
	});

	const frameBackground = await miro.board.createShape({
		content: '',
		width: matrixCardWidth,
		height: matrixCardHeight,
		rotation: 0,
		x: x,
		y: y,
		style: {
			fillColor: '#ffffff',
		},
	});

	const picturePlaceHolderWidth = 217;
	const picturePlaceHolderHeight = 196;
	const framePicturePlaceholder = await miro.board.createShape({
		content: '<p>Pictures or Illustrations</p>',
		height: picturePlaceHolderHeight,
		width: picturePlaceHolderWidth,
		x: x - matrixCardWidth / 2 + picturePlaceHolderWidth / 2 + matrixCardPadding,
		y: y - 30,
		style: {
			borderColor: '#1a1a1a',
			borderOpacity: 0.2,
			borderStyle: 'normal',
			borderWidth: 1,
			color: '#1a1a1a',
			fillColor: 'transparent',
			fillOpacity: 1,
			fontFamily: 'open_sans',
			fontSize: 10,
			textAlign: 'center',
			textAlignVertical: 'middle',
		},
	});

	const titleWidth = 444;
	const titleHeight = 34;
	const frameTitle = await miro.board.createText({
		content: '<p><strong>Titel</strong></p>',
		height: titleHeight,
		width: titleWidth,
		x: x - matrixCardWidth / 2 + titleWidth / 2 + matrixCardPadding,
		y: y - matrixCardHeight / 2 + titleHeight / 2 + matrixCardPadding,
		style: {
			color: '#1a1a1a',
			fillColor: 'transparent',
			fillOpacity: 1,
			fontFamily: 'open_sans',
			fontSize: 24,
			textAlign: 'left',
		},
	});

	const detailsWidth = 320;
	const detailsHeight = 120;
	const frameDetails = await miro.board.createText({
		content:
			'<ol><li data-list="bullet"><span class="ql-ui"><span class="ql-list-ui"></span></span>Detail text of this epic, solution idea or item</li><li data-list="bullet"><span class="ql-ui"><span class="ql-list-ui"></span></span>Detail</li><li data-list="bullet"><span class="ql-ui"><span class="ql-list-ui"></span></span>Detail</li><li data-list="bullet"><span class="ql-ui"><span class="ql-list-ui"></span></span>Detail</li><li data-list="bullet"><span class="ql-ui"><span class="ql-list-ui"></span></span>Detail</li><li data-list="bullet"><span class="ql-ui"><span class="ql-list-ui"></span></span>Detail</li></ol>',
		height: detailsHeight,
		width: detailsWidth,
		x: x + detailsWidth / 2.75,
		y: y - matrixCardPadding * 2.2,
		style: {
			color: '#1a1a1a',
			fillColor: 'transparent',
			fillOpacity: 1,
			fontFamily: 'open_sans',
			fontSize: 14,
			textAlign: 'left',
		},
	});

	const stickyNoteSize = 66;
	const frameDifficultyStickyNote = await miro.board.createStickyNote({
		content: '<p>Difficulty</p>',
		x: x - matrixCardWidth / 2 + stickyNoteSize / 2 + matrixCardPadding,
		y: y + matrixCardHeight / 2 - stickyNoteSize / 2 - matrixCardPadding,
		width: stickyNoteSize,
		style: {
			fillColor: 'gray',
			textAlign: 'center',
			textAlignVertical: 'middle',
		},
	});

	const titleImageWidth = 50;
	const titleImageHeight = 19;
	const frameTitleImage = await miro.board.createImage({
		url: 'https://media.licdn.com/dms/image/C4E0BAQFVx-QQTeAb3A/company-logo_200_200/0/1583501052292?e=2147483647&v=beta&t=5sawspaZSLsWzqnkeUcs278sxJ2DL2zVgkQLRFI8JbM',
		x: x + matrixCardWidth / 2 - titleImageWidth / 2 - matrixCardPadding,
		y: y - matrixCardHeight / 2 + titleImageHeight / 2 + matrixCardPadding,
		width: titleImageWidth,
	});

	frame.childrenIds = [
		frameBackground.id,
		framePicturePlaceholder.id,
		frameTitle.id,
		frameDetails.id,
		frameDifficultyStickyNote.id,
		frameTitleImage.id,
	];

	await frame.sync();
};

export const createMatrixStartPoint = async (x: number, y: number) => {
	const shape = await miro.board.createShape({
		style: {
			fillColor: '#fef445',
			borderColor: '#1a1a1a',
			borderOpacity: 0.2,
			borderStyle: 'dashed',
			borderWidth: 5,
			color: '#1a1a1a',
			fillOpacity: 1,
			fontFamily: 'open_sans',
			fontSize: 48,
			textAlign: 'center',
			textAlignVertical: 'middle',
		},
		x: x,
		y: y,
		width: 380,
		height: 145,
		rotation: 0,
		shape: 'rectangle',
		content: '<p><strong>[matrix]</strong></p>',
	});

	await shape.sync();
};
