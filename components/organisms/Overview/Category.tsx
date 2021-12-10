import Image from 'next/image';
import { ReactNode } from 'react';
import cx from 'classnames';

interface CategoryProps {
    children: ReactNode,
    nominal: number,
    icon: 'ic-desktop' | 'ic-mobile' | 'ic-other'
}

export default function Category(props: Partial<CategoryProps>) {
  const { children, nominal, icon } = props;
  const classItem = cx({
    'col-lg-4': true,
    'ps-15': true,
    'pe-15': true,
    'pb-lg-0': true,
    'pb-4': true,
  });
  return (
    <div className={classItem}>
      <div className="categories-card">
        <div className="d-flex align-items-center mb-24">
          <Image src={`/icon/${icon}.svg`} width={60} height={60} />
          <p className="color-palette-1 mb-0 ms-12">
            {children}
          </p>
        </div>
        <div>
          <p className="text-sm color-palette-2 mb-1">Total Spent</p>
          <p className="text-2xl color-palette-1 fw-medium m-0">{nominal}</p>
        </div>
      </div>
    </div>
  );
}
