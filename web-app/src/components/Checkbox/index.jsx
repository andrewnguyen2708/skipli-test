import "./styles.scss";

export default function Checkbox(props) {
  const { label, checked, onClick } = props;
  return (
    <label className="label-checkbox">
      {label}
      <input type="checkbox" checked={checked} onClick={onClick} {...props} />
      <span className="checkmark"></span>
    </label>
  );
}
