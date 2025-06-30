import Typography from '@mui/material/Typography';
interface cp {
  children: React.ReactNode;
  type:
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2';
}
export default function Parrafo(props: cp) {
  const { children, type } = props;
  return <Typography variant={type}>{children}</Typography>;
}
