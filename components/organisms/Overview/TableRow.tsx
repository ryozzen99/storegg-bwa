import cx from 'classnames';

interface TableRowProps {
    title: string,
    statuses:'Pending' | 'Success' | 'Failed',
    price: number,
    item: number,
    category: string,
    image: 'overview-1' | 'overview-2' | 'overview-3' | 'overview-4'
}

export default function TableRow(props: Partial<TableRowProps>) {
  const {
    image, title, statuses, price, category, item,
  } = props;
  const classItem = cx({
    'me-3': true,
    'float-start': true,
    'mb-lg-0': true,
    'mb-3': true,
  });
  const statusesClass = cx({
    'float-start icon-status': true,
    pending: statuses === 'Pending',
    success: statuses === 'Success',
    failed: statuses === 'Failed',
  });
  return (
    <tr className="align-middle">
      <th scope="row">
        <img
          className={classItem}
          src={`/img/${image}.png`}
          width={80}
          height={60}
          alt="gthb"
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">{category}</p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item}</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">{price}</p>
      </td>
      <td>
        <div>
          <span className={statusesClass} />
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {statuses}
          </p>
        </div>
      </td>
    </tr>
  );
}
