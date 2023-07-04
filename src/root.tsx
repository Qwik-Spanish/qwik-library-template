import { Counter } from './components/counter';
import { Logo } from './components/logo';

export default () => {
  return (
    <>
      <head>
        <meta charSet='utf-8' />
        <title>Qwik Library Template - By Anartz</title>
      </head>
      <body>
        <h2>Example components</h2>
        <h4>Created by: Anartz Mugika Ledo</h4>
        <h4><code>{`<Logo />`}</code> component</h4>
        <Logo
          url='https://qwik.builder.io/'
          alt='Qwik Logo'
          width={400}
          height={147}
          image='https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F667ab6c2283d4c4d878fb9083aacc10f'
        />
        <h4><code>{`<Counter />`}</code> component with <code>{`useCounter`}</code> custom hook</h4>
        <Counter />
      </body>
    </>
  );
};
