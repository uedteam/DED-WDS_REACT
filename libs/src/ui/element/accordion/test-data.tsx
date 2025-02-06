import { Title, Button } from '@src/ui';
import { SvgArrowDown } from '@src/assets/icons';

export const qaList = [
  {
    id: '1',
    label: <Title themeColor="primary">What is React?</Title>,
    detail: (
      <>
        <p>React is a JavaScript library for building user interfaces.</p>
        <Button
          themeColor="primary"
          variant="soft"
          onClick={() => ({})}
          size="small"
          suffix={<SvgArrowDown width={20} height={20} />}
        >
          Button
        </Button>
      </>
    ),
  },
  {
    id: '2',
    label: <Title themeColor="primary">What are the features of React ?</Title>,
    detail: (
      <p>
        The features of React include component-based architecture,
        unidirectional data flow, and virtual DOM.
      </p>
    ),
  },
  {
    id: '3',
    label: (
      <Title themeColor="primary">
        What is included in the React ecosystem ?
      </Title>
    ),
    detail: <p>The React ecosystem includes React Router, Redux, and Axios.</p>,
  },
  {
    id: '4',
    label: (
      <Title themeColor="primary">What are the advantages of React ?</Title>
    ),
    detail: (
      <p>
        The advantages of React include component-based architecture,
        unidirectional data flow, and virtual DThese features provide
        efficiency, reusability, and better performance.
      </p>
    ),
  },
];

export const smallQaList = [
  {
    id: '1',
    label: <Title themeColor="primary">What is React?</Title>,
    detail: (
      <>
        <p>React is a JavaScript library for building user interfaces.</p>
        <Button
          themeColor="primary"
          variant="soft"
          onClick={() => ({})}
          size="small"
          suffix={<SvgArrowDown width={20} height={20} />}
        >
          Button
        </Button>
      </>
    ),
  },
  {
    id: '2',
    label: <Title themeColor="primary">What are the features of React ?</Title>,
    detail: (
      <p>
        The features of React include component-based architecture,
        unidirectional data flow, and virtual DOM.
      </p>
    ),
  },
  {
    id: '3',
    label: (
      <Title themeColor="primary">
        What is included in the React ecosystem ?
      </Title>
    ),
    detail: <p>The React ecosystem includes React Router, Redux, and Axios.</p>,
  },
  {
    id: '4',
    label: (
      <Title themeColor="primary">What are the advantages of React ?</Title>
    ),
    detail: (
      <p>
        The advantages of React include component-based architecture,
        unidirectional data flow, and virtual DThese features provide
        efficiency, reusability, and better performance.
      </p>
    ),
  },
];
