type OscarProps={
    children:React.ReactNode
}
export const Oscar = (props:OscarProps) => {
  return <div style={{color:'navy'}}>{props.children}</div>;
};
