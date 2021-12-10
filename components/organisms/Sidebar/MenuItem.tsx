import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/dist/client/link';
// import Link from 'next/link';

interface MenuItemProps {
    title: string;
    icon: 'menu1' | 'menu1' | 'menu2' | 'menu3' | 'menu4' | 'menu5' | 'menu6' | 'menu7'
    active?: boolean
    href: string
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const {
    title, icon, active, href,
  } = props;
  const classItem = cx({
    item: true,
    'mb-30': true,
    active,
  });

  return (
    <div className={classItem}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} />
      </div>
      <p className="item-title m-0">
        <Link href={`${href}`}>
          <a
            className="text-lg text-decoration-none"
          >
            {title}
          </a>
        </Link>
      </p>
    </div>
  );
}
