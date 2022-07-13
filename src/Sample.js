function Sample(props) {
  const msg = "Hello, ";
  const { name } = props;
  return (
    <>
      <h1>
        {msg} {name}
      </h1>
    </>
  );
}
export default Sample;
