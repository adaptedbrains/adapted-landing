/**
 * Created by sumantaparida on 9/1/17.
 */
import { css } from 'styled-components';

export default {
	input: css`
		border-radius: 4px;
		background-color: #ffffff;
		border: solid 1px #dfe3e9;
		color: #354052;
		width: 100%;
		padding: 13px;
		font-size: 14px;
		&::-webkit-input-placeholder {
			color: rgba(0, 0, 0, 0.34);
		}
		&::-moz-placeholder {
			color: rgba(0, 0, 0, 0.34);
		}
		&:-ms-input-placeholder {
			color: rgba(0, 0, 0, 0.34);
		}
		&:-moz-placeholder {
			color: rgba(0, 0, 0, 0.34);
		}
		&:focus {
			outline: none;
		}
	`,
	button: css`
		-webkit-appearance: button;
		cursor: pointer;
		margin: 0px;
		text-align: center;
		font-size: 14px;
		border-radius: 4px;
		border: solid 1px #dfe3e9;
		background-color: #ffffff;
	`,
	flex: css`
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
	`,
	flexcenter: css`
		align-items: center;
		justify-content: center;
	`,
	flexstretch: css`align-items: stretch;`,
	columnCenterStretch: css`
		flex-direction: column;
		align-items: stretch;
		justify-content: center;
	`,
	columnCenterStart: css`
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
	`,
	columnCenterEnd: css`
		flex-direction: column;
		align-items: flex-end;
		justify-content: center;
	`,
	columnCenterCenter: css`
		flex-direction: column;
		align-items: center;
		justify-content: center;
	`,
	rowCenterStretch: css`
		flex-direction: row;
		align-items: stretch;
		justify-content: center;
	`,
	rowCenterStart: css`
		flex-direction: row;
		align-items: flex-start;
		justify-content: center;
	`,
	rowCenterEnd: css`
		flex-direction: row;
		align-items: flex-end;
		justify-content: center;
	`,
	rowCenterCenter: css`
		flex-direction: row;
		align-items: center;
		justify-content: center;
	`,
	// Animation
	transition: css`
		-webkit-transition: all 1s ease-in-out;
		-moz-transition: all 1s ease-in-out;
		-o-transition: all 1s ease-in-out;
		transition: all 1s ease-in-out;
	`,
	// Color
	blue: css`#1799dd`,
	small: css`600px`
};
