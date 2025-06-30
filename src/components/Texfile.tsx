import TextField from '@mui/material/TextField';
interface int {
  children: React.ReactNode;
  tipo: 'filled' | 'outlined' | 'standard';
}
export default function TextFiles(props: int) {
  const { children, tipo } = props;
  return <TextField variant={tipo}>{children}</TextField>;
}
