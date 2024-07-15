// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NxWelcome from './nx-welcome';
import { range } from 'lodash';
import { Button, Title } from 'ded-wds-kevin';

export function App() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginTop: '20px',
        }}
        className="container"
      >
        {range(0, 10).map((i, index) => (
          <Button themeColor="primary" variant="contained">
            <Title level={3}>標題按鈕{index + 1}</Title>
          </Button>
        ))}
      </div>

      <NxWelcome title="AUO-DED-WDS" />
    </div>
  );
}

export default App;
