import { GetStaticProps } from 'next';
import './about.module.css';

export interface AboutProps {
  name: string;
}

export function About(props: AboutProps) {
  return (
    <div>
      <h1>Welcome, {props.name}!</h1>
    </div>
  );
}

export const getStaticProps: GetStaticProps<AboutProps> = async (context) => {
  return {
    props: {
      name: 'Juri',
    },
  };
};

export default About;
