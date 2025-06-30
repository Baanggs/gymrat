import Alert from '@mui/material/Alert';
interface alert {
  children: React.ReactNode;
  color: 'error' | 'info' | 'success' | 'warning';
  type: 'filled' | 'outlined' | 'standard';
}

export default function Alerta(props: alert) {
  const { children, color, type } = props;
  return (
    <Alert variant={type} severity={color}>
      {children}
    </Alert>
  );
}
