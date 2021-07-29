// import './topic-button.module.css';
import { MouseEventHandler } from 'react';
import nextLogo from './next.svg';
/* eslint-disable-next-line */
export interface TopicButtonProps {
  topicName: string;
  onClick: (topicName: string) => void;
}

export function TopicButton(props: TopicButtonProps) {
  const onClickHandler = () => {
    props.onClick(props.topicName);
  };

  return (
    <div
      className="bg-white pl-4 rounded-lg shadow flex max-w-md min-w-max"
      onClick={onClickHandler}
    >
      <img src={nextLogo} alt="" className="w-12" />
      <div className="p-5">
        <h2 className="font-bold text-4xl">{props.topicName}</h2>
      </div>
    </div>
  );
}

export default TopicButton;
