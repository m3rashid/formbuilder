const RenderProps = (props: { label: string; value: string | string[] }) => {
  if (typeof props.value === 'string') {
    return (
      <div>
        {props.label}: {props.value}
      </div>
    );
  }

  if (Array.isArray(props.value)) {
    return (
      <div>
        {props.label}: {props.value.join(', ')}
      </div>
    );
  }
};

export default RenderProps;
