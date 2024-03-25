import { useState } from 'preact/hooks';

import Plus from './images/icon-plus.svg';
import Minus from './images/icon-minus.svg';
import classes from './accordion.module.css';

interface Props {
	data: { label: string; content: string }[];
}

const Accordion = ({ data }: Props) => {
	const [open, setOpen] = useState<boolean[]>(Array(data.length).fill(false));

	const openHandler = (index: number) => {
		setOpen((prevState) => {
			const newState = [...prevState];
			newState[index] = !newState[index];
			return newState;
		});
	};

	return (
		<div>
			{data.map(({ label, content }, i) => (
				<div
					key={i}
					className={`${classes.accordion} ${
						open[i] ? classes.active : ''
					} pr-4 pt-4 pb-2`}
				>
					<div className="flex justify-between items-center gap-4">
						<h2 className="font-bold" onClick={() => openHandler(i)}>
							{label}
						</h2>
						{open[i] ? (
							<img src={Minus.src} alt="minus" className="shrink-0" />
						) : (
							<img src={Plus.src} alt="plus" className="shrink-0" />
						)}
					</div>
					<p className={`${classes.textGrayPurple} ${classes.content} mt-4`}>
						{content}
					</p>
				</div>
			))}
		</div>
	);
};

export default Accordion;
