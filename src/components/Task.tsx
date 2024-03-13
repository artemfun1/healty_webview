import { FC, useRef, useState } from "react";
import { getDate } from "../utils/getDate";

type Props = {
	name: string;
};

export const Task: FC<Props> = ({ name }) => {
	const [, setIsDone] = useState(false);

	const dateNow = getDate();
	const isTodayRef = useRef(false);

	const LSDateNow = localStorage.getItem(`${name}`);
	if (LSDateNow) {
		if (LSDateNow !== dateNow) {
			isTodayRef.current = false;
		} else {
			isTodayRef.current = true;
		}
	}

	console.log(LSDateNow);

	function handlerClick() {
		setIsDone(true);
		isTodayRef.current = true;
		localStorage.setItem(`${name}`, `${dateNow}`);
	}

	const isDoneTask = isTodayRef.current ? (
		<svg
			width="36"
			height="36"
			viewBox="0 0 36 36"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M31.8821 5.93589C30.1738 4.04269 27.8299 3 25.2814 3C23.3765 3 21.632 3.61537 20.0962 4.82889C19.3213 5.44143 18.6191 6.19084 18 7.06553C17.3811 6.1911 16.6787 5.44143 15.9035 4.82889C14.368 3.61537 12.6235 3 10.7186 3C8.17014 3 5.82591 4.04269 4.11765 5.93589C2.42979 7.80697 1.5 10.3631 1.5 13.1339C1.5 15.9856 2.54006 18.5961 4.77301 21.3493C6.77055 23.8121 9.64149 26.3122 12.9661 29.2072C14.1013 30.1958 15.3881 31.3165 16.7243 32.5102C17.0773 32.8261 17.5302 33 18 33C18.4696 33 18.9227 32.8261 19.2752 32.5107C20.6114 31.3167 21.8989 30.1956 23.0346 29.2064C26.3588 26.3119 29.2297 23.8121 31.2272 21.3491C33.4602 18.5961 34.5 15.9856 34.5 13.1336C34.5 10.3631 33.5702 7.80697 31.8821 5.93589Z"
				stroke="#7C5EF3"
				strokeWidth="2.6"
				strokeLinejoin="round"
			/>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M32.3098 8.94901C32.8489 8.47482 32.9015 7.65339 32.4273 7.11429C31.9531 6.5752 31.1317 6.52259 30.5926 6.99678L17.8984 18.1628L13.4774 14.2735C12.9384 13.7992 12.1169 13.8518 11.6427 14.3908C11.1685 14.9299 11.221 15.7513 11.7601 16.2255L16.9971 20.8328C17.21 21.0202 17.467 21.1253 17.7292 21.1507C18.0972 21.2081 18.4871 21.1076 18.7886 20.8424L32.3098 8.94901Z"
				fill="#7C5EF3"
			/>
		</svg>
	) : (
		<svg
			width="36"
			height="36"
			viewBox="0 0 36 36"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M31.8821 5.9359C30.1738 4.0427 27.8299 3.00001 25.2814 3.00001C23.3765 3.00001 21.632 3.61538 20.0962 4.82889C19.3213 5.44144 18.6191 6.19085 18 7.06554C17.3811 6.1911 16.6787 5.44144 15.9035 4.82889C14.368 3.61538 12.6235 3.00001 10.7186 3.00001C8.17014 3.00001 5.82591 4.0427 4.11765 5.9359C2.42979 7.80697 1.5 10.3631 1.5 13.1339C1.5 15.9856 2.54006 18.5961 4.77301 21.3493C6.77055 23.8121 9.64149 26.3122 12.9661 29.2072C14.1013 30.1958 15.3881 31.3165 16.7243 32.5102C17.0773 32.8261 17.5302 33 18 33C18.4696 33 18.9227 32.8261 19.2752 32.5107C20.6114 31.3167 21.8989 30.1956 23.0346 29.2064C26.3588 26.3119 29.2297 23.8121 31.2272 21.3491C33.4602 18.5961 34.5 15.9856 34.5 13.1336C34.5 10.3631 33.5702 7.80697 31.8821 5.9359Z"
				stroke="#7C5EF3"
				strokeWidth="2.6"
				strokeLinejoin="round"
			/>
		</svg>
	);

	return (
		<div onClick={handlerClick} className="task">
			<p className="task-name">{name}</p>
			<div className="task-svg">{isDoneTask}</div>
		</div>
	);
};
