export const Button = ({ text, size, variant, ...rest }) => {
  return (
    <button className={`btn btn--${variant} btn--${size}`} {...rest}>
      {text}
    </button>
  );
};
