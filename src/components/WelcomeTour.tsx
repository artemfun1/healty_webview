import { FC } from "react";

type Props = {
	setIsWelcomeTour: React.Dispatch<React.SetStateAction<boolean>>;
};

export const WelcomeTour: FC<Props> = ({ setIsWelcomeTour }) => {
	function handleClick() {
		localStorage.setItem("isWelcomeTour", "1");
		setIsWelcomeTour(true);
	}
	return (
		<div className="welcome-block">
			<h1 className="font-logo">healty</h1>
			<svg
				className="svg-logo"
				width="60"
				height="60"
				viewBox="0 0 60 60"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M53.1368 9.89315C50.2897 6.73781 46.3831 5 42.1357 5C38.9609 5 36.0534 6.02562 33.4937 8.04814C32.2021 9.06905 31.0318 10.3181 30 11.7759C28.9686 10.3185 27.7978 9.06905 26.5058 8.04814C23.9466 6.02562 21.0391 5 17.8642 5C13.6169 5 9.70984 6.73781 6.86274 9.89315C4.04963 13.0116 2.49998 17.2719 2.49998 21.8898C2.49998 26.6427 4.23342 30.9935 7.955 35.5822C11.2842 39.6868 16.0691 43.8536 21.6102 48.6786C23.5022 50.3264 25.6469 52.1941 27.8738 54.1836C28.4621 54.7101 29.217 55 30 55C30.7826 55 31.5379 54.7101 32.1253 54.1845C34.3522 52.1945 36.4982 50.326 38.3911 48.6773C43.9313 43.8532 48.7161 39.6868 52.0454 35.5818C55.767 30.9935 57.5 26.6427 57.5 21.8893C57.5 17.2719 55.9503 13.0116 53.1368 9.89315Z"
					stroke="#7C5EF3"
					strokeWidth="4"
					strokeLinejoin="round"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M55.5074 13.1789C56.3377 12.4417 56.4194 11.1655 55.6899 10.3284C54.9604 9.49134 53.6958 9.41036 52.8655 10.1475L29.5796 30.8209L20.5296 22.7849C19.6993 22.0477 18.4347 22.1286 17.7051 22.9656C16.9755 23.8026 17.0572 25.0789 17.8875 25.8161L28.151 34.9296C28.5339 35.2696 29.009 35.4356 29.4815 35.4337C30.0132 35.4855 30.5643 35.3235 30.9973 34.9391L55.5074 13.1789Z"
					fill="#7C5EF3"
				/>
			</svg>

			<p className="welcome-text">
				Complete tasks every day <br /> and get healthy
			</p>
			<p className="welcome-text">Tasks are updated every day</p>

			<button className="welcome-button" onClick={handleClick}>
				Start
			</button>
		</div>
	);
};
