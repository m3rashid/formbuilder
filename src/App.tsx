import FormBuilder from './builder';

function App() {
  return (
    <div className='bg-red-400'>
      <FormBuilder
        meta={[
          {
            key: 'form',
            widgetName: 'form',
            widgetProps: {
              size: 'large',
              layout: 'vertical',
            },
            children: [
              {
                key: 'ch1',
                formItemProps: {
                  name: 'username',
                  rules: [{ required: true, message: 'Username is required' }],
                },
                widgetName: 'input',
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
    </div>
  );
}

export default App;
