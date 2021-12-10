import OverviewContent from '../../components/organisms/Overview';
import Sidebar from '../../components/organisms/Sidebar';

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <Sidebar activeMenu="overview" />
      <OverviewContent />
    </section>
  );
}
