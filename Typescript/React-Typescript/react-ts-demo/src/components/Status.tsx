type StatusProps = {
  status: 'loading' | 'fetched' | 'error';
};

export const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") message = "Loading...";
  else if (props.status === "fetched") message = "Data fetched successfully!";
  else if (props.status === "error") message = "Data Loading Failed 😞";

  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};
