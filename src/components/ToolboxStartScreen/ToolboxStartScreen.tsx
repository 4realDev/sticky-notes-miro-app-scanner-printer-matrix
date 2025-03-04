import React, { useState } from 'react';
import StickyNotePrinter from '../Icons/StickyNotePrinter';
import { MatrixWizard } from '../MatrixWizard/MatrixWizard/MatrixWizard';
import styles from './ToolboxStartScreen.module.scss';
import cn from 'classnames';
import ArrowLeft from '../Icons/ArrowLeft';
import StickyNoteScanner from '../Icons/StickyNoteScanner';
import Matrix from '../Icons/Matrix';
import { NotificationType } from '@mirohq/websdk-types';
import StickyNotePrinterApp from '../PostItPrinterApp/StickyNotePrinterApp';
import StickyNoteScannerApp from '../StickyNoteScannerApp/StickyNoteScannerApp';

export type toolboxMethodsData = {
	buttonText: string;
	buttonIcon: React.ReactNode;
	buttonEvent: () => {};
	type: string;
	isDisabled: boolean;
};

const ToolboxStartScreen = () => {
	const [renderScreen, setRenderScreen] = useState('');

	const toolboxMethods = [
		{
			buttonText: 'Importance / Difficulty Matrix',
			buttonIcon: <Matrix />,
			buttonEvent: () => {
				setRenderScreen('matrix');
			},
			type: '1',
			isDisabled: false,
		},
		{
			buttonText: 'Sticky Note Printer',
			buttonIcon: <StickyNotePrinter />,
			buttonEvent: () => {
				setRenderScreen('printer');
			},
			type: '2',
			isDisabled: false,
		},
		{
			buttonText: 'Sticky Note Scanner',
			buttonIcon: <StickyNoteScanner />,
			buttonEvent: () => {
				setRenderScreen('scanner');
			},
			type: '2',
			isDisabled: false,
		},
	];

	const sendNotification = async (notification: string) => {
		await miro.board.notifications.show({
			message: notification,
			type: 'error' as NotificationType,
		});
	};

	const startRenderingScreen = () => {
		switch (renderScreen) {
			case 'matrix':
				return <MatrixWizard />;
			case 'printer':
				return <StickyNotePrinterApp />;
			case 'scanner':
				return <StickyNoteScannerApp />;
			default:
				return;
		}
	};

	const getToolboxButtonColor = (type: string) => {
		switch (type) {
			case '1':
				return '#FF6464';
			case '2':
				return 'rgba(0, 0, 0, 0.1)';
			case '3':
				return '#FFA450';
			default:
				return 'rgba(0, 0, 0, 0.1)';
		}
	};

	return (
		<div>
			<div className={styles.toolbox_button_container}>
				{/* {renderScreen !== '' && (

				)} */}
				{toolboxMethods.map((toolboxMethod, index) => {
					return (
						<button
							key={index}
							className={cn(styles.toolbox_button, {
								[styles.toolbox_button_disabled]: toolboxMethod.isDisabled,
							})}
							onClick={() => {
								toolboxMethod.isDisabled
									? sendNotification('This function is currently not implemented or not available.')
									: toolboxMethod.buttonEvent();
							}}>
							<span
								className={styles['toolbox_button_icon']}
								style={{ background: getToolboxButtonColor(toolboxMethod.type) }}>
								{toolboxMethod.buttonIcon}
							</span>
							<span className={styles.toolbox_button_text}>{toolboxMethod.buttonText}</span>
						</button>
					);
				})}
			</div>
			<div className={renderScreen === '' ? styles.sidePanel__closed : styles.sidePanel__open}>
				<div className={styles.header}>
					<button
						className={styles.header_button}
						onClick={() => setRenderScreen('')}>
						<span className={styles.header_button_icon}>
							<ArrowLeft />
						</span>
						<span className={styles.header_button_text}>Home</span>
					</button>
				</div>
				{startRenderingScreen()}
			</div>
		</div>
	);
};

export default ToolboxStartScreen;
