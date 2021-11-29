import cx from 'classnames';
import Link from 'next/link';

interface MenuProps {
    title: string;
    href: string;
}

export default function Menu(props: Partial<MenuProps>) {
  const { title, href = '/' } = props;
  const classTitle = cx({
    'text-lg': true,
    'color-palette-1': true,
    'text-decoration-none': true,
  });

  return (
    <li className="mb-6">
      <Link href={href}>
        <a className={classTitle} aria-current="page">
          {title}
        </a>
      </Link>
    </li>
  );
}
