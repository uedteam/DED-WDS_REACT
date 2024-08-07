// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NxWelcome from './nx-welcome';
import { range } from 'lodash';
// import { Switch } from 'ded-wds';
import { Radio } from '@ui';

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
        {/* {range(0, 10).map((i, index) => (
          <Button themeColor="primary" variant="contained">
            <Title level={3}>標題按鈕{index + 1}</Title>
          </Button>
        ))} */}
        {/* <Switch isChecked /> */}
        <div style={{ width: '300px', display: 'flex', flexWrap: 'wrap' }}>
          <Radio
            className=""
            direction="row"
            options={[
              {
                label: '選項一',
                value: 'option1',
              },
              {
                label: '選項二',
                value: 'option2',
              },
              {
                label: '選項三',
                value: 'option3',
              },
              {
                label: '選項四',
                value: 'option4',
              },
              {
                label: '選項五',
                value: 'option5',
              },
              {
                label: '選項六',
                value: 'option6',
              },
              {
                label: '選項七選項七七七',
                value: 'option7777777777777777',
              },
              {
                label: '選項八',
                value: 'option8',
              },
              {
                label: '選項九',
                value: 'option9',
              },
              {
                label: '選項十選項十選項十選項十選項十選項十選項',
                value: 'option101010101010101010',
              },
            ]}
            themeColor="warning"
            value="option3"
          />
        </div>
      </div>

      <NxWelcome title="AUO-DED-WDS" />
    </div>
  );
}

export default App;
