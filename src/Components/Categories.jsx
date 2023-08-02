
const Categories = () => {
  const circleStyle = {
    width: '2cm',
    height: '2cm',
    backgroundColor: '#19C048',
    borderRadius: '50%',
    margin: '10px',
    border: '2px solid black', // Add a black border to the circles
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div>
      <h1 style={{ color: '#19C048', textAlign: 'center' }}>Categories</h1>
      <div style={containerStyle}>
        <div style={circleStyle}></div>
        <div style={circleStyle}></div>
        <div style={circleStyle}></div>
        <div style={circleStyle}></div>
        <div style={circleStyle}></div>
        <div style={circleStyle}></div>
        <div style={circleStyle}></div>
      </div>
    </div>
  );
};

export default Categories;
