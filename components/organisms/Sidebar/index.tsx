import Footer from './Footer';
import Profile from './Profile';
import MenuItem from './MenuItem';

interface SideBarProps {
  activeMenu: 'overview' | 'transactions' | 'settings'
}

export default function Sidebar(props: SideBarProps) {
  const { activeMenu } = props; return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" icon="menu1" href="/member" active={activeMenu === 'overview'} />
          <MenuItem href="/member/transactions" title="Transactions" icon="menu2" active={activeMenu === 'transactions'} />
          <MenuItem title="Messages" icon="menu3" href="/member" />
          <MenuItem title="Card" icon="menu4" href="/member" />
          <MenuItem title="Reward" icon="menu5" href="/member" />
          <MenuItem title="Settings" icon="menu6" href="/member/edit-profile" active={activeMenu === 'settings'} />
          <MenuItem title="Log Out" icon="menu7" href="/sign-in" />
        </div>
        <Footer />
      </div>
    </section>

  );
}
