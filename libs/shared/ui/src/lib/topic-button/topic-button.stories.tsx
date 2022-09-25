import { Story, Meta } from '@storybook/react';
import { TopicButton, TopicButtonProps } from './topic-button';

export default {
  component: TopicButton,
  title: 'TopicButton',
} as Meta;

const Template: Story<TopicButtonProps> = (args) => <TopicButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
