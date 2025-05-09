const StatCard = ({ title, value, icon }) => {
  return (
    <div style={{
      backgroundColor: '#3c4356',
      color: 'white',
      padding: '20px',
      borderRadius: '10px',
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      gap: '20px'
    }}>
      <i className={`fa-solid ${icon}`} style={{ fontSize: '30px',color:"white" }}></i>
      <div>
        <div style={{ color:"white", fontSize: '18px' }}>{title}</div>
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{value}</div>
      </div>
    </div>
  );
};
export default StatCard;
