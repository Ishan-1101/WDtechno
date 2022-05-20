type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h1>
        {props.isLoggedIn ? `Hello ${props.name} , you have ${props.messageCount} unread messages`
          : `Hello Guest `}
      </h1>
    </div>
  );
};
