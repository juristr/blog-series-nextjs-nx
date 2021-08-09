import { useEffect } from 'react';
import { useState } from 'react';
export interface TopicButtonProps {
  topicName: string;
  onClick?: (topicName: string) => void;
}

export function TopicButton(props: TopicButtonProps) {
  const [icon, setIcon] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const cleanedSvgName = props.topicName
        .replace(/[^a-zA-Z0-9]/g, '')
        .toLocaleLowerCase();
      const topicSvgIcon = await import(`./${cleanedSvgName}.svg`);
      setIcon(topicSvgIcon.default);
    };
    fetchData();
  }, [props.topicName]);

  const onClickHandler = () => {
    if (props.onClick) {
      props.onClick(props.topicName);
    } else {
      console.warn(
        `no click handler defined on topic button with topic ${props.topicName}`
      );
    }
  };

  return (
    <div
      className="bg-white pl-4 rounded-lg shadow flex max-w-md min-w-max hover:shadow-md transition-shadow"
      onClick={onClickHandler}
    >
      <img src={icon} alt="" className="w-12" />
      <div className="p-5">
        <h2 className="font-bold text-4xl">{props.topicName}</h2>
      </div>
    </div>
  );
}

export default TopicButton;
