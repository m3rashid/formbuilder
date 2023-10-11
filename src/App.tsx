import Designer from './designer';
import { RecoilRoot } from 'recoil';
// import FormBuilder from './builder';

const App = () => {
  return (
    <RecoilRoot>
      <Designer />
      {/* <div className='bg-red-400'>
        <FormBuilder
          meta={[
            {
              key: 'form',
              widgetName: 'form',
              widgetProps: { size: 'large', layout: 'vertical' },
              children: [
                {
                  key: 'ch1',
                  formItemProps: {
                    name: 'username',
                    rules: [
                      { required: true, message: 'Username is required' },
                    ],
                  },
                  widgetName: 'text-input',
                  widgetProps: {
                    placeholder: 'Username',
                  },
                },
              ],
            },
            {
              key: 'btn',
              widgetName: 'button',
              widgetProps: {
                htmlType: 'submit',
                children: 'Submit',
                type: 'primary',
              },
            },
          ]}
        />
      </div> */}
    </RecoilRoot>
  );
};

export default App;
