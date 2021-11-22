export const ListCard = ({ icon, title, subtitle, active, ...rest }) => {
  return (
    <div className={`list-card ${active ? 'active' : ''}`} {...rest}>
      {icon && icon}
      <div className="list-card__content">
        <h3>{title}</h3>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
};
