import styles from './app.module.css';

import { ReactComponent as Logo } from './logo.svg';
import { TopicButton } from '@juridev/shared/ui';
import { Reactui } from '@juridev/reactui';

export function App() {
  return (
    <div className={styles.app}>
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to react-app!</h1>
      </header>
      <main>
        <TopicButton topicName="React" />
        <Reactui />
      </main>
    </div>
  );
}

export default App;
