import StatCard from '../../components/StatCard';
import Item from '../../components/items/Item';
import Nav from '../../components/nav/Nav';

const Dashboard = () => {
  return (
    <div style={{ backgroundColor: '#2b3044', minHeight: '100vh', display: 'flex' }}>
      
      {/* Sidebar */}
      <div style={{ 
        backgroundColor: "#3c4356",
        borderTopRightRadius: "10px",
        borderBottomRightRadius: "12px",
      }} className='col-2'>
        <Nav />
        <Item className="fa-solid fa-tv" name="Dashboard" domain="/dashboard"  />
        <Item className="fa-solid fa-car" name="Araba Ekleme" domain="/addCar" />
        <Item className="fa-solid fa-copyright" name="Marka Ekleme" domain="/addBrand" />
        <Item className="fa-solid fa-hammer" name="Rol Yönetimi" domain="/roleManagement" />
      </div>

      <div style={{ flex: 1, padding: '40px' }}>
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
          <StatCard title="Toplam Araç" value="42" icon="fa-car" />
          <StatCard title="Aktif Kiralama" value="8" icon="fa-clock" />
          <StatCard title="Kullanıcılar" value="127" icon="fa-users" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
