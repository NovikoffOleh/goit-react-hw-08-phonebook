const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // width: '100%',
  },
  title: {
    fontWeight: 700,
    fontSize: 36,
    textAlign: 'center',
  },
};

const Home = () => {
  return (
    <div style={styles.container}>
      <div className="fon">
      <h1 style={styles.title}>Вітаю у твоєму ТелефонВook</h1>
   </div>
    </div>
    
  );
};

export default Home;
